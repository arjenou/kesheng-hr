export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">KS</span>
              </div>
              <span className="text-lg font-bold">KESHENG</span>
            </div>
            <p className="text-slate-400 text-sm">连接全球顶尖科技人才，让科技更快落地</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  关于我们
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  服务介绍
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  团队成员
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  联系我们
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">服务</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  人才寻访
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  团队搭建
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  组织优化
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  劳务派遣
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">联系方式</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>📧 contact@keshengcaidao.com</li>
              <li>🔗 LinkedIn: KESHENG Consulting</li>
              <li>📍 北京 | 东京 | 全球</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
            <p>&copy; 2025 KESHENG Consulting. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                隐私政策
              </a>
              <a href="#" className="hover:text-white transition-colors">
                服务条款
              </a>
              <a href="#" className="hover:text-white transition-colors">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
