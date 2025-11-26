export default function Advantages() {
  const advantages = [
    {
      title: "深度行业理解",
      description: "专注AI与前沿科技领域，精准识别关键岗位与核心人才",
      bgColor: "from-slate-50 to-slate-100",
      iconBg: "bg-white",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "一站式服务",
      description: "从人才寻访、团队搭建到组织优化，提供完整解决方案",
      bgColor: "from-blue-50 to-blue-100",
      iconBg: "bg-white",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "全球交付",
      description: "千万级人才资源库，支持企业全球化用人需求",
      bgColor: "from-indigo-50 to-indigo-100",
      iconBg: "bg-white",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "极速交付",
      description: "24小时触达，48小时交付，72小时安排面试",
      bgColor: "from-purple-50 to-purple-100",
      iconBg: "bg-white",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="advantages" className="pt-20 pb-32 px-2 sm:px-4 lg:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">核心优势</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            我们拥有业界领先的人才库和专业的顾问团队，为您提供卓越的人才解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {advantages.map((item, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${item.bgColor} rounded-3xl p-8 hover:shadow-xl transition-all group relative overflow-hidden ${
                index % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-12"
              }`}
            >
              {/* Icon */}
              <div className={`${item.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
