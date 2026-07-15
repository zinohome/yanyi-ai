/**
 * 从种子内容导出每个页面的 Markdown 到 docs/site-content/。
 * 种子（src/seed）是站点文案的唯一事实源，本脚本保证文档与线上一致。
 * 运行：NODE_OPTIONS="--import=tsx/esm" node --import=tsx/esm scripts/export-content.ts
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  buildHome,
  buildTechnology,
  buildAbout,
  buildProductsPage,
  buildSolutions,
  buildCareers,
  buildContact,
} from '../src/seed/pages'
import {
  buildSiteSettings,
  buildProducts,
  buildCases,
  buildTeam,
  buildJobs,
} from '../src/seed/content'
import type { Lang } from '../src/seed/helpers'

const LANG: Lang = 'zh'
const dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.resolve(dirname, '../../docs/site-content')
mkdirSync(OUT, { recursive: true })

const products = buildProducts(LANG) as any[]
const cases = buildCases(LANG) as any[]
const team = buildTeam(LANG) as any[]
const jobs = buildJobs(LANG) as any[]
const settings = buildSiteSettings(LANG) as any

/* eslint-disable @typescript-eslint/no-explicit-any */
function rtText(content: any): string {
  const paras = content?.root?.children ?? []
  return paras
    .map((p: any) => (p.children ?? []).map((c: any) => c.text ?? '').join(''))
    .join('\n\n')
}
const cta = (c: any) => (c?.label ? `**${c.label}** → \`${c.href ?? ''}\`` : '')

function blockToMd(b: any): string {
  const L: string[] = []
  switch (b.blockType) {
    case 'hero':
      if (b.eyebrow) L.push(`> ${b.eyebrow}`)
      L.push(`## ${String(b.title || '').replace(/\n/g, ' ')}`)
      if (b.subtitle) L.push(b.subtitle)
      {
        const c = [cta(b.primaryCta), cta(b.secondaryCta)].filter(Boolean)
        if (c.length) L.push(c.join(' · '))
      }
      break
    case 'valueProps':
    case 'capabilityGrid': {
      L.push(`### ${b.title || ''}`)
      if (b.subtitle) L.push(`_${b.subtitle}_`)
      for (const it of b.items ?? b.capabilities ?? []) L.push(`- **${it.title}** — ${it.description ?? ''}`)
      break
    }
    case 'techArchitecture':
      L.push(`### ${b.title || ''}`)
      if (b.subtitle) L.push(`_${b.subtitle}_`)
      for (const d of b.domains ?? []) L.push(`- **${d.name}**${d.role ? `（${d.role}）` : ''} — ${d.description ?? ''}`)
      if (b.note) L.push(`> ${b.note}`)
      break
    case 'scenarioShowcase':
      L.push(`### ${b.title || ''}`)
      if (b.subtitle) L.push(`_${b.subtitle}_`)
      for (const s of b.scenarios ?? []) L.push(`- **${s.name}** — ${s.description ?? ''}`)
      break
    case 'productMatrix': {
      L.push(`### ${b.title || ''}`)
      if (b.subtitle) L.push(`_${b.subtitle}_`)
      // 与线上语义一致：block 选了产品就只列这些，留空才列全部。
      // 导出没有真实 id，用 buildProducts 的数组下标当替身（见 EXPORT_IDS）。
      const picked: any[] = b.products?.length
        ? b.products.map((i: number) => products[i]).filter(Boolean)
        : products
      for (const p of picked) L.push(`- **${p.name}** — ${p.tagline ? p.tagline + '。' : ''}${p.summary ?? ''}`)
      break
    }
    case 'caseHighlights':
      L.push(`### ${b.title || ''}`)
      if (b.subtitle) L.push(`_${b.subtitle}_`)
      for (const c of cases) L.push(`- **${c.title}** — ${c.summary ?? ''}`)
      break
    case 'contentMedia':
      L.push(`### ${b.title || ''}`)
      if (b.body) L.push(b.body)
      break
    case 'timeline':
      L.push(`### ${b.title || ''}`)
      if (b.subtitle) L.push(`_${b.subtitle}_`)
      for (const m of b.milestones ?? []) L.push(`- **${m.period ? m.period + ' · ' : ''}${m.title}** — ${m.description ?? ''}`)
      break
    case 'teamPreview':
      L.push(`### ${b.title || ''}`)
      if (b.subtitle) L.push(`_${b.subtitle}_`)
      for (const m of team) L.push(`- **${m.name}**（${m.role}）— ${m.bio ?? ''}`)
      break
    case 'statsMetrics':
      L.push(`### ${b.title || ''}`)
      for (const s of b.stats ?? []) L.push(`- **${s.value}** — ${s.label ?? ''}`)
      break
    case 'faq':
      L.push(`### ${b.title || ''}`)
      for (const it of b.items ?? []) L.push(`**Q：${it.question}**\n\n${it.answer ?? ''}`)
      break
    case 'ctaBanner':
      L.push(`### ${b.title || ''}`)
      if (b.subtitle) L.push(b.subtitle)
      if (cta(b.primaryCta)) L.push(cta(b.primaryCta))
      break
    case 'richTextBlock':
      L.push(rtText(b.content))
      break
    default:
      L.push(`<!-- ${b.blockType} -->`)
  }
  return L.join('\n\n')
}

function pageToMd(page: any, urlPath: string): string {
  const out = [`# ${page.title}`, '']
  out.push(`- 路径：\`${urlPath}\``)
  if (page.meta?.title) out.push(`- SEO 标题：${page.meta.title}`)
  if (page.meta?.description) out.push(`- SEO 描述：${page.meta.description}`)
  out.push('', '---', '')
  for (const b of page.layout ?? []) out.push(blockToMd(b), '')
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n'
}

function productsDetailMd(): string {
  const out = ['# 产品详情', '', '每个产品在 `/products/<slug>` 有独立详情页。以下为完整字段。', '', '---', '']
  for (const p of products) {
    out.push(`## ${p.name}`, '', `- 路径：\`/products/${p.slug}\``, `> ${p.tagline}`, '', p.summary, '')
    if (p.overview) out.push('**概述**', '', p.overview, '')
    if (p.problem) out.push('**挑战**', '', p.problem, '')
    if (p.painPoints?.length) { out.push('**痛点**', ''); for (const x of p.painPoints) out.push(`- ${x.value}`); out.push('') }
    if (p.workflow?.length) { out.push('**方案闭环**', ''); for (const x of p.workflow) out.push(`- **${x.title}** — ${x.description}`); out.push('') }
    if (p.features?.length) { out.push('**核心功能**', ''); for (const x of p.features) out.push(`- **${x.title}** — ${x.description}`); out.push('') }
    if (p.highlights?.length) { out.push('**价值 / 成效**', ''); for (const x of p.highlights) out.push(`- **${x.title}** — ${x.description}`); out.push('') }
    if (p.audience?.length) out.push('**适用对象**：' + p.audience.map((a: any) => a.value).join('、'), '')
    out.push('---', '')
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n'
}

function siteMd(): string {
  const out = ['# 站点总览', '', `- 公司：${settings.companyName}`, `- Slogan：${settings.slogan}`, `- 邮箱：${settings.email}`, '']
  out.push('**导航**：首页 / 核心技术 / 产品 / 解决方案 / 应用场景 / 关于我们（CTA：联系合作）', '')
  out.push('**招聘岗位**：', '')
  for (const j of jobs) out.push(`- **${j.title}**（${j.location}）— ${rtText(j.description)}`)
  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim() + '\n'
}

// 导出拿不到数据库 id，用 buildProducts 的数组下标当替身，
// 好让 productMatrix 的分组选择（工业 / 医疗）在 md 里如实反映，而不是一律列全部。
const EXPORT_IDS = {
  products: products.map((_, i) => i),
  industrial: products.map((_, i) => i).filter((i) => products[i].slug.startsWith('industria')),
  medical: products.map((_, i) => i).filter((i) => products[i].slug.startsWith('medica')),
  cases: cases.map((_, i) => i),
}

const files: Array<[string, string]> = [
  ['00-site.md', siteMd()],
  ['01-home.md', pageToMd(buildHome(LANG, EXPORT_IDS), '/')],
  ['02-technology.md', pageToMd(buildTechnology(LANG), '/technology')],
  ['03-products.md', pageToMd(buildProductsPage(LANG, EXPORT_IDS), '/products')],
  ['04-solutions.md', pageToMd(buildSolutions(LANG), '/solutions')],
  ['05-about.md', pageToMd(buildAbout(LANG), '/about')],
  ['06-careers.md', pageToMd(buildCareers(LANG), '/careers')],
  ['07-contact.md', pageToMd(buildContact(LANG), '/contact')],
  ['08-products-detail.md', productsDetailMd()],
]

const index = [
  '# 研翌科技官网 · 内容文档',
  '',
  '本目录由 `web/scripts/export-content.ts` 从种子内容（`web/src/seed`）自动生成，是站点文案的唯一事实源。改动文案请改种子并重新运行脚本。',
  '',
  ...files.map(([f]) => `- [${f}](${f})`),
  '',
  '## 页面整页截图（浅色主题，1440 宽）',
  '',
  '由 `web/scripts/screenshots.mjs` 生成（`SHOT_THEME=light`）。',
  '',
  '- [首页](screenshots/01-home.png)',
  '- [核心技术](screenshots/02-technology.png)',
  '- [产品](screenshots/03-products.png)',
  '- [解决方案](screenshots/04-solutions.png)',
  '- [关于我们](screenshots/05-about.png)',
  '',
].join('\n')

writeFileSync(path.join(OUT, 'README.md'), index)
for (const [name, content] of files) writeFileSync(path.join(OUT, name), content)
console.log(`✅ 导出 ${files.length + 1} 个文件到 ${OUT}`)
