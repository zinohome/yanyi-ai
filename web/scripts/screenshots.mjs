import { chromium } from 'playwright'

const OUT = process.env.SHOT_OUT || '/tmp/shots'
const BASE = 'http://localhost:3000/zh'
const pages = [
  ['01-home', ''],
  ['02-technology', '/technology'],
  ['03-products', '/products'],
  ['04-solutions', '/solutions'],
  ['05-applications', '/cases'],
  ['06-about', '/about'],
]

const KILL_ANIM = `
  [data-reveal]{opacity:1!important;transform:none!important;}
  *,*::before,*::after{animation-duration:0s!important;animation-delay:0s!important;transition:none!important;}
`

const THEME = process.env.SHOT_THEME || 'light' // 'light' | 'dark'

const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
  colorScheme: THEME,
})
// 在页面脚本执行前写入 next-themes 的 localStorage，强制主题
await ctx.addInitScript((theme) => {
  try {
    // 标记为"手动选择"，否则会被基于时间的自动主题覆盖（夜间=暗色）
    localStorage.setItem('theme-manual', '1')
    localStorage.setItem('yanyi-theme', theme)
  } catch {}
}, THEME)
await ctx.addInitScript((css) => {
  const apply = () => { const s = document.createElement('style'); s.textContent = css; document.head.appendChild(s) }
  if (document.head) apply(); else document.addEventListener('DOMContentLoaded', apply)
}, KILL_ANIM)

const page = await ctx.newPage()
for (const [name, path] of pages) {
  await page.goto(BASE + path, { waitUntil: 'networkidle' })
  await page.addStyleTag({ content: KILL_ANIM })
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await page.waitForTimeout(500)
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(400)
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true })
  const info = await page.evaluate(() => ({ h: document.body.scrollHeight, cls: document.documentElement.className }))
  console.log(`✅ ${name}  (${info.h}px)  html="${info.cls}"`)
}
await browser.close()
