import { rt, L, type Lang } from './helpers'

type Ids = { products: number[]; cases: number[] }

export const buildHome = (lang: Lang, ids: Ids) => {
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
            icon: 'activity',
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
            icon: 'rocket',
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
            icon: 'factory',
            name: t('汽车零部件制造', 'Automotive Parts Manufacturing'),
            description: t('视觉质检 + 智能排产 + 设备运维 Copilot 组合，降低不良率、提升交期准时率', 'Visual QC + Smart Scheduling + O&M Copilot bundle. Reduce defect rates and improve on-time delivery.'),
            link: { label: t('查看方案', 'View Solution'), href: '/solutions' },
          },
          {
            icon: 'layers',
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
        primaryCta: { label: t('预约演示', 'Book a Demo'), href: '/contact' },
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
            icon: 'activity',
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
            icon: 'rocket',
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
          { icon: 'gauge', title: t('工业视觉', 'Industrial Vision'), description: t('毫秒级缺陷检测，支持多光源、多角度', 'Millisecond defect detection, multi-lighting and multi-angle') },
          { icon: 'brain', title: t('RAG 知识库', 'RAG Knowledge Base'), description: t('私有文档向量化，自然语言精准检索', 'Private doc vectorization, natural language retrieval') },
          { icon: 'workflow', title: t('多 Agent 协同', 'Multi-Agent Coordination'), description: t('任务分解、并行推理、结果聚合', 'Task decomposition, parallel reasoning, result aggregation') },
          { icon: 'shield', title: t('私有化部署', 'On-Premise Deployment'), description: t('完全内网运行，数据不出厂', 'Fully air-gapped; data never leaves the factory') },
          { icon: 'network', title: t('工业协议适配', 'Industrial Protocol Adapters'), description: t('OPC-UA / MQTT / Modbus / OPC-DA', 'OPC-UA / MQTT / Modbus / OPC-DA') },
          { icon: 'activity', title: t('持续学习', 'Continual Learning'), description: t('生产数据自动回流，模型持续迭代', 'Production data auto-flyback; models continuously iterate') },
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
        items: [
          { icon: 'factory', title: t('场景优先', 'Scenario First'), description: t('不卖通用平台，只做有工厂验证的场景化方案', 'No generic platforms — only factory-validated scenario solutions') },
          { icon: 'shield', title: t('数据安全', 'Data Security'), description: t('所有产品支持完全私有化部署，数据不出厂', 'All products support full on-premise deployment; data stays in the factory') },
          { icon: 'gauge', title: t('ROI 可量化', 'Measurable ROI'), description: t('每个项目在 POC 阶段即输出可量化的业务成效', 'Every project delivers quantifiable business results at POC stage') },
          { icon: 'users', title: t('长期陪伴', 'Long-term Partnership'), description: t('从实施到迭代，持续的技术支持与模型优化', 'From implementation to iteration — continuous technical support and model optimization') },
        ],
      },
      {
        blockType: 'timeline',
        title: t('发展历程', 'Our Journey'),
        milestones: [
          { period: '2022', title: t('公司成立', 'Founded'), description: t('衍绎 AI 在北京成立，专注工业 AI 落地 [待替换]', 'Yanyi AI founded in Beijing, focused on industrial AI deployment [待替换]') },
          { period: '2023', title: t('首批产品上线', 'First Products Launched'), description: t('视觉质检 AI 与设备运维 Copilot 首批客户上线 [待替换]', 'Visual QC AI and O&M Copilot deployed with first customers [待替换]') },
          { period: '2024', title: t('规模化扩张', 'Scale-Up'), description: t('累计服务工厂 100+，完成 A 轮融资 [待替换]', 'Served 100+ factories; completed Series A funding [待替换]') },
          { period: '2025', title: t('全产品矩阵', 'Full Product Matrix'), description: t('5 款产品全部发布，工业智能体四引擎平台正式推出 [待替换]', '5 products fully launched; Industrial AI Four-Engine Platform officially released [待替换]') },
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
      title: t('加入我们 — 衍绎 AI', 'Careers — Yanyi AI'),
      description: t('衍绎 AI 招聘：算法工程师、工业 AI 解决方案架构师、前端工程师等岗位。', 'Yanyi AI is hiring: algorithm engineers, industrial AI solution architects, frontend engineers and more.'),
    },
    layout: [
      {
        blockType: 'contentMedia',
        title: t('为什么加入衍绎 AI？', 'Why join Yanyi AI?'),
        body: t(
          '我们相信 AI 改变制造业是这个时代最重要的产业机会之一。在衍绎 AI，你将直接看到自己写的代码或设计的方案在工厂产线上产生真实效果——不良率下降的曲线、停机减少的日志、工人不再需要翻阅厚重手册的笑容。\n\n小团队，真问题，快迭代，高信任。',
          "We believe AI transforming manufacturing is one of the most important industrial opportunities of our era. At Yanyi AI, you'll directly see your code or solution design making real impact on production lines — the defect rate curve declining, the downtime reduction logs, the smiles of workers who no longer need to flip through thick manuals.\n\nSmall team. Real problems. Fast iteration. High trust.",
        ),
        mediaPosition: 'right' as const,
      },
      {
        blockType: 'richTextBlock',
        content: rt([
          t(
            '## 开放职位\n\n### 算法工程师（视觉/NLP）\n**职责**：工业视觉模型开发与优化；RAG 系统设计与实现；模型训练、评估、部署全流程\n**要求**：计算机/电子/自动化相关本科及以上；熟悉 PyTorch；有工业视觉或 NLP 项目经验优先\n\n### 工业 AI 解决方案架构师\n**职责**：与客户工程团队对接，设计系统集成方案；主导 POC 实施，输出量化验证报告；收集一线需求反馈产品迭代\n**要求**：3 年以上制造业信息化/智能化项目经验；熟悉 MES/ERP/SCADA；有工业 AI 项目经验优先\n\n### 前端工程师\n**职责**：产品 Web 端界面开发；数据可视化看板；Admin 后台功能\n**要求**：熟练 React/Next.js；有 Tailwind CSS 使用经验；TypeScript 优先\n\n---\n\n简历请发送至：hr@yanyi-ai.com [待替换]',
            '## Open Positions\n\n### Algorithm Engineer (Vision / NLP)\n**Responsibilities**: Industrial vision model development and optimization; RAG system design and implementation; full model training, evaluation and deployment pipeline\n**Requirements**: CS/EE/Automation bachelor\'s or above; proficient in PyTorch; industrial vision or NLP project experience preferred\n\n### Industrial AI Solution Architect\n**Responsibilities**: Interface with client engineering teams; design system integration solutions; lead POC implementations, deliver quantified validation reports; collect frontline feedback for product iteration\n**Requirements**: 3+ years manufacturing IT/AI project experience; familiar with MES/ERP/SCADA; industrial AI project experience preferred\n\n### Frontend Engineer\n**Responsibilities**: Product web UI development; data visualization dashboards; admin backend features\n**Requirements**: Proficient in React/Next.js; Tailwind CSS experience; TypeScript preferred\n\n---\n\nSend your CV to: hr@yanyi-ai.com [待替换]',
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
      title: t('联系我们 — 衍绎 AI', 'Contact Us — Yanyi AI'),
      description: t('联系衍绎 AI，预约产品演示或方案咨询。', 'Contact Yanyi AI to book a product demo or solution consultation.'),
    },
    layout: [
      {
        blockType: 'richTextBlock',
        content: rt([
          t(
            '## 预约演示\n\n我们的解决方案工程师将在 1 个工作日内与您联系。\n\n**邮箱**：contact@yanyi-ai.com\n**电话**：[待替换]\n**地址**：[待替换]',
            '## Book a Demo\n\nOur solution engineers will contact you within 1 business day.\n\n**Email**: contact@yanyi-ai.com\n**Phone**: [待替换]\n**Address**: [待替换]',
          ),
        ]),
      },
    ],
  }
}

export const buildClinical = (lang: Lang) => {
  const t = L(lang)
  return {
    title: t('医疗科研合作', 'Clinical & Research'),
    slug: 'clinical-research',
    status: 'published',
    meta: {
      title: t('医疗科研合作', 'Clinical & Research Collaboration'),
      description: t('与医疗机构、妇幼保健体系、精神心理专科与重点实验室共同推进 AI 健康转化。', 'Advancing AI health translation with hospitals, maternal systems, specialists and key labs.'),
    },
    layout: [
      {
        blockType: 'hero',
        eyebrow: t('COLLABORATION', 'COLLABORATION'),
        title: t('共同推进 AI 健康转化', 'Advancing AI health translation together'),
        subtitle: t('与医疗机构、妇幼保健体系、精神心理专科和重点实验室共建可信赖的健康 AI。', 'Building trustworthy health AI with hospitals, maternal systems, mental-health specialists and key labs.'),
        primaryCta: { label: t('联系合作', 'Partner with us'), href: '/contact' },
      },
      {
        blockType: 'capabilityGrid',
        title: t('合作方向', 'Collaboration areas'),
        capabilities: [
          { icon: 'heart', title: t('母婴安全与孕产妇连续管理', 'Maternal & child continuity'), description: t('建档后 AI 管理、高危院外随访、产后与新生儿照护、区域妇幼平台。', 'Post-registration management, high-risk follow-up, postpartum & newborn care, regional platforms.') },
          { icon: 'activity', title: t('围产期心理健康', 'Perinatal mental health'), description: t('孕期焦虑与产后抑郁识别、妇产—精神科协同、情绪随访。', 'Antenatal anxiety & postpartum depression, OB/GYN–psychiatry referral, mood follow-up.') },
          { icon: 'graduation-cap', title: t('儿童青少年心理健康', 'Youth mental health'), description: t('医—校—家—社协同、情绪压力与睡眠管理、家长与教师辅助。', 'Hospital-school-family-community, emotion/sleep management, parent & teacher assist.') },
          { icon: 'gauge', title: t('智慧营养与运动机能监测', 'Smart nutrition & performance'), description: t('运动员长期机能档案、营养干预分析、运动健康大模型与 Agent。', 'Performance profiles, nutrition analysis, sports-health models and agents.') },
          { icon: 'bot', title: t('成人身心健康与睡眠', 'Adult well-being & sleep'), description: t('高压人群与睡眠门诊随访、心身医学长期管理、企业员工心理健康。', 'High-pressure & sleep-clinic follow-up, psychosomatic management, employee mental health.') },
          { icon: 'users', title: t('老年照护与慢病管理', 'Elderly & chronic care'), description: t('独居老人日常状态记录、用药复诊提醒、情绪陪伴与家庭—社区协同。', 'Daily check-ins, medication & follow-up reminders, companionship and family-community coordination.') },
        ],
      },
      {
        blockType: 'timeline',
        title: t('合作模式', 'Collaboration models'),
        milestones: [
          { period: t('联合 POC', 'Joint POC'), title: t('1–3 个月快速验证', '1–3 month validation'), description: t('形成可演示产品原型与场景价值评估。', 'A demoable prototype and value assessment.') },
          { period: t('联合课题', 'Joint research'), title: t('共同申报课题', 'Co-apply for grants'), description: t('北京市、国家级、卫健委、科技转化等方向。', 'Municipal, national, health-commission and translation grants.') },
          { period: t('联合实验室', 'Joint lab'), title: t('长期研发合作', 'Long-term R&D'), description: t('围绕母婴、心理、运动营养与长期状态管理。', 'On maternal, mental, sports-nutrition and long-term state management.') },
          { period: t('成果转化', 'Translation'), title: t('产业化推广', 'Industrialization'), description: t('软件产品、专利、软著、论文、示范应用与推广。', 'Software, patents, copyrights, papers, demos and rollout.') },
        ],
      },
      {
        blockType: 'ctaBanner',
        title: t('探索长期健康状态 AI 的真实价值', 'Explore the real value of long-term health AI'),
        subtitle: t('欢迎与医院、妇幼体系、专科、重点实验室与科研机构联系。', 'Hospitals, maternal systems, specialists, labs and institutions welcome.'),
        primaryCta: { label: t('联系合作', 'Partner with us'), href: '/contact' },
      },
    ],
  }
}

export const buildSafety = (lang: Lang) => {
  const t = L(lang)
  return {
    title: t('安全与合规', 'Safety & Governance'),
    slug: 'safety',
    status: 'published',
    meta: {
      title: t('安全与合规', 'Safety & Governance'),
      description: t('医疗健康 AI 的前提是安全、克制、可控。', 'The premise of health AI is to be safe, restrained and controllable.'),
    },
    layout: [
      {
        blockType: 'hero',
        eyebrow: t('SAFETY & GOVERNANCE', 'SAFETY & GOVERNANCE'),
        title: t('医疗健康 AI 的前提是安全、克制、可控', 'Health AI must be safe, restrained, controllable'),
        subtitle: t('我们设定清晰边界，并以治理机制保障可解释、可审核、可追溯。', 'We set clear boundaries and ensure explainability, auditability and traceability.'),
      },
      {
        blockType: 'valueProps',
        title: t('我们的边界', 'Our boundaries'),
        subtitle: t('有所不为，才能可信。', 'Trust comes from restraint.'),
        items: [
          { icon: 'shield', title: t('不替代医生与诊断', 'No doctor or diagnosis'), description: t('不替代医生、不自动诊断、不给出处方级医疗建议。', 'We do not replace doctors, auto-diagnose or give prescriptions.') },
          { icon: 'heart', title: t('不替代心理治疗与急救', 'No therapy or emergency'), description: t('不替代心理治疗师、不替代急救系统。', 'We do not replace therapists or emergency systems.') },
          { icon: 'lock', title: t('不绕过专业流程', 'No bypassing process'), description: t('不绕过医院与专业服务流程，不把危机当普通问答。', 'We never bypass clinical processes or treat crises as ordinary chat.') },
        ],
      },
      {
        blockType: 'capabilityGrid',
        title: t('我们的治理机制', 'Our governance'),
        capabilities: [
          { icon: 'network', title: t('审核知识库', 'Reviewed knowledge'), description: t('医院/专家审核知识库与内容版本管理。', 'Hospital/expert-reviewed knowledge with version control.') },
          { icon: 'gauge', title: t('风险分层与危机识别', 'Risk & crisis'), description: t('风险分层规则、危机风险识别与转介。', 'Risk-tiering rules, crisis detection and referral.') },
          { icon: 'shield', title: t('人工审核', 'Human review'), description: t('高风险状态人工审核与建议依据展示。', 'Human review for high-risk states and cited advice.') },
          { icon: 'lock', title: t('隐私与权限', 'Privacy & access'), description: t('用户授权、数据脱敏、权限隔离、记忆隔离。', 'Consent, masking, permission and memory isolation.') },
          { icon: 'cpu', title: t('私有化部署', 'Private deployment'), description: t('私有化部署与全链路审计。', 'Private deployment and end-to-end audit.') },
          { icon: 'sparkles', title: t('可解释可追溯', 'Explainable'), description: t('建议有依据、可审核、可追溯。', 'Cited, auditable, traceable advice.') },
        ],
      },
      {
        blockType: 'ctaBanner',
        title: t('做专家的智能助手，做个人健康的长期支持', "The expert's assistant, the long-term support for personal health"),
        subtitle: t('做医疗机构院外连续管理的 AI 基础设施。', 'The AI infrastructure for out-of-clinic continuous care.'),
        primaryCta: { label: t('联系我们', 'Contact Us'), href: '/contact' },
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
      title: t('解决方案 — 衍绎 AI', 'Solutions — Yanyi AI'),
      description: t('针对汽车零部件、3C 电子、离散制造等场景的工业 AI 解决方案，4 周 POC 验证，8 周生产上线。', 'Industrial AI solutions for automotive parts, 3C electronics and discrete manufacturing. 4-week POC, 8-week production go-live.'),
    },
    layout: [
      {
        blockType: 'hero',
        eyebrow: t('行业解决方案', 'Industry Solutions'),
        title: t('针对您的场景\n开箱即用的 AI 方案', 'Ready-to-deploy AI\nfor your specific scenario'),
        subtitle: t('我们不卖通用 AI 平台，只做适合制造业的场景化解决方案。', "We don't sell generic AI platforms — we build scenario-specific solutions designed for manufacturing."),
        primaryCta: { label: t('联系方案团队', 'Contact Solution Team'), href: '/contact' },
      },
      {
        blockType: 'scenarioShowcase',
        title: t('三大行业场景', 'Three Industry Scenarios'),
        subtitle: t('每个场景均有完整的产品组合、实施方法论与参考案例', 'Each scenario includes a complete product bundle, implementation methodology and reference cases'),
        scenarios: [
          {
            icon: 'wrench',
            name: t('汽车零部件制造', 'Automotive Parts Manufacturing'),
            description: t(
              '核心痛点：外观缺陷漏检、设备突发停机、排产响应慢。\n推荐组合：视觉质检 AI + 设备运维 Copilot + 智能排产 Agent。\n典型成效：不良率降低 60%+，非计划停机减少 40%+，交期准时率提升至 95%+。[待替换]',
              'Core pain points: missed surface defects, unexpected equipment failures, slow scheduling response.\nRecommended bundle: Visual QC AI + Equipment O&M Copilot + Smart Scheduling Agent.\nTypical results: Defect rate -60%+, unplanned downtime -40%+, on-time delivery >95%. [待替换]',
            ),
            link: { label: t('了解详情', 'Learn More'), href: '/contact' },
          },
          {
            icon: 'layers',
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
        milestones: [
          {
            period: t('第一步', 'Step 1'),
            title: t('现状诊断（2周）', 'As-Is Diagnosis (2 weeks)'),
            description: t('现场走访，梳理痛点、数据现状、系统架构，输出诊断报告与优先级建议。', 'On-site visits to map pain points, data landscape and system architecture. Deliverable: diagnostic report with prioritized recommendations.'),
          },
          {
            period: t('第二步', 'Step 2'),
            title: t('方案设计（1周）', 'Solution Design (1 week)'),
            description: t('基于诊断结果，设计产品组合、数据流、系统集成方案，输出可落地的实施蓝图。', 'Based on diagnosis, design product bundle, data flow and system integration plan. Deliverable: actionable implementation blueprint.'),
          },
          {
            period: t('第三步', 'Step 3'),
            title: t('快速验证 POC（4周）', 'Rapid POC Validation (4 weeks)'),
            description: t('在客户真实环境中部署最小可行版本，输出可量化的 KPI 验证报告。', "Deploy minimum viable version in client's real environment. Deliverable: quantified KPI validation report."),
          },
          {
            period: t('第四步', 'Step 4'),
            title: t('规模化落地', 'Scale-Up Deployment'),
            description: t('基于 POC 成果全面铺开，持续优化，建立长效运营机制。', 'Roll out across production based on POC results, with continuous optimization and long-term operations framework.'),
          },
        ],
      },
      {
        blockType: 'ctaBanner',
        title: t('找不到您所在的行业？', "Don't see your industry?"),
        subtitle: t('联系我们，我们会评估是否能为您的场景提供定制方案', "Contact us — we'll assess whether we can build a customized solution for your scenario"),
        primaryCta: { label: t('联系方案团队', 'Contact Solution Team'), href: '/contact' },
      },
    ],
  }
}

export const buildResources = (lang: Lang) => {
  const t = L(lang)
  return {
    title: t('资料下载', 'Resources'),
    slug: 'resources',
    status: 'published',
    meta: {
      title: t('资料下载', 'Resources'),
      description: t('公司介绍、解决方案与白皮书资料。', 'Company intro, solutions and white papers.'),
    },
    layout: [
      {
        blockType: 'hero',
        eyebrow: t('RESOURCES', 'RESOURCES'),
        title: t('资料下载', 'Resources'),
        subtitle: t('公司介绍、解决方案说明与白皮书（即将上线）。', 'Company introduction, solution briefs and white papers (coming soon).'),
        primaryCta: { label: t('联系获取资料', 'Request materials'), href: '/contact' },
      },
      {
        blockType: 'faq',
        title: t('资料清单', 'Available materials'),
        items: [
          { question: t('公司介绍（PDF）', 'Company Introduction (PDF)'), answer: t('[资料 待上传] 可通过"联系我们"获取最新版本。', '[To be uploaded] Available on request via Contact.') },
          { question: t('生命全周期解决方案手册', 'Life-cycle Solutions Brochure'), answer: t('[资料 待上传] 涵盖六大场景方案与适用对象。', '[To be uploaded] Covers six scenarios and target users.') },
          { question: t('EvoMetaX 技术白皮书', 'EvoMetaX Technical White Paper'), answer: t('[资料 待上传] 长期记忆、多模态建模与治理机制。', '[To be uploaded] Memory, multimodal modeling and governance.') },
        ],
      },
      {
        blockType: 'ctaBanner',
        title: t('需要更多资料？', 'Need more materials?'),
        subtitle: t('告诉我们你的合作方向，我们会提供对应资料。', "Tell us your interest and we'll share the right materials."),
        primaryCta: { label: t('联系我们', 'Contact Us'), href: '/contact' },
      },
    ],
  }
}
