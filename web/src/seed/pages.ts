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
        '让专家知识成为组织资产。研翌科技以 AI Aided Engineering 为方向，构建可私有化部署、可追溯可审计的智能工作流决策底座 IndustriaX。',
        'Turn expert knowledge into an organizational asset. Yanyi builds IndustriaX — an AI-Aided-Engineering platform for private, traceable, auditable intelligent workflows.',
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
          { icon: 'layers', title: t('平台自研，持续演进', 'Self-built, evolving platform'), description: t('每个场景交付都沉淀为 IndustriaX 上的可复用组件、知识模型与方法，而非一次性定制。', 'Every delivery sediments into reusable components on IndustriaX — not one-off customization.') },
          { icon: 'shield', title: t('私有化优先，安全可控', 'Private-first, secure'), description: t('支持私有化部署与离线运行，敏感数据不出厂，核心知识资产留在客户内网。', 'On-premise and offline-capable; sensitive data and core knowledge stay in the customer network.') },
          { icon: 'workflow', title: t('可追溯、可审计', 'Traceable & auditable'), description: t('关键输出保留来源引用、过程记录与版本痕迹，便于专家复核与责任追溯。', 'Key outputs keep source citations, process logs and version history for review and accountability.') },
          { icon: 'users', title: t('人机协同，专家把关', 'Human-in-the-loop'), description: t('AI 提供建议与初稿，专家保留审核与最终决策权；系统在持续使用中不断沉淀领域经验。', 'AI drafts and suggests; experts keep review and final decisions — and the system accrues domain experience in use.') },
          { icon: 'cpu', title: t('小模型驱动，降本可控', 'Small-model-driven'), description: t('把智能压进结构而非押注模型规模，本地小模型即可拿到工业级可靠性，降低算力门槛与成本。', 'Intelligence pressed into structure, not model scale — local small models reach industrial reliability at lower cost.') },
        ],
      },
      {
        blockType: 'techArchitecture',
        title: t('一个底座，四个引擎', 'One Platform, Four Engines'),
        subtitle: t('大脑 · 记忆 · 语音 · 视觉 —— 由 IndustriaX 底座编排为可靠、可组合的工业智能体', 'Brain · Memory · Voice · Vision — orchestrated by the IndustriaX platform into reliable, composable industrial agents'),
        domains: [
          {
            icon: 'brain',
            name: t('大脑', 'Brain'),
            role: t('IndustriaMind · 思考与编排', 'IndustriaMind · Thinking & Orchestration'),
            description: t('负责思考、人格与组织、任务规划与工具路由，是会话与决策的唯一事实源。', 'Handles thinking, persona, planning and tool routing — the single source of truth for decisions.'),
          },
          {
            icon: 'database',
            name: t('记忆', 'Memory'),
            role: t('IndustriaMemory · 统一记忆', 'IndustriaMemory · Unified Memory'),
            description: t('整合对话记忆、用户画像与知识图谱，让智能体越用越懂业务。', 'Integrates conversational memory, profiles and knowledge graphs so agents get smarter over time.'),
          },
          {
            icon: 'mic',
            name: t('语音（感官）', 'Voice (Senses)'),
            role: t('IndustriaVoice · 实时语音', 'IndustriaVoice · Real-time Voice'),
            description: t('实时语音转写、流式合成与语音对话，全栈本地推理，数据不出网。', 'Real-time transcription, streaming synthesis and voice chat — fully local, data on-prem.'),
          },
          {
            icon: 'eye',
            name: t('视觉（感官）', 'Vision (Senses)'),
            role: t('IndustriaVision · 视觉采集', 'IndustriaVision · Visual Capture'),
            description: t('VL 模型 + OCR 把图纸、单据、仪表与影像转化为结构化、可入库的数据。', 'VL models + OCR turn drawings, documents, gauges and imagery into structured, storable data.'),
          },
        ],
        note: t('IndustriaX 底座负责编排、工作流与工具执行，将四引擎组合为面向工业场景的智能体', 'The IndustriaX platform handles orchestration, workflows and tool execution — composing the four engines into industrial agents'),
      },
      {
        blockType: 'productMatrix',
        title: t('产品矩阵', 'Product Matrix'),
        subtitle: t('以 IndustriaX 智能生产力底座为核心，四引擎协同支撑', 'Centered on the IndustriaX platform, powered by four collaborating engines'),
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
            link: { label: t('查看方案', 'View Solutions'), href: '/solutions' },
          },
          {
            icon: 'shield',
            name: t('质量侧', 'Quality'),
            description: t('围绕质量异常、缺陷分析与客户现场问题，提升问题定位效率、缩短闭环周期。', 'Improve problem localization and shorten closure cycles around quality anomalies, defect analysis and field issues.'),
            link: { label: t('查看方案', 'View Solutions'), href: '/solutions' },
          },
          {
            icon: 'workflow',
            name: t('生产与供应链侧', 'Production & Supply Chain'),
            description: t('围绕生产排程、物料与供应链风险、产能约束，提升计划协同效率、减少交付风险。', 'Improve planning coordination and reduce delivery risk around scheduling, material and supply-chain risk.'),
            link: { label: t('查看方案', 'View Solutions'), href: '/solutions' },
          },
          {
            icon: 'message-circle',
            name: t('市场与销售侧', 'Market & Sales'),
            description: t('围绕客户需求变化、VOC 洞察与销量预测，把市场端信号更快传递到研发、质量与计划体系。', 'Relay market signals faster to R&D, quality and planning around demand changes, VOC and forecasting.'),
            link: { label: t('查看方案', 'View Solutions'), href: '/solutions' },
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
        title: t('底座 + 四引擎', 'Platform + Four Engines'),
        subtitle: t('大脑、记忆、语音、视觉各司其职，由 IndustriaX 底座编排；每个能力独立、可组合、可替换。', 'Brain, memory, voice and vision each with one job — orchestrated by the IndustriaX platform; every capability independent, composable and replaceable.'),
        domains: [
          {
            icon: 'brain',
            name: t('大脑 · IndustriaMind', 'Brain · IndustriaMind'),
            role: t('思考与语言编排', 'Thinking & Orchestration'),
            description: t(
              '统一意图理解、任务规划、记忆调度与工具路由决策；作为唯一会话事实源，把工具执行委托给底座的执行层。',
              'Unifies intent understanding, planning, memory scheduling and tool routing; the single fact source that delegates execution to the platform.',
            ),
          },
          {
            icon: 'database',
            name: t('记忆 · IndustriaMemory', 'Memory · IndustriaMemory'),
            role: t('统一记忆平台', 'Unified Memory'),
            description: t(
              '一套 API 整合对话记忆、用户画像与知识图谱；权威知识（合规、规格）进 RAG/KB 层并人工策展，低可信信息进 Memory 层，两者信任级别不混淆。',
              'One API over conversational memory, profiles and knowledge graphs; authoritative knowledge is curated in the KB layer, kept apart from low-trust memory.',
            ),
          },
          {
            icon: 'mic',
            name: t('语音 · IndustriaVoice', 'Voice · IndustriaVoice'),
            role: t('实时语音底座（感官）', 'Real-time Voice (Senses)'),
            description: t(
              '实时语音转写、流式合成与端到端语音对话，全栈本地推理，单 GPU 即可运行；通过标准 API 接入应用，敏感语音数据无需出网。',
              'Real-time STT, streaming TTS and end-to-end voice chat on local inference and a single GPU, reachable via standard APIs with data kept on-prem.',
            ),
          },
          {
            icon: 'eye',
            name: t('视觉 · IndustriaVision', 'Vision · IndustriaVision'),
            role: t('视觉数据采集（感官）', 'Visual Capture (Senses)'),
            description: t(
              '以 VL 模型、OCR 与视觉识别，把图纸、单据、仪表、缺陷与影像转化为结构化、可入库、可追溯的数据，写入记忆平台供检索与推理。',
              'VL models, OCR and recognition turn drawings, documents, gauges, defects and imagery into structured, storable, traceable data for retrieval and reasoning.',
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
          '面向制造企业对数据安全、知识产权与内部流程的高要求，IndustriaX 支持私有化部署与离线运行，敏感数据不出厂，核心知识资产留在客户内网环境中。\n\n系统输出过程可留痕、可追溯、可审计，适用于对可靠性、安全性与合规性要求较高的企业级场景；License 清晰，可进企业尽调、可白标交付。',
          'Given strict demands on data security, IP and internal process, IndustriaX supports on-premise and offline operation — sensitive data never leaves the plant, and core knowledge stays in the customer network.\n\nEvery output is logged, traceable and auditable — fit for enterprise scenarios with high reliability, security and compliance demands. Clean licensing supports due diligence and white-label delivery.',
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
            '## 开放职位\n\n### AI 算法工程师（LLM / Agent / RAG）\n**职责**：工业文档解析、知识图谱、检索增强与智能体工作流编排研发\n**要求**：熟悉 RAG、向量检索、多 Agent 协作与可解释、可审计机制；有工业/企业级 AI 项目经验优先\n\n### 工业 AI 解决方案架构师\n**职责**：与客户研发、质量、工艺与生产团队对接，负责方案从需求诊断到落地；主导交付实施，输出可验收成果\n**要求**：制造业信息化/智能化项目经验；熟悉 MES/ERP/PLM；优秀的结构化思考能力\n\n### 高级全栈工程师\n**职责**：IndustriaX 平台前后端开发；数据可视化与管理后台；工程实践与架构参与\n**要求**：熟练 TypeScript/Node 与现代前端；对工业 AI 与企业级系统有热情\n\n---\n\n简历请发送至：hr@yanyi-ai.com',
            '## Open Positions\n\n### AI Engineer (LLM / Agent / RAG)\n**Responsibilities**: Industrial document parsing, knowledge graphs, RAG and agent workflow orchestration\n**Requirements**: RAG, vector search, multi-agent collaboration and explainable, auditable design; industrial/enterprise AI experience preferred\n\n### Industrial AI Solution Architect\n**Responsibilities**: Interface with client R&D, quality, process and production teams; own solutions from diagnosis to delivery; lead implementation and deliver acceptance-ready results\n**Requirements**: Manufacturing IT/AI project experience; familiar with MES/ERP/PLM; strong structured thinking\n\n### Senior Full-stack Engineer\n**Responsibilities**: IndustriaX front-end and back-end; data visualization and admin; engineering and architecture\n**Requirements**: Proficient in TypeScript/Node and modern front-end; passion for industrial AI and enterprise systems\n\n---\n\nSend your CV to: hr@yanyi-ai.com',
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
      description: t('IndustriaX 智能生产力底座，以及 IndustriaMind、IndustriaMemory、IndustriaVoice 与 IndustriaVision 四引擎产品。', 'IndustriaX platform plus four engines — IndustriaMind, IndustriaMemory, IndustriaVoice and IndustriaVision.'),
    },
    layout: [
      {
        blockType: 'hero',
        eyebrow: t('产品矩阵', 'Product Matrix'),
        title: t('一个底座\n四引擎协同', 'One platform,\nfour engines'),
        subtitle: t('以 IndustriaX 智能生产力底座为核心，IndustriaMind、IndustriaMemory、IndustriaVoice 与 IndustriaVision 四引擎协同支撑，可独立部署或组合使用。', 'Centered on the IndustriaX platform, powered by four engines — IndustriaMind, IndustriaMemory, IndustriaVoice and IndustriaVision — deployable standalone or combined.'),
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
      description: t('面向制造业与医疗科研的行业智能体解决方案矩阵：IndustriaX 制造业解决方案（工程研发/工程知识/质量闭环/生产运营）与 MedicaX 医疗科研与转化 AI 工作台（实验室/转化/临床科研/医企验证）。', 'Industry agent solution matrix for manufacturing and medical research — IndustriaX manufacturing solutions (engineering, knowledge, quality, operations) and MedicaX medical R&D workbenches (lab, transfer, clinical, validation).'),
    },
    layout: [
      {
        blockType: 'hero',
        eyebrow: t('行业解决方案', 'Industry Solutions'),
        title: t('从 IndustriaX\n到 MedicaX', 'From IndustriaX\nto MedicaX'),
        subtitle: t('基于统一的智能体底座、企业记忆平台与私有化部署能力，把可复用的 AI Agent 能力组合为面向制造业与医疗科研的行业解决方案——以业务成效为目标，可落地、可追溯、可复用。', 'On a unified agent platform, enterprise memory and private deployment, we compose reusable AI-agent capabilities into outcome-oriented, deployable, traceable, reusable solutions for manufacturing and medical research.'),
        primaryCta: { label: t('联系方案团队', 'Contact Solution Team'), href: '/contact' },
      },
      {
        blockType: 'scenarioShowcase',
        title: t('IndustriaX 制造业智能生产力解决方案', 'IndustriaX · Manufacturing Agents'),
        subtitle: t(
          '面向研发设计、工程知识、质量闭环与生产运营场景，把专家经验、工程数据与智能体能力转化为可复用、可审计、可规模化的制造业 AI 解决方案。',
          'For design, knowledge, quality and operations — turning expertise, engineering data and agent capabilities into reusable, auditable, scalable manufacturing AI solutions.',
        ),
        // 顺序按研发链路：研发 → 质量 → 生产 → 设备。视觉质检非当前重点，排在最后。
        scenarios: [
          {
            icon: 'sparkles',
            name: t('IndustriaX Engineering 产品研发智能体', 'IndustriaX Engineering'),
            description: t('结合设计知识、约束求解与仿真，快速探索多方案、辅助轻量化与选型，缩短研发试错周期。', 'Combine design knowledge, constraint solving and simulation to explore options, aid lightweighting and shorten R&D iteration.'),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'brain',
            name: t('IndustriaX Knowledge 研发知识中台', 'IndustriaX Knowledge'),
            description: t('设计规范、工艺文件、历史项目与专家经验沉淀为可检索、可推理、可复用的工程知识底座。', 'Sediment specs, process docs, historical projects and expertise into a searchable, reasoning-ready knowledge base.'),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'workflow',
            name: t('IndustriaX Change 产品变更智能体', 'IndustriaX Change'),
            description: t('识别设计变更、材料替代对性能、质量、测试、工艺与文档的连锁影响，降低变更遗漏风险。', 'Identify how design changes and substitutions ripple across performance, quality, verification, process and documents.'),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'shield',
            name: t('IndustriaX Quality 质量闭环智能体', 'IndustriaX Quality'),
            description: t('打通视觉质检、缺陷识别、质量数据与失效分析，辅助问题定位、根因分析、8D 报告与设计工艺反哺。', 'Connects inspection, defect recognition, quality data and failure analysis for localization, root cause, 8D and feedback.'),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'network',
            name: t('IndustriaX Planning 计划协同智能体', 'IndustriaX Planning'),
            description: t('结合订单、产能、物料与供应风险，辅助排产优化与动态调整，提升跨部门计划协同、减少交付风险。', 'Combine orders, capacity, materials and supply risk to optimize scheduling and improve cross-department coordination.'),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'zap',
            name: t('IndustriaX Operations 生产运营智能体', 'IndustriaX Operations'),
            description: t('打通设备、产线、能耗、排产与异常数据，辅助生产调度、能耗优化、设备维护与运营决策。', 'Connect equipment, line, energy, scheduling and anomaly data for dispatch, energy optimization, maintenance and decisions.'),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'activity',
            name: t('IndustriaX Maintenance 预测维护智能体', 'IndustriaX Maintenance'),
            description: t('融合振动、温度、电流等传感数据与设备知识，提前数周预警故障，显著减少非计划停机。', 'Fuse vibration, temperature and current data with equipment knowledge to warn of failures weeks ahead.'),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'eye',
            name: t('IndustriaX Vision 视觉质检智能体', 'IndustriaX Vision'),
            description: t('工业相机结合视觉与 VL 模型在线检测微米级缺陷，实时替代人工目检，降低漏检、沉淀质检数据。', 'Cameras with vision/VL models detect micron-level defects online, replacing manual inspection and capturing QC data.'),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
        ],
      },
      {
        blockType: 'scenarioShowcase',
        title: t('MedicaX 医疗科研与转化解决方案', 'MedicaX · Medical R&D and Translation'),
        subtitle: t('面向医院、重点实验室、临床团队与医企合作场景，构建从科研管理、临床研究到成果转化的医疗 AI Agent 工作台矩阵。', 'For hospitals, key labs, clinical teams and hospital-industry collaboration — a medical AI-agent workbench matrix spanning research management, clinical study and translation.'),
        scenarios: [
          {
            icon: 'microscope',
            name: t('MedicaX Lab 医学实验室 AI 工作台', 'MedicaX Lab'),
            description: t('课题管理、合作项目、文献辅助、专家知识、数据标签、专利 / 软著 / 项目书辅助一体化，沉淀实验室可复用科研资产。', 'Project management, literature support, expert knowledge, data labeling and patent/proposal assistance — building reusable lab research assets.'),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'stethoscope',
            name: t('MedicaX Research 临床科研 Agent', 'MedicaX Research'),
            description: t('辅助临床问题拆解、研究设计、文献检索、病例与随访数据整理、统计建议、论文与课题材料生成，提升医生科研效率。', 'Aids question decomposition, study design, literature retrieval, case/follow-up organization, statistics and paper drafting.'),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'search',
            name: t('MedicaX Evidence 医学知识与循证问答', 'MedicaX Evidence'),
            description: t('整合指南、文献、病种知识、专家经验与机构内部资料，形成可追溯的医学知识底座，支持循证问答与科研决策。', 'Integrates guidelines, literature, disease knowledge and institutional materials into a traceable evidence base for Q&A and decisions.'),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'git-branch',
            name: t('MedicaX Transfer 医学科研转化 AI 工作台', 'MedicaX Transfer'),
            description: t('构建科研项目库、成熟度评估、转化路径、材料生成、企业匹配与管理驾驶舱，推动科研成果走向产业合作。', 'A project library, maturity assessment, translation pathways, materials, enterprise matching and a cockpit to move results toward industry.'),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'clipboard-check',
            name: t('MedicaX Validation 医企创新验证平台', 'MedicaX Validation'),
            description: t('面向真实临床需求，支持场景定义、验证方案设计、医企联合试点、数据证据沉淀与转化材料生成。', 'For real clinical needs — scenario definition, validation design, joint pilots, evidence capture and translation materials.'),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'trending-up',
            name: t('MedicaX Insight 科研管理驾驶舱', 'MedicaX Insight'),
            description: t('汇聚课题、成果、合作、转化、企业资源与项目进展，帮助医院和实验室管理者看清方向、配置资源、推动转化。', 'Aggregates projects, results, collaboration, translation and progress to help leaders set direction, allocate resources and drive translation.'),
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
