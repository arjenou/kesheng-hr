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
      subtitle: '24小时触达；48小时交付；72小时安排面试',
      globalTalent: {
        title: '全球高端人才寻访',
        category: '人才寻访',
        features: [
          '千万级高端人选库',
          '全球范围人才寻访，中国，美国，新加坡，日本等',
          '资深顾问直访，精准猎寻与吸引人选，确保人岗匹配',
        ],
      },
      mapping: {
        title: 'Mapping与专家咨询',
        category: '人才咨询',
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
        title: '深度行业理解',
        description: '专注AI与前沿科技领域，精准识别关键岗位与核心人才',
      },
      oneStop: {
        title: '一站式服务',
        description: '从人才寻访、团队搭建到组织优化，提供完整解决方案',
      },
      globalDelivery: {
        title: '全球交付',
        description: '千万级人才资源库，支持企业全球化用人需求',
      },
      professionalTeam: {
        title: '专业团队',
        description: '资深顾问团队，拥有丰富的行业经验与跨国网络',
      },
      speedyDelivery: {
        title: '极速交付',
        description: '24小时触达，48小时交付，72小时安排面试',
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
          description: '拥有15年以上人力资源与组织管理经验，心理学硕士，国家二级心理咨询师',
        },
        {
          name: '王佳',
          title: '高级合伙人',
          description: '资深猎头专家，10年以上高阶岗位寻访经验，计算机专业背景',
        },
        {
          name: '温煦森',
          title: '高级合伙人',
          description: '精通人才Mapping，全球顶尖实验室定点寻访专家，服务过多个一线互联网企业',
        },
        {
          name: '魏忻伶',
          title: '合伙人',
          description: '资深人力资源专家，专注于组织发展和人才战略',
        },
        {
          name: '李晟洋',
          title: '高级合伙人',
          description: '资深人力资源与猎头专家，专注于高端人才寻访和团队建设',
        },
      ],
    },
    partners: {
      title: '合作伙伴',
      subtitle: '我们与众多知名企业建立了长期合作关系，共同推动行业发展',
    },
    coreAdvantages: {
      title: '核心优势',
      subtitle: '我们拥有业界领先的人才库和专业的顾问团队，为您提供卓越的人才解决方案',
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
      beijingAddress: '北京市朝阳区建国路93号万达广场A座',
      tokyoAddress: '東京都港区赤坂1-1-1',
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
      subtitle: '24時間以内に連絡；48時間以内に納品；72時間以内に面接を手配',
      globalTalent: {
        title: 'グローバル人材リクルーティング',
        category: '人材リクルーティング',
        features: [
          '千万級の高級人選データベース',
          'グローバル範囲の人材リクルーティング、中国、米国、シンガポール、日本など',
          'ベテランコンサルタントが直接訪問し、正確に人材を探し、人材を引き付け、人とポジションのマッチングを確保',
        ],
      },
      mapping: {
        title: 'マッピングとコンサルティング',
        category: '人材コンサルティング',
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
        title: '深い業界理解',
        description: 'AIと最先端技術分野に焦点を当て、重要ポジションとコア人材を正確に識別',
      },
      oneStop: {
        title: 'ワンストップ',
        description: '人材リクルーティング、チーム構築から組織最適化まで、完全なソリューションを提供',
      },
      globalDelivery: {
        title: 'グローバル納品',
        description: '千万級の人材リソースデータベース、企業のグローバル化された雇用ニーズをサポート',
      },
      professionalTeam: {
        title: '専門チーム',
        description: 'ベテランコンサルタントチーム、豊富な業界経験と国際ネットワークを保有',
      },
      speedyDelivery: {
        title: '極速納品',
        description: '24時間以内に連絡、48時間以内に納品、72時間以内に面接を手配',
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
          description: '15年以上の人材資源と組織管理の経験を有し、心理学修士、国家2級心理カウンセラー',
        },
        {
          name: '王佳',
          title: 'シニアパートナー',
          description: 'ベテランヘッドハンター専門家、10年以上の高階ポジションリクルーティング経験、コンピュータ専門背景',
        },
        {
          name: '温煦森',
          title: 'シニアパートナー',
          description: '人材マッピングに精通、世界トップクラスの研究所定点リクルーティング専門家、複数の第一線インターネット企業にサービス提供',
        },
        {
          name: '魏忻伶',
          title: 'パートナー',
          description: 'ベテラン人材資源専門家、組織発展と人材戦略に専念',
        },
        {
          name: '李晟洋',
          title: 'シニアパートナー',
          description: 'ベテラン人材資源とヘッドハンター専門家、高級人材リクルーティングとチーム構築に専念',
        },
      ],
    },
    partners: {
      title: 'パートナー',
      subtitle: '私たちは多くの有名企業と長期的な協力関係を築き、業界の発展を共同で推進しています',
    },
    coreAdvantages: {
      title: 'コア優位性',
      subtitle: '業界をリードする人材データベースと専門的なコンサルタントチームを有し、お客様に卓越した人材ソリューションを提供',
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
      beijingAddress: '北京市朝陽区建国路93号ワンダープラザA棟',
      tokyoAddress: '東京都港区赤坂1-1-1',
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
      subtitle: '24h Reach; 48h Delivery; 72h Interview Arrangement',
      globalTalent: {
        title: 'Global Talent Search',
        category: 'Talent Search',
        features: [
          'Tens of millions of high-end candidate database',
          'Global talent search covering China, USA, Singapore, Japan, etc.',
          'Senior consultants direct visit, precise hunting and attracting candidates, ensuring person-position match',
        ],
      },
      mapping: {
        title: 'Mapping & Consulting',
        category: 'Talent Consulting',
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
        title: 'Deep Understanding',
        description: 'Focus on AI and cutting-edge technology fields, accurately identify key positions and core talent',
      },
      oneStop: {
        title: 'One-Stop',
        description: 'From talent search, team building to organization optimization, providing complete solutions',
      },
      globalDelivery: {
        title: 'Global Delivery',
        description: 'Tens of millions of talent resource database, supporting enterprises\' global employment needs',
      },
      professionalTeam: {
        title: 'Professional Team',
        description: 'Senior consultant team with rich industry experience and international network',
      },
      speedyDelivery: {
        title: 'Speedy Delivery',
        description: '24h Reach, 48h Delivery, 72h Interview Arrangement',
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
          description: 'Over 15 years of human resources and organizational management experience, Master of Psychology, National Level 2 Psychological Counselor',
        },
        {
          name: 'Wang Jia',
          title: 'Senior Partner',
          description: 'Senior headhunter expert, over 10 years of high-level position search experience, computer science background',
        },
        {
          name: 'Wen Xusen',
          title: 'Senior Partner',
          description: 'Proficient in talent mapping, expert in targeted searches for top global laboratories, has served multiple first-tier internet companies',
        },
        {
          name: 'Wei Xinling',
          title: 'Partner',
          description: 'Senior human resources expert, focused on organizational development and talent strategy',
        },
        {
          name: 'Li Shengyang',
          title: 'Senior Partner',
          description: 'Senior human resources and headhunting expert, focused on high-end talent search and team building',
        },
      ],
    },
    partners: {
      title: 'Partners',
      subtitle: 'We have established long-term cooperative relationships with many well-known enterprises, jointly promoting industry development',
    },
    coreAdvantages: {
      title: 'Advantages',
      subtitle: 'We have an industry-leading talent pool and a professional consulting team to provide you with excellent talent solutions',
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
      beijingAddress: 'Wanda Plaza Tower A, No. 93 Jianguo Road, Chaoyang District, Beijing',
      tokyoAddress: '1-1-1 Akasaka, Minato-ku, Tokyo',
      hebeiAddress: 'Hebei Institute of Mechanical and Electrical Technology, Xindu District, Xingtai City',
      followUs: 'Follow Us',
      scanQRCode: 'Scan code to follow the official account',
      consultNow: 'Consult Now',
    },
  },
}
