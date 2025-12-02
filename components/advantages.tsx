"use client"

import { useEffect, useRef, useState } from "react"
import CoreAdvantages from "./core-advantages"
import { useI18n } from "@/lib/i18n/context"

export default function Advantages() {
  const { t } = useI18n()
  const [isMobile, setIsMobile] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(0) // PC端当前页码（0或1）
  const [isPaused, setIsPaused] = useState(false)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragOffsetRef = useRef(0)
  const deepFocusSectionRef = useRef<HTMLElement>(null)
  const mobileBgRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const team = t.team.members.map((member, index) => ({
    name: member.name,
    title: member.title,
    description: member.description,
    image: ["/member/li-nan.jpg", "/member/wang-jia.jpg", "/member/li-shengyang.jpg", "/member/wen-xusen.jpg", "/member/yan-peng.jpg", "/member/li-haowen.jpg", "/member/wei-xinling.jpg"][index],
    email: index === 0 ? "linan07@keshengcaidao.com" : index === 1 ? "luck@keshengcaidao.com" : index === 2 ? "lishengyang@keshengcaidao.com" : index === 3 ? "fuller@keshengcaidao.com" : index === 4 ? "yanpeng@keshengcaidao.com" : index === 5 ? "bob@keshengcaidao.com" : "daisy@keshengcaidao.com",
  }))

  // 分页：第一页4个人，第二页3个人
  const page1 = team.slice(0, 4) // 前4个
  const page2 = team.slice(4) // 后3个
  const pages = [page1, page2]
  const totalPages = 2

  // PC端页面切换处理
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  const advantages = [
    {
      title: t.advantages.deepUnderstanding.title,
      description: t.advantages.deepUnderstanding.description,
      bgColor: "from-slate-50 to-slate-100",
      iconBg: "bg-white",
      backgroundImage: "/picture2/img1.jpg",
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
      title: t.advantages.oneStop.title,
      description: t.advantages.oneStop.description,
      bgColor: "from-blue-50 to-blue-100",
      iconBg: "bg-white",
      backgroundImage: "/picture2/img2.jpg",
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
      title: t.advantages.globalDelivery.title,
      description: t.advantages.globalDelivery.description,
      bgColor: "from-indigo-50 to-indigo-100",
      iconBg: "bg-white",
      backgroundImage: "/picture2/img3.jpg",
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
      title: t.advantages.speedyDelivery.title,
      description: t.advantages.speedyDelivery.description,
      bgColor: "from-purple-50 to-purple-100",
      iconBg: "bg-white",
      backgroundImage: "/picture2/img4.jpg",
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

  // 检测是否是移动设备（包括微信浏览器）
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) || window.innerWidth < 768
      setIsMobile(isMobileDevice)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // 团队成员自动轮播功能（移动端）
  useEffect(() => {
    // 只在移动端启用自动轮播
    const checkMobile = () => {
      return window.innerWidth < 768
    }

    if (!checkMobile()) return

    const startAutoPlay = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      
      if (!isPaused) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prev) => (prev === team.length - 1 ? 0 : prev + 1))
        }, 4000) // 每4秒切换一次
      }
    }

    startAutoPlay()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, team.length])


  // 手动切换时暂停自动轮播（移动端）
  const handleManualChange = (newIndex: number) => {
    setIsPaused(true)
    setCurrentIndex(newIndex)
    // 3秒后恢复自动轮播
    setTimeout(() => {
      setIsPaused(false)
    }, 3000)
  }

  // PC端暂停/恢复滚动
  const handlePauseToggle = () => {
    setIsPaused((prev) => !prev)
  }

  // 拖拽开始
  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true)
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragStart(clientX)
    setDragOffset(0)
    dragOffsetRef.current = 0
    setIsPaused(true) // 拖拽时暂停自动轮播
  }

  // 拖拽中
  useEffect(() => {
    if (!isDragging) return

    const handleMove = (e: TouchEvent | MouseEvent) => {
      e.preventDefault()
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const offset = clientX - dragStart
      setDragOffset(offset)
      dragOffsetRef.current = offset
    }

    const handleEnd = () => {
      const threshold = 50 // 拖拽阈值，超过50px才切换
      const finalOffset = dragOffsetRef.current
      
      if (Math.abs(finalOffset) > threshold) {
        if (finalOffset > 0) {
          // 向右拖拽，显示上一个
          setCurrentIndex((prev) => {
            const newIndex = prev === 0 ? team.length - 1 : prev - 1
            setIsPaused(true)
            setTimeout(() => setIsPaused(false), 3000)
            return newIndex
          })
        } else {
          // 向左拖拽，显示下一个
          setCurrentIndex((prev) => {
            const newIndex = prev === team.length - 1 ? 0 : prev + 1
            setIsPaused(true)
            setTimeout(() => setIsPaused(false), 3000)
            return newIndex
          })
        }
      }
      
      setIsDragging(false)
      setDragOffset(0)
      setDragStart(0)
      dragOffsetRef.current = 0
    }

    document.addEventListener('touchmove', handleMove, { passive: false })
    document.addEventListener('touchend', handleEnd)
    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseup', handleEnd)

    return () => {
      document.removeEventListener('touchmove', handleMove)
      document.removeEventListener('touchend', handleEnd)
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseup', handleEnd)
    }
  }, [isDragging, dragStart, team.length])

  // 移动端：实现视差滚动（Parallax Scrolling）效果 - 简化版本
  useEffect(() => {
    if (!isMobile) return
    
    let rafId: number | null = null
    let cleanup: (() => void) | null = null

    // 等待DOM渲染完成
    const timer = setTimeout(() => {
      const section = deepFocusSectionRef.current
      const bg = mobileBgRef.current
      if (!section || !bg) {
        return
      }

      const updateBackground = () => {
        const sectionEl = deepFocusSectionRef.current
        const bgEl = mobileBgRef.current
        if (!sectionEl || !bgEl) return

        const rect = sectionEl.getBoundingClientRect()
        const sectionTop = rect.top
        const sectionBottom = rect.bottom
        const windowHeight = window.innerHeight || document.documentElement.clientHeight
        
        let progress = 0
        
        if (sectionBottom < 0) {
          progress = 1
        } else if (sectionTop > windowHeight) {
          progress = 0
        } else {
          const normalizedTop = Math.max(0, Math.min(windowHeight, sectionTop))
          progress = 1 - (normalizedTop / windowHeight)
        }
        
        progress = Math.max(0, Math.min(1, progress))
        const bgPositionY = progress * 100
        
        bgEl.style.backgroundPosition = `center ${bgPositionY}%`
        bgEl.style.opacity = '1'
        bgEl.style.visibility = 'visible'

        rafId = null
      }

      const handleScroll = () => {
        if (rafId === null) {
          rafId = requestAnimationFrame(updateBackground)
        }
      }

      updateBackground()

      window.addEventListener('scroll', handleScroll, { passive: true })
      window.addEventListener('resize', handleScroll, { passive: true })

      cleanup = () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleScroll)
        if (rafId !== null) {
          cancelAnimationFrame(rafId)
        }
      }
    }, 300)

    return () => {
      clearTimeout(timer)
      if (cleanup) {
        cleanup()
      }
    }
  }, [isMobile])

  return (
    <>
      {/* 核心优势 - 圆形布局 */}
      <CoreAdvantages />

      {/* Deep Focus Areas - Full Width Section */}
      <section ref={deepFocusSectionRef} id="service-process" className="relative py-20 overflow-hidden">
        {/* Background Image */}
        {isMobile ? (
          // 移动端：实现视差滚动（Parallax Scrolling）效果 - 通用解决方案
          <div className="absolute inset-0 overflow-hidden">
            <div 
              ref={mobileBgRef}
              className="absolute z-0 bg-cover bg-no-repeat"
              style={{
                backgroundImage: 'url(/featcher.jpg)',
                backgroundPosition: 'center 0%',
                backgroundSize: 'auto 200%',
                backgroundRepeat: 'no-repeat',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                minHeight: '100vh',
                opacity: '1',
                visibility: 'visible',
                willChange: 'background-position',
                WebkitTransform: 'translateZ(0)',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            ></div>
            {/* 移动端背景遮罩层 */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-900/80 via-indigo-900/85 to-purple-900/80"></div>
          </div>
        ) : (
          // PC端：使用background-attachment: fixed
          <>
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/featcher.jpg)',
                backgroundPosition: 'center 20%',
                backgroundAttachment: 'fixed',
              }}
            ></div>
            {/* 高级感深色叠加层 */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-indigo-900/85 to-purple-900/80 z-0"></div>
          </>
        )}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">{t.serviceProcess.title}</h2>
            <div className="w-16 h-0.5 bg-teal-500 mx-auto mb-4"></div>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              {t.serviceProcess.subtitle}
            </p>
          </div>

          {/* Service Process Flow */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                step: "01",
                title: t.serviceProcess.steps.requirement.title,
                description: t.serviceProcess.steps.requirement.description,
                icon: (
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: t.serviceProcess.steps.recommendation.title,
                description: t.serviceProcess.steps.recommendation.description,
                icon: (
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: t.serviceProcess.steps.interview.title,
                description: t.serviceProcess.steps.interview.description,
                icon: (
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
              },
              {
                step: "04",
                title: t.serviceProcess.steps.onboarding.title,
                description: t.serviceProcess.steps.onboarding.description,
                icon: (
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 lg:w-20 lg:h-20 mb-3 lg:mb-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-indigo-500/40 group-hover:via-purple-500/40 group-hover:to-pink-500/40 group-hover:border-indigo-400/50 transition-all group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-purple-500/20 p-3 lg:p-4">
                  {item.icon}
                </div>
                <div className="text-white font-semibold text-sm lg:text-base xl:text-lg mb-1 lg:mb-2 whitespace-nowrap overflow-hidden text-ellipsis max-w-full px-1">{item.title}</div>
                <p className="text-white/90 text-xs lg:text-sm leading-relaxed px-1 break-words">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <img 
            src="/image/bg1.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">{t.team.title}</h2>
            <div className="w-16 h-0.5 bg-teal-500 mx-auto mb-4"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.team.subtitle}
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden relative px-2">
            <div className="overflow-hidden">
              <div 
                ref={carouselRef}
                className="flex transition-transform duration-300 ease-out"
                style={{ 
                  transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
                  transition: isDragging ? 'none' : 'transform 0.3s ease-out'
                }}
                onTouchStart={handleDragStart}
                onMouseDown={handleDragStart}
              >
                {team.map((member, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0"
                  >
                    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg w-full flex flex-col h-full min-h-[600px]">
                      <div className="relative h-96 w-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 flex-shrink-0 select-none">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          className="w-full h-full object-cover object-top pointer-events-none"
                          draggable={false}
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                        <p className="text-sm font-semibold text-blue-600 mb-3">{member.title}</p>
                        <p className="text-slate-600 text-sm leading-relaxed flex-1">{member.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {team.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualChange(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-blue-600 w-6" : "bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Carousel - 分页切换：第一页4个，第二页3个 */}
          <div className="hidden md:block relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentPage * 100}%)` }}
              >
                {pages.map((page, pageIndex) => (
                  <div
                    key={pageIndex}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className={`flex gap-6 justify-center items-stretch max-w-7xl mx-auto`}>
                      {page.length === 3 && <div style={{ width: 'calc((100% - 3 * 1.5rem) / 8)' }}></div>}
                      {page.map((member, index) => (
                        <div
                          key={index}
                          className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col min-h-[600px]"
                          style={{ width: 'calc((100% - 3 * 1.5rem) / 4)', maxWidth: 'calc((100% - 3 * 1.5rem) / 4)' }}
                        >
                          <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 flex-shrink-0">
                            <img
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                              <a href={`mailto:${member.email}`} className="text-white text-sm font-medium hover:underline break-words break-all">
                                {member.email}
                              </a>
                            </div>
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                            <p className="text-sm font-semibold text-blue-600 mb-3">{member.title}</p>
                            <p className="text-slate-600 text-sm leading-relaxed flex-1 min-h-[180px]">{member.description}</p>
                          </div>
                        </div>
                      ))}
                      {page.length === 3 && <div style={{ width: 'calc((100% - 3 * 1.5rem) / 8)' }}></div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => handlePageChange(currentPage === 0 ? totalPages - 1 : currentPage - 1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-blue-50 hover:shadow-2xl transition-all z-10 border border-slate-200 hover:border-blue-300"
              aria-label="Previous page"
            >
              <svg className="w-7 h-7 text-slate-700 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handlePageChange(currentPage === totalPages - 1 ? 0 : currentPage + 1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-blue-50 hover:shadow-2xl transition-all z-10 border border-slate-200 hover:border-blue-300"
              aria-label="Next page"
            >
              <svg className="w-7 h-7 text-slate-700 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index)}
                  className={`rounded-full transition-all ${
                    index === currentPage ? "bg-blue-600 w-8 h-2" : "bg-slate-300 w-2 h-2"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
