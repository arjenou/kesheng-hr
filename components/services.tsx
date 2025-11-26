export default function Services() {
  const services = [
    {
      title: "全球高端人才寻访",
      description: "千万级高端人选库，全球范围人才寻访。资深顾问直访，精准猎寻与吸引人选，确保人岗匹配",
      color: "from-blue-600 to-blue-400",
    },
    {
      title: "人才地图与精准咨询",
      description: "关键岗位人才库构建、目标公司盘点。行业人才结构调研与薪酬竞争分析",
      color: "from-purple-600 to-purple-400",
    },
    {
      title: "组织优化与风险管理",
      description: "组织结构与岗位体系梳理。招聘流程与人力管理风险诊断",
      color: "from-indigo-600 to-indigo-400",
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">服务介绍</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">为您提供全面的人才解决方案</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div
                className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 text-white h-64 flex flex-col justify-between hover:shadow-xl transition-all transform hover:scale-105`}
              >
                <div>
                  <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4">
                    服务 {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
                <div className="text-white/60 group-hover:text-white transition-colors">→</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">劳务派遣与外包</h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>IT / AI 岗位派遣与项目制外包</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>海外团队落地与本地化灵活用工咨询</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>外包团队管理与交付质量监控</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">深耕领域</h3>
            <div className="flex flex-wrap gap-3">
              {["人工智能", "大模型", "云服务平台", "金融科技", "前沿科技"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
