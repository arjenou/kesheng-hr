"use client"

import { useEffect, useRef, useState } from "react"
import { useI18n } from "@/lib/i18n/context"

export default function About() {
  const { t } = useI18n()
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
          <h2 className="text-4xl font-bold text-slate-900 mb-3">{t.about.title}</h2>
          <div className="w-16 h-0.5 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">{t.about.subtitle}</p>
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
            <div className="relative h-full flex flex-col justify-center p-6 text-white z-10">
              {/* 文字蒙版背景 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    {t.about.aboutTag}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <p className="text-base text-white leading-relaxed max-w-md">
                    <span className="text-lg sm:text-2xl font-bold text-white">{t.about.companyName}</span>{t.about.description1}
                  </p>
                  <p className="text-base text-white leading-relaxed max-w-md">
                    {t.about.description2}
                  </p>
                  <p className="text-base text-white leading-relaxed max-w-md">
                    {t.about.description3}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid - Mission, Values, Strength, Vision */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-md lg:max-w-none mx-auto lg:mx-0 items-stretch">
            {/* Our Mission */}
            <div 
              ref={(el) => {
                if (el) cardsRef.current[1] = el
              }}
              className={`rounded-2xl p-8 sm:p-8 shadow-sm hover:shadow-md transition-all duration-700 relative overflow-hidden h-full ${
                cardsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              {/* 商业背景图片 */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                <img 
                  src="/picture2/img1.jpg"
                  alt=""
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
                />
              </div>
              
              {/* 整体黑色蒙版，增强对比度 */}
              <div className="absolute inset-0 bg-black/75 rounded-2xl z-[1]"></div>
              
              {/* 装饰性设计素材 - 左侧形状 */}
              <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 opacity-20 z-[2]">
                <img 
                  src="/picture2/leftshape.png" 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* 装饰性设计素材 - 右侧形状 */}
              <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 opacity-20 z-[2]">
                <img 
                  src="/picture2/rightshape.png" 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white drop-shadow-lg whitespace-nowrap">{t.about.mission.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-white/95 leading-relaxed drop-shadow-md text-left">
                  {t.about.mission.description}
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div 
              ref={(el) => {
                if (el) cardsRef.current[2] = el
              }}
              className={`rounded-2xl p-8 sm:p-8 shadow-sm hover:shadow-md transition-all duration-700 relative overflow-hidden h-full ${
                cardsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              {/* 商业背景图片 */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                <img 
                  src="/picture2/img2.jpg"
                  alt=""
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
                />
              </div>
              
              {/* 整体黑色蒙版，增强对比度 */}
              <div className="absolute inset-0 bg-black/75 rounded-2xl z-[1]"></div>
              
              {/* 装饰性设计素材 - 左侧形状 */}
              <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 opacity-20 z-[2]">
                <img 
                  src="/picture2/leftshape.png" 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* 装饰性设计素材 - 右侧形状 */}
              <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 opacity-20 z-[2]">
                <img 
                  src="/picture2/rightshape.png" 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white drop-shadow-lg whitespace-nowrap">{t.about.values.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-white/95 leading-relaxed drop-shadow-md text-left">
                  {t.about.values.description}
                </p>
              </div>
            </div>

            {/* Our Strength */}
            <div 
              ref={(el) => {
                if (el) cardsRef.current[3] = el
              }}
              className={`rounded-2xl p-8 sm:p-8 shadow-sm hover:shadow-md transition-all duration-700 relative overflow-hidden h-full ${
                cardsVisible[3] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              {/* 商业背景图片 */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                <img 
                  src="/picture2/img3.jpg"
                  alt=""
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
                />
              </div>
              
              {/* 整体黑色蒙版，增强对比度 */}
              <div className="absolute inset-0 bg-black/75 rounded-2xl z-[1]"></div>
              
              {/* 装饰性设计素材 - 左侧形状 */}
              <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 opacity-20 z-[2]">
                <img 
                  src="/picture2/leftshape.png" 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* 装饰性设计素材 - 右侧形状 */}
              <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 opacity-20 z-[2]">
                <img 
                  src="/picture2/rightshape.png" 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white drop-shadow-lg whitespace-nowrap">{t.about.strength.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-white/95 leading-relaxed drop-shadow-md text-left">
                  {t.about.strength.description}
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div 
              ref={(el) => {
                if (el) cardsRef.current[4] = el
              }}
              className={`rounded-2xl p-8 sm:p-8 shadow-sm hover:shadow-md transition-all duration-700 relative overflow-hidden h-full ${
                cardsVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              {/* 商业背景图片 */}
              <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                <img 
                  src="/picture2/img4.jpg"
                  alt=""
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
                />
              </div>
              
              {/* 整体黑色蒙版，增强对比度 */}
              <div className="absolute inset-0 bg-black/75 rounded-2xl z-[1]"></div>
              
              {/* 装饰性设计素材 - 左侧形状 */}
              <div className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 opacity-20 z-[2]">
                <img 
                  src="/picture2/leftshape.png" 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* 装饰性设计素材 - 右侧形状 */}
              <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 opacity-20 z-[2]">
                <img 
                  src="/picture2/rightshape.png" 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-white drop-shadow-lg whitespace-nowrap">{t.about.vision.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-white/95 leading-relaxed drop-shadow-md text-left">
                  {t.about.vision.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
