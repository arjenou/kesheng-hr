export default function Services() {
  const services = [
    {
      title: "全球高端人才寻访",
      description: "千万级高端人选库，全球范围人才寻访。资深顾问直访，精准猎寻与吸引人选，确保人岗匹配",
      category: "人才寻访",
      image: "/service/全球高端人才寻访.jpg",
    },
    {
      title: "人才地图与精准咨询",
      description: "关键岗位人才库构建、目标公司盘点。行业人才结构调研与薪酬竞争分析",
      category: "人才咨询",
      image: "/service/人才地图与精准咨询.jpg",
    },
    {
      title: "组织优化与风险管理",
      description: "组织结构与岗位体系梳理。招聘流程与人力管理风险诊断",
      category: "组织优化",
      image: "/service/组织优化与风险管理.jpg",
    },
    {
      title: "劳务派遣与外包",
      description: "IT / AI 岗位派遣与项目制外包。海外团队落地与本地化灵活用工咨询。外包团队管理与交付质量监控",
      category: "劳务外包",
      image: "/service/劳务派遣与外包.jpg",
    },
  ]

  return (
    <>
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Video Section */}
        <div className="mt-12 mb-28 rounded-3xl overflow-hidden shadow-2xl max-h-[400px]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            x5-playsinline="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="true"
            x5-video-orientation="portraint"
            preload="auto"
            poster="/placeholder.jpg"
            controls
          >
            <source src="/business-video.mp4" type="video/mp4" />
            您的浏览器不支持视频播放
          </video>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">服务介绍</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">为您提供全面的人才解决方案</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative flex flex-col">
              {/* Image Section - 溜出卡片 */}
              <div className="relative overflow-hidden rounded-t-3xl h-64 mb-[-2rem]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Card */}
              <div className="bg-white rounded-3xl p-6 pt-10 pb-8 shadow-lg hover:shadow-xl transition-shadow relative z-10 flex-1 flex flex-col min-h-[240px]">
                <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium mb-3 self-start">
                  {service.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* Deep Focus Areas - Full Width Section */}
    <section 
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/featcher.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center 20%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* 高级感深色叠加层 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-indigo-900/85 to-purple-900/80 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">深耕领域</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            我们专注服务于人工智能、大模型、云服务平台、金融科技、前沿科技等领域
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {[
            { name: "人工智能", icon: "/icon/icons8-人工智能-100.png" },
            { name: "大模型", icon: "/icon/icons8-工程-100.png" },
            { name: "云服务平台", icon: "/icon/icons8-云开发-100.png" },
            { name: "金融科技", icon: "/icon/icons8-金融科技-100.png" },
            { name: "前沿科技", icon: "/icon/icons8-simulation-100.png" },
          ].map((item) => (
            <div key={item.name} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 mb-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-indigo-500/40 group-hover:via-purple-500/40 group-hover:to-pink-500/40 group-hover:border-indigo-400/50 transition-all group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-purple-500/20 p-4">
                <img 
                  src={item.icon} 
                  alt={item.name}
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <p className="text-white font-medium text-lg">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
