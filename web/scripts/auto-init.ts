import 'dotenv/config'
import { execFileSync } from 'node:child_process'
import { getPayload } from 'payload'
import config from '../src/payload.config'

/**
 * 容器自动初始化。
 *
 * 站点文案的唯一事实源是 `src/seed/index.ts`（种子先清空再灌入全部内容）。
 * 这里不再运行任何一次性迁移脚本 —— 历史上的 update-* / add-* / attach-covers
 * 属于 yanyi-health 时代，却被无条件执行，会把站点覆写回旧的医疗版内容。
 *
 * 行为：
 *  - 空库（products 为 0）→ 灌入种子
 *  - 非空库 → 默认跳过，保护后台的人工编辑
 *  - SEED_FORCE=1 → 强制重新灌入（会清空并重建内容！用于让旧库升级到最新文案）
 *  - 始终确保后台管理员存在
 */

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

function run(script: string) {
  console.log(`[auto-init] ▶ ${script}`)
  execFileSync('node', ['--import=tsx/esm', script], {
    stdio: 'inherit',
    env: process.env,
    cwd: process.cwd(),
  })
}

async function connectWithRetry(retries = 40, delayMs = 2000) {
  let lastErr: unknown
  for (let i = 1; i <= retries; i++) {
    try {
      return await getPayload({ config })
    } catch (err) {
      lastErr = err
      console.log(`[auto-init] 数据库未就绪，重试 ${i}/${retries} …`)
      await sleep(delayMs)
    }
  }
  throw lastErr
}

async function main() {
  const payload = await connectWithRetry()

  let total = 0
  try {
    const res = await payload.find({ collection: 'products', limit: 1, depth: 0 })
    total = res.totalDocs
  } catch {
    total = 0 // 表可能尚未建立
  }

  const force = process.env.SEED_FORCE === '1'

  if (total === 0) {
    console.log('[auto-init] 空库 → 灌入种子内容')
    run('src/seed/index.ts')
  } else if (force) {
    console.log(`[auto-init] SEED_FORCE=1 → 已有 ${total} 条产品，强制清空并重新灌入种子`)
    run('src/seed/index.ts')
  } else {
    console.log(
      `[auto-init] 已检测到内容（${total} 条产品），跳过灌入。` +
        ' 如需用代码里的最新文案覆盖旧内容，请设置 SEED_FORCE=1 重新部署。',
    )
  }

  // 管理员幂等确保（脚本内部已判断是否已存在）
  run('scripts/create-admin.ts')

  console.log('[auto-init] ✅ 完成')
  process.exit(0)
}

main().catch((err) => {
  console.error('[auto-init] ❌ 失败：', err)
  process.exit(1)
})
