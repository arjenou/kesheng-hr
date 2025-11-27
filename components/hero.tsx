"use client"

import { useEffect, useRef, useState } from "react"

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const mobileBgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // 移动端固定背景效果 - 使用transform实现视差滚动
  useEffect(() => {
    if (!isMobile) return

    let rafId: number | null = null

    const updateBackground = () => {
      const sectionEl = sectionRef.current
      const bgEl = mobileBgRef.current
      if (!sectionEl || !bgEl) return

      const scrollY = window.pageYOffset || window.scrollY || document.documentElement.scrollTop
      const rect = sectionEl.getBoundingClientRect()
      const sectionTop = rect.top + scrollY
      const initialSectionTop = sectionEl.offsetTop || 0

      // 计算section从初始位置滚动了多少
      const scrollDistance = scrollY

      // 实现固定背景效果：背景元素向上移动，移动距离等于滚动距离
      // 这样背景就会相对于视口保持固定
      bgEl.style.transform = `translate3d(0, ${scrollDistance}px, 0)`
    }

    const handleScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          updateBackground()
          rafId = null
        })
      }
    }

    // 延迟执行，确保DOM已渲染
    const timer = setTimeout(() => {
      updateBackground()
      window.addEventListener('scroll', handleScroll, { passive: true })
      window.addEventListener('resize', handleScroll, { passive: true })
    }, 100)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }
    }
  }, [isMobile])

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
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-start pt-20"
      style={!isMobile ? {
        backgroundImage: "url(/hero-banner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundAttachment: "fixed",
      } : {}}
    >
      {/* 移动端背景 - 使用absolute定位+transform实现固定背景效果 */}
      {isMobile ? (
        <div className="absolute inset-0 overflow-hidden">
          <div
            ref={mobileBgRef}
            className="absolute z-0 bg-no-repeat"
            style={{
              backgroundImage: "url(/hero-banner.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center right",
              top: 0,
              left: 0,
              right: 0,
              width: "100%",
              height: "100vh",
              minHeight: "100vh",
              willChange: "transform",
              WebkitTransform: "translateZ(0)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          />
        </div>
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/70 to-transparent"></div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60"></div>

      <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="whitespace-nowrap">科盛咨询</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap">
              链接全球顶尖科技人才
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll("#contact")}
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1"
            >
              开始合作
            </button>
            <button
              onClick={() => handleScroll("#about")}
              className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-white/30 text-white rounded-lg font-semibold hover:border-white hover:bg-white/10 transition-all"
            >
              了解更多
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-16">
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 whitespace-nowrap">100+</div>
              <div className="text-xs sm:text-sm text-slate-300">合作企业</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap">
                1000+
              </div>
              <div className="text-xs sm:text-sm text-slate-300">成功案例</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap">北京&东京</div>
              <div className="text-xs sm:text-sm text-slate-300">双总部</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
