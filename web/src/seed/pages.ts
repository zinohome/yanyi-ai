import { rt, L, type Lang } from './helpers'

type Ids = { products: number[]; cases: number[] }

export const buildHome = (lang: Lang, ids: Ids) => {
  const t = L(lang)
  return {
    title: t('首页', 'Home'),
    slug: 'home',
    status: 'published' as const,
    meta: {
      title: t('研翌科技 · 工业智能生产力底座', 'Yanyi · Industrial Intelligence Platform'),
      description: t(
        '让专家知识成为组织资产。研翌科技以 AI Aided Engineering 为方向，构建可私有化部署、可追溯可审计的智能工作流决策底座 IndustrialX。',
        'Turn expert knowledge into an organizational asset. Yanyi builds IndustrialX — an AI-Aided-Engineering platform for private, traceable, auditable intelligent workflows.',
      ),
    },
    layout: [
      {
        blockType: 'hero',
        eyebrow: t('面向先进制造企业的智能生产力底座', 'Industrial Intelligence Platform for Advanced Manufacturing'),
        title: t('让专家知识\n成为组织资产', 'Turn expert knowledge\ninto an asset'),
        subtitle: t(
          '研翌科技以 AI Aided Engineering（AAE）为方向，把散落在专家经验、工程文档与业务流程中的隐性知识，转化为可复用、可追溯、可持续优化的智能工作流决策能力——可私有化部署，数据不出厂。',
          'Guided by AI-Aided Engineering (AAE), Yanyi turns tacit knowledge — scattered across expertise, engineering documents and business processes — into reusable, traceable, continuously improving intelligent workflows. Deployed on-premise; data never leaves the plant.',
        ),
        primaryCta: { label: t('了解产品', 'Explore Products'), href: '/products' },
        secondaryCta: { label: t('联系我们', 'Contact Us'), href: '/contact' },
      },
      {
        blockType: 'valueProps',
        title: t('我们为什么不一样', 'Why we are different'),
        subtitle: t('不做泛化 AI 工具，而是把 AI 压进真实业务结构与工程结构', 'Not a generic AI tool — we press AI into real business and engineering structure'),
        items: [
          { icon: 'factory', title: t('面向真实业务场景', 'Real business scenarios'), description: t('聚焦质量失效分析、工程变更、设计知识复用、计划协同等制造真实场景，而非泛化 AI。', 'Focused on FA, engineering change, design knowledge reuse and planning — not generic AI.') },
          { icon: 'layers', title: t('平台自研，持续演进', 'Self-built, evolving platform'), description: t('每个场景交付都沉淀为 IndustrialX 上的可复用组件、知识模型与方法，而非一次性定制。', 'Every delivery sediments into reusable components on IndustrialX — not one-off customization.') },
          { icon: 'shield', title: t('私有化优先，安全可控', 'Private-first, secure'), description: t('支持私有化部署与离线运行，敏感数据不出厂，核心知识资产留在客户内网。', 'On-premise and offline-capable; sensitive data and core knowledge stay in the customer network.') },
          { icon: 'workflow', title: t('可追溯、可审计', 'Traceable & auditable'), description: t('关键输出保留来源引用、过程记录与版本痕迹，便于专家复核与责任追溯。', 'Key outputs keep source citations, process logs and version history for review and accountability.') },
          { icon: 'users', title: t('人机协同，专家把关', 'Human-in-the-loop'), description: t('AI 提供建议与初稿，专家保留审核与最终决策权；系统在持续使用中不断沉淀领域经验。', 'AI drafts and suggests; experts keep review and final decisions — and the system accrues domain experience in use.') },
          { icon: 'cpu', title: t('小模型驱动，降本可控', 'Small-model-driven'), description: t('把智能压进结构而非押注模型规模，本地小模型即可拿到工业级可靠性，降低算力门槛与成本。', 'Intelligence pressed into structure, not model scale — local small models reach industrial reliability at lower cost.') },
        ],
      },
      {
        blockType: 'techArchitecture',
        title: t('一个底座，三个引擎', 'One Platform, Three Engines'),
        subtitle: t('大脑 · 记忆 · 感官 —— 由 IndustrialX 底座编排为可靠、可组合的工业智能体', 'Brain · Memory · Senses — orchestrated by the IndustrialX platform into reliable, composable industrial agents'),
        domains: [
          {
            icon: 'brain',
            name: t('大脑', 'Brain'),
            role: t('CozyEngine · 思考与编排', 'CozyEngine · Thinking & Orchestration'),
            description: t('负责思考、人格与组织、任务规划与工具路由，是会话与决策的唯一事实源。', 'Handles thinking, persona, planning and tool routing — the single source of truth for decisions.'),
          },
          {
            icon: 'database',
            name: t('记忆', 'Memory'),
            role: t('CozyMemory · 统一记忆', 'CozyMemory · Unified Memory'),
            description: t('整合对话记忆、用户画像与知识图谱，让智能体越用越懂业务。', 'Integrates conversational memory, profiles and knowledge graphs so agents get smarter over time.'),
          },
          {
            icon: 'mic',
            name: t('感官', 'Senses'),
            role: t('RTVoice · 实时语音', 'RTVoice · Real-time Voice'),
            description: t('实时语音转写、流式合成与语音对话，全栈本地推理，数据不出网。', 'Real-time transcription, streaming synthesis and voice chat — fully local, data on-prem.'),
          },
        ],
        note: t('IndustrialX 底座负责编排、工作流与工具执行，将三引擎组合为面向工业场景的智能体', 'The IndustrialX platform handles orchestration, workflows and tool execution — composing the three engines into industrial agents'),
      },
      {
        blockType: 'productMatrix',
        title: t('产品矩阵', 'Product Matrix'),
        subtitle: t('以 IndustrialX 智能生产力底座为核心，三引擎协同支撑', 'Centered on the IndustrialX platform, powered by three collaborating engines'),
        products: ids.products,
      },
      {
        blockType: 'scenarioShowcase',
        title: t('产研销智能飞轮', 'The Intelligence Flywheel'),
        subtitle: t('从单点提效到系统化智能生产力，逐步连接四类关键业务流', 'From point gains to systemic productivity — connecting four key business flows'),
        scenarios: [
          {
            icon: 'cpu',
            name: t('研发侧', 'R&D'),
            description: t('围绕设计规范、工程变更、测试验证、设计手册与历史质量问题，加快知识检索、风险预审与经验复用。', 'Speed up knowledge lookup, risk pre-review and experience reuse around specs, ECN, verification and design manuals.'),
            link: { label: t('查看场景', 'View Scenarios'), href: '/cases' },
          },
          {
            icon: 'shield',
            name: t('质量侧', 'Quality'),
            description: t('围绕 FA 失效分析、8D 报告、质量异常与客户现场问题，提升问题定位效率、缩短闭环周期。', 'Improve problem localization and shorten closure cycles around FA, 8D reports and field issues.'),
            link: { label: t('查看场景', 'View Scenarios'), href: '/cases' },
          },
          {
            icon: 'workflow',
            name: t('生产与供应链侧', 'Production & Supply Chain'),
            description: t('围绕 Master Planning、物料风险、供应商风险与产能约束，提升计划协同效率、减少交付风险。', 'Improve planning coordination and reduce delivery risk around master planning, material and supplier risk.'),
            link: { label: t('查看场景', 'View Scenarios'), href: '/cases' },
          },
          {
            icon: 'message-circle',
            name: t('市场与销售侧', 'Market & Sales'),
            description: t('围绕客户需求变化、VOC 洞察与销量预测，把市场端信号更快传递到研发、质量与计划体系。', 'Relay market signals faster to R&D, quality and planning around demand changes, VOC and forecasting.'),
            link: { label: t('查看场景', 'View Scenarios'), href: '/cases' },
          },
        ],
      },
      {
        blockType: 'caseHighlights',
        title: t('典型应用方向', 'Typical Applications'),
        subtitle: t('从数据基础最好、价值最直接的小闭环切入', 'Start from high-value closed loops with the best data foundation'),
        cases: ids.cases,
      },
      {
        blockType: 'ctaBanner',
        title: t('从一个高价值小闭环开始', 'Start from one high-value closed loop'),
        subtitle: t('聊聊您的场景，30 分钟识别最适合先落地的切入点', 'Tell us your scenario — 30 minutes to find the best entry point'),
        primaryCta: { label: t('预约交流', 'Book a Consultation'), href: '/contact' },
      },
    ],
  }
}

export const buildTechnology = (lang: Lang) => {
  const t = L(lang)
  return {
    title: t('技术能力', 'Technology'),
    slug: 'technology',
    status: 'published' as const,
    meta: {
      title: t('技术能力', 'Technology'),
      description: t(
        '研翌科技把 AI 能力压进业务结构与工程结构：文档解析、知识结构化、规则建模、流程编排、检索增强、专家校验与本地模型推理，支持完全私有化部署。',
        'Yanyi presses AI into business and engineering structure — parsing, structuring, rule modeling, orchestration, retrieval, expert review and local inference, with full on-premise deployment.',
      ),
    },
    layout: [
      {
        blockType: 'hero',
        eyebrow: t('技术路线', 'Technology Approach'),
        title: t('把 AI 能力\n压进业务与工程结构', 'Pressing AI into\nbusiness & engineering'),
        subtitle: t(
          '制造业的决策与工程问题不能依赖"大模型自由发挥"。我们通过结构化方法，把复杂认知任务转化为可控、可解释、可验证的系统输出。',
          "Manufacturing decisions can't rely on an LLM improvising. Through structure, we turn complex cognition into controllable, explainable, verifiable output.",
        ),
        primaryCta: { label: t('联系我们', 'Contact Us'), href: '/contact' },
        secondaryCta: { label: t('查看产品', 'View Products'), href: '/products' },
      },
      {
        blockType: 'techArchitecture',
        title: t('底座 + 三引擎', 'Platform + Three Engines'),
        subtitle: t('大脑、记忆、感官各司其职，由 IndustrialX 底座编排；每个能力独立、可组合、可替换。', 'Brain, memory and senses each with one job — orchestrated by the IndustrialX platform; every capability independent, composable and replaceable.'),
        domains: [
          {
            icon: 'brain',
            name: t('大脑 · CozyEngine', 'Brain · CozyEngine'),
            role: t('思考与语言编排', 'Thinking & Orchestration'),
            description: t(
              '统一意图理解、任务规划、记忆调度与工具路由决策；作为唯一会话事实源，把工具执行委托给底座的执行层。',
              'Unifies intent understanding, planning, memory scheduling and tool routing; the single fact source that delegates execution to the platform.',
            ),
          },
          {
            icon: 'database',
            name: t('记忆 · CozyMemory', 'Memory · CozyMemory'),
            role: t('统一记忆平台', 'Unified Memory'),
            description: t(
              '一套 API 整合对话记忆、用户画像与知识图谱；权威知识（合规、规格）进 RAG/KB 层并人工策展，低可信信息进 Memory 层，两者信任级别不混淆。',
              'One API over conversational memory, profiles and knowledge graphs; authoritative knowledge is curated in the KB layer, kept apart from low-trust memory.',
            ),
          },
          {
            icon: 'mic',
            name: t('感官 · RTVoice', 'Senses · RTVoice'),
            role: t('实时语音底座', 'Real-time Voice'),
            description: t(
              '实时语音转写、流式合成与端到端语音对话，全栈本地推理，单 GPU 即可运行；通过标准 API 接入应用，敏感语音数据无需出网。',
              'Real-time STT, streaming TTS and end-to-end voice chat on local inference and a single GPU, reachable via standard APIs with data kept on-prem.',
            ),
          },
        ],
      },
      {
        blockType: 'capabilityGrid',
        title: t('核心技术能力', 'Core Technical Capabilities'),
        subtitle: t('围绕真实企业环境的可靠落地', 'Built for reliable deployment in real enterprise environments'),
        capabilities: [
          { icon: 'database', title: t('工业文档解析', 'Industrial Document Parsing'), description: t('工程图纸、FA 报告、ECN/PCN、BOM、合规证书等脏数据的硬化解析', 'Hardened parsing of drawings, FA reports, ECN/PCN, BOM and compliance docs') },
          { icon: 'brain', title: t('知识结构化与图谱', 'Knowledge Structuring & Graphs'), description: t('围绕产品、失效模式、变更影响建立可复用知识网络', 'Reusable knowledge graphs around products, failure modes and change impact') },
          { icon: 'workflow', title: t('智能工作流编排', 'Workflow Orchestration'), description: t('持久化编排跨天跨周、可审计、不丢状态的业务流程', 'Durable orchestration of multi-day, auditable, stateful processes') },
          { icon: 'shield', title: t('私有化部署', 'On-Premise Deployment'), description: t('完全内网运行、可离线，数据不出厂', 'Fully air-gapped and offline-capable; data never leaves the plant') },
          { icon: 'cpu', title: t('本地小模型推理', 'Local Small-Model Inference'), description: t('靠结构而非模型规模拿到工业级可靠性，降低算力门槛', 'Industrial reliability through structure, not scale — lowering the compute barrier') },
          { icon: 'lock', title: t('可靠可审计输出', 'Reliable & Auditable Output'), description: t('抽取式 + 可追溯 + 查不到就转人工，宁可弃权不猜', 'Extractive, traceable, human-handoff when unsure — abstain rather than guess') },
        ],
      },
      {
        blockType: 'contentMedia',
        title: t('私有化优先，安全可控', 'Private-First, Secure by Design'),
        body: t(
          '面向制造企业对数据安全、知识产权与内部流程的高要求，IndustrialX 支持私有化部署与离线运行，敏感数据不出厂，核心知识资产留在客户内网环境中。\n\n系统输出过程可留痕、可追溯、可审计，适用于对可靠性、安全性与合规性要求较高的企业级场景；License 清晰，可进企业尽调、可白标交付。',
          'Given strict demands on data security, IP and internal process, IndustrialX supports on-premise and offline operation — sensitive data never leaves the plant, and core knowledge stays in the customer network.\n\nEvery output is logged, traceable and auditable — fit for enterprise scenarios with high reliability, security and compliance demands. Clean licensing supports due diligence and white-label delivery.',
        ),
        mediaPosition: 'right' as const,
      },
      {
        blockType: 'ctaBanner',
        title: t('想了解技术细节？', 'Want to dig into the details?'),
        subtitle: t('我们的解决方案工程师可以为您安排技术深潜 Session', 'Our solution engineers can arrange a technical deep-dive session'),
        primaryCta: { label: t('预约技术交流', 'Book a Tech Session'), href: '/contact' },
      },
    ],
  }
}

export const buildAbout = (lang: Lang) => {
  const t = L(lang)
  return {
    title: t('关于我们', 'About Us'),
    slug: 'about',
    status: 'published' as const,
    meta: {
      title: t('关于我们', 'About Us'),
      description: t('北京研翌数据技术有限公司 — 面向先进制造企业的智能生产力与智能工作流决策技术提供商。', 'Yanyi Data Technology — an intelligent productivity and workflow-decision technology provider for advanced manufacturers.'),
    },
    layout: [
      {
        blockType: 'contentMedia',
        title: t('我们的使命', 'Our Mission'),
        body: t(
          '让专家知识成为组织资产，让复杂业务流程变得可复用、可追溯、可持续优化。\n\n我们相信，AI 在制造业的真正价值，不是替代专家，而是让专家知识被更好地沉淀、传承、复用和放大，并持续赋能研发、质量、生产、供应链与市场销售的协同增长。',
          'Turn expert knowledge into an organizational asset, and make complex processes reusable, traceable and continuously improvable.\n\nWe believe AI\'s real value in manufacturing is not replacing experts, but helping their knowledge sediment, transfer, reuse and scale — driving coordinated growth across R&D, quality, production, supply chain and sales.',
        ),
        mediaPosition: 'right' as const,
      },
      {
        blockType: 'valueProps',
        title: t('我们的原则', 'Our Principles'),
        items: [
          { icon: 'factory', title: t('场景优先', 'Scenario First'), description: t('从边界清晰、价值明确、数据可获得的小闭环切入，避免贪大求全', 'Start from bounded, high-value, data-ready closed loops — avoid overreach') },
          { icon: 'shield', title: t('私有化优先', 'Private First'), description: t('数据安全是前置条件而非附加功能，敏感数据不出厂', 'Data security is a precondition, not an add-on; data stays in the plant') },
          { icon: 'users', title: t('人机协同', 'Human-in-the-loop'), description: t('AI 提供建议与初稿，专家保留审核与最终决策权', 'AI drafts and suggests; experts keep review and final decisions') },
          { icon: 'layers', title: t('沉淀可复制', 'Reusable Assets'), description: t('把首个成功场景沉淀为标准方法，向其他工厂与事业部复制', 'Sediment the first success into a standard method, replicable across sites') },
        ],
      },
      {
        blockType: 'timeline',
        title: t('我们怎么交付', 'How We Deliver'),
        subtitle: t('诊断咨询 — 方案设计 — 系统交付 — 验证迭代', 'Diagnose — Design — Deliver — Iterate'),
        milestones: [
          { period: '01', title: t('业务诊断与场景识别', 'Diagnosis & Scenario Identification'), description: t('聚焦现有流程、数据基础、系统环境、安全要求与痛点优先级，识别最适合先落地的高价值小闭环。', 'Map processes, data, systems, security needs and pain-point priority to find the best entry point.') },
          { period: '02', title: t('解决方案设计', 'Solution Design'), description: t('形成解决方案蓝图，定义数据范围、知识结构、流程设计、系统架构与验收指标，确保可评估、可执行、可验收。', 'Blueprint the data scope, knowledge structure, process, architecture and acceptance criteria.') },
          { period: '03', title: t('系统部署与场景交付', 'Deployment & Delivery'), description: t('完成平台部署、数据接入、知识建模、工作流开发、用户验证与交付上线，形成可演示、可评估的业务成果。', 'Deploy the platform, ingest data, model knowledge, build workflows and validate with users.') },
          { period: '04', title: t('验证迭代与能力沉淀', 'Iteration & Capability Sediment'), description: t('基于实际使用反馈持续优化知识结构、业务规则与流程模板，逐步沉淀为可复制能力。', 'Continuously refine knowledge, rules and templates into replicable capability.') },
        ],
      },
      {
        blockType: 'teamPreview',
        title: t('核心团队', 'Core Team'),
        subtitle: t('兼具 AI 算法、数据工程、系统架构与企业级项目交付能力的复合型团队', 'A cross-functional team spanning AI, data engineering, architecture and enterprise delivery'),
      },
      {
        blockType: 'ctaBanner',
        title: t('成为长期技术合作伙伴', 'A long-term technology partner'),
        subtitle: t('与我们一起，把专家经验沉淀为可持续演进的智能生产力', 'Let\'s sediment expertise into continuously evolving intelligent productivity'),
        primaryCta: { label: t('查看开放职位', 'View Open Positions'), href: '/careers' },
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
      title: t('加入我们', 'Careers'),
      description: t('研翌科技招聘：AI 算法工程师、工业 AI 解决方案架构师、全栈工程师等岗位。', 'Yanyi is hiring: AI engineers, industrial AI solution architects, full-stack engineers and more.'),
    },
    layout: [
      {
        blockType: 'contentMedia',
        title: t('为什么加入研翌科技？', 'Why join Yanyi?'),
        body: t(
          '我们相信 AI 让专家知识成为组织资产，是这个时代最重要的产业机会之一。在研翌科技，你将直接看到自己写的代码或设计的方案，在真实企业环境中持续交付、持续验证——工程师查询更快、问题定位更准、优秀经验被沉淀和复用。\n\n小团队，真问题，快迭代，高信任。',
          "We believe AI turning expert knowledge into an organizational asset is one of the most important industrial opportunities of our era. At Yanyi, you'll see your work continuously deliver and validate in real enterprise environments.\n\nSmall team. Real problems. Fast iteration. High trust.",
        ),
        mediaPosition: 'right' as const,
      },
      {
        blockType: 'richTextBlock',
        content: rt([
          t(
            '## 开放职位\n\n### AI 算法工程师（LLM / Agent / RAG）\n**职责**：工业文档解析、知识图谱、检索增强与智能体工作流编排研发\n**要求**：熟悉 RAG、向量检索、多 Agent 协作与可解释、可审计机制；有工业/企业级 AI 项目经验优先\n\n### 工业 AI 解决方案架构师\n**职责**：与客户研发、质量、工艺与生产团队对接，负责方案从需求诊断到落地；主导交付实施，输出可验收成果\n**要求**：制造业信息化/智能化项目经验；熟悉 MES/ERP/PLM；优秀的结构化思考能力\n\n### 高级全栈工程师\n**职责**：IndustrialX 平台前后端开发；数据可视化与管理后台；工程实践与架构参与\n**要求**：熟练 TypeScript/Node 与现代前端；对工业 AI 与企业级系统有热情\n\n---\n\n简历请发送至：hr@yanyi-ai.com',
            '## Open Positions\n\n### AI Engineer (LLM / Agent / RAG)\n**Responsibilities**: Industrial document parsing, knowledge graphs, RAG and agent workflow orchestration\n**Requirements**: RAG, vector search, multi-agent collaboration and explainable, auditable design; industrial/enterprise AI experience preferred\n\n### Industrial AI Solution Architect\n**Responsibilities**: Interface with client R&D, quality, process and production teams; own solutions from diagnosis to delivery; lead implementation and deliver acceptance-ready results\n**Requirements**: Manufacturing IT/AI project experience; familiar with MES/ERP/PLM; strong structured thinking\n\n### Senior Full-stack Engineer\n**Responsibilities**: IndustrialX front-end and back-end; data visualization and admin; engineering and architecture\n**Requirements**: Proficient in TypeScript/Node and modern front-end; passion for industrial AI and enterprise systems\n\n---\n\nSend your CV to: hr@yanyi-ai.com',
          ),
        ]),
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
      title: t('联系我们', 'Contact Us'),
      description: t('联系研翌科技，预约产品演示或方案咨询。', 'Contact Yanyi to book a product demo or solution consultation.'),
    },
    layout: [
      {
        blockType: 'richTextBlock',
        content: rt([
          t(
            '## 预约演示\n\n我们的解决方案工程师将在 1 个工作日内与您联系。\n\n**邮箱**：contact@yanyi-ai.com\n\n或填写下方表单，告诉我们您的场景与诉求。',
            '## Book a Demo\n\nOur solution engineers will contact you within 1 business day.\n\n**Email**: contact@yanyi-ai.com\n\nOr fill in the form below and tell us your scenario.',
          ),
        ]),
      },
    ],
  }
}

export const buildProductsPage = (lang: Lang, ids: { products: number[] }) => {
  const t = L(lang)
  return {
    title: t('产品', 'Products'),
    slug: 'products',
    status: 'published' as const,
    meta: {
      title: t('产品', 'Products'),
      description: t('IndustrialX 智能生产力底座，以及 CozyEngine、CozyMemory、RTVoice 三引擎产品。', 'IndustrialX platform plus the three engines — CozyEngine, CozyMemory and RTVoice.'),
    },
    layout: [
      {
        blockType: 'hero',
        eyebrow: t('产品矩阵', 'Product Matrix'),
        title: t('一个底座\n三引擎协同', 'One platform,\nthree engines'),
        subtitle: t('以 IndustrialX 智能生产力底座为核心，CozyEngine、CozyMemory 与 RTVoice 三引擎协同支撑，可独立部署或组合使用。', 'Centered on the IndustrialX platform, powered by three engines — CozyEngine, CozyMemory and RTVoice — deployable standalone or combined.'),
        primaryCta: { label: t('预约演示', 'Book a Demo'), href: '/contact' },
      },
      {
        blockType: 'productMatrix',
        title: t('全部产品', 'All Products'),
        products: ids.products,
      },
      {
        blockType: 'ctaBanner',
        title: t('不确定哪款产品适合您？', 'Not sure which product fits?'),
        subtitle: t('告诉我们您的场景，30 分钟帮您找到最佳切入点', 'Tell us your scenario — 30 minutes to find the best entry point'),
        primaryCta: { label: t('联系我们', 'Contact Us'), href: '/contact' },
      },
    ],
  }
}

export const buildSolutions = (lang: Lang) => {
  const t = L(lang)
  return {
    title: t('解决方案', 'Solutions'),
    slug: 'solutions',
    status: 'published' as const,
    meta: {
      title: t('解决方案', 'Solutions'),
      description: t('面向制造与医疗行业的端到端 AI 解决方案：把产品与场景打包为可交付、可验收的行业方案——生成式设计与仿真、质量智能、研发知识中台、数字孪生、医学影像中枢、临床文书 Copilot 等。', 'End-to-end AI solutions for manufacturing and healthcare — products and scenarios packaged into deliverable industry offerings: generative design, quality intelligence, R&D knowledge hub, digital twin, medical imaging hub, clinical copilot and more.'),
    },
    layout: [
      {
        blockType: 'hero',
        eyebrow: t('行业解决方案', 'Industry Solutions'),
        title: t('把产品与场景\n打包为行业方案', 'Products and scenarios,\npackaged for your industry'),
        subtitle: t('解决方案 = 底座 + 引擎 + 多个场景 + 交付方法。我们把可复用的产品能力，组合为面向制造与医疗行业、以业务成效为目标的端到端方案。', 'A solution = platform + engines + multiple scenarios + a delivery method. We combine reusable product capabilities into outcome-oriented, end-to-end offerings for manufacturing and healthcare.'),
        primaryCta: { label: t('联系方案团队', 'Contact Solution Team'), href: '/contact' },
      },
      {
        blockType: 'scenarioShowcase',
        title: t('制造业解决方案', 'Manufacturing Solutions'),
        subtitle: t('覆盖研发设计、质量、运营与可持续——把可复用能力组合为面向业务成效的行业方案', 'Across design, quality, operations and sustainability — reusable capabilities composed into outcome-oriented offerings'),
        scenarios: [
          {
            icon: 'sparkles',
            name: t('生成式设计与工程仿真', 'Generative Design & Simulation'),
            description: t(
              '结合设计知识库、约束求解与仿真，快速探索多方案、辅助轻量化与选型，缩短研发周期、降低试错成本。',
              'Combines a design knowledge base, constraint solving and simulation to explore options fast, aid lightweighting and part selection, and shorten R&D cycles.',
            ),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'brain',
            name: t('研发工程知识中台', 'R&D Engineering Knowledge Hub'),
            description: t(
              '把设计规范、工艺文件、历史项目与专家经验沉淀为工程知识中台，统一支撑知识问答、变更影响评估与跨团队经验复用。',
              'Turns specs, process docs, historical projects and expertise into a knowledge hub powering Q&A, change-impact assessment and cross-team reuse.',
            ),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'gauge',
            name: t('质量智能与缺陷分析', 'Quality Intelligence & Defect Analytics'),
            description: t(
              '视觉质检、缺陷根因分析与质量数据追溯一体化，让质量问题可发现、可定位、可复盘，并把经验反哺设计与工艺。',
              'Visual inspection, defect root-cause analytics and quality-data traceability — so issues are detected, localized and reviewed, feeding back to design and process.',
            ),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'zap',
            name: t('数字孪生与能耗优化', 'Digital Twin & Energy Optimization'),
            description: t(
              '构建产线与设备的数字孪生，实时映射运行状态，优化能耗与碳排、辅助排产与运营决策，减少非计划停机。',
              'Builds a digital twin of lines and equipment, mirroring real-time status to optimize energy and carbon, aid scheduling and cut unplanned downtime.',
            ),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
        ],
      },
      {
        blockType: 'scenarioShowcase',
        title: t('医疗行业解决方案', 'Healthcare Solutions'),
        subtitle: t('以人机协同与私有化合规为前提，作为医院与研究机构的企业级 AI 层', 'A private, compliant, human-in-the-loop enterprise AI layer for hospitals and research institutes'),
        scenarios: [
          {
            icon: 'activity',
            name: t('医学影像智能中枢', 'Medical Imaging Hub'),
            description: t(
              '影像分级、危急值预警与多病种分诊统一为影像科的企业级 AI 层，辅助医生更快识别卒中、肺栓塞等急症，缩短诊断响应。',
              'Unifies triage, critical-finding alerts and multi-pathway prioritization as an enterprise imaging AI layer, speeding recognition of emergencies.',
            ),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'message-circle',
            name: t('临床知识与文书 Copilot', 'Clinical Knowledge & Documentation Copilot'),
            description: t(
              '把病历摘要、环境语音文书与循证问答打包为一体（RTVoice + CozyMemory + IndustrialX），减轻医生非临床负担、支持床旁快速查证。',
              'Bundles record summarization, ambient documentation and evidence-based Q&A (RTVoice + CozyMemory + IndustrialX) to cut paperwork and speed lookups.',
            ),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'sparkles',
            name: t('药物研发与临床试验平台', 'Drug Discovery & Clinical Trials'),
            description: t(
              '面向药企与研究机构——分子筛选、靶点与文献分析加速候选化合物发现，患者匹配与入组加速临床试验；研究数据私有化、全程可审计。',
              'For pharma and research — molecular screening, target and literature analysis speed candidate discovery, while patient matching accelerates trials, on private and auditable infrastructure.',
            ),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'heart',
            name: t('健康管理与患者陪伴', 'Health Management & Patient Engagement'),
            description: t(
              '院外连续状态管理、慢病随访与身心陪伴，把服务从院内延伸到院外，沉淀长期健康画像——以人机协同守住医疗边界。',
              'Out-of-clinic continuous management, chronic follow-up and companionship extend care beyond the hospital while keeping a human in the loop.',
            ),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
        ],
      },
      {
        blockType: 'timeline',
        title: t('交付方法论', 'Delivery Methodology'),
        subtitle: t('阶段式交付：诊断咨询 — 方案设计 — 系统交付 — 验证迭代', 'Phased delivery: Diagnose — Design — Deliver — Iterate'),
        milestones: [
          { period: '01', title: t('业务诊断与场景识别', 'Diagnosis & Scenario Identification'), description: t('聚焦现有流程、数据基础、系统环境、安全要求与痛点优先级，识别最适合先落地的高价值小闭环。', 'Map processes, data, systems, security and priority to find the best first scenario.') },
          { period: '02', title: t('解决方案设计', 'Solution Design'), description: t('定义数据范围、知识结构、流程设计、系统架构与验收指标，确保可评估、可执行、可验收。', 'Define data scope, knowledge structure, process, architecture and acceptance criteria.') },
          { period: '03', title: t('系统部署与场景交付', 'Deployment & Delivery'), description: t('完成平台部署、数据接入、知识建模、工作流开发、用户验证与交付上线，形成可演示、可评估成果。', 'Deploy, ingest data, model knowledge, build workflows and validate with users.') },
          { period: '04', title: t('验证迭代与能力沉淀', 'Iteration & Capability Sediment'), description: t('基于实际使用反馈持续优化知识结构、业务规则与流程模板，逐步沉淀为可复制能力。', 'Refine knowledge, rules and templates into replicable capability.') },
        ],
      },
      {
        blockType: 'ctaBanner',
        title: t('想要一套适合您行业的方案？', 'Want a solution tailored to your industry?'),
        subtitle: t('告诉我们您的行业与业务目标，我们会基于底座与场景为您组合合适的方案。', 'Tell us your industry and goals — we\'ll compose the right solution from our platform and scenarios.'),
        primaryCta: { label: t('联系方案团队', 'Contact Solution Team'), href: '/contact' },
      },
    ],
  }
}

export const buildScenariosPage = (lang: Lang) => {
  const t = L(lang)
  return {
    title: t('应用场景', 'Applications'),
    slug: 'cases',
    status: 'published' as const,
    meta: {
      title: t('应用场景', 'Applications'),
      description: t(
        '研翌科技以智能生产力底座与三引擎，赋能制造与医疗两大方向的知识密集型 AI 场景：质检、预测性维护、失效分析、工程变更、影像诊断、临床文书、药物研发等。',
        'Powered by the IndustrialX platform and three engines, Yanyi enables knowledge-intensive AI scenarios across manufacturing and healthcare — from visual QC and predictive maintenance to imaging triage and clinical documentation.',
      ),
    },
    layout: [
      {
        blockType: 'hero',
        eyebrow: t('应用场景', 'Application Scenarios'),
        title: t('AI 的落地场景\n从制造到医疗', 'Where AI lands —\nmanufacturing to medicine'),
        subtitle: t(
          '同一套智能生产力底座与三引擎，可服务不同行业中知识密集、流程复杂、对安全与可追溯要求高的业务场景。以下是我们聚焦的两大方向。',
          'The same platform and three engines serve knowledge-intensive, process-heavy scenarios with high safety and traceability demands — across industries. Here are the two directions we focus on.',
        ),
        primaryCta: { label: t('联系我们', 'Contact Us'), href: '/contact' },
      },
      {
        blockType: 'scenarioShowcase',
        title: t('制造与工业', 'Manufacturing & Industry'),
        subtitle: t(
          '从研发、质量到生产与供应链——把专家经验与工程知识转化为可复用能力，并延伸至生成式设计、数字孪生、能耗优化等场景。',
          'From R&D and quality to production and supply chain — turning expertise into reusable capability, extending to generative design, digital twins and energy optimization.',
        ),
        scenarios: [
          {
            icon: 'gauge',
            name: t('AI 视觉质检', 'Visual Quality Inspection'),
            description: t('工业相机结合视觉模型在线检测微米级缺陷，实时替代人工目检，降低漏检、沉淀质检数据。', 'Industrial cameras and vision models detect micron-level defects online, replacing manual inspection and cutting misses.'),
            link: { label: t('了解更多', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'activity',
            name: t('预测性维护', 'Predictive Maintenance'),
            description: t('融合振动、温度、电流等传感数据与设备知识，提前数周预警故障，显著减少非计划停机。', 'Fuse vibration, temperature and current data with equipment knowledge to warn of failures weeks ahead and cut unplanned downtime.'),
            link: { label: t('了解更多', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'shield',
            name: t('FA 失效分析与 8D 报告', 'Failure Analysis & 8D'),
            description: t('检索历史案例、生成根因假设、拆解验证任务，辅助形成 8D/FA 报告，缩短问题定位周期。', 'Retrieve cases, generate root-cause hypotheses and break down verification to assist 8D/FA reports and shorten localization.'),
            link: { label: t('了解更多', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'workflow',
            name: t('ECN/PCN 工程变更影响分析', 'Engineering Change Impact'),
            description: t('识别设计变更、材料替代对性能、质量、测试、工艺与文档的连锁影响，降低变更遗漏风险。', 'Identify how design changes and substitutions ripple across performance, quality, verification, process and documents.'),
            link: { label: t('了解更多', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'brain',
            name: t('工程知识库与智能问答', 'Engineering Knowledge Base'),
            description: t('设计规范、工艺文件、历史项目与专家经验沉淀为可检索、可问答、可持续维护的工程知识库。', 'Turn specs, process docs, historical projects and expertise into a searchable, answerable, maintained knowledge base.'),
            link: { label: t('了解更多', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'sparkles',
            name: t('生成式设计与工程仿真', 'Generative Design & Simulation'),
            description: t('结合设计知识、约束求解与仿真，快速探索多方案、辅助轻量化与选型，缩短研发试错周期。', 'Combine design knowledge, constraint solving and simulation to explore options, aid lightweighting and shorten R&D iteration.'),
            link: { label: t('了解更多', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'zap',
            name: t('数字孪生与能耗优化', 'Digital Twin & Energy'),
            description: t('构建产线与设备数字孪生，实时映射运行状态，优化能耗与碳排、辅助运营决策，减少非计划停机。', 'A digital twin of lines and equipment mirrors real-time status to optimize energy and carbon and cut downtime.'),
            link: { label: t('了解更多', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'network',
            name: t('排产与供应链协同', 'Scheduling & Supply Chain'),
            description: t('结合订单、产能、物料与供应风险，辅助排产优化与动态调整，提升跨部门计划协同、减少交付风险。', 'Combine orders, capacity, materials and supply risk to optimize scheduling and improve cross-department coordination.'),
            link: { label: t('了解更多', 'Learn More'), href: '/contact' },
          },
        ],
      },
      {
        blockType: 'scenarioShowcase',
        title: t('医疗与健康', 'Healthcare & Life Sciences'),
        subtitle: t(
          '以人机协同与私有化合规为前提，AI 辅助医生与研究者提升效率——不替代临床决策，让专家经验被更好沉淀与复用。',
          'With human-in-the-loop and private, compliant deployment, AI assists clinicians and researchers — augmenting, never replacing, clinical judgment.',
        ),
        scenarios: [
          {
            icon: 'activity',
            name: t('医学影像辅助诊断', 'Medical Imaging Triage'),
            description: t('影像分级与危急值优先，辅助放射科更快识别卒中、肺栓塞等急症，缩短诊断响应时间。', 'Worklist triage and critical-finding prioritization help radiology flag strokes, PE and other emergencies faster.'),
            link: { label: t('了解更多', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'message-circle',
            name: t('临床文书与病历摘要', 'Clinical Documentation'),
            description: t('环境语音记录与病历自动摘要，快速梳理复杂病史，减少医生的非临床文书负担。', 'Ambient documentation and record summarization surface key history and reduce clinicians’ paperwork burden.'),
            link: { label: t('了解更多', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'users',
            name: t('智能分诊与随访', 'Triage & Follow-up'),
            description: t('急诊分诊、风险分层与自动化随访，帮助医护把有限资源投向最需要关注的患者。', 'ED triage, risk stratification and automated follow-up direct limited resources to the patients who need them most.'),
            link: { label: t('了解更多', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'sparkles',
            name: t('药物研发辅助', 'Drug Discovery'),
            description: t('分子筛选、靶点与文献分析，加速候选化合物发现与临床试验的患者匹配与招募。', 'Molecular screening, target and literature analysis accelerate candidate discovery and trial patient matching.'),
            link: { label: t('了解更多', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'brain',
            name: t('医疗知识库与循证问答', 'Medical Knowledge Base'),
            description: t('临床指南、文献与病例沉淀为可检索、可溯源的循证知识库，支持医护快速查证与新人培养。', 'Turn guidelines, literature and cases into a searchable, source-traceable evidence base for fast lookup and training.'),
            link: { label: t('了解更多', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'heart',
            name: t('慢病与健康管理', 'Chronic Care & Wellness'),
            description: t('把服务从院内延伸到院外——连续状态管理、身心节律与个性化健康陪伴，沉淀长期健康画像。', 'Extend care beyond the clinic — continuous state management, mind-body rhythms and personalized long-term wellbeing.'),
            link: { label: t('了解更多', 'Learn More'), href: '/contact' },
          },
        ],
      },
      {
        blockType: 'ctaBanner',
        title: t('有相似的场景？', 'Have a similar scenario?'),
        subtitle: t(
          '告诉我们您的业务场景与数据现状，30 分钟识别最适合先落地的高价值切入点。',
          'Tell us your scenario and data landscape — 30 minutes to find the highest-value entry point.',
        ),
        primaryCta: { label: t('预约咨询', 'Book a Consultation'), href: '/contact' },
      },
    ],
  }
}
