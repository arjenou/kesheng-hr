export type Language = 'zh' | 'ja' | 'en'

export interface Translations {
  nav: {
    partners: string
    services: string
    advantages: string
    process: string
    team: string
    about: string
    news: string
    contact: string
    contactUs: string
  }
  hero: {
    title: string
    subtitle: string
    startCooperation: string
    learnMore: string
    partners: string
    successCases: string
    headquarters: string
    headquartersCity: string
  }
  services: {
    title: string
    subtitle: string
    globalTalent: {
      title: string
      category: string
      features: string[]
    }
    mapping: {
      title: string
      category: string
      features: string[]
    }
    organization: {
      title: string
      category: string
      features: string[]
    }
    outsourcing: {
      title: string
      category: string
      features: string[]
    }
  }
  advantages: {
    deepUnderstanding: {
      title: string
      description: string
    }
    oneStop: {
      title: string
      description: string
    }
    globalDelivery: {
      title: string
      description: string
    }
    professionalTeam: {
      title: string
      description: string
    }
    speedyDelivery: {
      title: string
      description: string
    }
  }
  about: {
    title: string
    subtitle: string
    aboutTag: string
    companyName: string
    description1: string
    description2: string
    description3: string
    mission: {
      title: string
      description: string
    }
    values: {
      title: string
      description: string
    }
    strength: {
      title: string
      description: string
    }
    vision: {
      title: string
      description: string
    }
  }
  contact: {
    title: string
    subtitle: string
    formTitle: string
    formMessage: string
    company: string
    name: string
    phone: string
    email: string
    address: string
    message: string
    submit: string
    successMessage: string
    beijing: string
    tokyo: string
    hebei: string
    beijingAddress: string
    tokyoAddress: string
    hebeiAddress: string
    followUs: string
    scanQRCode: string
    consultNow: string
  }
  footer: {
    tagline: string
    copyright: string
  }
  hotJobs: {
    title: string
    subtitle: string
    viewDetails: string
    jobs: Array<{
      title: string
      description: string
      author: string
    }>
  }
  team: {
    title: string
    subtitle: string
    members: Array<{
      name: string
      title: string
      description: string
    }>
  }
  partners: {
    title: string
    subtitle: string
  }
  coreAdvantages: {
    title: string
    subtitle: string
  }
  serviceProcess: {
    title: string
    subtitle: string
    steps: {
      requirement: {
        title: string
        description: string
      }
      recommendation: {
        title: string
        description: string
      }
      interview: {
        title: string
        description: string
      }
      onboarding: {
        title: string
        description: string
      }
    }
  }
}

export const translations: Record<Language, Translations> = {
  zh: {
    nav: {
      partners: '合作伙伴',
      services: '服务介绍',
      advantages: '核心优势',
      process: '服务流程',
      team: '我们的团队',
      about: '关于我们',
      news: '公司动态',
      contact: '联系我们',
      contactUs: '联系我们',
    },
    hero: {
      title: '科盛咨询',
      subtitle: '链接全球顶尖科技人才',
      startCooperation: '开始合作',
      learnMore: '了解更多',
      partners: '合作企业',
      successCases: '成功案例',
      headquarters: '双城总部',
      headquartersCity: '北京&东京',
    },
    services: {
      title: '服务介绍',
      subtitle: '一站式解决你的人才与组织难题',
      globalTalent: {
        title: '全球中高端人才猎寻',
        category: '人才寻访',
        features: [
          '千万级精英人才库,覆盖中/美/新/日等全球核心市场',
          '资深顾问直访:精准定位 + 价值吸引,实现人岗深度适配',
          '时效保障:24h 响应・48h 交付候选・72h 安排面试',
        ],
      },
      mapping: {
        title: 'Mapping与专家咨询',
        category: '专家咨询',
        features: [
          '关键岗位人才库构建、目标公司盘点',
          '行业人才结构调研与薪酬竞争分析',
          '定点业务咨询，竞对业务调研',
        ],
      },
      organization: {
        title: '组织优化与风险管理',
        category: '组织优化',
        features: [
          '组织结构与岗位体系搭建',
          '招聘流程梳理',
          '人力管理风险诊断',
        ],
      },
      outsourcing: {
        title: '劳务派遣与外包',
        category: '劳务外包',
        features: [
          'IT / AI 岗位派遣与项目制外包',
          '海外团队落地与本地化灵活用工咨询',
          '外包团队管理与交付质量监控',
        ],
      },
    },
    advantages: {
      deepUnderstanding: {
        title: '精准交付',
        description: '专注AI与前沿科技领域,通过自研AI搜索引擎匹配,帮你快速锁定关键岗位的「核心人才」',
      },
      oneStop: {
        title: '一站式服务',
        description: '不只是"推荐简历",从人才寻访、团队搭建到组织架构优化,一套方案解决所有人力难题',
      },
      globalDelivery: {
        title: '全球交付',
        description: '拥有千万级全球人才资源,不管是国内团队补位,还是海外分部搭建,都能快速匹配适配人选',
      },
      professionalTeam: {
        title: '专业团队',
        description: '资深顾问团队，拥有丰富的行业经验与跨国网络',
      },
      speedyDelivery: {
        title: '极速交付',
        description: '24小时触达,48小时交付,72小时安排面试,用"闪电速度"接住你的紧急用人需求',
      },
    },
    about: {
      title: '关于我们',
      subtitle: '致力打造卓越服务',
      aboutTag: '关于科盛咨询',
      companyName: '科盛才道企业管理咨询有限公司',
      description1: '，简称"科盛咨询"，专注 AI、大模型、机器人与前沿科技领域，为全球科技企业提供高端人才招聘与团队搭建服务。',
      description2: '依托丰富的行业经验与跨国网络，我们为客户提供精准寻访、关键岗位招聘、海外团队落地及用工合规等全流程解决方案。',
      description3: '自 2018 年成立以来，我们已服务百余家科技企业，助力企业快速获取核心人才、提升组织效能。',
      mission: {
        title: '公司使命',
        description: '连接全球顶尖科技人才，让科技更快落地，让组织更具韧性',
      },
      values: {
        title: '公司价值观',
        description: '以客户为中心，以专业为本，以诚信为基，持续创新与追求卓越',
      },
      strength: {
        title: '经营理念',
        description: '为客户创造长期价值，通过专业服务持续精进，实现稳健可持续增长',
      },
      vision: {
        title: '公司愿景',
        description: '以长期主义打造百年企业，成为全球科技企业信赖的人才服务伙伴',
      },
    },
    footer: {
      tagline: '致力于为全球 AI 与科技企业提供高端人才与组织解决方案',
      copyright: '科盛才道企业管理咨询有限公司. all rights reserved.',
    },
    hotJobs: {
      title: '公司动态',
      subtitle: '了解我们的最新动态',
      viewDetails: '查看详情',
      jobs: [
        {
          title: '科盛咨询受邀出席 2025 高德地图猎头供应商峰会',
          description: '斩获"最佳猎头贡献奖"',
          author: '科盛',
        },
        {
          title: '科盛咨询 2024-2025 财年总结会圆满落幕',
          description: '全员自驾游开启活力新程',
          author: '科盛',
        },
        {
          title: '科盛咨询 2023-2024 财年总结会圆满收官',
          description: '全员泰国团建共启新程',
          author: '科盛',
        },
        {
          title: '科盛咨询 2023 财年团建',
          description: '芽庄一周行，以热爱续新程',
          author: '科盛',
        },
      ],
    },
    team: {
      title: '我们的团队',
      subtitle: '由行业资深专家组成的顾问团队，为您提供专业的人才解决方案',
      members: [
        {
          name: '李楠',
          title: '高级合伙人',
          description: '拥有 15 年以上人力资源与组织管理经验，深耕科技行业核心岗位招聘、组织发展与团队搭建。曾服务多家世界 500 强及头部科技企业，并担任上市集团 HR 负责人，具备丰富的组织战略与人才体系建设经验，并以心理学专业背景提升对人才能力、团队结构和组织管理问题的整体判断力。',
        },
        {
          name: '王佳',
          title: '高级合伙人',
          description: '专注 AI 与工程技术领域人才招聘，拥有 10 年以上高阶技术岗位寻访经验。具备计算机专业背景，对大模型、平台工程等核心技术体系有系统理解，为科技企业提供高精准度的技术人才解决方案。',
        },
        {
          name: '李晟洋',
          title: '高级合伙人',
          description: '具备 10 年以上企业管理与组织运营经验，专注组织诊断、团队升级与关键岗位招聘。深度理解企业增长阶段的人才结构需求，擅长为客户提供兼具战略视角与落地能力的人才与组织优化方案。经验，涉猎众多行业，精通组织优化，团队建设，组织赋能能领域。计算机专业背景',
        },
        {
          name: '温煦森',
          title: '高级合伙人',
          description: '长期服务全球领先科研机构和 AI 实验室，深耕高精度人才 Mapping 与战略级岗位寻访。擅长支持科研型组织的团队搭建与关键岗位引进，多次成功推动 VP、C-level 等高端人才的定向招募。',
        },
        {
          name: '闫鹏',
          title: '合伙人',
          description: '深耕 AI 大模型与算法类岗位招聘，拥有 10 年以上猎头经验。擅长高复杂度技术岗位的深度寻访与候选人评估，对前沿技术团队的人才结构和能力要求具备成熟认知。',
        },
        {
          name: '李浩文',
          title: '合伙人',
          description: '聚焦产品与运营方向的核心岗位招聘，具备计算机背景及丰富的业务理解能力。擅长从用户体验与业务增长视角识别关键型产品人才，为企业的产品战略与组织发展提供专业支持。',
        },
        {
          name: '魏忻伶',
          title: '合伙人',
          description: '专注研发与技术体系岗位招聘，对企业技术架构与研发能力模型有全面认知。擅长从业务场景与技术深度双维度评估候选人，为客户提供高匹配度的研发人才交付方案。',
        },
      ],
    },
    partners: {
      title: '合作伙伴',
      subtitle: '我们与众多知名企业建立了长期合作关系，共同推动行业发展',
    },
    coreAdvantages: {
      title: '核心优势',
      subtitle: '让人才问题「快、准、全」解决',
    },
    serviceProcess: {
      title: '服务流程',
      subtitle: '让复杂的招聘变得高效，透明，可控',
      steps: {
        requirement: {
          title: '商谈需求',
          description: '精准理解岗位要求，构建人岗双向画像',
        },
        recommendation: {
          title: '人选推荐',
          description: '24小时内首批人选推荐，基于自研AI匹配引擎高效精准',
        },
        interview: {
          title: '面试推进',
          description: '72小时内推进面试，从约面到反馈，专业顾问全程追踪',
        },
        onboarding: {
          title: '入职成功',
          description: '30天内完成入职，从Offer到入职，实现节奏可视化',
        },
      },
    },
    contact: {
      title: '联系我们',
      subtitle: '填写表单，我们会尽快与您联系',
      formTitle: '联系我们',
      formMessage: '填写表单，我们会尽快与您联系',
      company: '公司名称',
      name: '姓名',
      phone: '电话号码',
      email: '邮箱',
      address: '地址',
      message: '留言',
      submit: '提交',
      successMessage: '感谢您的留言，我们会尽快与您联系！',
      beijing: '北京',
      tokyo: '东京',
      hebei: '河北',
      beijingAddress: '昌平区科星西路106号国风美唐综合楼2号楼701',
      tokyoAddress: '日本东京丰岛区1 Chome-19-1 Higashiikebukuro, Toshima City, Tokyo 170-0013',
      hebeiAddress: '邢台市信都区河北机电大学',
      followUs: '关注我们',
      scanQRCode: '扫码关注公众号',
      consultNow: '现在咨询',
    },
  },
  ja: {
    nav: {
      partners: 'パートナー',
      services: 'サービス紹介',
      advantages: 'コア優位性',
      process: 'サービスプロセス',
      team: '私たちのチーム',
      about: '会社概要',
      news: '会社ニュース',
      contact: 'お問い合わせ',
      contactUs: 'お問い合わせ',
    },
    hero: {
      title: '科盛コンサルティング',
      subtitle: '世界トップクラスの\nテクノロジー人材とつながる',
      startCooperation: 'お問い合わせ',
      learnMore: '会社概要',
      partners: 'パートナー企業',
      successCases: '成功事例',
      headquarters: '双本社',
      headquartersCity: '北京&東京',
    },
    services: {
      title: 'サービス紹介',
      subtitle: 'あなたの人材と組織の課題をワンストップで解決',
      globalTalent: {
        title: 'グローバル中高級人材ヘッドハンティング',
        category: '人材リクルーティング',
        features: [
          '千万級のエリート人材データベース、中国/米国/シンガポール/日本などのグローバルコア市場をカバー',
          'ベテランコンサルタント直接訪問：精密なポジショニング + 価値の魅力、人とポジションの深い適応を実現',
          '時効保証：24時間以内に応答・48時間以内に候補者を納品・72時間以内に面接を手配',
        ],
      },
      mapping: {
        title: 'マッピングとコンサルティング',
        category: 'エキスパートコンサルティング',
        features: [
          '重要ポジションの人材データベース構築、ターゲット企業の棚卸し',
          '業界人材構造調査と給与競争分析',
          '定点業務コンサルティング、競合業務調査',
        ],
      },
      organization: {
        title: '組織最適化',
        category: '組織最適化',
        features: [
          '組織構造とポジション体系の構築',
          '採用プロセスの整理',
          '人事管理リスク診断',
        ],
      },
      outsourcing: {
        title: '労働アウトソーシング',
        category: '労働アウトソーシング',
        features: [
          'IT / AI ポジション派遣とプロジェクト制アウトソーシング',
          '海外チームの立ち上げとローカライズされた柔軟な雇用コンサルティング',
          'アウトソーシングチームの管理と納品品質のモニタリング',
        ],
      },
    },
    advantages: {
      deepUnderstanding: {
        title: '精密納品',
        description: 'AI・最先端技術分野に特化し、自社開発AI検索エンジンによる高精度マッチングで、重要ポジションの「コア人材」を迅速に特定。',
      },
      oneStop: {
        title: 'ワンストップ',
        description: '単なる「履歴書推薦」ではなく、人材リクルーティングからチーム構築、組織構造最適化まで、すべての人材課題をワンストップで解決。',
      },
      globalDelivery: {
        title: 'グローバル納品',
        description: '千万級のグローバル人材リソースを保有し、国内チームの補完から海外支社の設立まで、迅速に最適な人選をマッチング。',
      },
      professionalTeam: {
        title: '専門チーム',
        description: '豊富な業界経験と国際ネットワークを持つベテランコンサルタントチームが、お客様のニーズに合わせた専門サービスを提供。',
      },
      speedyDelivery: {
        title: '極速納品',
        description: '24時間以内に連絡、48時間以内に納品、72時間以内に面接を手配。「稲妻の速度」で緊急の雇用ニーズに迅速に対応。',
      },
    },
    about: {
      title: '会社概要',
      subtitle: '卓越したサービスを提供',
      aboutTag: '科盛コンサルティングについて',
      companyName: '科盛才道企業管理コンサルティング有限公司',
      description1: '、略称「科盛コンサルティング」は、AI、大規模モデル、ロボット、最先端技術分野に焦点を当て、グローバルなテクノロジー企業に高級人材採用とチーム構築サービスを提供しています。',
      description2: '豊富な業界経験と国際ネットワークを活用し、正確なリクルーティング、重要ポジションの採用、海外チームの立ち上げ、雇用コンプライアンスなどの全プロセスソリューションをクライアントに提供しています。',
      description3: '2018年の設立以来、100社以上のテクノロジー企業にサービスを提供し、企業がコア人材を迅速に獲得し、組織効率を向上させることを支援しています。',
      mission: {
        title: '会社の使命',
        description: '世界トップクラスのテクノロジー人材とつながり、テクノロジーをより迅速に実現し、組織をより強靭にする',
      },
      values: {
        title: '会社の価値観',
        description: '顧客中心、専門性を基本とし、誠実さを基盤とし、継続的な革新と卓越性の追求',
      },
      strength: {
        title: '経営理念',
        description: '顧客に長期的価値を創造し、専門サービスを通じて継続的に改善し、安定した持続可能な成長を実現',
      },
      vision: {
        title: '会社のビジョン',
        description: '長期主義で百年企業を構築し、グローバルなテクノロジー企業が信頼する人材サービスパートナーになる',
      },
    },
    footer: {
      tagline: 'グローバルなAIとテクノロジー企業に高級人材と組織ソリューションを提供することに専念',
      copyright: '科盛才道企業管理コンサルティング有限公司. 全著作権所有.',
    },
    hotJobs: {
      title: '会社ニュース',
      subtitle: '最新の動きをご覧ください',
      viewDetails: '詳細を見る',
      jobs: [
        {
          title: '科盛コンサルティング、2025年高德地图ヘッドハンターサプライヤーサミットに招待出席',
          description: '「最優秀ヘッドハンター貢献賞」を受賞',
          author: '科盛',
        },
        {
          title: '科盛コンサルティング 2024-2025年度決算会が無事終了',
          description: '全員でドライブ旅行を開始し、活力ある新たな旅立ち',
          author: '科盛',
        },
        {
          title: '科盛コンサルティング 2023-2024年度決算会が無事終了',
          description: '全員でタイでのチームビルディング、新たな旅立ちを共に',
          author: '科盛',
        },
        {
          title: '科盛コンサルティング 2023年度チームビルディング',
          description: 'ニャチャン1週間の旅、情熱を持って新たな旅立ちを継続',
          author: '科盛',
        },
      ],
    },
    team: {
      title: '私たちのチーム',
      subtitle: '業界のベテラン専門家で構成されたコンサルタントチームが、お客様に専門的な人材ソリューションを提供',
      members: [
        {
          name: '李楠',
          title: 'シニアパートナー',
          description: '15年以上の人材資源と組織管理の経験を有し、テクノロジー業界のコアポジション採用、組織発展、チーム構築に深く取り組んでいます。複数のフォーチュン500企業やトップテクノロジー企業にサービスを提供し、上場グループのHR責任者も務めました。組織戦略と人材システム構築の豊富な経験を持ち、心理学の専門的背景により、人材能力、チーム構造、組織管理問題に対する全体的な判断力を向上させています。',
        },
        {
          name: '王佳',
          title: 'シニアパートナー',
          description: 'AIとエンジニアリング技術分野の人材採用に焦点を当て、10年以上の高階技術ポジションリクルーティング経験を持ちます。コンピュータ科学の専門的背景を持ち、大規模モデル、プラットフォームエンジニアリングなどのコア技術システムを体系的に理解し、テクノロジー企業に高精度の技術人材ソリューションを提供しています。',
        },
        {
          name: '李晟洋',
          title: 'シニアパートナー',
          description: '10年以上の企業管理と組織運営の経験を持ち、組織診断、チームアップグレード、キーポジション採用に焦点を当てています。企業の成長段階における人材構造のニーズを深く理解し、戦略的視点と実践的能力を兼ね備えた人材と組織の最適化ソリューションをクライアントに提供することに長けています。多くの業界にわたる経験を持ち、組織最適化、チーム構築、組織エンパワーメントの分野に精通しています。コンピュータ科学の専門的背景を持ちます。',
        },
        {
          name: '温煦森',
          title: 'シニアパートナー',
          description: '世界をリードする研究機関やAI研究所に長期的にサービスを提供し、高精度人材マッピングと戦略レベルのポジションリクルーティングに深く取り組んでいます。研究型組織のチーム構築とキーポジション採用をサポートすることに長け、VP、C-levelなどの高級人材のターゲットリクルーティングを複数回成功させています。',
        },
        {
          name: '闫鹏',
          title: 'パートナー',
          description: 'AI大規模モデルとアルゴリズムポジション採用に深く取り組み、10年以上のヘッドハンティング経験を持ちます。高複雑度技術ポジションの深いリクルーティングと候補者評価に長け、最先端技術チームの人材構造と能力要件に対する成熟した認識を持っています。',
        },
        {
          name: '李浩文',
          title: 'パートナー',
          description: '製品とオペレーション方向のコアポジション採用に焦点を当て、コンピュータ背景と豊富なビジネス理解能力を持ちます。ユーザー体験とビジネス成長の視点からキー製品人材を識別することに長け、企業の製品戦略と組織発展に専門的なサポートを提供しています。',
        },
        {
          name: '魏忻伶',
          title: 'パートナー',
          description: '研究開発と技術システムポジション採用に焦点を当て、企業の技術アーキテクチャと研究開発能力モデルに対する包括的な認識を持ちます。ビジネスシナリオと技術深度の両方の次元から候補者を評価することに長け、クライアントに高マッチ度の研究開発人材提供ソリューションを提供しています。',
        },
      ],
    },
    partners: {
      title: 'パートナー',
      subtitle: '私たちは多くの有名企業と長期的な協力関係を築き、業界の発展を共同で推進しています',
    },
    coreAdvantages: {
      title: 'コア優位性',
      subtitle: '人材問題を「迅速・正確・包括的」に解決',
    },
    serviceProcess: {
      title: 'サービスプロセス',
      subtitle: '複雑な採用を効率的、透明、管理可能にする',
      steps: {
        requirement: {
          title: 'ニーズの協議',
          description: 'ポジション要件を正確に理解し、人とポジションの双方向プロファイルを構築',
        },
        recommendation: {
          title: '候補者の推薦',
          description: '24時間以内に最初の候補者を推薦、自社開発AIマッチングエンジンに基づき効率的かつ正確',
        },
        interview: {
          title: '面接の推進',
          description: '72時間以内に面接を推進、面接予約からフィードバックまで、専門コンサルタントが全プロセスを追跡',
        },
        onboarding: {
          title: '入社成功',
          description: '30日以内に入社を完了、オファーから入社まで、リズムを可視化',
        },
      },
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: 'フォームに記入してください。できるだけ早くご連絡いたします',
      formTitle: 'お問い合わせ',
      formMessage: 'フォームに記入してください。できるだけ早くご連絡いたします',
      company: '会社名',
      name: 'お名前',
      phone: '電話番号',
      email: 'メールアドレス',
      address: '住所',
      message: 'メッセージ',
      submit: '送信',
      successMessage: 'お問い合わせありがとうございます。できるだけ早くご連絡いたします！',
      beijing: '北京',
      tokyo: '東京',
      hebei: '河北',
      beijingAddress: '昌平区科星西路106号国风美唐综合楼2号楼701',
      tokyoAddress: '日本东京丰岛区1 Chome-19-1 Higashiikebukuro, Toshima City, Tokyo 170-0013',
      hebeiAddress: '邢台市信都区河北機電大学',
      followUs: 'フォローする',
      scanQRCode: 'QRコードをスキャンして公式アカウントをフォロー',
      consultNow: '今すぐ相談',
    },
  },
  en: {
    nav: {
      partners: 'Partners',
      services: 'Services',
      advantages: 'Advantages',
      process: 'Process',
      team: 'Team',
      about: 'About',
      news: 'News',
      contact: 'Contact',
      contactUs: 'Contact Us',
    },
    hero: {
      title: 'KESHENG Consulting',
      subtitle: 'Connecting Global Top Tech Talent',
      startCooperation: 'Start Cooperation',
      learnMore: 'Learn More',
      partners: 'Partners',
      successCases: 'Success Cases',
      headquarters: 'Dual Headquarters',
      headquartersCity: 'Beijing & Tokyo',
    },
    services: {
      title: 'Services',
      subtitle: 'One-stop solution for your talent and organizational challenges',
      globalTalent: {
        title: 'Global Mid-to-High-End Talent Search',
        category: 'Talent Search',
        features: [
          'Tens of millions of elite talent pool, covering core global markets such as China/US/Singapore/Japan',
          'Senior consultant direct interviews: precise positioning + value attraction, achieving deep person-job fit',
          'Timeliness guarantee: 24h response · 48h candidate delivery · 72h interview arrangement',
        ],
      },
      mapping: {
        title: 'Mapping & Consulting',
        category: 'Expert Consulting',
        features: [
          'Key position talent database construction, target company inventory',
          'Industry talent structure research and compensation competitive analysis',
          'Targeted business consulting, competitor business research',
        ],
      },
      organization: {
        title: 'Organization Optimization',
        category: 'Organization Optimization',
        features: [
          'Organization structure and position system construction',
          'Recruitment process streamlining',
          'Human resource management risk diagnosis',
        ],
      },
      outsourcing: {
        title: 'Labor Outsourcing',
        category: 'Labor Outsourcing',
        features: [
          'IT / AI position dispatch and project-based outsourcing',
          'Overseas team landing and localized flexible employment consulting',
          'Outsourcing team management and delivery quality monitoring',
        ],
      },
    },
    advantages: {
      deepUnderstanding: {
        title: 'Precise Delivery',
        description: 'Focus on AI and cutting-edge technology fields, using self-developed AI search engine to match and quickly lock in "core talent" for key positions',
      },
      oneStop: {
        title: 'One-Stop',
        description: 'Not just "resume recommendation", from talent search, team building to organizational structure optimization, one solution solves all human resource problems',
      },
      globalDelivery: {
        title: 'Global Delivery',
        description: 'Possessing tens of millions of global talent resources, capable of quickly matching suitable candidates whether for domestic team supplementation or overseas branch establishment',
      },
      professionalTeam: {
        title: 'Professional Team',
        description: 'Senior consultant team with rich industry experience and international network',
      },
      speedyDelivery: {
        title: 'Rapid Delivery',
        description: '24-hour reach, 48-hour delivery, 72-hour interview arrangement, using "lightning speed" to meet your urgent staffing needs',
      },
    },
    about: {
      title: 'About Us',
      subtitle: 'Committed to Excellence',
      aboutTag: 'About KESHENG Consulting',
      companyName: 'KESHENG Caidao Enterprise Management Consulting Co., Ltd.',
      description1: ', abbreviated as "KESHENG Consulting", focuses on AI, large models, robotics and cutting-edge technology fields, providing high-end talent recruitment and team building services for global technology enterprises.',
      description2: 'Leveraging rich industry experience and international network, we provide clients with precise search, key position recruitment, overseas team landing and employment compliance and other full-process solutions.',
      description3: 'Since its establishment in 2018, we have served more than 100 technology enterprises, helping enterprises quickly acquire core talent and improve organizational efficiency.',
      mission: {
        title: 'Mission',
        description: 'Connect global top tech talent, make technology land faster, make organizations more resilient',
      },
      values: {
        title: 'Values',
        description: 'Customer-centric, professional-based, integrity-based, continuous innovation and pursuit of excellence',
      },
      strength: {
        title: 'Business Philosophy',
        description: 'Create long-term value for customers, continuously improve through professional services, achieve steady and sustainable growth',
      },
      vision: {
        title: 'Vision',
        description: 'Build a century-old enterprise with long-termism and become a trusted talent service partner for global technology enterprises',
      },
    },
    footer: {
      tagline: 'Committed to providing high-end talent and organizational solutions for global AI and technology enterprises',
      copyright: 'KESHENG Caidao Enterprise Management Consulting Co., Ltd. All rights reserved.',
    },
    hotJobs: {
      title: 'Company News',
      subtitle: 'Stay updated with our latest news',
      viewDetails: 'View Details',
      jobs: [
        {
          title: 'KESHENG Consulting Invited to Attend 2025 Gaode Map Headhunter Supplier Summit',
          description: 'Won "Best Headhunter Contribution Award"',
          author: 'KESHENG',
        },
        {
          title: 'KESHENG Consulting 2024-2025 Fiscal Year Summary Meeting Successfully Concluded',
          description: 'All employees started a vibrant new journey with a self-driving tour',
          author: 'KESHENG',
        },
        {
          title: 'KESHENG Consulting 2023-2024 Fiscal Year Summary Meeting Successfully Concluded',
          description: 'All employees started a new journey with team building in Thailand',
          author: 'KESHENG',
        },
        {
          title: 'KESHENG Consulting 2023 Fiscal Year Team Building',
          description: 'Nha Trang one-week trip, continuing the new journey with passion',
          author: 'KESHENG',
        },
      ],
    },
    team: {
      title: 'Our Team',
      subtitle: 'A consultant team composed of industry senior experts, providing you with professional talent solutions',
      members: [
        {
          name: 'Li Nan',
          title: 'Senior Partner',
          description: 'Over 15 years of human resources and organizational management experience, specializing in core position recruitment, organizational development, and team building in the technology industry. Has served multiple Fortune 500 companies and leading tech enterprises, and served as HR head of a listed group. Possesses rich experience in organizational strategy and talent system construction, with a psychology background that enhances overall judgment of talent capabilities, team structure, and organizational management issues.',
        },
        {
          name: 'Wang Jia',
          title: 'Senior Partner',
          description: 'Focuses on talent recruitment in AI and engineering technology fields, with over 10 years of experience in high-level technical position searches. Has a computer science background and systematic understanding of core technology systems such as large models and platform engineering, providing highly accurate technical talent solutions for tech enterprises.',
        },
        {
          name: 'Li Shengyang',
          title: 'Senior Partner',
          description: 'Has over 10 years of enterprise management and organizational operations experience, focusing on organizational diagnosis, team upgrades, and key position recruitment. Deeply understands talent structure needs at different growth stages of enterprises, skilled at providing clients with talent and organizational optimization solutions that combine strategic vision with practical capabilities. Experienced across numerous industries, proficient in organizational optimization, team building, and organizational empowerment. Computer science background.',
        },
        {
          name: 'Wen Xusen',
          title: 'Senior Partner',
          description: 'Long-term service to globally leading research institutions and AI laboratories, specializing in high-precision talent mapping and strategic-level position searches. Skilled at supporting team building and key position recruitment for research-oriented organizations, successfully facilitating targeted recruitment of VP, C-level, and other high-end talents multiple times.',
        },
        {
          name: 'Yan Peng',
          title: 'Partner',
          description: 'Specializes in AI large model and algorithm position recruitment, with over 10 years of headhunting experience. Skilled at deep searches and candidate evaluation for highly complex technical positions, with mature understanding of talent structure and capability requirements for cutting-edge technology teams.',
        },
        {
          name: 'Li Haowen',
          title: 'Partner',
          description: 'Focuses on core position recruitment in product and operations, with a computer science background and rich business understanding capabilities. Skilled at identifying key product talents from user experience and business growth perspectives, providing professional support for enterprise product strategy and organizational development.',
        },
        {
          name: 'Wei Xinling',
          title: 'Partner',
          description: 'Focuses on R&D and technical system position recruitment, with comprehensive understanding of enterprise technical architecture and R&D capability models. Skilled at evaluating candidates from both business scenarios and technical depth dimensions, providing clients with highly matched R&D talent delivery solutions.',
        },
      ],
    },
    partners: {
      title: 'Partners',
      subtitle: 'We have established long-term cooperative relationships with many well-known enterprises, jointly promoting industry development',
    },
    coreAdvantages: {
      title: 'Advantages',
      subtitle: 'Solve talent problems "Fast, Accurate, Comprehensive"',
    },
    serviceProcess: {
      title: 'Service Process',
      subtitle: 'Making complex recruitment efficient, transparent, and controllable',
      steps: {
        requirement: {
          title: 'Requirement Discussion',
          description: 'Accurately understand job requirements and build dual profiles for people and positions',
        },
        recommendation: {
          title: 'Candidate Recommendation',
          description: 'First batch of candidates recommended within 24 hours, highly efficient and accurate based on self-developed AI matching engine',
        },
        interview: {
          title: 'Interview Advancement',
          description: 'Interviews advanced within 72 hours, from scheduling to feedback, professional consultant full-process tracking',
        },
        onboarding: {
          title: 'Successful Onboarding',
          description: 'Onboarding completed within 30 days, from Offer to onboarding, visualizing the rhythm',
        },
      },
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Fill out the form and we will contact you as soon as possible',
      formTitle: 'Contact Us',
      formMessage: 'Fill out the form and we will contact you as soon as possible',
      company: 'Company Name',
      name: 'Name',
      phone: 'Phone Number',
      email: 'Email',
      address: 'Address',
      message: 'Message',
      submit: 'Submit',
      successMessage: 'Thank you for your message, we will contact you as soon as possible!',
      beijing: 'Beijing',
      tokyo: 'Tokyo',
      hebei: 'Hebei',
      beijingAddress: 'Room 701, Building 2, Guofeng Meitang Complex, No. 106 Kexing West Road, Changping District, Beijing',
      tokyoAddress: '1 Chome-19-1 Higashiikebukuro, Toshima City, Tokyo 170-0013',
      hebeiAddress: 'Hebei Institute of Mechanical and Electrical Technology, Xindu District, Xingtai City',
      followUs: 'Follow Us',
      scanQRCode: 'Scan code to follow the official account',
      consultNow: 'Consult Now',
    },
  },
}
