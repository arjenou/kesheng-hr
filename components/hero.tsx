"use client"

import { useEffect, useRef, useState } from "react"
import { useI18n } from "@/lib/i18n/context"

export default function Hero() {
  const { t } = useI18n()
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const mobileBgRef = useRef<HTMLDivElement>(null)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [showText, setShowText] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // 数字翻转动画效果
  useEffect(() => {
    const duration = 1000 // 动画持续时间（毫秒）
    const target1 = 100
    const target2 = 1000
    const startTime = Date.now()
    let lastCount1 = 0
    let lastCount2 = 0
    const maxIncrement = 2 // 每次最大增量

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // 使用缓动函数（easeOutCubic）让动画更自然
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
      const easedProgress = easeOutCubic(progress)

      // 计算目标值
      const targetCount1 = Math.floor(target1 * easedProgress)
      const targetCount2 = Math.floor(target2 * easedProgress)

      // 限制增量，确保平滑递增
      const newCount1 = Math.min(targetCount1, lastCount1 + maxIncrement)
      const newCount2 = Math.min(targetCount2, lastCount2 + maxIncrement)

      setCount1(newCount1)
      setCount2(newCount2)
      
      lastCount1 = newCount1
      lastCount2 = newCount2

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount1(target1)
        setCount2(target2)
      }
    }

    const rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
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
        backgroundImage: "url(/banner-business.jpg)",
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
              backgroundImage: "url(/banner-business.jpg)",
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

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/75 to-transparent"></div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60"></div>

      <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl whitespace-nowrap overflow-hidden text-ellipsis block mb-2" style={{ textShadow: '0 0 8px rgba(255,255,255,0.5), 0 0 16px rgba(255,255,255,0.3), 0 0 24px rgba(255,255,255,0.2)' }}>{t.hero.title}</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block whitespace-pre-line">
              {t.hero.subtitle}
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll("#contact")}
              className="px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:-translate-y-1 whitespace-nowrap"
            >
              {t.hero.startCooperation}
            </button>
            <button
              onClick={() => handleScroll("#about")}
              className="px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:-translate-y-1 whitespace-nowrap"
            >
              {t.hero.learnMore}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-6 pt-16">
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-400 whitespace-nowrap transition-all duration-300 overflow-hidden text-ellipsis">
                {count1}+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 whitespace-nowrap overflow-hidden text-ellipsis">{t.hero.partners}</div>
            </div>
            <div className="text-center">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap transition-all duration-300 overflow-hidden text-ellipsis">
                {count2}+
              </div>
              <div className="text-xs sm:text-sm text-slate-300 whitespace-nowrap overflow-hidden text-ellipsis">{t.hero.successCases}</div>
            </div>
            <div className="text-center">
              <div className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent transition-all duration-500 break-words ${showText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {t.hero.headquartersCity}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 whitespace-nowrap overflow-hidden text-ellipsis">{t.hero.headquarters}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
