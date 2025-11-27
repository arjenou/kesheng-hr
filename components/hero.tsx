"use client"

export default function Hero() {
  const handleScroll = (targetId: string) => {
    const element = document.querySelector(targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-start pt-20"
      style={{
        backgroundImage: "url(/hero-banner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/50 to-transparent"></div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60"></div>

      <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-block mb-6">
            <p className="text-blue-400 text-sm font-semibold tracking-wider">科盛咨询与您同行</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance">
            连接全球
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              顶尖科技人才
            </span>
          </h1>

          <p className="text-lg text-slate-200 leading-relaxed mb-8 max-w-xl">
            科盛咨询专注于AI、大模型、机器人与前沿科技领域，为全球科技企业提供高端人才招聘与团队搭建服务。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll("#contact")}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1"
            >
              开始合作
            </button>
            <button
              onClick={() => handleScroll("#about")}
              className="px-8 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:border-white hover:bg-white/10 transition-all"
            >
              了解更多
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-16">
            <div>
              <div className="text-3xl font-bold text-blue-400">100+</div>
              <div className="text-sm text-slate-300">合作企业</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                1000+
              </div>
              <div className="text-sm text-slate-300">成功案例</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">3</div>
              <div className="text-sm text-slate-300">全球办公室</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
