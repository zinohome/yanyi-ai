# yanyi-ai 官网设计规格

**日期**: 2026-06-22  
**状态**: 已确认，待实现  
**实现路线**: A — 从 yanyi-health web/ 复制脚手架，原地改造

---

## 1. 业务背景

**yan yi AI（衍绎人工智能）** 是一家专注于工业/制造业领域的 B2B 人工智能公司，采用 **"1+3"** 商业模式：

- **1** — 核心 AI 应用产品矩阵（5款已规划产品）
- **3** — AI 解决方案/咨询 × AI 集成实施 × AI 运营支持

**目标受众**：企业 B 端决策者（CIO / 生产总监 / 工厂总经理）+ 招聘/人才

**核心价值主张**：工业 AI 带来可量化的 ROI — 提效 · 可靠 · 安全 · 可私有化

---

## 2. 品牌叙事

**主题**：工业智能闭环

**旗舰图示**（工业智能体四引擎）：

```
感知（Perceive）→ 决策（Decide）→ 执行（Execute）→ 进化（Evolve）
         ↑_______________________________________↓
```

**Tagline（中英）**：
- 中：让工厂更聪明，让决策更精准
- 英：Making factories smarter. Making decisions sharper.

**品牌关键词**：精密 · 可靠 · 工业级 · 数据驱动 · 本地可信

---

## 3. 技术栈

与 yanyi-health 完全相同（Route A 复制脚手架）：

| 层级 | 技术 |
|------|------|
| 框架 | Next.js 16 (App Router) |
| CMS | Payload CMS 3 + PostgreSQL |
| 样式 | Tailwind CSS v4 + shadcn/ui |
| 主题 | next-themes（亮/暗模式） |
| 国际化 | next-intl（/zh /en 路由） |
| 字体 | next/font/local（自托管 woff2） |
| 内容 | 页面构建块（Block-based Page Builder） |
| 种子 | 双语占位内容，Payload Local API 写入 |

---

## 4. 设计系统

### 4.1 色彩系统

| Token | 用途 | OKLCH 值 | 说明 |
|-------|------|-----------|------|
| `--primary` | 主色/CTA/高亮 | `oklch(0.72 0.18 55)` | 暖琥珀橙 |
| `--primary-foreground` | 主色上的文字 | `oklch(0.15 0.03 55)` | 深棕 |
| `--secondary` | 辅助色/数据/标签 | `oklch(0.45 0.08 230)` | 钢蓝/石墨 |
| `--secondary-foreground` | 辅助色上的文字 | `oklch(0.98 0.01 230)` | 近白 |
| `--background` | 页面背景 | `oklch(0.06 0.01 250)` | 深墨蓝（深色模式默认） |
| `--surface` | 卡片/面板 | `oklch(0.10 0.02 250)` | 略亮于背景 |
| `--muted` | 次要文字/占位 | `oklch(0.55 0.03 250)` | 中灰蓝 |
| `--border` | 边框 | `oklch(0.18 0.02 250)` | 微妙边框 |

**亮色模式**：背景反转为 `oklch(0.97 0.01 80)`（暖白），primary/secondary 不变。

**视觉效果**（复用 yanyi-health 机制，更换色相）：
- Aurora 渐变 blobs — 橙/琥珀色相
- Grain overlay — 保留纹理
- Card-glow — `oklch(0.72 0.18 55)` 橙光晕
- Reveal 动画 — 保留
- Tech-grid 背景网格 — 保留，调深

### 4.2 字体系统

| CSS 变量 | 字体 | 用途 |
|----------|------|------|
| `--font-display` | Space Grotesk Variable | 标题、Hero、数字 |
| `--font-sans` | Inter Variable | 正文、UI 元素 |
| `--font-mono` | JetBrains Mono Variable | 数据标签、代码、指标 |

**中文回退**：`PingFang SC, Microsoft YaHei, sans-serif`

所有字体通过 `next/font/local` 加载，woff2 variable 文件提交进 repo，零 CDN 依赖。

---

## 5. 站点地图

| 路径（中） | 路径（英） | 页面名称 | 优先级 |
|-----------|-----------|---------|-------|
| `/zh` | `/en` | 首页 Home | P1 |
| `/zh/technology` | `/en/technology` | 技术能力 Technology | P1 |
| `/zh/products` | `/en/products` | 产品 Products | P1 |
| `/zh/solutions` | `/en/solutions` | 解决方案 Solutions | P1 |
| `/zh/cases` | `/en/cases` | 案例 Cases | P2 |
| `/zh/blog` | `/en/blog` | 资讯 Blog | P2 |
| `/zh/about` | `/en/about` | 关于我们 About | P2 |
| `/zh/careers` | `/en/careers` | 加入我们 Careers | P2 |
| `/zh/contact` | `/en/contact` | 联系我们 Contact | P2 |

---

## 6. Block 库

复用 yanyi-health Block-based Page Builder 架构，覆写内容：

| Block 名称 | 用途 |
|-----------|------|
| `HeroIndustrial` | 首页 Hero — 四引擎动画 + CTA |
| `TechArchitecture` | 技术架构图 — 感知/决策/执行/进化四层 |
| `CapabilityGrid` | 核心能力卡片网格 |
| `ProductMatrix` | 产品矩阵 — 5款产品卡片 |
| `SolutionCards` | 解决方案列表 — 行业场景 |
| `StatsMetrics` | 数据指标 — 提效百分比、客户数等 |
| `CaseHighlights` | 案例卡片 |
| `LogoWall` | 合作/客户 Logo 墙 |
| `ContentMedia` | 图文混排 |
| `Timeline` | 发展历程 |
| `TeamPreview` | 团队预览 |
| `FAQ` | 常见问题 |
| `CTABanner` | 行动号召横幅 |
| `RichText` | 富文本 |

---

## 7. 页面内容规格

### 7.1 首页（Home）

**结构**：`HeroIndustrial → StatsMetrics → TechArchitecture → ProductMatrix → SolutionCards（3个场景） → CaseHighlights（2个） → LogoWall → CTABanner`

**Hero 内容（占位）**：
```
中：让工厂更聪明，让决策更精准
    工业 AI 闭环平台 — 感知·决策·执行·进化
    [了解产品] [联系我们]

英：Making factories smarter. Making decisions sharper.
    Industrial AI Closed-Loop Platform
    [Explore Products] [Contact Us]
```

**StatsMetrics 占位**：
- 生产效率提升 **38%** [待替换]
- 质检准确率 **99.2%** [待替换]
- 服务工厂 **120+** [待替换]
- 平均 ROI 回收 **<18 个月** [待替换]

### 7.2 技术能力（Technology）

**结构**：`HeroIndustrial（副标题）→ TechArchitecture（四层详细）→ CapabilityGrid → ContentMedia（私有化部署）→ CTABanner`

**四层架构占位内容**：
- **感知层（Perceive）**：工业视觉 · 传感器融合 · 边缘采集 · 多模态输入
- **决策层（Decide）**：工业大模型 · RAG 知识库 · Agent 推理 · 规则引擎
- **执行层（Execute）**：MES/ERP 集成 · 机器人控制 · 流程自动化 · 告警响应
- **进化层（Evolve）**：持续学习 · 数据回流 · 模型迭代 · 效果闭环

### 7.3 产品（Products）

**结构**：`HeroIndustrial（副标题）→ ProductMatrix（5款）→ 每款产品详细 ContentMedia → CTABanner`

**5款产品占位**：

| # | 产品名 | 英文名 | 核心价值 |
|---|--------|--------|---------|
| 1 | 工业知识大脑 | Industrial Knowledge Brain | RAG 知识库 + 智能问答，消化企业存量文档 |
| 2 | 视觉质检 AI | Visual QC AI | 缺陷检测准确率 >99%，替代人工抽检 |
| 3 | 设备运维 Copilot | Equipment O&M Copilot | 预测性维护，提前 72h 预警故障 |
| 4 | 智能排产 Agent | Smart Scheduling Agent | 供应链 + 产能一体化排程优化 |
| 5 | 产线数据平台 | Shopfloor Analytics | 实时数据看板 + 异常根因分析 |

### 7.4 解决方案（Solutions）

**结构**：`HeroIndustrial（副标题）→ SolutionCards（按行业）→ ContentMedia（实施方法论）→ Timeline（实施流程）→ CTABanner`

**行业场景占位**（3个，P1；更多 P2 扩展）：
1. **汽车零部件制造** — 质检 + 排产 + 设备运维组合方案
2. **3C 电子制造** — 视觉质检 + 数据平台
3. **离散制造通用** — 知识大脑 + Copilot 快速启动包

**实施方法论四步**：
1. 现状诊断（2周）→ 2. 方案设计（1周）→ 3. 快速验证 POC（4周）→ 4. 规模化落地

### 7.5 案例（Cases）

**结构**：`CaseHighlights 列表 → 单案例详情页（ContentMedia + StatsMetrics）`

**占位案例（2个，标注[待替换]）**：
- 某汽车零部件头部企业 — 视觉质检 AI 上线后不良率降低 62% [待替换]
- 某家电制造商 — 设备运维 Copilot 非计划停机减少 45% [待替换]

### 7.6 关于我们（About）

**结构**：`ContentMedia（使命/愿景）→ Timeline（发展历程）→ TeamPreview → LogoWall（合作生态）→ CTABanner`

**使命占位**：用工业 AI 重塑制造业生产力，让每一座工厂都能用上世界级的智能决策能力。

### 7.7 加入我们（Careers）

**结构**：`ContentMedia（文化介绍）→ 岗位列表（RichText）→ CTABanner`

**占位岗位**（3类）：
- 算法工程师（视觉/NLP）
- 工业 AI 解决方案架构师
- 前端工程师

### 7.8 联系我们（Contact）

**结构**：`联系表单 + 公司信息`

**占位信息**：[待替换] 地址 / 电话 / 邮箱

---

## 8. 双语内容策略

- **中文（zh）**：主要语言，所有内容完整
- **英文（en）**：完整翻译，面向跨国采购决策者
- Payload CMS localization 字段：`locale: ['zh', 'en']`
- next-intl 路由：`/zh/*` 和 `/en/*`，默认重定向到 `/zh`
- 占位内容由 Claude 起草，标注 `[待替换]` 的字段须客户确认后填写

---

## 9. Payload CMS 数据模型

### Collections

| Collection | 用途 |
|-----------|------|
| `Pages` | 所有页面（Block Builder） |
| `Products` | 产品条目（含双语字段） |
| `Solutions` | 解决方案条目 |
| `Cases` | 客户案例 |
| `Posts` | 资讯/博客文章 |
| `Jobs` | 招聘职位 |
| `Media` | 图片/文件 |
| `Users` | 管理员账户 |

### Globals

| Global | 用途 |
|--------|------|
| `SiteSettings` | 网站名、Logo、SEO 默认值 |
| `Navigation` | 顶部导航菜单 |
| `Footer` | 页脚内容 |

---

## 10. 实现阶段

### P1 — 脚手架 + 设计系统（核心）

1. 从 yanyi-health 复制 `web/` 目录到 `yanyi-ai/web/`
2. 更新 `package.json`、`.env.example`、项目名称
3. 替换字体文件（Space Grotesk + Inter woff2 variable）
4. 更新 `globals.css` — 新色彩系统（OKLCH tokens）
5. 更新 `src/fonts/index.ts` — 新字体导出
6. 基础冒烟测试：`next dev` 可启动，首页可访问

### P2 — 品牌 + Block 改造

1. 覆写 Hero Block — `HeroIndustrial`（四引擎动画）
2. 新增 `SolutionCards` Block
3. 更新 `ProductMatrix` Block — 适配 5 款产品
4. 更新 `TechArchitecture` Block — 四层架构图
5. 更新 Navigation / Footer 组件 — 新站点地图
6. 亮/暗模式验证

### P3 — 双语内容 + Seed

1. 编写 `src/seed/` — 双语占位内容（zh/en）
2. Pages seed：首页、技术、产品、解决方案（4 页）
3. Products seed：5 款产品条目
4. Solutions seed：3 个行业场景
5. Cases seed：2 个占位案例（标注[待替换]）
6. 运行 `pnpm seed` 验证数据写入

---

## 11. 性能 & SEO 要求

- Lighthouse Performance ≥ 90（移动端）
- LCP < 2.5s（Hero 图片优先加载）
- 字体：`display: swap`，无布局偏移
- OG 图片：每页自定义（Payload Media 字段）
- 结构化数据：Organization + Product Schema
- 中文 SEO：百度 sitemap 友好，URL 用英文路径（已设计）

---

## 12. 设计决策日志

| 决策 | 选项 | 结论 | 理由 |
|------|------|------|------|
| 实现路线 | A（复制）/ B（新建）/ C（模板） | **A** | 最快上线，技术栈完全对齐 |
| 主色调 | 纯橙 / 暖琥珀橙 / 科技蓝 | **暖琥珀橙** | 纯橙视觉疲劳，琥珀更耐看 |
| 标题字体 | Manrope / Space Grotesk / Inter | **Space Grotesk** | 几何工业感，比 Manrope 更硬朗 |
| 正文字体 | Inter / Manrope | **Inter** | 最高可读性，行业标准 |
| 品牌叙事 | 人体四域 / 工业闭环 | **工业闭环** | 制造 B2B 场景，人体叙事不适合 |
| 解决方案栏 | 不含 / 含 | **含** | 用户明确要求 |
| 内容来源 | 用户提供 / Claude 起草 | **Claude 起草+标注** | 用户确认，先上线后精细化 |

---

*文档生成时间：2026-06-22*  
*下一步：用户审阅本文档，确认后调用 writing-plans 生成实现计划*
