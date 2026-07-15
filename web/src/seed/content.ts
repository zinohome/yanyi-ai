import { rt, L, type Lang } from './helpers'

/* ============================ 站点设置 ============================ */
export const buildSiteSettings = (lang: Lang) => {
  const t = L(lang)
  return {
    companyName: t('北京研翌数据技术有限公司', 'Yanyi Data Technology Co., Ltd.'),
    slogan: t('让专家知识成为组织资产', 'Turn expert knowledge into an organizational asset'),
    email: 'contact@yanyi-ai.com',
    phone: '',
    address: '',
    icp: '',
    defaultMeta: {
      title: t('研翌科技 · 工业智能生产力底座', 'Yanyi · Industrial Intelligence Platform'),
      description: t(
        '研翌科技面向先进制造企业，提供以专家知识沉淀与赋能为基础、以智能工作流决策为交付形态的智能生产力底座 IndustriaX，助力研发、质量、生产、供应链与销售提效。',
        'Yanyi builds IndustriaX — an industrial intelligence platform for advanced manufacturers that turns scattered expert knowledge into reusable, traceable, auditable AI workflows across R&D, quality, production, supply chain and sales.',
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

/* ============================ 产品（10 款：IndustriaX 工业 5 + MedicaX 医疗 5）============================
   命名规则：X 是用来替换 L 的（Industrial → IndustriaX，Medical → MedicaX），
   寓意无限衍生与可能性。凡带 X 的即无 L；不带 X 的一律保留 L——
   故引擎为 IndustrialMind / MedicalMind…，而非 IndustriaMind / MedicaMind。 */
export const buildProducts = (lang: Lang) => {
  const t = L(lang)

  return [
    /* 1 ── IndustriaX 智能生产力底座（旗舰） */
    {
      name: t('IndustriaX 智能生产力底座', 'IndustriaX Intelligence Platform'),
      slug: 'industriax',
      tagline: t('让企业专家知识被 AI 理解、调用、复用', 'Let AI understand, invoke and reuse your expert knowledge'),
      icon: 'layers',
      scenario: 'platform',
      order: 1,
      status: 'published' as const,
      summary: t(
        '面向先进制造企业自研的智能生产力底座，把散落的工程知识与业务流程，转化为可靠、可追溯、可审计的智能体工作流。',
        'A self-developed industrial AI platform that turns scattered engineering knowledge and business processes into reliable, traceable, auditable agent workflows.',
      ),
      overview: t(
        'IndustriaX 承载企业级知识库、智能体应用、业务流程与智能工作流决策能力，支持在客户内网环境私有化部署、可离线运行。小模型驱动、松散可组合，靠结构而非模型规模拿到工业级可靠性。',
        'IndustriaX hosts enterprise knowledge bases, agent applications, business processes and intelligent workflow decisioning — deployable inside the customer network and able to run offline. Small-model-driven and loosely composable, it achieves industrial-grade reliability through structure rather than model scale.',
      ),
      problem: t(
        '工程知识分散在邮件、文档、测试报告、设计手册与专家个人经验中，难以沉淀为组织能力；研发、质量、工艺、采购与生产之间存在信息断点，问题定位、变更影响判断与计划调整高度依赖人工经验。企业对数据安全、知识产权保护与私有化部署要求高，无法简单采用通用云端 AI。',
        'Engineering knowledge is scattered across emails, documents, test reports, design manuals and individual expertise, and cannot become organizational capability. Information gaps between R&D, quality, process, procurement and production make problem localization, change-impact assessment and plan adjustment heavily dependent on manual experience — while data security and IP protection rule out generic cloud AI.',
      ),
      painPoints: [
        { value: t('隐性专家经验难以沉淀、传承与复用', 'Tacit expertise is hard to capture, transfer and reuse') },
        { value: t('跨部门信息断点，问题定位与变更评估靠人工', 'Cross-department gaps force manual problem-solving and change assessment') },
        { value: t('数据不能出厂，通用云端 AI 无法落地', 'Data cannot leave the plant; generic cloud AI is a non-starter') },
      ],
      workflow: [
        { title: t('专家知识资产化', 'Assetize expert knowledge'), description: t('解析工程文档、测试报告、8D/FA、变更记录、设计规范与工艺文件', 'Parse engineering docs, test reports, 8D/FA, change records, specs and process files') },
        { title: t('业务与工程语义建模', 'Model business & engineering semantics'), description: t('围绕产品、零部件、失效模式、变更影响等建立可复用知识网络', 'Build a reusable knowledge graph around products, parts, failure modes and change impact') },
        { title: t('智能工作流决策编排', 'Orchestrate intelligent workflows'), description: t('将专家经验、业务规则、审批流程与 AI 能力组合为可执行、可追踪工作流', 'Compose expertise, business rules, approvals and AI into executable, traceable workflows') },
        { title: t('可靠可审计输出', 'Reliable, auditable output'), description: t('所有关键输出保留来源引用、过程记录与版本痕迹，便于复核追溯', 'Every key output keeps source citations, process logs and version history for review') },
      ],
      audience: [
        { value: t('研发 / 工艺工程师', 'R&D / process engineers') },
        { value: t('质量与失效分析团队', 'Quality & failure-analysis teams') },
        { value: t('生产计划与供应链', 'Production planning & supply chain') },
        { value: t('企业 IT 与数字化负责人', 'Enterprise IT & digitalization leads') },
      ],
      features: [
        { title: t('专家知识资产化', 'Knowledge assetization'), description: t('对非结构化与半结构化工业资料进行解析、抽取、组织与检索。', 'Parse, extract, organize and retrieve unstructured and semi-structured industrial materials.') },
        { title: t('智能工作流决策编排', 'Workflow orchestration'), description: t('服务 FA 分析、ECN/PCN 影响评估、测试验证、主计划与报告生成等场景。', 'Serves FA analysis, ECN/PCN impact assessment, test validation, master planning and report generation.') },
        { title: t('私有化与可离线运行', 'Private & offline-capable'), description: t('支持客户内网部署，敏感数据不出厂，适配企业已有 IT 环境。', 'Runs inside the customer network — sensitive data never leaves the plant, fitting existing IT.') },
      ],
      highlights: [
        { title: t('私有化部署', 'On-premise'), description: t('数据不出厂，核心知识资产留在内网', 'Data stays in the plant; core knowledge stays on-prem') },
        { title: t('可追溯', 'Traceable'), description: t('来源引用 · 过程记录 · 版本痕迹', 'Source citations · process logs · version history') },
        { title: t('可复用', 'Reusable'), description: t('每个场景交付沉淀为可复用组件与方法', 'Each delivery sediments into reusable components') },
      ],
    },

    /* 2 ── IndustrialMind 智能体大脑 */
    {
      name: t('IndustrialMind 智能体大脑', 'IndustrialMind · Agent Brain'),
      slug: 'industrialmind',
      tagline: t('智能体的思考、组织与编排层', 'The thinking, organizing and orchestration layer'),
      icon: 'brain',
      scenario: 'brain',
      order: 2,
      status: 'published' as const,
      summary: t(
        '多智能体架构中的"大脑"——负责思考、人格与组织、记忆调度与工具路由，是会话与决策的唯一事实源。',
        'The "brain" of a multi-agent system — responsible for thinking, persona and organization, memory scheduling and tool routing; the single source of truth for conversation and decision.',
      ),
      overview: t(
        'IndustrialMind 将语言理解、任务规划、记忆调度与工具调用决策统一编排：由它决定"想什么、记什么、调用哪个能力"，再把工具执行委托给底座的执行层，形成清晰的思考—执行分离。',
        'IndustrialMind unifies language understanding, task planning, memory scheduling and tool-call decisioning: it decides what to think, what to remember and which capability to invoke, then delegates execution to a dedicated layer — a clean brain-and-cerebellum division of labor.',
      ),
      problem: t(
        '把大模型直接接入业务系统，往往得到一个"能聊天但不可控"的黑盒：人格、记忆、历史与工具调度混在一起，行为难以约束、结果难以复核。工业与企业级场景需要一个职责清晰、状态可控的编排内核。',
        'Wiring an LLM straight into business systems yields a chatty but uncontrollable black box: persona, memory, history and tool scheduling all tangled together. Enterprise scenarios need an orchestration core with clear responsibilities and controllable state.',
      ),
      painPoints: [
        { value: t('人格、记忆与工具调度耦合，行为难约束', 'Persona, memory and tools are coupled; behavior is hard to constrain') },
        { value: t('会话事实源不唯一，结果难以复核', 'No single source of truth; results are hard to audit') },
        { value: t('缺少清晰的多智能体分工', 'No clean division of labor across agents') },
      ],
      workflow: [
        { title: t('理解与规划', 'Understand & plan'), description: t('解析意图，拆解任务，规划执行路径', 'Parse intent, decompose tasks, plan the path') },
        { title: t('记忆调度', 'Schedule memory'), description: t('决定记什么、取什么，维护会话事实源', 'Decide what to remember and recall; own the fact source') },
        { title: t('工具路由', 'Route tools'), description: t('把工具执行委托给专用执行层', 'Delegate tool execution to the dedicated layer') },
        { title: t('人格与组织', 'Persona & org'), description: t('统一维护人格提示与多智能体协作规则', 'Maintain persona prompts and multi-agent collaboration rules') },
      ],
      audience: [
        { value: t('智能体 / 应用研发团队', 'Agent & application teams') },
        { value: t('企业 AI 平台团队', 'Enterprise AI platform teams') },
      ],
      features: [
        { title: t('思考与语言编排', 'Thinking & language'), description: t('意图理解、任务规划与多轮对话统一编排。', 'Unified intent understanding, task planning and multi-turn dialogue.') },
        { title: t('记忆与路由', 'Memory & routing'), description: t('作为唯一会话事实源，调度记忆并决策工具调用。', 'The single conversation fact source; schedules memory and decides tool calls.') },
        { title: t('思考与执行分离', 'Thinking–Execution Split'), description: t('思考归大脑、执行归底座执行层，职责清晰、可维护。', 'Thinking in the engine, execution in the platform — clear and maintainable.') },
      ],
      highlights: [
        { title: t('单一事实源', 'Single source'), description: t('会话历史、记忆、人格集中管理', 'History, memory and persona centrally managed') },
        { title: t('可组合', 'Composable'), description: t('独立服务、按需替换', 'Independent service, swappable') },
        { title: t('可审计', 'Auditable'), description: t('决策过程可记录、可回溯', 'Decision process logged and traceable') },
      ],
    },

    /* 3 ── IndustrialMemory 统一记忆平台 */
    {
      name: t('IndustrialMemory 统一记忆平台', 'IndustrialMemory · Memory Platform'),
      slug: 'industrialmemory',
      tagline: t('一套 API 整合三大记忆引擎', 'One API, three memory engines'),
      icon: 'database',
      scenario: 'memory',
      order: 3,
      status: 'published' as const,
      summary: t(
        '统一 AI 记忆服务平台——单一 API 整合对话记忆、用户画像与知识图谱三大引擎，开箱即用的管理 UI 与多租户治理。',
        'A unified AI memory service — one API integrating conversational memory, user profiles and knowledge graphs, with a ready-to-use admin UI and multi-tenant governance.',
      ),
      overview: t(
        'IndustrialMemory 把对话记忆（从对话自动提取事实）、用户画像（结构化偏好与背景）、知识图谱（文档→实体关系→图检索）三类记忆整合为一套 REST + gRPC API，并内置鉴权、审计、备份与观测。',
        'IndustrialMemory integrates conversational memory (auto-extracting facts from dialogue), user profiles (structured preferences and background) and knowledge graphs (documents → entity/relation graph → graph retrieval) into one REST + gRPC API, with built-in auth, audit, backup and observability.',
      ),
      problem: t(
        '智能体要"越用越懂"，就需要长期、可治理的记忆；但对话记忆、用户画像与知识图谱各有专长、各自为政，逐个接入成本高，且难以统一鉴权与审计。',
        'Agents that get smarter over time need long-term, governable memory — yet conversational memory, user profiles and knowledge graphs each have their own strengths and silos, making integration costly and consistent auth/audit hard.',
      ),
      painPoints: [
        { value: t('三类记忆各自为政，逐个接入成本高', 'Three memory types siloed; per-engine integration is costly') },
        { value: t('缺少统一鉴权、审计与备份', 'No unified auth, audit or backup') },
        { value: t('权威知识与低可信记忆混淆', 'Authoritative knowledge and low-trust memory get mixed') },
      ],
      workflow: [
        { title: t('接入', 'Ingest'), description: t('对话、文档、画像数据统一入库', 'Unify dialogue, documents and profile data') },
        { title: t('组织', 'Organize'), description: t('事实提取、画像结构化、实体关系成图', 'Extract facts, structure profiles, build entity graphs') },
        { title: t('检索', 'Retrieve'), description: t('语义搜索与图检索，生成上下文', 'Semantic and graph retrieval for context') },
        { title: t('治理', 'Govern'), description: t('多租户鉴权、审计、备份与观测', 'Multi-tenant auth, audit, backup and observability') },
      ],
      audience: [
        { value: t('智能体 / 应用研发团队', 'Agent & application teams') },
        { value: t('需要长期记忆的企业系统', 'Enterprise systems needing long-term memory') },
      ],
      features: [
        { title: t('对话记忆', 'Conversational memory'), description: t('从对话自动提取事实，支持语义搜索。', 'Auto-extract facts from dialogue with semantic search.') },
        { title: t('用户画像', 'User profiles'), description: t('结构化存储偏好与背景，生成上下文提示。', 'Store preferences and background; generate context prompts.') },
        { title: t('知识图谱', 'Knowledge graph'), description: t('文档转化为实体/关系图，支持图检索。', 'Turn documents into entity/relation graphs for graph retrieval.') },
      ],
      highlights: [
        { title: t('单一 API', 'One API'), description: t('REST + gRPC 整合三大记忆引擎', 'REST + gRPC over three memory engines') },
        { title: t('可治理', 'Governable'), description: t('多租户鉴权 · 审计 · 备份', 'Multi-tenant auth · audit · backup') },
        { title: t('知识记忆分离', 'Knowledge≠memory'), description: t('权威知识与低可信记忆分层', 'Authoritative knowledge kept apart from low-trust memory') },
      ],
    },

    /* 4 ── IndustrialVoice 实时语音底座 */
    {
      name: t('IndustrialVoice 实时语音底座', 'IndustrialVoice · Voice Platform'),
      slug: 'industrialvoice',
      tagline: t('全栈本地推理的自托管语音平台', 'Self-hosted voice, fully local inference'),
      icon: 'mic',
      scenario: 'voice',
      order: 4,
      status: 'published' as const,
      summary: t(
        '自托管语音服务平台——实时语音转写、流式合成与音色克隆、端到端语音对话，全栈本地推理，单 GPU 即可运行。',
        'A self-hosted voice platform — real-time transcription, streaming synthesis with voice cloning and end-to-end voice conversation, all on local inference and a single GPU.',
      ),
      overview: t(
        'IndustrialVoice 提供 STT、TTS 与实时语音对话三类服务，通过标准 HTTP / WebSocket API 接入任意应用；内置鉴权、审计、用量监控与管理后台，docker-compose 一键启停，敏感语音数据无需出网。',
        'IndustrialVoice offers STT, TTS and real-time voice conversation via standard HTTP / WebSocket APIs, with built-in auth, audit, usage monitoring and an admin console. One-command docker-compose deployment keeps sensitive voice data on-prem.',
      ),
      problem: t(
        '语音是工业现场与一线最自然的交互方式，但云端语音服务面临数据合规与网络依赖问题；自建又受限于算力与工程复杂度，难以在私有环境稳定落地。',
        'Voice is the most natural interface on the shop floor, yet cloud voice services raise compliance and connectivity concerns, while building in-house is limited by compute and engineering complexity.',
      ),
      painPoints: [
        { value: t('云端语音存在数据合规与网络依赖', 'Cloud voice brings compliance and connectivity concerns') },
        { value: t('自建语音栈算力与工程门槛高', 'Self-built voice stacks demand heavy compute and engineering') },
        { value: t('缺少鉴权、审计与用量治理', 'Missing auth, audit and usage governance') },
      ],
      workflow: [
        { title: t('实时转写 (STT)', 'Real-time STT'), description: t('流式语音转文字，低延迟接入', 'Streaming speech-to-text with low latency') },
        { title: t('流式合成 (TTS)', 'Streaming TTS'), description: t('流式语音合成，支持音色克隆', 'Streaming synthesis with voice cloning') },
        { title: t('实时对话', 'Realtime chat'), description: t('端到端语音对话，多轮记忆与打断', 'End-to-end voice chat with memory and barge-in') },
        { title: t('治理', 'Govern'), description: t('鉴权、审计、用量监控与管理后台', 'Auth, audit, usage monitoring and admin console') },
      ],
      audience: [
        { value: t('语音交互应用团队', 'Voice application teams') },
        { value: t('对数据合规要求高的企业', 'Enterprises with strict data compliance') },
      ],
      features: [
        { title: t('全栈本地推理', 'Fully local inference'), description: t('单 GPU ≤ 12GB 即可运行，数据无需出网。', 'Runs on a single ≤12GB GPU; data never leaves the network.') },
        { title: t('标准 API 接入', 'Standard APIs'), description: t('HTTP / WebSocket 接入任意应用，附 Python SDK。', 'HTTP / WebSocket for any app, with a Python SDK.') },
        { title: t('一键部署与治理', 'One-command deploy'), description: t('docker-compose 启停，内置鉴权、审计与监控。', 'docker-compose lifecycle with built-in auth, audit and monitoring.') },
      ],
      highlights: [
        { title: t('本地推理', 'Local inference'), description: t('单 GPU ≤ 12GB，数据不出网', 'Single ≤12GB GPU, data stays on-prem') },
        { title: t('三大服务', 'Three services'), description: t('STT · TTS · 实时语音对话', 'STT · TTS · realtime voice') },
        { title: t('一键部署', 'One-command'), description: t('docker-compose 启停', 'docker-compose up/down') },
      ],
    },

    /* 5 ── IndustrialVision 工业视觉智能底座 */
    {
      name: t('IndustrialVision 工业视觉智能底座', 'IndustrialVision · Industrial Vision Platform'),
      slug: 'industrialvision',
      tagline: t('从看见异常，到理解异常为何发生', 'From spotting anomalies to understanding why they happen'),
      icon: 'eye',
      scenario: 'vision',
      order: 5,
      status: 'published' as const,
      summary: t(
        '制造现场的智能感知与理解平台——以视觉语言（VL）模型与视觉识别技术，覆盖产品缺陷检测、装配状态识别、零部件识别、OCR、视觉质量分析与视频行为理解，并融合多模态数据。',
        'Perception and understanding for the shopfloor — vision-language (VL) models and recognition covering defect detection, assembly-state and part recognition, OCR, visual quality analysis and video behavior understanding, fused across modalities.',
      ),
      overview: t(
        'IndustrialVision 作为"感官"家族的视觉入口，与 IndustrialVoice 并列，为智能体提供看得懂现场的能力：识别产品缺陷、装配状态与零部件，读取图纸、单据与仪表中的文字与版面（OCR / 版面解析），理解质量异常与作业场景的语义（VL 模型与视频行为理解）。结果结构化后写入 IndustrialMemory，与 IndustrialMind 协同，把"看见异常"推进到"理解异常为何发生"——缺陷不只是被检出，更被归因、被反哺到设计与工艺。全栈可私有化部署，图像数据不出厂。',
        'IndustrialVision is the visual entry point of the "senses" family, alongside IndustrialVoice. It recognizes product defects, assembly states and parts; reads text and layout from drawings, documents and gauges (OCR / layout parsing); and interprets quality anomalies and work scenes (VL models and video behavior understanding). Results are structured into IndustrialMemory and, with IndustrialMind, push past "seeing an anomaly" to "understanding why it happened" — defects are not merely detected but attributed and fed back into design and process. Fully deployable on-premise; images never leave the plant.',
      ),
      problem: t(
        '制造现场大量关键信息以图像形式存在——产品缺陷、装配状态、工程图纸、纸质单据、仪表盘、质检画面与作业视频。传统机器视觉只能按预设规则判定"有无缺陷"，说不出成因；人工录入慢且易错；通用云端视觉又面临数据合规与网络依赖，难以稳定接入业务系统。',
        'Much of the shopfloor\'s critical information lives as images — defects, assembly states, drawings, paper documents, gauges, inspection frames and work video. Classic machine vision only decides "defect or not" against preset rules and cannot explain why; manual entry is slow and error-prone; and cloud vision raises compliance and connectivity concerns.',
      ),
      painPoints: [
        { value: t('机器视觉只判定有无缺陷，说不出为什么', 'Machine vision flags defects but cannot explain them') },
        { value: t('图纸、单据、仪表信息靠人工录入，慢且易错', 'Drawings, documents and gauges are entered by hand — slow and error-prone') },
        { value: t('云端视觉存在数据合规与网络依赖', 'Cloud vision brings compliance and connectivity concerns') },
        { value: t('视觉结果难以结构化、难以反哺设计与工艺', 'Visual results are hard to structure and rarely feed back into design and process') },
      ],
      workflow: [
        { title: t('感知', 'Perceive'), description: t('相机、扫描与作业视频多源接入', 'Cameras, scans and work video from multiple sources') },
        { title: t('识别', 'Recognize'), description: t('缺陷、装配状态、零部件与 OCR 版面解析', 'Defects, assembly states, parts and OCR layout parsing') },
        { title: t('理解', 'Understand'), description: t('VL 模型解释语义，归因异常成因', 'VL models read semantics and attribute root causes') },
        { title: t('入库与反哺', 'Store & feed back'), description: t('结构化写入记忆平台，反哺设计与工艺；低置信转人工复核', 'Structured into the memory platform and fed back into design and process; low-confidence → human review') },
      ],
      audience: [
        { value: t('质量与质检团队', 'Quality & inspection teams') },
        { value: t('研发 / 工艺工程师', 'R&D / process engineers') },
        { value: t('制造现场与设备团队', 'Shopfloor & equipment teams') },
      ],
      features: [
        { title: t('缺陷与装配识别', 'Defect & Assembly Recognition'), description: t('识别产品缺陷、装配状态与零部件，替代人工目检。', 'Recognize product defects, assembly states and parts, replacing manual inspection.') },
        { title: t('文档 OCR 与版面解析', 'Document OCR & Layout'), description: t('高精度识别图纸、单据、报告中的文字、表格与版面结构。', 'High-accuracy text, table and layout extraction from drawings, documents and reports.') },
        { title: t('VL 理解与视频行为', 'VL & Video Understanding'), description: t('用视觉语言模型理解仪表读数、质量异常、作业场景与视频行为语义。', 'Vision-language models read gauges, quality anomalies, work scenes and video behavior.') },
        { title: t('多模态融合与入库', 'Multimodal Fusion & Ingestion'), description: t('融合视觉、时序与文档数据，规范化写入 IndustrialMemory。', 'Fuse visual, time-series and document data, normalized into IndustrialMemory.') },
      ],
      highlights: [
        { title: t('看得懂现场', 'Understands the site'), description: t('从检出缺陷到归因成因', 'From detecting defects to attributing causes') },
        { title: t('私有化', 'On-prem'), description: t('图像数据不出厂', 'Image data stays in-plant') },
        { title: t('可追溯', 'Traceable'), description: t('保留来源与置信度，可复核', 'Keeps source and confidence for review') },
      ],
    },

    /* ========== MedicaX 医疗系列 ==========
       与工业系列同构：1 底座 + 4 引擎（大脑 / 记忆 / 语音 / 视觉）。
       scenario 枚举按角色而非领域定义，两系列复用同一组值；图标同角色同图标，
       以传达「同一套架构，两个领域」。 */

    /* 6 ── MedicaX 医疗科研与转化 AI 底座（旗舰） */
    {
      name: t('MedicaX 医疗科研与转化 AI 底座', 'MedicaX Research & Translation Platform'),
      slug: 'medicax',
      tagline: t('让科研从知识积累到成果转化形成闭环', 'Close the loop from knowledge to translation'),
      icon: 'layers',
      scenario: 'platform',
      order: 6,
      status: 'published' as const,
      summary: t(
        '面向医院、重点实验室、临床团队与医企合作场景的 AI Agent 智能底座，把医学知识、科研数据、专家经验与临床问题，转化为可理解、可推理、可协作、可持续沉淀的能力体系。',
        'An AI-agent platform for hospitals, key labs, clinical teams and hospital-industry collaboration — turning medical knowledge, research data, expertise and clinical questions into capabilities that can be understood, reasoned over, shared and continuously accrued.',
      ),
      overview: t(
        'MedicaX 承载科研知识库、临床研究流程编排、成果转化与医企协作能力，由 MedicalMind、MedicalMemory、MedicalVoice 与 MedicalVision 四引擎协同支撑，让医学科研从知识积累、临床发现到成果转化形成智能化闭环。支持院内私有化部署，科研与诊疗数据不出院。',
        'MedicaX hosts research knowledge bases, clinical study orchestration, translation and hospital-industry collaboration, supported by four engines — MedicalMind, MedicalMemory, MedicalVoice and MedicalVision. It closes the loop from knowledge accrual through clinical discovery to translation. Deployable inside the hospital network; research and care data never leave.',
      ),
      problem: t(
        '医学知识散落在文献、指南、病历、课题材料与专家个人经验中，难以沉淀为机构能力；科研过程、临床发现与转化项目彼此割裂，临床问题到科研成果、再到产业落地的链路漫长且高度依赖个人推动；患者与科研数据合规要求高，通用云端 AI 难以进入院内。',
        'Medical knowledge is scattered across literature, guidelines, records, grant materials and individual expertise, never becoming institutional capability. Research, clinical discovery and translation projects sit in silos, so the path from clinical question to result to industry adoption is long and depends on individuals. Patient and research data compliance keeps generic cloud AI out of the hospital.',
      ),
      painPoints: [
        { value: t('科研知识与专家经验难以沉淀、复用', 'Research knowledge and expertise are hard to capture and reuse') },
        { value: t('临床问题到科研成果的链路断裂、周期长', 'The path from clinical question to research result is broken and slow') },
        { value: t('患者与科研数据合规要求高，云端 AI 难落地', 'Patient and research data compliance rules out cloud AI') },
      ],
      workflow: [
        { title: t('知识沉淀', 'Accrue knowledge'), description: t('文献、指南、病种知识、课题与临床案例统一入库', 'Literature, guidelines, disease knowledge, projects and cases into one base') },
        { title: t('科研协同', 'Collaborate on research'), description: t('临床问题拆解、研究设计、数据整理与统计分析辅助', 'Question decomposition, study design, data curation and statistical support') },
        { title: t('成果转化', 'Translate results'), description: t('成熟度评估、转化路径规划与材料生成', 'Maturity assessment, translation pathway planning and document generation') },
        { title: t('医企对接', 'Match with industry'), description: t('企业资源匹配、联合试点与证据沉淀', 'Resource matching, joint pilots and evidence capture') },
      ],
      audience: [
        { value: t('临床医生与研究团队', 'Clinicians & research teams') },
        { value: t('重点实验室与科研管理', 'Key labs & research administration') },
        { value: t('医院科教与转化办公室', 'Hospital education & translation offices') },
        { value: t('医企合作与产业伙伴', 'Hospital-industry & industry partners') },
      ],
      features: [
        { title: t('科研知识资产化', 'Research knowledge assetization'), description: t('把文献、指南、课题与临床案例组织为可检索、可推理的知识底座。', 'Organize literature, guidelines, projects and cases into a searchable, reasoning-ready base.') },
        { title: t('临床研究流程编排', 'Clinical study orchestration'), description: t('从问题拆解到研究设计、数据整理与论文材料生成的全流程支撑。', 'End-to-end support from question decomposition to study design, data curation and manuscript materials.') },
        { title: t('转化与医企协作', 'Translation & collaboration'), description: t('成果成熟度评估、转化路径规划与企业资源匹配。', 'Maturity assessment, translation pathway planning and industry resource matching.') },
      ],
      highlights: [
        { title: t('院内私有化', 'In-hospital deployment'), description: t('科研与诊疗数据不出院', 'Research and care data never leave the hospital') },
        { title: t('可追溯', 'Traceable'), description: t('来源引用 · 过程记录 · 版本痕迹', 'Source citations · process logs · version history') },
        { title: t('全流程闭环', 'Full loop'), description: t('知识 → 研究 → 成果 → 转化 → 验证', 'Knowledge → research → results → translation → validation') },
      ],
    },

    /* 7 ── MedicalMind 医疗智能体大脑 */
    {
      name: t('MedicalMind 医疗智能体大脑', 'MedicalMind · Agent Brain'),
      slug: 'medicalmind',
      tagline: t('科研与转化 Agent 的认知、规划与执行中枢', 'The cognition, planning and execution core for research agents'),
      icon: 'brain',
      scenario: 'brain',
      order: 7,
      status: 'published' as const,
      summary: t(
        '医疗科研与转化 Agent 的认知、规划和执行中枢——科研任务拆解、多 Agent 协同、临床研究流程编排与文献证据分析。',
        'The cognition, planning and execution core for medical research and translation agents — task decomposition, multi-agent collaboration, clinical study orchestration and evidence analysis.',
      ),
      overview: t(
        'MedicalMind 把一个科研目标拆解为可执行的任务链，调度多个 Agent 协同完成文献检索、证据分析、数据整理与材料生成，并调用统计、检索与项目管理工具。它支撑临床科研 Agent、科研转化 Agent、实验室管理 Agent 与医企合作 Agent，让科研流程从人工推动转为可编排、可复盘的自动化协作。',
        'MedicalMind decomposes a research goal into an executable task chain, dispatching multiple agents to run literature retrieval, evidence analysis, data curation and document generation while calling statistics, search and project-management tools. It powers the clinical-research, translation, lab-management and collaboration agents, turning research from individually driven work into orchestrated, reviewable automation.',
      ),
      problem: t(
        '科研流程高度依赖个人推动：任务如何拆、证据去哪找、数据怎么整理、材料谁来写，都靠研究者自己把控。通用大模型能回答单点问题，却无法编排一条跨越数周、涉及多种工具与多轮迭代的科研任务链。',
        'Research depends on individuals: how to break down the task, where to find evidence, how to curate data, who drafts the materials. A general LLM answers isolated questions but cannot orchestrate a multi-week task chain spanning many tools and iterations.',
      ),
      painPoints: [
        { value: t('科研任务拆解与推进全靠个人经验', 'Task decomposition and follow-through rely on individual experience') },
        { value: t('文献与证据分析耗时，难以系统覆盖', 'Literature and evidence analysis is slow and hard to cover systematically') },
        { value: t('工具割裂，检索、统计与写作各自为战', 'Tools are siloed — retrieval, statistics and writing never connect') },
      ],
      workflow: [
        { title: t('任务拆解', 'Decompose'), description: t('把科研目标拆为可执行、可追踪的任务链', 'Break the goal into an executable, trackable task chain') },
        { title: t('多 Agent 协同', 'Coordinate agents'), description: t('检索、分析、整理、生成分工协作', 'Retrieval, analysis, curation and generation in parallel') },
        { title: t('工具调用', 'Invoke tools'), description: t('统计、检索、文献库与项目管理工具编排', 'Orchestrate statistics, search, literature and project tools') },
        { title: t('流程自动化', 'Automate the flow'), description: t('过程留痕，结果可复盘、可复用', 'Every step logged — results reviewable and reusable') },
      ],
      audience: [
        { value: t('临床医生与研究团队', 'Clinicians & research teams') },
        { value: t('重点实验室 PI 与科研骨干', 'Lab PIs & senior researchers') },
        { value: t('医院科研管理', 'Hospital research administration') },
      ],
      features: [
        { title: t('科研任务拆解与规划', 'Task decomposition & planning'), description: t('把科研目标转化为可执行任务链，明确依赖与产出。', 'Turn a research goal into an executable task chain with clear dependencies and outputs.') },
        { title: t('多 Agent 协同', 'Multi-agent collaboration'), description: t('临床科研、转化、实验室管理与医企合作 Agent 分工协作。', 'Clinical-research, translation, lab-management and collaboration agents work in concert.') },
        { title: t('文献与证据分析', 'Literature & evidence analysis'), description: t('系统检索、筛选与综合，输出带出处的证据结论。', 'Systematic retrieval, screening and synthesis with sourced conclusions.') },
      ],
      highlights: [
        { title: t('可编排', 'Orchestrated'), description: t('科研流程从人力推动转为可编排', 'Research shifts from individual push to orchestration') },
        { title: t('有出处', 'Sourced'), description: t('证据结论保留引用，可复核', 'Evidence keeps citations for review') },
        { title: t('私有化', 'On-prem'), description: t('院内部署，数据不出院', 'Runs in-hospital; data never leaves') },
      ],
    },

    /* 8 ── MedicalMemory 医学统一记忆平台 */
    {
      name: t('MedicalMemory 医学统一记忆平台', 'MedicalMemory · Memory Platform'),
      slug: 'medicalmemory',
      tagline: t('让医疗机构拥有自己的医学知识记忆', 'Give the institution a medical memory of its own'),
      icon: 'database',
      scenario: 'memory',
      order: 8,
      status: 'published' as const,
      summary: t(
        '医疗机构科研知识与经验资产底座——沉淀医学文献、临床指南、病种知识、专家经验、科研课题、临床案例、实验数据与转化项目资料。',
        'The research knowledge and experience base for a medical institution — accruing literature, guidelines, disease knowledge, expertise, projects, clinical cases, experimental data and translation materials.',
      ),
      overview: t(
        'MedicalMemory 把机构内外的医学知识统一沉淀为可检索、可推理、可复用的记忆底座：外部的文献与指南，内部的病种知识、临床案例、实验数据、课题与转化项目资料，以及最难留存的专家经验。它是 MedicalMind 推理时的事实来源，也是机构科研能力不随人员流动而流失的保障。',
        'MedicalMemory consolidates medical knowledge from inside and outside the institution into a searchable, reasoning-ready memory: external literature and guidelines; internal disease knowledge, clinical cases, experimental data, projects and translation materials; and the hardest to retain — expert experience. It is the factual ground for MedicalMind and the reason institutional capability survives staff turnover.',
      ),
      problem: t(
        '医学知识的半衰期短、来源分散：指南在更新，文献在爆炸，而机构自己的病种经验、临床案例与课题积累往往只存在于个别专家的记忆和硬盘里。人员一流动，机构的科研能力就跟着流失。',
        'Medical knowledge has a short half-life and scattered sources: guidelines update, literature explodes — while an institution’s own disease experience, clinical cases and project history live only in a few experts’ memories and hard drives. When they leave, the capability leaves with them.',
      ),
      painPoints: [
        { value: t('专家经验只在个人手里，人走知识走', 'Expertise lives with individuals — it leaves when they do') },
        { value: t('文献、指南、病历与课题资料分散在各系统', 'Literature, guidelines, records and project files sit in separate systems') },
        { value: t('知识无法被 AI 直接理解与推理', 'Knowledge is not in a form AI can reason over') },
      ],
      workflow: [
        { title: t('汇聚', 'Aggregate'), description: t('文献、指南、病种知识、案例、实验数据与课题资料统一接入', 'Literature, guidelines, disease knowledge, cases, data and project files in one place') },
        { title: t('结构化', 'Structure'), description: t('抽取实体与关系，构建医学知识网络', 'Extract entities and relations into a medical knowledge graph') },
        { title: t('沉淀经验', 'Capture expertise'), description: t('把专家判断与决策依据数字化留存', 'Digitize expert judgment and the reasoning behind it') },
        { title: t('供给推理', 'Serve reasoning'), description: t('作为 MedicalMind 的事实来源，带出处返回', 'Ground MedicalMind with sourced facts') },
      ],
      audience: [
        { value: t('医院科研管理与科教部门', 'Hospital research administration & education') },
        { value: t('重点实验室与临床团队', 'Key labs & clinical teams') },
        { value: t('病种专科与专家团队', 'Specialty departments & expert teams') },
      ],
      features: [
        { title: t('多源知识汇聚', 'Multi-source aggregation'), description: t('文献、指南、病种知识、临床案例、实验数据与转化项目资料统一沉淀。', 'Literature, guidelines, disease knowledge, cases, experimental data and translation materials in one base.') },
        { title: t('专家经验数字化', 'Expertise digitization'), description: t('把专家的判断依据与决策过程留存为可复用知识。', 'Retain expert judgment and decision rationale as reusable knowledge.') },
        { title: t('可推理的知识网络', 'Reasoning-ready graph'), description: t('围绕病种、证据、课题与成果构建可检索、可推理的关系网络。', 'A searchable, reasoning-ready graph across diseases, evidence, projects and results.') },
      ],
      highlights: [
        { title: t('机构记忆', 'Institutional memory'), description: t('知识不随人员流动而流失', 'Knowledge survives staff turnover') },
        { title: t('有出处', 'Sourced'), description: t('每条结论可追溯到原始文献或案例', 'Every conclusion traces to source literature or cases') },
        { title: t('私有化', 'On-prem'), description: t('院内部署，数据不出院', 'Runs in-hospital; data never leaves') },
      ],
    },

    /* 9 ── MedicalVoice 医疗实时语音底座 */
    {
      name: t('MedicalVoice 医疗实时语音底座', 'MedicalVoice · Voice Platform'),
      slug: 'medicalvoice',
      tagline: t('把说过的话，变成可用的记录', 'Turn what was said into usable records'),
      icon: 'mic',
      scenario: 'voice',
      order: 9,
      status: 'published' as const,
      summary: t(
        '医疗现场的自然交互入口——医患语音交互、门诊语音记录、病例整理、科研访谈记录、学术会议纪要与语音驱动 Agent。',
        'The natural-interaction entry point for medical settings — patient dialogue, outpatient dictation, record structuring, research interviews, conference minutes and voice-driven agents.',
      ),
      overview: t(
        'MedicalVoice 作为"感官"家族的听觉入口，与 MedicalVision 并列：实时识别医患对话、门诊口述、科研访谈与学术会议内容，理解医学术语与表达习惯，并把语音直接整理为结构化的病例、访谈记录与会议纪要。医生也可以用语音直接驱动 Agent 完成检索与记录。全栈可私有化部署，语音数据不出院。',
        'MedicalVoice is the auditory entry point of the "senses" family, alongside MedicalVision. It transcribes patient dialogue, outpatient dictation, research interviews and academic conferences in real time, understands medical terminology and phrasing, and structures speech directly into records, interview notes and minutes. Clinicians can also drive agents by voice for retrieval and documentation. Fully deployable on-premise; audio never leaves the hospital.',
      ),
      problem: t(
        '医疗现场的大量信息以口头形式产生——医患对话、门诊口述、查房交流、科研访谈、学术讨论。事后补记耗时且失真，通用语音识别听不懂医学术语，而云端转写又触碰患者隐私合规红线。',
        'Much of what matters in medicine is spoken — patient dialogue, outpatient dictation, ward rounds, research interviews, academic discussion. Writing it up afterwards is slow and lossy; general speech recognition does not know medical terminology; and cloud transcription collides with patient-privacy compliance.',
      ),
      painPoints: [
        { value: t('口述信息事后补记，耗时且失真', 'Spoken information is written up later — slow and lossy') },
        { value: t('通用语音识别听不懂医学术语', 'General speech recognition does not understand medical terms') },
        { value: t('云端转写触碰患者隐私合规红线', 'Cloud transcription collides with patient-privacy compliance') },
      ],
      workflow: [
        { title: t('实时识别', 'Transcribe live'), description: t('医患对话、门诊口述、访谈与会议实时转写', 'Live transcription of dialogue, dictation, interviews and meetings') },
        { title: t('术语理解', 'Understand terms'), description: t('识别医学术语、药名、术式与表达习惯', 'Recognize medical terminology, drug names, procedures and phrasing') },
        { title: t('结构化整理', 'Structure'), description: t('整理为病例、访谈记录与会议纪要', 'Organize into records, interview notes and minutes') },
        { title: t('驱动 Agent', 'Drive agents'), description: t('语音直接触发检索、记录与后续任务', 'Voice triggers retrieval, documentation and follow-up tasks') },
      ],
      audience: [
        { value: t('临床医生与门诊团队', 'Clinicians & outpatient teams') },
        { value: t('临床研究与访谈团队', 'Clinical research & interview teams') },
        { value: t('科教与学术会议组织者', 'Education & academic conference organizers') },
      ],
      features: [
        { title: t('医疗语音识别', 'Medical speech recognition'), description: t('理解医学术语、药名与术式，适配医疗现场口音与语速。', 'Understands medical terminology, drug names and procedures, tuned to real clinical speech.') },
        { title: t('病例与纪要整理', 'Records & minutes'), description: t('把门诊口述、访谈与会议内容直接整理为结构化记录。', 'Turn dictation, interviews and meetings directly into structured records.') },
        { title: t('语音驱动 Agent', 'Voice-driven agents'), description: t('用语音触发检索、记录与后续科研任务。', 'Trigger retrieval, documentation and downstream research tasks by voice.') },
      ],
      highlights: [
        { title: t('听得懂医学', 'Speaks medicine'), description: t('术语、药名、术式准确识别', 'Accurate on terminology, drug names and procedures') },
        { title: t('私有化', 'On-prem'), description: t('语音数据不出院', 'Audio stays in the hospital') },
        { title: t('即说即录', 'Instant'), description: t('说完即得结构化记录', 'Structured records the moment you finish speaking') },
      ],
    },

    /* 10 ── MedicalVision 医学视觉智能底座 */
    {
      name: t('MedicalVision 医学视觉智能底座', 'MedicalVision · Medical Vision Platform'),
      slug: 'medicalvision',
      tagline: t('让影像与实验图像成为可推理的证据', 'Turn imaging and lab images into reasoning-ready evidence'),
      icon: 'eye',
      scenario: 'vision',
      order: 10,
      status: 'published' as const,
      summary: t(
        '面向医学影像、实验数据与临床视觉信息的智能感知底座——医学影像理解、图像辅助分析、实验图像识别、病理图像分析与多模态医学数据融合。',
        'Perception for medical imaging, experimental data and clinical visual information — imaging understanding, image-assisted analysis, experimental and pathology image recognition, and multimodal medical data fusion.',
      ),
      overview: t(
        'MedicalVision 作为"感官"家族的视觉入口，与 MedicalVoice 并列：理解医学影像与病理图像的语义，识别实验图像中的目标与量化指标，并把视觉结论与文献证据、临床数据在 MedicalMemory 中融合，供 MedicalMind 推理时调用。它服务于科研而非诊断——输出的是可追溯、可复核的分析证据，最终判断始终由医生与研究者作出。全栈可私有化部署，影像数据不出院。',
        'MedicalVision is the visual entry point of the "senses" family, alongside MedicalVoice. It interprets the semantics of medical and pathology images, recognizes targets and quantitative measures in experimental imagery, and fuses visual findings with literature evidence and clinical data inside MedicalMemory for MedicalMind to reason over. It serves research rather than diagnosis — its output is traceable, reviewable analytical evidence; the judgment always stays with clinicians and researchers. Fully deployable on-premise; imaging never leaves the hospital.',
      ),
      problem: t(
        '医学影像、病理切片与实验图像里承载着最密集的证据，却最难被批量利用：人工阅片与计数耗时，量化标准因人而异，图像结论又难以和文献证据、临床数据关联起来形成可复用的科研资产。云端影像分析则直接触碰患者数据合规。',
        'Medical imaging, pathology slides and experimental images carry the densest evidence yet are the hardest to use at scale: manual reading and counting are slow, quantification varies between readers, and image findings rarely connect to literature evidence or clinical data to form reusable research assets. Cloud image analysis runs straight into patient-data compliance.',
      ),
      painPoints: [
        { value: t('人工阅片与计数耗时，量化标准因人而异', 'Manual reading and counting are slow; quantification varies by reader') },
        { value: t('图像结论难以与文献证据、临床数据关联', 'Image findings rarely connect to literature evidence or clinical data') },
        { value: t('云端影像分析触碰患者数据合规', 'Cloud image analysis collides with patient-data compliance') },
      ],
      workflow: [
        { title: t('接入', 'Ingest'), description: t('医学影像、病理切片与实验图像多源接入', 'Medical imaging, pathology slides and experimental images from multiple sources') },
        { title: t('识别与量化', 'Recognize & quantify'), description: t('目标识别、区域分割与指标量化', 'Target recognition, segmentation and quantitative measures') },
        { title: t('语义理解', 'Interpret'), description: t('理解影像与病理图像语义，给出带依据的分析', 'Interpret imaging and pathology semantics with grounded analysis') },
        { title: t('融合与复核', 'Fuse & review'), description: t('与文献、临床数据在 MedicalMemory 中融合；结论交专家复核', 'Fuse with literature and clinical data in MedicalMemory; experts review every conclusion') },
      ],
      audience: [
        { value: t('临床研究与影像团队', 'Clinical research & imaging teams') },
        { value: t('病理与检验科室', 'Pathology & laboratory departments') },
        { value: t('重点实验室与科研团队', 'Key labs & research teams') },
      ],
      features: [
        { title: t('医学影像理解', 'Medical imaging understanding'), description: t('理解影像语义，辅助定位、分割与量化分析。', 'Interpret imaging semantics to assist localization, segmentation and quantification.') },
        { title: t('病理与实验图像分析', 'Pathology & experimental images'), description: t('识别病理切片与实验图像中的目标，输出可复现的量化指标。', 'Recognize targets in pathology slides and experimental images with reproducible measures.') },
        { title: t('多模态医学数据融合', 'Multimodal fusion'), description: t('把视觉结论与文献证据、临床数据在记忆平台中关联。', 'Link visual findings with literature evidence and clinical data in the memory platform.') },
      ],
      highlights: [
        { title: t('服务科研', 'For research'), description: t('输出分析证据，最终判断由医生作出', 'Provides analytical evidence; clinicians make the call') },
        { title: t('可复现', 'Reproducible'), description: t('量化标准统一，结果可复核', 'Consistent quantification; every result reviewable') },
        { title: t('私有化', 'On-prem'), description: t('影像数据不出院', 'Imaging stays in the hospital') },
      ],
    },
  ]
}

/* ============================ 典型应用场景（非客户案例，避免杜撰）============================ */
export const buildCases = (lang: Lang) => {
  const t = L(lang)
  return [
    {
      title: t('专家知识资产化', 'Expert Knowledge as an Asset'),
      slug: 'knowledge-asset',
      summary: t(
        '把分散在文档、报告、系统与个人经验中的专业知识，沉淀为可检索、可问答、可持续维护的组织资产，让经验不再只留在少数人脑中。',
        'Turn expertise scattered across documents, reports, systems and individuals into a searchable, answerable, continuously maintained organizational asset — so knowledge no longer lives only in a few heads.',
      ),
      industry: 'industry',
      status: 'published' as const,
    },
    {
      title: t('智能工作流与决策辅助', 'Intelligent Workflows & Decision Support'),
      slug: 'intelligent-workflow',
      summary: t(
        '把专家经验、业务规则、审批流程与 AI 能力组合为可执行、可追溯的智能工作流，辅助关键判断——人机协同，专家保留最终决策权。',
        'Compose expertise, business rules, approvals and AI into executable, traceable workflows that support key judgments — human-in-the-loop, with experts keeping the final call.',
      ),
      industry: 'industry',
      status: 'published' as const,
    },
    {
      title: t('私有化行业智能体', 'Private Industry Agents'),
      slug: 'private-agent',
      summary: t(
        '在客户内网构建可离线运行、可审计的行业智能体，数据不出域、来源可追溯，把一次沉淀的能力跨部门、跨场景复用。',
        'Build offline-capable, auditable industry agents inside the customer network — data stays on-prem, outputs stay traceable, and capabilities are reused across teams and scenarios.',
      ),
      industry: 'industry',
      status: 'published' as const,
    },
  ]
}

/* ============================ 团队（能力画像）============================ */
export const buildTeam = (lang: Lang) => {
  const t = L(lang)
  return [
    {
      name: t('创始人 & CEO', 'Founder & CEO'),
      role: t('战略 · AI 商业化 · 连续创业', 'Strategy · AI commercialization'),
      bio: t(
        '高新技术领域 25 年（含 IBM 16 年），12 年 AI 与 5 年机器人研发及商业化经验；曾带领 AI 团队在工业、汽车、金融等多行业落地，并主导大型工业互联网平台快速做大。',
        '25 years in deep tech (16 at IBM), 12 in AI and 5 in robotics; led AI commercialization across industry, automotive and finance, and scaled a major industrial-internet platform.',
      ),
      order: 1,
    },
    {
      name: t('首席科学家', 'Chief Scientist'),
      role: t('AI · 语音识别 · 计算机视觉', 'AI · Speech · Computer Vision'),
      bio: t(
        '曾任全球头部科技企业顶尖 AI 技术带头人；在 AI、数据挖掘、语音识别与计算机视觉领域发表 60+ 篇论文、获 20+ 项中美专利（NeurIPS/ICML/AAAI 等顶会）；曾任教清华、UIUC、NYU。',
        'A top AI technology leader; 60+ papers and 20+ US/China patents across AI, speech and vision (NeurIPS/ICML/AAAI); taught at Tsinghua, UIUC and NYU.',
      ),
      order: 2,
    },
    {
      name: t('联合创始人 · 智能硬件', 'Co-founder · Hardware'),
      role: t('智能硬件 · 芯片 EDA · 出海', 'Smart hardware · EDA · Global'),
      bio: t(
        '连续创业者；曾创建欧美高端智能硬件品牌（全球市场前三、客户遍及 50+ 国），并组建国内领先的数字芯片 Signoff EDA 团队，突破关键"卡脖子"环节。',
        'Serial founder; built a top-3 global smart-hardware brand (50+ countries) and a leading digital-chip signoff EDA team.',
      ),
      order: 3,
    },
    {
      name: t('具身智能技术负责人', 'Head of Embodied AI'),
      role: t('机器人 · 强化学习 · 具身智能', 'Robotics · RL · Embodied AI'),
      bio: t(
        '精于机器人运动学/动力学、深度强化学习与物理仿真；多次从 0 到 1 组建团队，正向开发工业机器人与多轴数控系统（相关公司成功上市）。',
        'Expert in robot kinematics/dynamics, deep RL and simulation; repeatedly built teams from scratch, delivering industrial robots and CNC systems (a spin-off went public).',
      ),
      order: 4,
    },
    {
      name: t('AI 技术总监', 'AI Engineering Director'),
      role: t('硅谷 · 大模型 · 对话系统', 'Silicon Valley · LLM · Dialogue'),
      bio: t(
        '硅谷资深 AI 工程师，Meta GenAI / Speech 与 Amazon Alexa AI 对话机器人开发者。',
        'Senior Silicon Valley AI engineer; built Meta GenAI/Speech and Amazon Alexa conversational AI.',
      ),
      order: 5,
    },
    {
      name: t('数据模型总监', 'Data & Modeling Director'),
      role: t('硅谷 · 数据治理 · 大模型应用', 'Data governance · LLM apps'),
      bio: t(
        '硅谷资深技术专家，曾任谷歌、微软团队 Leader 及两家创业公司 CTO；主导基于大模型的内容生成与总结系统。',
        'Senior engineer; team lead at Google and Microsoft, CTO at two startups; led LLM-based generation and summarization.',
      ),
      order: 6,
    },
  ]
}

/* ============================ 招聘 ============================ */
export const buildJobs = (lang: Lang) => {
  const t = L(lang)
  return [
    {
      title: t('高级全栈工程师', 'Senior Full-stack Engineer'),
      slug: 'senior-fullstack',
      department: 'engineering',
      location: t('北京 / 远程', 'Beijing / Remote'),
      type: 'fulltime',
      order: 1,
      status: 'published',
      description: rt([
        t('负责 IndustriaX 平台的前后端开发，参与架构设计与工程实践。', 'Build front-end and back-end for the IndustriaX platform.'),
        t('要求：扎实的 TypeScript/Node 与现代前端经验；对工业 AI 与企业级系统有热情。', 'Requirements: solid TypeScript/Node; passion for industrial AI and enterprise systems.'),
      ]),
    },
    {
      title: t('AI 算法工程师（LLM / Agent / RAG）', 'AI Engineer (LLM / Agent / RAG)'),
      slug: 'ai-engineer',
      department: 'ai',
      location: t('北京', 'Beijing'),
      type: 'fulltime',
      order: 2,
      status: 'published',
      description: rt([
        t('负责工业文档解析、知识图谱、检索增强与智能体工作流编排研发。', 'Develop industrial document parsing, knowledge graphs, RAG and agent workflow orchestration.'),
        t('要求：熟悉 RAG、向量检索、多 Agent 协作与可解释、可审计机制。', 'Requirements: RAG, vector search, multi-agent collaboration and explainable, auditable design.'),
      ]),
    },
    {
      title: t('工业 AI 解决方案架构师', 'Industrial AI Solution Architect'),
      slug: 'solution-architect',
      department: 'product',
      location: t('北京', 'Beijing'),
      type: 'fulltime',
      order: 3,
      status: 'published',
      description: rt([
        t('负责工业场景方案从需求诊断到落地，连接客户研发、质量、工艺与生产团队。', 'Own industrial solutions end to end, bridging client R&D, quality, process and production teams.'),
        t('要求：制造业信息化/智能化项目经验，熟悉 MES/ERP/PLM，优秀的结构化思考能力。', 'Requirements: manufacturing IT/AI project experience, familiar with MES/ERP/PLM, strong structured thinking.'),
      ]),
    },
  ]
}

/* ============================ 资讯 / Blog ============================ */
export const buildPosts = (lang: Lang) => {
  const t = L(lang)
  return [
    {
      slug: 'expert-knowledge-as-asset',
      categoryKey: 'company',
      publishedAt: '2026-05-20',
      author: t('研翌科技', 'Yanyi'),
      title: t('让专家知识成为组织资产', 'Turning expert knowledge into an organizational asset'),
      excerpt: t('AI 在制造业的真正价值，不是替代专家，而是让专家知识被更好地沉淀、传承、复用和放大。', "AI's real value in manufacturing is not replacing experts, but helping their knowledge sediment, transfer, reuse and scale."),
      content: rt([
        t('先进制造企业在研发、质量、供应链与销售中积累了大量专家知识、工程经验与业务规则，它们既是竞争力来源，也是 AI 能否真正转化为智能生产力的基础。', 'Advanced manufacturers accumulate vast expert knowledge, engineering experience and business rules — both a source of competitiveness and the basis for turning AI into real productivity.'),
        t('研翌科技以专家知识沉淀与赋能为基础，把散落在文档、系统与个人经验中的知识资产结构化、流程化、智能化。', 'Yanyi structures, operationalizes and activates knowledge assets scattered across documents, systems and individual experience.'),
      ]),
    },
    {
      slug: 'industrial-rag-production',
      categoryKey: 'tech',
      publishedAt: '2026-05-12',
      author: t('技术团队', 'Engineering'),
      title: t('把 AI 能力压进业务结构与工程结构', 'Pressing AI capability into business and engineering structure'),
      excerpt: t('制造业的业务决策与工程问题不能依赖"大模型自由发挥"——通过文档解析、知识结构化、规则建模与检索增强，把复杂认知任务转化为可控结构。', 'Manufacturing decisions cannot rely on an LLM freely improvising — parsing, structuring, rule-modeling and retrieval turn complex cognition into controllable structure.'),
      content: rt([
        t('研翌科技通过文档解析、知识结构化、规则建模、流程编排、检索增强、专家校验与本地模型推理，把复杂认知任务转化为可控的业务结构和工程结构。', 'Yanyi uses document parsing, knowledge structuring, rule modeling, workflow orchestration, retrieval, expert review and local inference to turn complex cognition into controllable structure.'),
        t('这种方式既能降低算力门槛，也能提升系统输出的稳定性、可解释性与可验证性，更适合在真实企业环境中落地。', 'This lowers the compute barrier while improving stability, explainability and verifiability — better suited to real enterprise deployment.'),
      ]),
    },
    {
      slug: 'private-and-auditable-ai',
      categoryKey: 'industry',
      publishedAt: '2026-04-28',
      author: t('研翌科技', 'Yanyi'),
      title: t('工业 AI 的前提：私有化、安全、可审计', 'The premise of industrial AI: private, secure, auditable'),
      excerpt: t('面向制造企业对数据安全、知识产权与内部流程的高要求，敏感数据不出厂、系统输出可留痕可追溯可审计，是工业 AI 落地的前提。', 'Given strict demands on data security, IP and internal process, keeping data on-prem and outputs traceable and auditable is the premise for industrial AI.'),
      content: rt([
        t('制造企业的核心 Know-how——设计参数、失效案例、工艺配方——本身就是竞争壁垒，私有化部署、数据不出域正在成为工业 AI 的主流路径。', "Manufacturers' core know-how — design parameters, failure cases, process recipes — is itself a moat; on-premise, data-never-leaves deployment is becoming the mainstream path."),
        t('研翌科技以私有化优先为底线，系统输出全过程可留痕、可追溯、可审计，适用于对可靠性、安全性与合规性要求较高的企业级场景。', 'Yanyi puts privacy first; every output is logged, traceable and auditable — fit for enterprise scenarios with high reliability, security and compliance demands.'),
      ]),
    },
  ]
}
