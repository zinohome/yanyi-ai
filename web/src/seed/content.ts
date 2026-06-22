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
        { value: t('一线工人遇到异常无法快速找到处理规程', "Floor workers can't quickly locate procedures during anomalies") },
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
        { value: t('维修依赖经验，知识无法标准化', "Maintenance relies on tribal knowledge that can't be standardized") },
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
        { value: t('供应链与产能信息割裂，排程不可执行', "Supply chain and capacity data are siloed; schedules aren't feasible") },
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

/* ============================ 案例（匿名化） ============================ */
export const buildCases = (lang: Lang) => {
  const t = L(lang)
  return [
    {
      title: t('区域妇幼健康连续管理试点', 'Pilot: regional maternal & child continuous care'),
      slug: 'case-maternal-pilot',
      client: t('某区域妇幼保健机构', 'A regional maternal & child health institution'),
      industry: 'maternal',
      order: 1,
      status: 'published',
      summary: t(
        '以孕产妇建档后 AI Agent 管理为核心，打通孕期—产后—新生儿连续状态管理与高危随访，验证院外连续管理价值。',
        'Centered on post-registration AI agent management, connecting pregnancy-postpartum-newborn continuity and high-risk follow-up.',
      ),
      metrics: [
        { value: t('连续管理', 'Continuous'), label: t('院外状态不中断', 'No out-of-clinic gap') },
        { value: t('可追溯', 'Traceable'), label: t('建议有依据可审核', 'Auditable advice') },
      ],
    },
    {
      title: t('医—校—家青少年心理协同试点', 'Pilot: hospital-school-family youth mental health'),
      slug: 'case-youth-pilot',
      client: t('某精神心理专科与试点学校', 'A psychiatry specialty & pilot schools'),
      industry: 'youth',
      order: 2,
      status: 'published',
      summary: t(
        '连接医院心理门诊、学校与家庭，支持情绪压力识别、亲子支持与早期求助引导，隐私优先、可控授权。',
        'Connecting clinics, schools and families for emotion detection, parent support and early help-seeking — privacy-first with controlled authorization.',
      ),
      metrics: [
        { value: t('医校家', 'Tri-party'), label: t('多方视角整合', 'Unified perspectives') },
        { value: t('隐私优先', 'Privacy-first'), label: t('默认私密授权可控', 'Private by default') },
      ],
    },
  ]
}

/* ============================ 团队（能力画像占位） ============================ */
export const buildTeam = (lang: Lang) => {
  const t = L(lang)
  return [
    {
      name: t('创始人 & CEO', 'Founder & CEO'),
      role: t('战略 · AI 商业化 · 连续创业', 'Strategy · AI commercialization'),
      bio: t(
        '高新技术领域 25 年（含 IBM 16 年），12 年 AI 与 5 年机器人研发及商业化经验；曾带领 AI 团队在医疗、康养、金融、汽车、工业等多行业落地，并主导大型工业互联网平台快速做大。',
        '25 years in deep tech (16 at IBM), 12 in AI and 5 in robotics; led AI commercialization across healthcare, eldercare, finance, automotive and industry, and scaled a major industrial-internet platform.',
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
        '连续创业者；曾创建欧美高端智能灌溉品牌（全球市场前三、客户遍及 50+ 国），并组建国内领先的数字芯片 Signoff EDA 团队，突破关键"卡脖子"环节。',
        'Serial founder; built a top-3 global smart-irrigation brand (50+ countries) and a leading digital-chip signoff EDA team.',
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
    {
      name: t('心理健康首席专家', 'Chief Mental Health Expert'),
      role: t('临床心理 · EAP · 家校协同', 'Clinical psychology · EAP'),
      bio: t(
        '临床心理学博士、美国心理学会会员，国际 EAP 协会中国分会常务理事；深耕心理健康与教育领域多年，曾获"长城友谊奖"。',
        'Clinical psychology PhD and APA member; EAP China council member with decades in mental health and education.',
      ),
      order: 7,
    },
    {
      name: t('健康管理首席专家', 'Chief Health Expert'),
      role: t('临床医学 · 健康管理', 'Clinical medicine · Health'),
      bio: t(
        '复旦大学医学博士，深耕临床与健康管理，连接医疗专业能力与 AI 健康场景。',
        'Fudan medical PhD; bridges clinical expertise and AI health scenarios.',
      ),
      order: 8,
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
        t('负责健康 AI 平台的前后端开发，参与架构设计与工程实践。', 'Build front-end and back-end for our health AI platform.'),
        t('要求：扎实的 TypeScript/Node 与现代前端经验；对医疗健康 AI 有热情。', 'Requirements: solid TypeScript/Node; passion for health AI.'),
      ]),
    },
    {
      title: t('AI 算法工程师（LLM / Agent / 记忆）', 'AI Engineer (LLM / Agent / Memory)'),
      slug: 'ai-engineer',
      department: 'ai',
      location: t('北京', 'Beijing'),
      type: 'fulltime',
      order: 2,
      status: 'published',
      description: rt([
        t('负责长期记忆、多模态状态建模、Agent 工作流与风险分层研发。', 'Develop long-term memory, multimodal modeling, agent workflows and risk tiering.'),
        t('要求：熟悉 RAG、向量检索、多 Agent 协作与可解释机制。', 'Requirements: RAG, vector search, multi-agent collaboration and explainability.'),
      ]),
    },
    {
      title: t('医疗产品经理（健康 / 心理 / 妇幼）', 'Medical Product Manager'),
      slug: 'product-manager',
      department: 'product',
      location: t('北京', 'Beijing'),
      type: 'fulltime',
      order: 3,
      status: 'published',
      description: rt([
        t('负责健康场景方案从需求到落地，连接临床、科研与工程。', 'Own health-scenario solutions end to end, bridging clinical, research and engineering.'),
        t('要求：医疗/心理/妇幼相关背景优先，优秀的结构化思考能力。', 'Requirements: health/psychology/maternal background preferred; strong structured thinking.'),
      ]),
    },
  ]
}

/* ============================ 资讯 / Blog ============================ */
export const buildPosts = (lang: Lang) => {
  const t = L(lang)
  return [
    {
      slug: 'understand-health-over-time',
      categoryKey: 'company',
      publishedAt: '2026-05-20',
      author: t('研翌科技', 'Yanyi'),
      title: t('让 AI 长期理解人的健康状态', 'Helping AI understand health over a lifetime'),
      excerpt: t('真正有价值的健康 AI，不止于回答问题，而是在长期关系中理解个体状态。', 'Valuable health AI does not just answer questions — it understands state over a long relationship.'),
      content: rt([
        t('医疗系统擅长诊断和治疗明确疾病，但人的真实健康状态大量发生在医院之外。', 'Healthcare excels at diagnosing disease, yet real health states mostly happen outside the clinic.'),
        t('我们用 AI Agent 与长期记忆系统，补上"院外连续状态管理"的空白。', 'We use AI agents and long-term memory to close the gap of continuous out-of-clinic management.'),
      ]),
    },
    {
      slug: 'evometax-long-term-state-engine',
      categoryKey: 'tech',
      publishedAt: '2026-05-12',
      author: t('技术团队', 'Engineering'),
      title: t('EvoMetaX：长期状态智能引擎解读', 'Inside EvoMetaX: a long-term state engine'),
      excerpt: t('长期记忆、多模态状态建模、Agent 工作流、风险分层与可解释治理。', 'Long-term memory, multimodal modeling, agent workflows, risk tiering and explainable governance.'),
      content: rt([
        t('EvoMetaX 由长期记忆、多模态状态建模、Agent 工作流、风险分层和可解释治理组成。', 'EvoMetaX combines memory, multimodal modeling, agent workflows, risk tiering and explainable governance.'),
        t('它让 AI 从"回答问题"走向"长期理解状态"，并在需要时连接专家与医疗流程。', 'It moves AI from answering to understanding state over time, connecting experts and clinical processes when needed.'),
      ]),
    },
    {
      slug: 'responsible-health-ai',
      categoryKey: 'industry',
      publishedAt: '2026-04-28',
      author: t('研翌科技', 'Yanyi'),
      title: t('医疗健康 AI 的前提：安全、克制、可控', 'The premise of health AI: safe, restrained, controllable'),
      excerpt: t('不替代医生、不自动诊断；可解释、可审核、可追溯。', 'Not replacing doctors or auto-diagnosing; explainable, auditable, traceable.'),
      content: rt([
        t('医疗与心理场景中的 AI 必须可解释、可审核、可追溯，并设清晰边界。', 'AI in medical and mental-health settings must be explainable, auditable, traceable, with clear boundaries.'),
        t('做专家的智能助手，做个人健康的长期支持系统，做院外连续管理的 AI 基础设施。', "Be the expert's assistant, the long-term support for personal health, and the infrastructure for out-of-clinic care."),
      ]),
    },
  ]
}
