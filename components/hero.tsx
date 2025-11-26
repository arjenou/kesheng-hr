export default function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-balance">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              致力于全球AI与科技人才招聘
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              连接全球
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                顶尖科技人才
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              科盛咨询专注于AI、大模型、机器人与前沿科技领域，为全球科技企业提供高端人才招聘与团队搭建服务。我们以客户为中心，以专业为本，让科技更快落地。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1">
                开始合作
              </button>
              <button className="px-8 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
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
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-blue-100 rounded-3xl transform -rotate-6"></div>

              {/* Main content */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12a3 3 0 100-6 3 3 0 000 6z" />
                        <path
                          fillRule="evenodd"
                          d="M12 1C6.477 1 2 5.477 2 11c0 5.913 3.591 10.936 8.5 12.852V22a1 1 0 102 0v-1.148C18.409 21.936 22 16.913 22 11c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-900">高端人才招聘</p>
                    <p className="text-slate-600 mt-2">从寻访到入职，72小时极速交付</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
