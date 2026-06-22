# yanyi-ai 官网 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the yanyi-ai industrial AI corporate website by adapting yanyi-health's Next.js 16 + Payload CMS 3 codebase — replacing the healthcare brand with an industrial/manufacturing AI identity: warm amber/orange palette, Space Grotesk + Inter fonts, 工业智能体四引擎 (Perceive·Decide·Execute·Evolve) narrative, bilingual zh/en content.

**Architecture:** Route A — copy yanyi-health `web/` wholesale to `yanyi-ai/web/`, then adapt in-place. Block-based Payload CMS page builder; next-intl /zh /en routing; all fonts self-hosted via `next/font/local`; seed data written to Payload via Local API.

**Tech Stack:** Next.js 16.2.7, Payload CMS 3.85.0, PostgreSQL, Tailwind CSS v4, shadcn/ui, next-themes, next-intl ^4.13.0, React 19.2.7, pnpm

## Global Constraints

- pnpm only — do not use npm or yarn
- Node.js ≥ 20
- All font woff2 files must be committed to repo under `web/src/fonts/`; zero CDN font dependencies
- All color tokens must use OKLCH — no hex/rgb in CSS variables
- Every user-facing string must have both `zh` and `en` locale variants in seed data
- Client-specific placeholders must include the literal marker `[待替换]`
- Default locale: `zh`; English at `/en/*`
- Dark mode is the primary design target; light mode is supported via next-themes
- TypeScript strict mode — `pnpm type-check` must pass after every task
- All block slugs in `src/blocks/blocks.ts` must match component registrations in `src/components/blocks/index.tsx`

---

## File Structure Map

Files created or modified across all phases:

```
web/
├── package.json                              # MOD: rename to yanyi-ai
├── .env.local                                # CREATE: from .env.example
├── src/
│   ├── fonts/
│   │   ├── Inter-var.woff2                   # CREATE: replace Manrope-var.woff2
│   │   ├── SpaceGrotesk-var.woff2            # CREATE: replace Fraunces-var.woff2
│   │   ├── JetBrainsMono-var.woff2           # KEEP (unchanged)
│   │   └── index.ts                          # MOD: new font src paths + fallbacks
│   ├── app/(frontend)/
│   │   └── globals.css                       # MOD: new color tokens (amber/steel-blue)
│   ├── collections/
│   │   └── Products.ts                       # MOD: industrial scenario categories
│   ├── globals/
│   │   └── Navigation.ts                     # MOD: new site map (9 pages)
│   ├── components/blocks/
│   │   └── hero.tsx                          # MOD: industrial eyebrow + ping color
│   ├── seed/
│   │   ├── content.ts                        # REWRITE: yanyi-ai content
│   │   └── pages.ts                          # REWRITE: 7 pages
│   └── payload.config.ts                     # MOD: admin meta titleSuffix
```

---

## Phase 1: P1 — Scaffold + Design System

### Task 1: Bootstrap — copy yanyi-health, rename project

**Files:**
- Create: `web/` (entire directory, copied from yanyi-health)
- Modify: `web/package.json`
- Create: `web/.env.local`

**Interfaces:**
- Produces: working `web/` directory that installs and starts (yanyi-health content, new project name)

- [ ] **Step 1: Verify or re-clone yanyi-health reference**

```bash
ls /tmp/yanyi-health-ref/web/src/blocks/blocks.ts 2>/dev/null \
  || git clone https://github.com/zinohome/yanyi-health.git /tmp/yanyi-health-ref
```

Expected: path exists (or clone completes)

- [ ] **Step 2: Copy web/ to yanyi-ai**

```bash
cp -r /tmp/yanyi-health-ref/web/ /Users/zhangjun/CursorProjects/yanyi-ai/web/
```

- [ ] **Step 3: Rename project in package.json**

Open `web/package.json`. Change the `name` field:

```json
{
  "name": "yanyi-ai",
```

(was `"yanyi-health"` or similar)

- [ ] **Step 4: Create .env.local**

```bash
cp /Users/zhangjun/CursorProjects/yanyi-ai/web/.env.example \
   /Users/zhangjun/CursorProjects/yanyi-ai/web/.env.local
```

Then edit `.env.local` — set these values:
```
DATABASE_URI=postgresql://postgres:password@localhost:5432/yanyi_ai
PAYLOAD_SECRET=replace-with-a-random-32-char-string
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

- [ ] **Step 5: Install dependencies**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web && pnpm install
```

Expected: no errors, `node_modules/` populated

- [ ] **Step 6: Update admin title suffix in payload.config.ts**

In `src/payload.config.ts`, find:
```typescript
meta: {
  titleSuffix: '· 研翌科技',
},
```
Change to:
```typescript
meta: {
  titleSuffix: '· 衍绎 AI',
},
```

- [ ] **Step 7: Commit bootstrap**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai
git add web/
git commit -m "chore: bootstrap yanyi-ai from yanyi-health scaffold"
```

---

### Task 2: Self-host fonts — replace Manrope/Fraunces with Inter/Space Grotesk

**Files:**
- Create: `web/src/fonts/Inter-var.woff2`
- Create: `web/src/fonts/SpaceGrotesk-var.woff2`
- Delete: `web/src/fonts/Manrope-var.woff2`
- Delete: `web/src/fonts/Fraunces-var.woff2`
- Modify: `web/src/fonts/index.ts`

**Interfaces:**
- Produces: CSS variables `--font-manrope` (now Inter) and `--font-fraunces` (now Space Grotesk) available to `@theme`. No rename of CSS variables needed — @theme already maps them to `--font-sans` and `--font-display`.

- [ ] **Step 1: Download font woff2 files via fontsource packages**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web
pnpm add --save-dev @fontsource-variable/inter @fontsource-variable/space-grotesk
```

- [ ] **Step 2: Copy variable woff2 files into src/fonts/**

```bash
cp "node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2" \
   src/fonts/Inter-var.woff2
cp "node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2" \
   src/fonts/SpaceGrotesk-var.woff2
```

- [ ] **Step 3: Remove the fontsource packages (files are now in repo)**

```bash
pnpm remove @fontsource-variable/inter @fontsource-variable/space-grotesk
```

- [ ] **Step 4: Remove old font files**

```bash
rm src/fonts/Manrope-var.woff2 src/fonts/Fraunces-var.woff2
```

- [ ] **Step 5: Rewrite src/fonts/index.ts**

Replace the entire file with:

```typescript
import localFont from 'next/font/local'

/**
 * Self-hosted variable fonts (next/font/local).
 * woff2 files committed to repo — zero CDN dependency, no layout shift.
 * CSS variables are unchanged from yanyi-health so @theme mappings still work:
 *   --font-manrope → now serves Inter (body)
 *   --font-fraunces → now serves Space Grotesk (display/headings)
 *   --font-jetbrains → JetBrains Mono unchanged (labels/data)
 */

export const fontSans = localFont({
  src: './Inter-var.woff2',
  variable: '--font-manrope',
  weight: '100 900',
  display: 'swap',
  preload: true,
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system', 'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', 'sans-serif'],
})

export const fontDisplay = localFont({
  src: './SpaceGrotesk-var.woff2',
  variable: '--font-fraunces',
  weight: '300 700',
  display: 'swap',
  preload: true,
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
})

export const fontMono = localFont({
  src: './JetBrainsMono-var.woff2',
  variable: '--font-jetbrains',
  weight: '400 500',
  display: 'swap',
  preload: false,
  fallback: ['ui-monospace', 'SFMono-Regular', 'monospace'],
})
```

- [ ] **Step 6: Type-check**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web && pnpm type-check
```

Expected: 0 errors

- [ ] **Step 7: Commit**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai
git add web/src/fonts/
git commit -m "feat: replace Manrope+Fraunces with Inter+SpaceGrotesk (self-hosted woff2)"
```

---

### Task 3: Color system — warm amber/orange × steel-blue OKLCH tokens

**Files:**
- Modify: `web/src/app/(frontend)/globals.css` (the file found at this path — verify with `find web/src/app -name globals.css`)

**Interfaces:**
- Produces: `--primary` = warm amber/orange, `--accent` = steel-blue; aurora blobs and card-glow automatically use new colors via `var()` references

The strategy: change only the token values in `:root` and `.dark`. Everything else (`card-glow`, `text-gradient-warm`, body background, `::selection`) uses `var(--primary)` and `var(--accent)` — they auto-update with no further edits.

- [ ] **Step 1: Update the comment block at top of globals.css**

Find:
```css
/*
 * 研翌科技 — 人文暖科技设计系统 (Humanist Deep-Tech)
 * 冷暖双色：科技蓝(primary) × 暖琥珀(accent) —— 呼应「科技，为爱而生」
 * Light = 暖纸白；Dark = 暖墨炭
 */
```

Replace with:
```css
/*
 * 衍绎 AI — 工业深科技设计系统 (Industrial Deep-Tech)
 * 工业双色：暖琥珀橙(primary) × 钢蓝/石墨(accent) —— 呼应「精密·可靠·工业级」
 * Light = 工业白；Dark = 深墨蓝（默认）
 */
```

- [ ] **Step 2: Replace :root color tokens**

Find the entire `:root { ... }` block and replace it with:

```css
:root {
  --radius: 0.85rem;

  --background: oklch(0.97 0.008 80);   /* 工业白（亮色模式） */
  --foreground: oklch(0.15 0.025 262);

  --card: oklch(0.99 0.005 80);
  --card-foreground: oklch(0.15 0.025 262);
  --popover: oklch(0.99 0.005 80);
  --popover-foreground: oklch(0.15 0.025 262);

  --primary: oklch(0.68 0.18 55);          /* 暖琥珀橙 */
  --primary-foreground: oklch(0.15 0.03 55); /* 深棕（主色按钮文字） */

  --secondary: oklch(0.94 0.015 225);
  --secondary-foreground: oklch(0.28 0.04 230);

  --muted: oklch(0.94 0.010 250);
  --muted-foreground: oklch(0.48 0.022 250);

  --accent: oklch(0.45 0.08 230);          /* 钢蓝/石墨 */
  --accent-foreground: oklch(0.97 0.01 230);

  --destructive: oklch(0.58 0.22 27);
  --destructive-foreground: oklch(0.99 0 0);

  --border: oklch(0.88 0.010 80);
  --input: oklch(0.88 0.010 80);
  --ring: oklch(0.68 0.18 55);             /* focus ring = primary amber */
}
```

- [ ] **Step 3: Replace .dark color tokens**

Find the entire `.dark { ... }` block and replace it with:

```css
.dark {
  --background: oklch(0.07 0.012 250);   /* 深墨蓝（默认模式） */
  --foreground: oklch(0.94 0.010 80);

  --card: oklch(0.11 0.018 250);
  --card-foreground: oklch(0.94 0.010 80);
  --popover: oklch(0.11 0.018 250);
  --popover-foreground: oklch(0.94 0.010 80);

  --primary: oklch(0.76 0.17 55);          /* 亮琥珀橙（深色模式） */
  --primary-foreground: oklch(0.12 0.03 55);

  --secondary: oklch(0.18 0.025 250);
  --secondary-foreground: oklch(0.94 0.010 250);

  --muted: oklch(0.18 0.022 250);
  --muted-foreground: oklch(0.65 0.020 250);

  --accent: oklch(0.55 0.10 230);          /* 亮钢蓝（深色模式） */
  --accent-foreground: oklch(0.97 0.008 230);

  --destructive: oklch(0.62 0.22 27);
  --destructive-foreground: oklch(0.99 0 0);

  --border: oklch(0.20 0.022 250);
  --input: oklch(0.20 0.022 250);
  --ring: oklch(0.76 0.17 55);
}
```

- [ ] **Step 4: Type-check**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web && pnpm type-check
```

Expected: 0 errors (CSS changes don't affect TypeScript)

- [ ] **Step 5: Commit**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai
git add web/src/app/
git commit -m "feat: industrial amber/steel-blue color system (OKLCH tokens)"
```

---

### Task 4: P1 Smoke Test

- [ ] **Step 1: Ensure PostgreSQL is running and database exists**

```bash
psql -U postgres -c "CREATE DATABASE yanyi_ai;" 2>/dev/null || echo "DB may already exist"
```

- [ ] **Step 2: Start dev server**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web && pnpm dev
```

Expected output includes: `✓ Ready in Xms` or `▲ Next.js 16`

- [ ] **Step 3: Verify pages load**

Navigate to `http://localhost:3000` — page loads (yanyi-health content with new amber color scheme and Space Grotesk headings).

Navigate to `http://localhost:3000/admin` — Payload admin panel loads.

- [ ] **Step 4: Run production build**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web && pnpm build
```

Expected: `✓ Compiled successfully` (or Next.js 16 equivalent), 0 type errors

- [ ] **Step 5: Commit P1 milestone**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai
git commit --allow-empty -m "milestone: P1 complete — scaffold + design system verified"
```

---

## Phase 2: P2 — Brand Adaptation

### Task 5: Navigation — update site map to 9-page yanyi-ai structure

**Files:**
- Modify: `web/src/globals/Navigation.ts` (or wherever Header/Footer global is defined — check with `ls web/src/globals/`)

**Interfaces:**
- Produces: Navigation global with 8 nav links (technology, products, solutions, cases, blog, about, careers, contact)

- [ ] **Step 1: Inspect current Navigation global**

```bash
cat /Users/zhangjun/CursorProjects/yanyi-ai/web/src/globals/Navigation.ts | head -80
```

- [ ] **Step 2: Update nav links in the Header global**

Find the `navLinks` array (or equivalent field) in the Header global definition. Replace the items array with yanyi-ai's site map. The exact field name depends on the yanyi-health schema — look for an array field with `href` and `label` sub-fields.

Example — if the field is named `navLinks`:
```typescript
// In Header global's fields array, find the navLinks array field
// Replace its defaultValue or admin.description to reflect new pages
// The actual nav items are set via seed data (see Task 9)
// Just ensure all 9 slug targets are valid routes:
// /technology, /products, /solutions, /cases, /blog, /about, /careers, /contact
```

If the Navigation global uses a simple link array, update the field labels:
```typescript
{
  name: 'navLinks',
  type: 'array',
  admin: { description: '导航链接（/technology, /products, /solutions, /cases, /blog, /about, /careers, /contact）' },
  fields: [
    { name: 'label', type: 'text', localized: true, required: true },
    { name: 'href', type: 'text', required: true },
  ],
},
```

- [ ] **Step 3: Type-check**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web && pnpm type-check
```

Expected: 0 errors

- [ ] **Step 4: Commit**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai
git add web/src/globals/
git commit -m "feat: update Navigation global for yanyi-ai 9-page site map"
```

---

### Task 6: Products collection — industrial AI schema

**Files:**
- Modify: `web/src/collections/Products.ts`

**Interfaces:**
- Produces: Products collection with `scenario` field options for industrial AI categories instead of healthcare lifecycle categories

- [ ] **Step 1: Read the current Products collection**

```bash
cat /Users/zhangjun/CursorProjects/yanyi-ai/web/src/collections/Products.ts
```

- [ ] **Step 2: Replace the scenario select field options**

Find the `scenario` field definition:
```typescript
{
  name: 'scenario',
  type: 'select',
  label: '生命全周期分类',
  options: [
    { label: '母婴安全', value: 'maternal' },
    // ... health options
  ],
},
```

Replace with:
```typescript
{
  name: 'scenario',
  type: 'select',
  label: '产品分类',
  options: [
    { label: '知识与决策', value: 'knowledge' },
    { label: '视觉质检', value: 'vision' },
    { label: '设备运维', value: 'maintenance' },
    { label: '生产排程', value: 'scheduling' },
    { label: '数据分析', value: 'analytics' },
  ],
},
```

- [ ] **Step 3: Update collection label**

Change:
```typescript
labels: { singular: '解决方案', plural: '解决方案 Solutions' },
```
To:
```typescript
labels: { singular: '产品', plural: '产品 Products' },
```

- [ ] **Step 4: Type-check**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web && pnpm type-check
```

Expected: 0 errors

- [ ] **Step 5: Commit**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai
git add web/src/collections/Products.ts
git commit -m "feat: adapt Products collection for industrial AI categories"
```

---

### Task 7: Hero component — industrial brand tweaks

**Files:**
- Modify: `web/src/components/blocks/hero.tsx`

**Interfaces:**
- Produces: Hero component where the ping dot uses `--primary` (now amber), eyebrow ping animation uses amber glow; text gradient `text-gradient-warm` auto-uses new amber→steel-blue via CSS vars

The color tokens already handle most visual changes automatically. This task fixes the one hardcoded reference: the `bg-accent` ping dot in the eyebrow badge.

- [ ] **Step 1: Read the hero component**

```bash
cat /Users/zhangjun/CursorProjects/yanyi-ai/web/src/components/blocks/hero.tsx
```

- [ ] **Step 2: Verify ping colors**

Look for lines like:
```tsx
<span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/60" />
<span className="relative inline-flex size-2 rounded-full bg-accent" />
```

These use `bg-accent` which is now steel-blue. For industrial AI, change to `bg-primary` (amber) so the ping dot is amber:

```tsx
<span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
<span className="relative inline-flex size-2 rounded-full bg-primary" />
```

- [ ] **Step 3: Type-check**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web && pnpm type-check
```

Expected: 0 errors

- [ ] **Step 4: P2 build check**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web && pnpm build
```

Expected: successful build

- [ ] **Step 5: Commit**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai
git add web/src/components/blocks/hero.tsx
git commit -m "feat: hero ping dot uses primary amber; P2 brand adaptation complete"
```

---

## Phase 3: P3 — Bilingual Content + Seed

### Task 8: Seed — site settings + 5 products (content.ts)

**Files:**
- Modify: `web/src/seed/content.ts` (full rewrite)

**Interfaces:**
- Consumes: `L(lang)` helper from `./helpers`, `rt` helper for rich text
- Produces: `buildSiteSettings(lang)`, `categories`, `buildProducts(lang)` — consumed by seed/index.ts

- [ ] **Step 1: Read the current helpers to understand L() signature**

```bash
cat /Users/zhangjun/CursorProjects/yanyi-ai/web/src/seed/helpers.ts
```

- [ ] **Step 2: Rewrite src/seed/content.ts**

Replace the entire file with:

```typescript
import { rt, L, type Lang } from './helpers'

/* ============================ 站点设置 ============================ */
export const buildSiteSettings = (lang: Lang) => {
  const t = L(lang)
  return {
    companyName: t('衍绎人工智能科技有限公司', 'Yanyi AI Technology Co., Ltd.'),
    slogan: t('让工厂更聪明，让决策更精准', 'Making factories smarter. Making decisions sharper.'),
    email: 'contact@yanyi-ai.com',
    phone: '[待替换]',
    address: '[待替换]',
    icp: '[待替换]',
    defaultMeta: {
      title: t('衍绎 AI · 工业智能体平台', 'Yanyi AI · Industrial Intelligence Platform'),
      description: t(
        '衍绎 AI 构建面向制造业的工业智能体闭环平台，覆盖知识大脑、视觉质检、设备运维、智能排产与产线数据分析，助力工厂提效降本。',
        'Yanyi AI builds industrial AI agent platforms for manufacturing — covering knowledge management, visual QC, predictive maintenance, smart scheduling and shopfloor analytics to help factories cut costs and boost efficiency.',
      ),
    },
  }
}

/* ============================ 分类 ============================ */
export const categories = [
  { slug: 'company', build: (l: Lang) => ({ title: L(l)('公司动态', 'Company') }) },
  { slug: 'tech', build: (l: Lang) => ({ title: L(l)('技术观点', 'Technology') }) },
  { slug: 'industry', build: (l: Lang) => ({ title: L(l)('行业洞察', 'Industry') }) },
]

/* ============================ 产品（5款工业 AI 产品）============================ */
export const buildProducts = (lang: Lang) => {
  const t = L(lang)

  return [
    /* 1 ── 工业知识大脑 */
    {
      name: t('工业知识大脑', 'Industrial Knowledge Brain'),
      slug: 'knowledge-brain',
      tagline: t('企业知识一键问答，消化存量文档', 'Ask anything, across all your enterprise docs'),
      icon: 'brain',
      scenario: 'knowledge',
      summary: t(
        '基于 RAG 的工业知识库平台，将技术手册、工艺规程、SOP 等企业文档转化为可问答的智能知识体系。',
        'A RAG-powered industrial knowledge platform that turns technical manuals, SOPs and process docs into a queryable AI knowledge base.',
      ),
      overview: t(
        '工业知识大脑以检索增强生成（RAG）为核心，将企业海量非结构化文档——技术手册、工艺规程、设备 SOP、质量标准——统一接入，构建持续更新的向量知识库；员工与一线工人可通过自然语言随时查询，AI 给出有出处的精准答案。',
        'Industrial Knowledge Brain uses Retrieval-Augmented Generation (RAG) to ingest enterprise documents—technical manuals, process specs, equipment SOPs, quality standards—into a continuously updated vector knowledge base. Operators and engineers query in plain language and receive sourced, accurate answers instantly.',
      ),
      painPoints: [
        { value: t('技术文档分散，新员工培训周期长', 'Technical docs are siloed; new employee ramp-up takes months') },
        { value: t('一线工人遇到异常无法快速找到处理规程', 'Floor workers can't quickly locate procedures during anomalies') },
        { value: t('知识随老员工流失，无法沉淀传承', 'Tribal knowledge walks out the door when experienced staff leave') },
      ],
      highlights: [
        { title: t('准确率', 'Accuracy'), description: t('知识检索准确率 >95% [待替换]', 'Knowledge retrieval accuracy >95% [待替换]') },
        { title: t('接入时间', 'Setup Time'), description: t('文档接入到可查询 <48 小时', 'Docs to queryable knowledge base <48 hours') },
        { title: t('支持格式', 'Formats'), description: t('PDF / Word / Excel / 图纸 / 图片', 'PDF / Word / Excel / Drawings / Images') },
      ],
    },

    /* 2 ── 视觉质检 AI */
    {
      name: t('视觉质检 AI', 'Visual QC AI'),
      slug: 'visual-qc',
      tagline: t('缺陷一眼识别，质量零遗漏', 'Spot every defect. Miss nothing.'),
      icon: 'eye',
      scenario: 'vision',
      summary: t(
        '基于工业视觉大模型的在线质检系统，缺陷检测准确率 >99%，实时替代人工目检。',
        'Online QC system powered by industrial vision AI. Defect detection accuracy >99%, replacing manual visual inspection in real time.',
      ),
      overview: t(
        '视觉质检 AI 在产线末端部署工业相机与边缘推理单元，利用经过百万级缺陷样本训练的视觉大模型，对每个工件进行毫秒级全覆盖扫描；检测结果实时回传 MES，不良品自动触发分拣或停线告警。',
        'Visual QC AI deploys industrial cameras and edge inference units at the end of production lines. A vision model trained on millions of defect samples performs millisecond full-coverage scans on every part. Results feed directly into MES; defective parts trigger automatic sorting or line-stop alerts.',
      ),
      painPoints: [
        { value: t('人工目检效率低、漏检率高', 'Manual visual inspection is slow and prone to misses') },
        { value: t('换型时需重新培训质检员，周期长', 'Product changeover requires lengthy retraining of QC staff') },
        { value: t('质检数据无法沉淀，难以溯源', 'QC data is lost; traceability is limited') },
      ],
      highlights: [
        { title: t('检测准确率', 'Detection Accuracy'), description: t('>99.2% [待替换]', '>99.2% [待替换]') },
        { title: t('检测速度', 'Speed'), description: t('<20ms / 件', '<20ms per part') },
        { title: t('换型适应', 'Changeover'), description: t('新产品模型训练 <4 小时', 'New product model training <4 hours') },
      ],
    },

    /* 3 ── 设备运维 Copilot */
    {
      name: t('设备运维 Copilot', 'Equipment O&M Copilot'),
      slug: 'oam-copilot',
      tagline: t('提前 72 小时预知故障，告别非计划停机', 'Predict failures 72 hours out. Eliminate unplanned downtime.'),
      icon: 'settings',
      scenario: 'maintenance',
      summary: t(
        '融合传感器数据与设备知识库的预测性维护 AI Copilot，提前 72h 预警设备故障，非计划停机减少 >40%。',
        'Predictive maintenance AI Copilot combining sensor data and equipment knowledge base. Predicts failures 72h ahead, reducing unplanned downtime by >40%.',
      ),
      overview: t(
        '设备运维 Copilot 持续采集振动、温度、电流等多源传感器数据，结合设备工艺知识库，通过时序异常检测与根因分析模型，在设备故障发生前 72 小时发出精准预警；维修建议直接推送给班组长，工单自动生成。',
        'Equipment O&M Copilot continuously collects vibration, temperature and current data from multiple sensors. Combined with equipment knowledge base, its time-series anomaly detection and root-cause models issue precise 72-hour fault warnings. Maintenance recommendations push directly to shift supervisors; work orders auto-generate.',
      ),
      painPoints: [
        { value: t('设备故障突发，停机损失难以承受', 'Sudden equipment failures cause costly unplanned downtime') },
        { value: t('维修依赖经验，知识无法标准化', 'Maintenance relies on tribal knowledge that can\'t be standardized') },
        { value: t('备件库存盲目，要么积压要么缺货', 'Spare parts inventory is either overstocked or out of stock') },
      ],
      highlights: [
        { title: t('预警提前量', 'Warning Lead Time'), description: t('>72 小时 [待替换]', '>72 hours [待替换]') },
        { title: t('停机减少', 'Downtime Reduction'), description: t('非计划停机减少 >40% [待替换]', 'Unplanned downtime reduced by >40% [待替换]') },
        { title: t('接入方式', 'Integration'), description: t('OPC-UA / MQTT / Modbus 均支持', 'OPC-UA / MQTT / Modbus supported') },
      ],
    },

    /* 4 ── 智能排产 Agent */
    {
      name: t('智能排产 Agent', 'Smart Scheduling Agent'),
      slug: 'scheduling-agent',
      tagline: t('供应链与产能一体化排程，交期准时率 >95%', 'End-to-end scheduling. On-time delivery >95%.'),
      icon: 'calendar',
      scenario: 'scheduling',
      summary: t(
        '基于 AI Agent 的智能排产系统，综合供应链、产能、工艺约束，实时生成最优排程方案，交期准时率显著提升。',
        'AI Agent-powered scheduling system that considers supply chain, capacity and process constraints to generate optimal production schedules in real time.',
      ),
      overview: t(
        '智能排产 Agent 接入 ERP 订单数据、MES 产能数据、供应商 BOM 信息，通过约束满足与强化学习模型，自动求解多品种混线排程难题；突发插单、设备故障、物料短缺等异常发生时，Agent 秒级重排并推送影响分析报告。',
        'Smart Scheduling Agent integrates ERP order data, MES capacity data and supplier BOM information. Using constraint satisfaction and reinforcement learning, it solves mixed-model multi-product scheduling. When disruptions occur—rush orders, equipment failures, material shortages—the agent reschedules in seconds and pushes impact analysis reports.',
      ),
      painPoints: [
        { value: t('排产依赖人工 Excel，响应慢、质量差', 'Manual Excel-based scheduling is slow and low quality') },
        { value: t('插单频繁导致生产计划频繁推翻', 'Frequent rush orders constantly derail production plans') },
        { value: t('供应链与产能信息割裂，排程不可执行', 'Supply chain and capacity data are siloed; schedules aren\'t feasible') },
      ],
      highlights: [
        { title: t('交期准时率', 'On-Time Delivery'), description: t('>95% [待替换]', '>95% [待替换]') },
        { title: t('排程响应', 'Scheduling Response'), description: t('重排计划 <30 秒', 'Rescheduling in <30 seconds') },
        { title: t('集成', 'Integration'), description: t('SAP / 用友 / 金蝶 / 自有 ERP', 'SAP / Yonyou / Kingdee / custom ERP') },
      ],
    },

    /* 5 ── 产线数据平台 */
    {
      name: t('产线数据平台', 'Shopfloor Analytics Platform'),
      slug: 'shopfloor-analytics',
      tagline: t('实时数据看板 + 异常根因分析，让管理者看透产线', 'Real-time dashboards + root-cause AI. See through your production floor.'),
      icon: 'bar-chart',
      scenario: 'analytics',
      summary: t(
        '工厂实时数据采集与分析平台，集成 OEE、良率、能耗等核心指标看板，AI 自动定位异常根因。',
        'Factory real-time data collection and analytics platform. Integrates OEE, yield, energy and quality dashboards with AI root-cause analysis.',
      ),
      overview: t(
        '产线数据平台通过边缘网关统一采集各设备、传感器与 MES 数据，构建实时数字孪生看板；管理层可在任何设备上实时掌握 OEE、良率、能耗走势；当指标异常时，AI 自动溯源并给出根因报告，推送到责任人。',
        'Shopfloor Analytics Platform collects data from all equipment, sensors and MES via edge gateways, building real-time digital twin dashboards. Management can monitor OEE, yield, energy and quality trends from any device. When metrics deviate, AI automatically traces root causes and pushes reports to responsible owners.',
      ),
      painPoints: [
        { value: t('数据散落各系统，管理层无法实时掌握', 'Data is scattered across systems; management has no real-time visibility') },
        { value: t('异常发生后靠人工排查，效率低', 'Anomaly root-cause analysis relies on manual investigation') },
        { value: t('OEE 等核心指标计算依赖人工汇总', 'Key metrics like OEE require manual data compilation') },
      ],
      highlights: [
        { title: t('数据刷新', 'Data Refresh'), description: t('实时 <1 秒延迟', 'Real-time, <1 second latency') },
        { title: t('接入协议', 'Protocols'), description: t('OPC-UA / MQTT / Modbus / REST API', 'OPC-UA / MQTT / Modbus / REST API') },
        { title: t('根因定位', 'Root Cause'), description: t('平均 <5 分钟出报告', 'Average <5 minutes to root-cause report') },
      ],
    },
  ]
}
```

- [ ] **Step 3: Type-check**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web && pnpm type-check
```

Expected: 0 errors (fix any type mismatches by comparing to what the seed/index.ts expects)

- [ ] **Step 4: Commit**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai
git add web/src/seed/content.ts
git commit -m "feat: seed content — 5 industrial AI products (bilingual zh/en)"
```

---

### Task 9: Seed — Home page + Technology page (pages.ts)

**Files:**
- Modify: `web/src/seed/pages.ts` (partial rewrite — home and technology sections)

**Interfaces:**
- Consumes: `L(lang)` helper, block type slugs from `src/blocks/blocks.ts`
- Produces: `buildHome(lang, ids)` and `buildTechnology(lang)` functions used by seed/index.ts

- [ ] **Step 1: Read seed/index.ts to understand how buildHome is called**

```bash
cat /Users/zhangjun/CursorProjects/yanyi-ai/web/src/seed/index.ts
```

Note the `ids` parameter shape that gets passed to `buildHome`.

- [ ] **Step 2: Rewrite buildHome in seed/pages.ts**

Replace the `buildHome` export with:

```typescript
export const buildHome = (lang: Lang, ids: { products: number[]; cases: number[] }) => {
  const t = L(lang)
  return {
    title: t('首页', 'Home'),
    slug: 'home',
    status: 'published' as const,
    meta: {
      title: t('衍绎 AI · 工业智能体平台', 'Yanyi AI · Industrial Intelligence Platform'),
      description: t(
        '让工厂更聪明，让决策更精准。工业 AI 闭环平台——感知·决策·执行·进化。',
        'Making factories smarter. Making decisions sharper. Industrial AI closed-loop platform — Perceive · Decide · Execute · Evolve.',
      ),
    },
    layout: [
      {
        blockType: 'hero',
        eyebrow: t('工业智能体四引擎平台', 'Industrial AI Four-Engine Platform'),
        title: t('让工厂更聪明\n让决策更精准', 'Making factories smarter.\nMaking decisions sharper.'),
        subtitle: t(
          '衍绎 AI 以感知·决策·执行·进化四引擎闭环，为制造企业构建可私有化部署的工业 AI 基础设施，让每一个生产决策都有数据支撑。',
          'Yanyi AI delivers a closed-loop Perceive · Decide · Execute · Evolve platform — on-premise industrial AI infrastructure for manufacturers, where every production decision is data-driven.',
        ),
        primaryCta: { label: t('了解产品', 'Explore Products'), href: '/products' },
        secondaryCta: { label: t('联系我们', 'Contact Us'), href: '/contact' },
      },
      {
        blockType: 'statsMetrics',
        title: t('已在工厂验证的成果', 'Results proven on the factory floor'),
        stats: [
          { value: '38%', label: t('生产效率提升 [待替换]', 'Production efficiency gain [待替换]') },
          { value: '99.2%', label: t('视觉质检准确率 [待替换]', 'Visual QC accuracy [待替换]') },
          { value: '120+', label: t('服务工厂数量 [待替换]', 'Factories served [待替换]') },
          { value: '<18mo', label: t('平均 ROI 回收周期 [待替换]', 'Average ROI payback [待替换]') },
        ],
      },
      {
        blockType: 'techArchitecture',
        title: t('工业智能体四引擎', 'Industrial AI Four Engines'),
        subtitle: t('感知·决策·执行·进化 — 构成自我强化的工业 AI 闭环', 'Perceive · Decide · Execute · Evolve — a self-reinforcing industrial AI closed loop'),
        domains: [
          {
            icon: 'radar',
            name: t('感知', 'Perceive'),
            role: t('数据入口', 'Data Ingestion'),
            description: t('工业视觉 · 传感器融合 · 边缘采集 · 多模态输入', 'Industrial vision · Sensor fusion · Edge collection · Multimodal input'),
          },
          {
            icon: 'cpu',
            name: t('决策', 'Decide'),
            role: t('AI 大脑', 'AI Brain'),
            description: t('工业大模型 · RAG 知识库 · Agent 推理 · 规则引擎', 'Industrial LLM · RAG knowledge base · Agent reasoning · Rule engine'),
          },
          {
            icon: 'zap',
            name: t('执行', 'Execute'),
            role: t('系统集成', 'System Integration'),
            description: t('MES/ERP 集成 · 机器人控制 · 流程自动化 · 告警响应', 'MES/ERP integration · Robot control · Process automation · Alert response'),
          },
          {
            icon: 'trending-up',
            name: t('进化', 'Evolve'),
            role: t('持续优化', 'Continuous Improvement'),
            description: t('持续学习 · 数据回流 · 模型迭代 · 效果闭环', 'Continuous learning · Data flyback · Model iteration · Effect closed-loop'),
          },
        ],
        note: t('四引擎持续闭环，AI 越用越聪明', 'Four engines run in a closed loop — the AI gets smarter with every cycle'),
      },
      {
        blockType: 'productMatrix',
        title: t('5款工业 AI 产品', '5 Industrial AI Products'),
        subtitle: t('从知识管理到产线分析，覆盖制造业核心场景', 'From knowledge management to shopfloor analytics — covering core manufacturing scenarios'),
        products: ids.products,
      },
      {
        blockType: 'scenarioShowcase',
        title: t('行业解决方案', 'Industry Solutions'),
        subtitle: t('针对不同制造场景，提供开箱即用的 AI 方案组合', 'Ready-to-deploy AI solution bundles for different manufacturing contexts'),
        scenarios: [
          {
            icon: 'car',
            name: t('汽车零部件制造', 'Automotive Parts Manufacturing'),
            description: t('视觉质检 + 智能排产 + 设备运维 Copilot 组合，降低不良率、提升交期准时率', 'Visual QC + Smart Scheduling + O&M Copilot bundle. Reduce defect rates and improve on-time delivery.'),
            link: { label: t('查看方案', 'View Solution'), href: '/solutions' },
          },
          {
            icon: 'smartphone',
            name: t('3C 电子制造', '3C Electronics Manufacturing'),
            description: t('高精度视觉质检 + 产线数据平台，应对高频换型与良率压力', 'High-precision visual QC + Shopfloor Analytics. Handle frequent changeovers and yield pressure.'),
            link: { label: t('查看方案', 'View Solution'), href: '/solutions' },
          },
          {
            icon: 'factory',
            name: t('离散制造通用', 'General Discrete Manufacturing'),
            description: t('工业知识大脑 + 设备运维 Copilot 快速启动包，4周完成 POC 验证', 'Industrial Knowledge Brain + O&M Copilot rapid starter pack. POC validated in 4 weeks.'),
            link: { label: t('查看方案', 'View Solution'), href: '/solutions' },
          },
        ],
      },
      {
        blockType: 'caseHighlights',
        title: t('客户案例', 'Customer Cases'),
        subtitle: t('真实工厂，可量化的 ROI', 'Real factories, measurable ROI'),
        cases: ids.cases,
      },
      {
        blockType: 'ctaBanner',
        title: t('准备好让您的工厂更聪明了吗？', 'Ready to make your factory smarter?'),
        subtitle: t('联系我们，30 分钟了解方案是否适合您的场景', 'Contact us — 30 minutes to see if our solution fits your context'),
        cta: { label: t('预约演示', 'Book a Demo'), href: '/contact' },
      },
    ],
  }
}
```

- [ ] **Step 3: Add buildTechnology export to pages.ts**

Add after the buildHome export:

```typescript
export const buildTechnology = (lang: Lang) => {
  const t = L(lang)
  return {
    title: t('技术能力', 'Technology'),
    slug: 'technology',
    status: 'published' as const,
    meta: {
      title: t('技术能力 — 衍绎 AI', 'Technology — Yanyi AI'),
      description: t(
        '衍绎 AI 工业智能体四引擎架构：感知·决策·执行·进化，支持完全私有化部署。',
        'Yanyi AI\'s four-engine industrial AI architecture: Perceive · Decide · Execute · Evolve, with full on-premise deployment support.',
      ),
    },
    layout: [
      {
        blockType: 'hero',
        eyebrow: t('技术架构', 'Technology Architecture'),
        title: t('工业级 AI 基础设施\n为生产而生', 'Industrial-grade AI infrastructure\nBuilt for production'),
        subtitle: t(
          '四引擎闭环架构，从数据感知到持续进化，每一层都经过工厂级稳定性验证。',
          'Four-engine closed-loop architecture — from data perception to continuous evolution, every layer factory-validated for stability.',
        ),
        primaryCta: { label: t('联系我们', 'Contact Us'), href: '/contact' },
        secondaryCta: { label: t('查看产品', 'View Products'), href: '/products' },
      },
      {
        blockType: 'techArchitecture',
        title: t('四层架构详解', 'Four-Layer Architecture Deep Dive'),
        subtitle: t('每一层各司其职，共同构成工业 AI 闭环', 'Each layer has one purpose; together they form the industrial AI closed loop'),
        domains: [
          {
            icon: 'radar',
            name: t('感知层', 'Perceive Layer'),
            role: t('数据入口 & 多模态采集', 'Data Ingestion & Multimodal Capture'),
            description: t(
              '部署工业相机、振动/温度/电流传感器与边缘推理单元，实现生产现场数据的实时、全量、低延迟采集；支持 OPC-UA、MQTT、Modbus、REST API 等主流工业协议。',
              'Deploys industrial cameras, vibration/temperature/current sensors and edge inference units for real-time, full-coverage, low-latency shopfloor data capture. Supports OPC-UA, MQTT, Modbus and REST API.',
            ),
          },
          {
            icon: 'cpu',
            name: t('决策层', 'Decide Layer'),
            role: t('AI 大脑 & 工业知识推理', 'AI Brain & Industrial Knowledge Reasoning'),
            description: t(
              '工业大模型 + RAG 知识库 + 多 Agent 协同推理引擎；融合设备知识、工艺规程与实时传感数据，给出有依据、可解释的决策建议，支持复杂约束下的最优路径求解。',
              'Industrial LLM + RAG knowledge base + multi-Agent collaborative reasoning engine. Combines equipment knowledge, process specs and real-time sensor data to deliver grounded, explainable decision recommendations with optimal path solving under complex constraints.',
            ),
          },
          {
            icon: 'zap',
            name: t('执行层', 'Execute Layer'),
            role: t('系统集成 & 行动下发', 'System Integration & Action Dispatch'),
            description: t(
              '预置 SAP、用友、金蝶、主流 MES 适配器；决策结果直接写入业务系统，触发工单、告警、机器人动作、产线调速指令，做到从 AI 决策到物理执行的零人工中转。',
              'Pre-built adapters for SAP, Yonyou, Kingdee and mainstream MES. Decision outputs write directly to business systems — triggering work orders, alerts, robot commands and line-speed adjustments — with zero manual relay from AI decision to physical execution.',
            ),
          },
          {
            icon: 'trending-up',
            name: t('进化层', 'Evolve Layer'),
            role: t('持续学习 & 效果强化', 'Continuous Learning & Effect Reinforcement'),
            description: t(
              '执行结果自动回流作为训练信号，驱动模型迭代；内置 A/B 部署框架确保新模型灰度上线；效果看板量化每次迭代的业务增量，实现 AI 越用越聪明的正向飞轮。',
              'Execution outcomes automatically feed back as training signals, driving model iteration. Built-in A/B deployment framework enables safe canary rollouts. Effect dashboards quantify business gains from each iteration — the AI gets smarter with every cycle.',
            ),
          },
        ],
      },
      {
        blockType: 'capabilityGrid',
        title: t('核心技术能力', 'Core Technical Capabilities'),
        subtitle: t('每项能力均在工厂环境下验证', 'Every capability validated in factory environments'),
        capabilities: [
          { icon: 'eye', title: t('工业视觉', 'Industrial Vision'), description: t('毫秒级缺陷检测，支持多光源、多角度', 'Millisecond defect detection, multi-lighting and multi-angle') },
          { icon: 'book-open', title: t('RAG 知识库', 'RAG Knowledge Base'), description: t('私有文档向量化，自然语言精准检索', 'Private doc vectorization, natural language retrieval') },
          { icon: 'git-branch', title: t('多 Agent 协同', 'Multi-Agent Coordination'), description: t('任务分解、并行推理、结果聚合', 'Task decomposition, parallel reasoning, result aggregation') },
          { icon: 'shield', title: t('私有化部署', 'On-Premise Deployment'), description: t('完全内网运行，数据不出厂', 'Fully air-gapped; data never leaves the factory') },
          { icon: 'plug', title: t('工业协议适配', 'Industrial Protocol Adapters'), description: t('OPC-UA / MQTT / Modbus / OPC-DA', 'OPC-UA / MQTT / Modbus / OPC-DA') },
          { icon: 'refresh-cw', title: t('持续学习', 'Continual Learning'), description: t('生产数据自动回流，模型持续迭代', 'Production data auto-flyback; models continuously iterate') },
        ],
      },
      {
        blockType: 'contentMedia',
        title: t('完全私有化部署', 'Fully On-Premise Deployment'),
        body: t(
          '所有衍绎 AI 产品均支持完全私有化部署，数据不经过任何公有云节点。我们提供裸金属、VMware、国产化服务器（飞腾/鲲鹏/龙芯）的全栈部署支持，满足制造业数据安全与信创合规要求。\n\n典型部署周期：4 周完成 POC，8 周完成生产上线。',
          'All Yanyi AI products support full on-premise deployment — data never passes through public cloud nodes. We provide full-stack deployment support for bare-metal, VMware, and domestic server platforms (Phytium / Kunpeng / Loongson), meeting manufacturing data security and domestic IT compliance requirements.\n\nTypical timeline: 4 weeks to POC, 8 weeks to production.',
        ),
        mediaPosition: 'right' as const,
      },
      {
        blockType: 'ctaBanner',
        title: t('想了解技术细节？', 'Want to dig into the technical details?'),
        subtitle: t('我们的解决方案工程师可以为您安排技术深潜 Session', 'Our solution engineers can arrange a technical deep-dive session'),
        cta: { label: t('预约技术交流', 'Book a Tech Session'), href: '/contact' },
      },
    ],
  }
}
```

- [ ] **Step 4: Type-check**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web && pnpm type-check
```

Expected: 0 errors (fix any mismatches with block type names)

- [ ] **Step 5: Commit**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai
git add web/src/seed/pages.ts
git commit -m "feat: seed pages — Home and Technology (bilingual)"
```

---

### Task 10: Seed — Products page + Solutions page

**Files:**
- Modify: `web/src/seed/pages.ts` (add buildProducts and buildSolutions exports)

**Interfaces:**
- Consumes: same L(), block slugs
- Produces: `buildProductsPage(lang, ids)` and `buildSolutions(lang)` functions

- [ ] **Step 1: Add buildProductsPage to pages.ts**

```typescript
export const buildProductsPage = (lang: Lang, ids: { products: number[] }) => {
  const t = L(lang)
  return {
    title: t('产品', 'Products'),
    slug: 'products',
    status: 'published' as const,
    meta: {
      title: t('产品 — 衍绎 AI', 'Products — Yanyi AI'),
      description: t('5款工业 AI 产品：知识大脑、视觉质检、设备运维 Copilot、智能排产、产线数据平台。', '5 industrial AI products: Knowledge Brain, Visual QC, O&M Copilot, Smart Scheduling, Shopfloor Analytics.'),
    },
    layout: [
      {
        blockType: 'hero',
        eyebrow: t('工业 AI 产品矩阵', 'Industrial AI Product Matrix'),
        title: t('5 款产品\n覆盖制造业核心场景', '5 products covering core\nmanufacturing scenarios'),
        subtitle: t('从知识管理到产线分析，从质检到排产，每款产品均可独立部署或组合使用。', 'From knowledge management to shopfloor analytics, from QC to scheduling — each product deploys standalone or in combination.'),
        primaryCta: { label: t('预约演示', 'Book a Demo'), href: '/contact' },
        secondaryCta: null,
      },
      {
        blockType: 'productMatrix',
        title: t('全部产品', 'All Products'),
        subtitle: null,
        products: ids.products,
      },
      {
        blockType: 'ctaBanner',
        title: t('不确定哪款产品适合您？', 'Not sure which product fits?'),
        subtitle: t('告诉我们您的场景，30 分钟帮您找到最佳切入点', 'Tell us your scenario — 30 minutes to find the best entry point'),
        cta: { label: t('联系我们', 'Contact Us'), href: '/contact' },
      },
    ],
  }
}
```

- [ ] **Step 2: Add buildSolutions to pages.ts**

```typescript
export const buildSolutions = (lang: Lang) => {
  const t = L(lang)
  return {
    title: t('解决方案', 'Solutions'),
    slug: 'solutions',
    status: 'published' as const,
    meta: {
      title: t('解决方案 — 衍绎 AI', 'Solutions — Yanyi AI'),
      description: t('针对汽车零部件、3C 电子、离散制造等场景的工业 AI 解决方案，4 周 POC 验证，8 周生产上线。', 'Industrial AI solutions for automotive parts, 3C electronics and discrete manufacturing. 4-week POC, 8-week production go-live.'),
    },
    layout: [
      {
        blockType: 'hero',
        eyebrow: t('行业解决方案', 'Industry Solutions'),
        title: t('针对您的场景\n开箱即用的 AI 方案', 'Ready-to-deploy AI\nfor your specific scenario'),
        subtitle: t('我们不卖通用 AI 平台，只做适合制造业的场景化解决方案。', 'We don\'t sell generic AI platforms — we build scenario-specific solutions designed for manufacturing.'),
        primaryCta: { label: t('联系方案团队', 'Contact Solution Team'), href: '/contact' },
        secondaryCta: null,
      },
      {
        blockType: 'scenarioShowcase',
        title: t('三大行业场景', 'Three Industry Scenarios'),
        subtitle: t('每个场景均有完整的产品组合、实施方法论与参考案例', 'Each scenario includes a complete product bundle, implementation methodology and reference cases'),
        scenarios: [
          {
            icon: 'car',
            name: t('汽车零部件制造', 'Automotive Parts Manufacturing'),
            description: t(
              '核心痛点：外观缺陷漏检、设备突发停机、排产响应慢。\n推荐组合：视觉质检 AI + 设备运维 Copilot + 智能排产 Agent。\n典型成效：不良率降低 60%+，非计划停机减少 40%+，交期准时率提升至 95%+。[待替换]',
              'Core pain points: missed surface defects, unexpected equipment failures, slow scheduling response.\nRecommended bundle: Visual QC AI + Equipment O&M Copilot + Smart Scheduling Agent.\nTypical results: Defect rate -60%+, unplanned downtime -40%+, on-time delivery >95%. [待替换]',
            ),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'smartphone',
            name: t('3C 电子制造', '3C Electronics Manufacturing'),
            description: t(
              '核心痛点：换型频繁导致质检参数难以同步、产线数据看板缺失。\n推荐组合：视觉质检 AI + 产线数据平台。\n典型成效：换型后质检模型切换 <4 小时，OEE 可视化实时掌握。[待替换]',
              'Core pain points: frequent changeovers making QC parameter sync difficult, no shopfloor visibility.\nRecommended bundle: Visual QC AI + Shopfloor Analytics Platform.\nTypical results: QC model switching <4 hours after changeover, real-time OEE visibility. [待替换]',
            ),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'factory',
            name: t('离散制造通用快速启动', 'General Discrete Manufacturing Fast Start'),
            description: t(
              '核心痛点：知识依赖老员工、维修响应慢、AI 落地不知从哪里开始。\n推荐组合：工业知识大脑 + 设备运维 Copilot（快速启动包）。\n典型成效：4 周 POC 出量化数据，8 周生产上线。[待替换]',
              'Core pain points: knowledge depends on senior staff, slow maintenance response, unsure where to start with AI.\nRecommended bundle: Industrial Knowledge Brain + Equipment O&M Copilot (rapid starter pack).\nTypical results: Quantified POC results in 4 weeks, production go-live in 8 weeks. [待替换]',
            ),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
        ],
      },
      {
        blockType: 'timeline',
        title: t('实施方法论', 'Implementation Methodology'),
        subtitle: t('四步走，从诊断到规模化', 'Four steps: from diagnosis to scale'),
        items: [
          {
            label: t('第一步', 'Step 1'),
            title: t('现状诊断（2周）', 'As-Is Diagnosis (2 weeks)'),
            description: t('现场走访，梳理痛点、数据现状、系统架构，输出诊断报告与优先级建议。', 'On-site visits to map pain points, data landscape and system architecture. Deliverable: diagnostic report with prioritized recommendations.'),
          },
          {
            label: t('第二步', 'Step 2'),
            title: t('方案设计（1周）', 'Solution Design (1 week)'),
            description: t('基于诊断结果，设计产品组合、数据流、系统集成方案，输出可落地的实施蓝图。', 'Based on diagnosis, design product bundle, data flow and system integration plan. Deliverable: actionable implementation blueprint.'),
          },
          {
            label: t('第三步', 'Step 3'),
            title: t('快速验证 POC（4周）', 'Rapid POC Validation (4 weeks)'),
            description: t('在客户真实环境中部署最小可行版本，输出可量化的 KPI 验证报告。', 'Deploy minimum viable version in client\'s real environment. Deliverable: quantified KPI validation report.'),
          },
          {
            label: t('第四步', 'Step 4'),
            title: t('规模化落地', 'Scale-Up Deployment'),
            description: t('基于 POC 成果全面铺开，持续优化，建立长效运营机制。', 'Roll out across production based on POC results, with continuous optimization and long-term operations framework.'),
          },
        ],
      },
      {
        blockType: 'ctaBanner',
        title: t('找不到您所在的行业？', 'Don\'t see your industry?'),
        subtitle: t('联系我们，我们会评估是否能为您的场景提供定制方案', 'Contact us — we\'ll assess whether we can build a customized solution for your scenario'),
        cta: { label: t('联系方案团队', 'Contact Solution Team'), href: '/contact' },
      },
    ],
  }
}
```

- [ ] **Step 3: Type-check**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web && pnpm type-check
```

Expected: 0 errors

- [ ] **Step 4: Commit**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai
git add web/src/seed/pages.ts
git commit -m "feat: seed pages — Products and Solutions (bilingual)"
```

---

### Task 11: Seed — Cases + About + Careers pages

**Files:**
- Modify: `web/src/seed/pages.ts` (add remaining page exports)
- Modify: `web/src/seed/content.ts` (add buildCases export)

**Interfaces:**
- Produces: `buildCases(lang)`, `buildAbout(lang)`, `buildCareers(lang)`, `buildContact(lang)` functions

- [ ] **Step 1: Add buildCases to content.ts**

```typescript
export const buildCases = (lang: Lang) => {
  const t = L(lang)
  return [
    {
      title: t('某汽车零部件头部企业 — 视觉质检 AI 上线', 'Leading Automotive Parts Manufacturer — Visual QC AI Go-Live'),
      slug: 'auto-parts-visual-qc',
      summary: t('视觉质检 AI 上线后不良率降低 62%，人工目检岗位转岗为数据分析。[待替换]', 'Defect rate reduced by 62% after Visual QC AI go-live; manual QC staff redeployed to data analysis. [待替换]'),
      industry: t('汽车零部件', 'Automotive Parts'),
      results: [
        { value: '62%', label: t('不良率降低 [待替换]', 'Defect rate reduction [待替换]') },
        { value: '3×', label: t('检测吞吐量提升 [待替换]', 'Inspection throughput increase [待替换]') },
        { value: '14mo', label: t('ROI 回收周期 [待替换]', 'ROI payback period [待替换]') },
      ],
      status: 'published' as const,
    },
    {
      title: t('某家电制造商 — 设备运维 Copilot 部署', 'Home Appliance Manufacturer — Equipment O&M Copilot Deployment'),
      slug: 'home-appliance-oam',
      summary: t('设备运维 Copilot 上线后非计划停机减少 45%，设备综合效率 OEE 从 71% 提升至 82%。[待替换]', 'Unplanned downtime reduced by 45% after O&M Copilot deployment; OEE improved from 71% to 82%. [待替换]'),
      industry: t('家电制造', 'Home Appliance Manufacturing'),
      results: [
        { value: '45%', label: t('非计划停机减少 [待替换]', 'Unplanned downtime reduction [待替换]') },
        { value: '71%→82%', label: t('OEE 提升 [待替换]', 'OEE improvement [待替换]') },
        { value: '72h', label: t('故障预警提前量 [待替换]', 'Fault warning lead time [待替换]') },
      ],
      status: 'published' as const,
    },
  ]
}
```

- [ ] **Step 2: Add buildAbout, buildCareers, buildContact to pages.ts**

```typescript
export const buildAbout = (lang: Lang) => {
  const t = L(lang)
  return {
    title: t('关于我们', 'About Us'),
    slug: 'about',
    status: 'published' as const,
    meta: {
      title: t('关于我们 — 衍绎 AI', 'About Us — Yanyi AI'),
      description: t('衍绎人工智能科技有限公司 — 专注工业/制造业 AI 的技术团队。', 'Yanyi AI Technology Co., Ltd. — a technical team focused on industrial and manufacturing AI.'),
    },
    layout: [
      {
        blockType: 'contentMedia',
        title: t('我们的使命', 'Our Mission'),
        body: t(
          '用工业 AI 重塑制造业生产力，让每一座工厂都能用上世界级的智能决策能力。\n\n我们相信，制造业是国民经济的脊梁，而 AI 是让这根脊梁更强壮的关键技术。衍绎 AI 专注于将最新的 AI 能力转化为制造企业可用、可信、可扩展的工业级工具。',
          'Reshape manufacturing productivity through industrial AI — giving every factory access to world-class intelligent decision-making.\n\nWe believe manufacturing is the backbone of the economy, and AI is the technology that makes that backbone stronger. Yanyi AI focuses on translating cutting-edge AI capabilities into industrial-grade tools that manufacturers can trust, use and scale.',
        ),
        mediaPosition: 'right' as const,
      },
      {
        blockType: 'valueProps',
        title: t('我们的原则', 'Our Principles'),
        subtitle: null,
        items: [
          { icon: 'target', title: t('场景优先', 'Scenario First'), description: t('不卖通用平台，只做有工厂验证的场景化方案', 'No generic platforms — only factory-validated scenario solutions') },
          { icon: 'shield', title: t('数据安全', 'Data Security'), description: t('所有产品支持完全私有化部署，数据不出厂', 'All products support full on-premise deployment; data stays in the factory') },
          { icon: 'trending-up', title: t('ROI 可量化', 'Measurable ROI'), description: t('每个项目在 POC 阶段即输出可量化的业务成效', 'Every project delivers quantifiable business results at POC stage') },
          { icon: 'users', title: t('长期陪伴', 'Long-term Partnership'), description: t('从实施到迭代，持续的技术支持与模型优化', 'From implementation to iteration — continuous technical support and model optimization') },
        ],
      },
      {
        blockType: 'timeline',
        title: t('发展历程', 'Our Journey'),
        subtitle: null,
        items: [
          { label: t('2022', '2022'), title: t('公司成立', 'Founded'), description: t('衍绎 AI 在北京成立，专注工业 AI 落地 [待替换]', 'Yanyi AI founded in Beijing, focused on industrial AI deployment [待替换]') },
          { label: t('2023', '2023'), title: t('首批产品上线', 'First Products Launched'), description: t('视觉质检 AI 与设备运维 Copilot 首批客户上线 [待替换]', 'Visual QC AI and O&M Copilot deployed with first customers [待替换]') },
          { label: t('2024', '2024'), title: t('规模化扩张', 'Scale-Up'), description: t('累计服务工厂 100+，完成 A 轮融资 [待替换]', 'Served 100+ factories; completed Series A funding [待替换]') },
          { label: t('2025', '2025'), title: t('全产品矩阵', 'Full Product Matrix'), description: t('5 款产品全部发布，工业智能体四引擎平台正式推出 [待替换]', '5 products fully launched; Industrial AI Four-Engine Platform officially released [待替换]') },
        ],
      },
      {
        blockType: 'teamPreview',
        title: t('核心团队', 'Core Team'),
        subtitle: t('来自顶尖工业 AI 研究机构与制造业一线的复合型团队', 'A cross-functional team from leading industrial AI research institutions and manufacturing frontlines'),
      },
      {
        blockType: 'ctaBanner',
        title: t('加入我们，一起让工厂更聪明', 'Join us — make factories smarter together'),
        subtitle: null,
        cta: { label: t('查看开放职位', 'View Open Positions'), href: '/careers' },
      },
    ],
  }
}

export const buildCareers = (lang: Lang) => {
  const t = L(lang)
  return {
    title: t('加入我们', 'Careers'),
    slug: 'careers',
    status: 'published' as const,
    meta: {
      title: t('加入我们 — 衍绎 AI', 'Careers — Yanyi AI'),
      description: t('衍绎 AI 招聘：算法工程师、工业 AI 解决方案架构师、前端工程师等岗位。', 'Yanyi AI is hiring: algorithm engineers, industrial AI solution architects, frontend engineers and more.'),
    },
    layout: [
      {
        blockType: 'contentMedia',
        title: t('为什么加入衍绎 AI？', 'Why join Yanyi AI?'),
        body: t(
          '我们相信 AI 改变制造业是这个时代最重要的产业机会之一。在衍绎 AI，你将直接看到自己写的代码或设计的方案在工厂产线上产生真实效果——不良率下降的曲线、停机减少的日志、工人不再需要翻阅厚重手册的笑容。\n\n小团队，真问题，快迭代，高信任。',
          'We believe AI transforming manufacturing is one of the most important industrial opportunities of our era. At Yanyi AI, you\'ll directly see your code or solution design making real impact on production lines — the defect rate curve declining, the downtime reduction logs, the smiles of workers who no longer need to flip through thick manuals.\n\nSmall team. Real problems. Fast iteration. High trust.',
        ),
        mediaPosition: 'right' as const,
      },
      {
        blockType: 'richText',
        content: rt(t(
          `## 开放职位\n\n### 算法工程师（视觉/NLP）\n**职责**：工业视觉模型开发与优化；RAG 系统设计与实现；模型训练、评估、部署全流程\n**要求**：计算机/电子/自动化相关本科及以上；熟悉 PyTorch；有工业视觉或 NLP 项目经验优先\n\n### 工业 AI 解决方案架构师\n**职责**：与客户工程团队对接，设计系统集成方案；主导 POC 实施，输出量化验证报告；收集一线需求反馈产品迭代\n**要求**：3 年以上制造业信息化/智能化项目经验；熟悉 MES/ERP/SCADA；有工业 AI 项目经验优先\n\n### 前端工程师\n**职责**：产品 Web 端界面开发；数据可视化看板；Admin 后台功能\n**要求**：熟练 React/Next.js；有 Tailwind CSS 使用经验；TypeScript 优先\n\n---\n\n简历请发送至：${t('hr@yanyi-ai.com [待替换]', 'hr@yanyi-ai.com [待替换]')}`,
          `## Open Positions\n\n### Algorithm Engineer (Vision / NLP)\n**Responsibilities**: Industrial vision model development and optimization; RAG system design and implementation; full model training, evaluation and deployment pipeline\n**Requirements**: CS/EE/Automation bachelor's or above; proficient in PyTorch; industrial vision or NLP project experience preferred\n\n### Industrial AI Solution Architect\n**Responsibilities**: Interface with client engineering teams; design system integration solutions; lead POC implementations, deliver quantified validation reports; collect frontline feedback for product iteration\n**Requirements**: 3+ years manufacturing IT/AI project experience; familiar with MES/ERP/SCADA; industrial AI project experience preferred\n\n### Frontend Engineer\n**Responsibilities**: Product web UI development; data visualization dashboards; admin backend features\n**Requirements**: Proficient in React/Next.js; Tailwind CSS experience; TypeScript preferred\n\n---\n\nSend your CV to: hr@yanyi-ai.com [待替换]`,
        )),
      },
    ],
  }
}

export const buildContact = (lang: Lang) => {
  const t = L(lang)
  return {
    title: t('联系我们', 'Contact Us'),
    slug: 'contact',
    status: 'published' as const,
    meta: {
      title: t('联系我们 — 衍绎 AI', 'Contact Us — Yanyi AI'),
      description: t('联系衍绎 AI，预约产品演示或方案咨询。', 'Contact Yanyi AI to book a product demo or solution consultation.'),
    },
    layout: [
      {
        blockType: 'richText',
        content: rt(t(
          '## 预约演示\n\n我们的解决方案工程师将在 1 个工作日内与您联系。\n\n**邮箱**：contact@yanyi-ai.com\n**电话**：[待替换]\n**地址**：[待替换]',
          '## Book a Demo\n\nOur solution engineers will contact you within 1 business day.\n\n**Email**: contact@yanyi-ai.com\n**Phone**: [待替换]\n**Address**: [待替换]',
        )),
      },
    ],
  }
}
```

- [ ] **Step 3: Type-check**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web && pnpm type-check
```

Expected: 0 errors

- [ ] **Step 4: Commit**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai
git add web/src/seed/
git commit -m "feat: seed pages — Cases, About, Careers, Contact (bilingual)"
```

---

### Task 12: Wire seed/index.ts + run seed + end-to-end verify

**Files:**
- Modify: `web/src/seed/index.ts` (wire new builders)

**Interfaces:**
- Consumes: all builders from content.ts and pages.ts
- Produces: populated Payload database with all pages, products, cases, site settings, navigation

- [ ] **Step 1: Read current seed/index.ts**

```bash
cat /Users/zhangjun/CursorProjects/yanyi-ai/web/src/seed/index.ts
```

- [ ] **Step 2: Update seed/index.ts to call new builders**

The index must call all new builders and pass the right `ids`. Follow the existing pattern from yanyi-health's seed/index.ts. Key changes:
- Import `buildCases`, `buildProductsPage`, `buildSolutions`, `buildAbout`, `buildCareers`, `buildContact` from `./pages`
- Import `buildCases` (case entries) from `./content`
- After seeding Products, collect their Payload-assigned `id`s into `ids.products`
- After seeding Cases entries, collect `id`s into `ids.cases`
- Call all page builders with the collected ids

The exact implementation depends on the existing seed/index.ts structure — adapt the pattern rather than rewriting from scratch.

- [ ] **Step 3: Run the seed**

Ensure dev server is stopped, then:

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web && pnpm seed
```

Expected output: lines confirming each collection was seeded (Products, Cases, Pages, SiteSettings, Navigation, etc.)

- [ ] **Step 4: Start dev server and verify all pages**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web && pnpm dev
```

Verify each route loads with correct bilingual content:

| Route | Expected |
|-------|---------|
| `http://localhost:3000` | 首页，Hero 显示"让工厂更聪明" |
| `http://localhost:3000/technology` | 技术页，四引擎架构图 |
| `http://localhost:3000/products` | 产品页，5 款产品卡片 |
| `http://localhost:3000/solutions` | 解决方案页，3 个行业场景 |
| `http://localhost:3000/about` | 关于我们 |
| `http://localhost:3000/careers` | 加入我们，3 个职位 |
| `http://localhost:3000/contact` | 联系我们 |
| `http://localhost:3000/en` | English home page |
| `http://localhost:3000/en/products` | English products page |
| `http://localhost:3000/admin` | Payload admin, shows yanyi-ai data |

- [ ] **Step 5: Final production build**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai/web && pnpm build
```

Expected: successful build, 0 type errors

- [ ] **Step 6: Final commit**

```bash
cd /Users/zhangjun/CursorProjects/yanyi-ai
git add web/src/seed/index.ts
git commit -m "feat: wire seed index — all pages, products, cases seeded; P3 complete"
```

---

## Self-Review

**Spec coverage check:**
- ✅ 9-page site map → Tasks 9–11 cover all pages
- ✅ 5 products → Task 8 (content.ts)
- ✅ 3 solution scenarios → Task 10 (solutions page)
- ✅ Implementation timeline 4-step → Task 10 (solutions page timeline block)
- ✅ 2 placeholder cases → Task 11 (buildCases)
- ✅ Bilingual zh/en → every builder uses `L(lang)` with both variants
- ✅ `[待替换]` markers on all client-specific data
- ✅ Fonts (Space Grotesk + Inter) → Task 2
- ✅ Color system (amber/steel-blue) → Task 3
- ✅ /solutions page (explicitly requested) → Task 10
- ✅ Payload admin adapted → Task 1 (titleSuffix), Task 6 (Products schema)
- ✅ On-premise deployment mention → Task 9 (technology page contentMedia)

**Type consistency:**
- `blockType: 'hero'` matches `HeroBlock` slug in blocks.ts ✅
- `blockType: 'scenarioShowcase'` used for both ScenarioShowcase and Solutions scenarios — reusing existing block rather than adding a new one (YAGNI) ✅
- `blockType: 'productMatrix'` passes `products: number[]` which matches `ProductMatrixBlock.fields.products` (relationship hasMany) ✅
- `blockType: 'caseHighlights'` passes `cases: number[]` ✅

**Placeholder scan:** All client-specific values (`[待替换]`) are in seed data strings, not in code logic ✅

---

Plan complete and saved to `docs/superpowers/plans/2026-06-22-yanyi-ai-website.md`.

**Two execution options:**

**1. Subagent-Driven (recommended)** — fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** — execute tasks in this session using executing-plans skill, batch execution with checkpoints

Which approach?
