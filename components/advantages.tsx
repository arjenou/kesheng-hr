export default function Advantages() {
  const advantages = [
    {
      title: "深度行业理解",
      description: "专注AI与前沿科技领域，精准识别关键岗位与核心人才",
      icon: "🎯",
    },
    {
      title: "一站式服务",
      description: "从人才寻访、团队搭建到组织优化，提供完整解决方案",
      icon: "✨",
    },
    {
      title: "全球交付",
      description: "千万级人才资源库，支持企业全球化用人需求",
      icon: "🌍",
    },
    {
      title: "极速交付",
      description: "24小时触达，48小时交付，72小时安排面试",
      icon: "⚡",
    },
  ]

  return (
    <section id="advantages" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">核心优势</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">我们拥有业界领先的人才库和专业的顾问团队</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
