"use client"

export default function Hero() {
  const handleScroll = (targetId: string) => {
    const element = document.querySelector(targetId)
    if (element) {
      const headerOffset = 80 // 导航栏高度 + 一些额外间距
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Left Content */}
          <div className="space-y-6 text-balance">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              致力于全球AI与科技人才招聘
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight lg:whitespace-nowrap">
              连接全球<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">顶尖科技人才</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              科盛咨询专注于AI、大模型、机器人与前沿科技领域，为全球科技企业提供高端人才招聘与团队搭建服务。我们以客户为中心，以专业为本，让科技更快落地。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => handleScroll("#contact")}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                开始合作
              </button>
              <button 
                onClick={() => handleScroll("#about")}
                className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                了解更多
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12">
              <div>
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-slate-600">合作企业</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  1000+
                </div>
                <div className="text-sm text-slate-600">成功案例</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">3</div>
                <div className="text-sm text-slate-600">全球办公室</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:flex items-end justify-end">
            <img 
              src="/hero1.png" 
              alt="科盛咨询服务展示" 
              className="w-96 h-auto translate-y-12"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
