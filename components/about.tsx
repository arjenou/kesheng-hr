"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState<boolean[]>(new Array(5).fill(false)) // 左侧大卡片 + 右侧4个小卡片
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // 检测是否是移动端
    const checkMobile = () => {
      return window.innerWidth < 768
    }

    const isMobile = checkMobile()
    
    // 移动端才添加加载动画
    if (!isMobile) {
      setIsVisible(true)
      setCardsVisible(new Array(5).fill(true))
      return
    }

    // 移动端：使用 Intersection Observer 检测元素进入视口
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            
            // 逐个显示卡片
            cardsRef.current.forEach((card, index) => {
              if (card) {
                setTimeout(() => {
                  setCardsVisible((prev) => {
                    const newState = [...prev]
                    newState[index] = true
                    return newState
                  })
                }, index * 150) // 每个卡片延迟150ms
              }
            })
            
            // 取消观察
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '100px 0px 0px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-sm text-blue-600 font-medium mb-2">致力打造卓越服务</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-3">关于我们</h2>
          <div className="w-16 h-0.5 bg-teal-500 mx-auto mb-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Card - About Us */}
          <div 
            ref={(el) => {
              if (el) cardsRef.current[0] = el
            }}
            className={`relative rounded-3xl overflow-hidden shadow-xl h-[480px] transition-all duration-700 ${
              cardsVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
          >
            {/* Background with overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
              <img
                src="/about-us.jpg"
                alt="科盛咨询"
                className="w-full h-full object-cover opacity-40"
              />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-8 text-white z-10">
              <div className="inline-block">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                  关于科盛咨询
                </span>
              </div>

              {/* 文字蒙版背景 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent pointer-events-none"></div>

              <div className="relative z-10 space-y-4">
                <p className="text-base text-white leading-relaxed max-w-md">
                  <span className="text-xl font-bold text-white">科盛才道企业管理咨询有限公司</span>，简称"科盛咨询"，专注 AI、大模型、机器人与前沿科技领域，为全球科技企业提供高端人才招聘与团队搭建服务。
                </p>
                <p className="text-base text-white leading-relaxed max-w-md">
                  依托丰富的行业经验与跨国网络，我们为客户提供精准寻访、关键岗位招聘、海外团队落地及用工合规等全流程解决方案。
                </p>
                <p className="text-base text-white leading-relaxed max-w-md">
                  自 2018 年成立以来，我们已服务百余家科技企业，助力企业快速获取核心人才、提升组织效能。
                </p>
              </div>
            </div>
          </div>

          {/* Right Grid - Mission, Values, Strength, Vision */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-md lg:max-w-none mx-auto lg:mx-0">
            {/* Our Mission */}
            <div 
              ref={(el) => {
                if (el) cardsRef.current[1] = el
              }}
              className={`bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-700 ${
                cardsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-3 sm:mb-4 mx-auto sm:mx-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-2 text-center sm:text-left">公司使命</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center sm:text-left">
                连接全球顶尖科技人才，让科技更快落地，让组织更具韧性
              </p>
            </div>

            {/* Our Values */}
            <div 
              ref={(el) => {
                if (el) cardsRef.current[2] = el
              }}
              className={`bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-700 ${
                cardsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-3 sm:mb-4 mx-auto sm:mx-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-2 text-center sm:text-left">公司价值观</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center sm:text-left">
                以客户为中心，以专业为本，以诚信为基，持续创新与追求卓越
              </p>
            </div>

            {/* Our Strength */}
            <div 
              ref={(el) => {
                if (el) cardsRef.current[3] = el
              }}
              className={`bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-700 ${
                cardsVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-3 sm:mb-4 mx-auto sm:mx-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-2 text-center sm:text-left">经营理念</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center sm:text-left">
              创造价值，持续精进，稳健增长
              </p>
            </div>

            {/* Our Vision */}
            <div 
              ref={(el) => {
                if (el) cardsRef.current[4] = el
              }}
              className={`bg-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-700 ${
                cardsVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-pink-100 flex items-center justify-center mb-3 sm:mb-4 mx-auto sm:mx-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-2 text-center sm:text-left">公司愿景</h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-center sm:text-left">
                以长期主义打造百年企业，成为全球科技企业信赖的人才服务伙伴
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
