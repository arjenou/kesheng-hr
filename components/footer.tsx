export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/kesheng-logo.png" alt="KESHENG Logo" className="h-10 w-auto" />
              <span className="text-lg font-bold">KESHENG</span>
            </div>
            <p className="text-slate-400 text-sm">连接全球顶尖科技人才，让科技更快落地</p>
          </div>

          <div className="hidden md:block">
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
                <a href="#hot-jobs" className="hover:text-white transition-colors">
                  热门职位
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  联系我们
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
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
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:lishengyang3@keshengcaidao.com" className="hover:text-white transition-colors">lishengyang3@keshengcaidao.com</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <a href="https://www.linkedin.com/company/73024403/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              </li>
              <li className="pt-2 flex items-start gap-2">
                <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <span className="font-medium text-slate-300">北京</span>
                  <div className="text-xs mt-1 ml-0">昌平区科星西路106号国风美唐综合楼2号楼701</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <span className="font-medium text-slate-300">东京</span>
                  <div className="text-xs mt-1 ml-0">日本东京丰岛区1 Chome-19-1 Higashiikebukuro, Toshima City, Tokyo 170-0013</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <span className="font-medium text-slate-300">河北</span>
                  <div className="text-xs mt-1 ml-0">邢台市信都区河北机电大学</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center text-slate-400 text-sm space-y-2 md:space-y-0">
            <p>&copy; 2025 KESHENG Consulting. All rights reserved.</p>
            <p className="text-xs">冀ICP备2025135986号-1</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
