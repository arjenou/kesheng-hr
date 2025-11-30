"use client"

import { useEffect, useRef, useState } from "react"
import CoreAdvantages from "./core-advantages"

export default function Advantages() {
  const [isMobile, setIsMobile] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [hotJobsIndex, setHotJobsIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)
  const [dragStart, setDragStart] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragOffsetRef = useRef(0)
  const deepFocusSectionRef = useRef<HTMLElement>(null)
  const mobileBgRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const team = [
    {
      name: "李楠",
      title: "高级合伙人",
      description: "拥有15年以上人力资源与组织管理经验，心理学硕士，国家二级心理咨询师",
      image: "/member/李楠.jpg",
      email: "linan07@keshengcaidao.com",
    },
    {
      name: "王佳",
      title: "高级合伙人",
      description: "资深猎头专家，10年以上高阶岗位寻访经验，计算机专业背景",
      image: "/member/王佳.jpg",
      email: "luck@keshengcaidao.com",
    },
    {
      name: "温煦森",
      title: "高级合伙人",
      description: "精通人才Mapping，全球顶尖实验室定点寻访专家，服务过多个一线互联网企业",
      image: "/member/温煦森.jpg",
      email: "contact@keshengcaidao.com",
    },
    {
      name: "魏忻伶",
      title: "合伙人",
      description: "资深人力资源专家，专注于组织发展和人才战略",
      image: "/member/魏忻伶.jpg",
      email: "contact@keshengcaidao.com",
    },
    {
      name: "李晟洋",
      title: "高级合伙人",
      description: "资深人力资源与猎头专家，专注于高端人才寻访和团队建设",
      image: "/member/李晟洋.jpg",
      email: "contact@keshengcaidao.com",
    },
  ]

  const advantages = [
    {
      title: "深度行业理解",
      description: "专注AI与前沿科技领域，精准识别关键岗位与核心人才",
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
      title: "一站式服务",
      description: "从人才寻访、团队搭建到组织优化，提供完整解决方案",
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
      title: "全球交付",
      description: "千万级人才资源库，支持企业全球化用人需求",
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
      title: "极速交付",
      description: "24小时触达，48小时交付，72小时安排面试",
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

  const jobs = [
    {
      date: "",
      author: "科盛",
      title: "科盛咨询受邀出席 2025 高德地图猎头供应商峰会",
      description: "斩获\"最佳猎头贡献奖\"",
      image: "/公司活动/4.JPEG",
      link: "https://ay8cup2mj4.feishu.cn/wiki/WQaiwfI2nitTezkOgRLchHvUnvd",
    },
    {
      date: "",
      author: "科盛",
      title: "科盛咨询 2024-2025 财年总结会圆满落幕",
      description: "全员自驾游开启活力新程",
      image: "/公司活动/1.jpeg",
      link: "https://ay8cup2mj4.feishu.cn/wiki/RiKpwWz9kiwA33k4oQjcrCS5nch",
    },
    {
      date: "",
      author: "科盛",
      title: "科盛咨询 2023-2024 财年总结会圆满收官",
      description: "全员泰国团建共启新程",
      image: "/公司活动/2.JPEG",
      link: "https://ay8cup2mj4.feishu.cn/wiki/DIO0wSsuqilmp4kVSj3c23dNn8c",
    },
    {
      date: "",
      author: "科盛",
      title: "科盛咨询 2023 财年团建",
      description: "芽庄一周行，以热爱续新程",
      image: "/公司活动/3.JPEG",
      link: "https://ay8cup2mj4.feishu.cn/docx/J3Mgd33f2oMguMxWVEKcCIQanQf",
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

  // 团队成员自动轮播功能（仅移动端）
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

  // 手动切换时暂停自动轮播
  const handleManualChange = (newIndex: number) => {
    setIsPaused(true)
    setCurrentIndex(newIndex)
    // 3秒后恢复自动轮播
    setTimeout(() => {
      setIsPaused(false)
    }, 3000)
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

  // 热门职位响应式设置每次显示的卡片数量
  useEffect(() => {
    const updateItemsPerView = () => {
      let newItemsPerView = 4
      if (window.innerWidth < 768) {
        newItemsPerView = 1 // 移动端显示1个
      } else if (window.innerWidth < 1024) {
        newItemsPerView = 2 // 平板显示2个
      }
      
      setItemsPerView(newItemsPerView)
      // 重置索引，确保显示正确
      setHotJobsIndex(0)
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const totalPages = Math.ceil(jobs.length / itemsPerView)

  // 热门职位自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setHotJobsIndex((prev) => {
        const currentPage = Math.floor(prev / itemsPerView)
        const nextPage = (currentPage + 1) % totalPages
        return nextPage * itemsPerView
      })
    }, 4000) // 每4秒切换一次

    return () => clearInterval(interval)
  }, [totalPages, itemsPerView])

  const goToNext = () => {
    setHotJobsIndex((prev) => {
      const currentPage = Math.floor(prev / itemsPerView)
      const nextPage = (currentPage + 1) % totalPages
      return nextPage * itemsPerView
    })
  }

  const goToPrev = () => {
    setHotJobsIndex((prev) => {
      const currentPage = Math.floor(prev / itemsPerView)
      const prevPage = currentPage === 0 ? totalPages - 1 : currentPage - 1
      return prevPage * itemsPerView
    })
  }

  const goToPage = (page: number) => {
    setHotJobsIndex(page * itemsPerView)
  }

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
            <h2 className="text-4xl font-bold text-white mb-3">服务流程</h2>
            <div className="w-16 h-0.5 bg-teal-500 mx-auto mb-4"></div>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              让复杂的招聘变得高效，透明，可控
            </p>
          </div>

          {/* Service Process Flow */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                step: "01",
                title: "商谈需求",
                description: "精准理解岗位要求，构建人岗双向画像",
                icon: (
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "人选推荐",
                description: "24小时内首批人选推荐，基于自研AI匹配引擎高效精准",
                icon: (
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "面试推进",
                description: "72小时内推进面试，从约面到反馈，专业顾问全程追踪",
                icon: (
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
              },
              {
                step: "04",
                title: "入职成功",
                description: "30天内完成入职，从Offer到入职，实现节奏可视化",
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
                <div className="text-white font-bold text-lg lg:text-xl mb-1 lg:mb-2">{item.step}</div>
                <div className="text-white font-semibold text-base lg:text-lg mb-1 lg:mb-2">{item.title}</div>
                <p className="text-white/90 text-xs lg:text-sm leading-relaxed px-1">{item.description}</p>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-3">我们的团队</h2>
            <div className="w-16 h-0.5 bg-teal-500 mx-auto mb-4"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              由行业资深专家组成的顾问团队，为您提供专业的人才解决方案
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

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col h-full"
              >
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 flex-shrink-0">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <a href={`mailto:${member.email}`} className="text-white text-sm font-medium hover:underline">
                      {member.email}
                    </a>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-3">{member.title}</p>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Jobs Section */}
      <section id="hot-jobs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">公司动态</h2>
            <div className="w-16 h-0.5 bg-teal-500 mx-auto"></div>
          </div>

          {/* 轮播容器 */}
          <div className="relative">
            {/* 轮播内容 */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${hotJobsIndex * (100 / itemsPerView)}%)` }}
              >
                {jobs.map((job, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-slate-100 h-full">
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden bg-slate-100">
                        <img
                          src={job.image}
                          alt={job.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* 装饰性渐变叠加 */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        {job.date && (
                          <div className="text-xs text-slate-500 mb-3">
                            {job.date} / {job.author}
                          </div>
                        )}
                        {!job.date && (
                          <div className="text-xs text-slate-500 mb-3">
                            {job.author}
                          </div>
                        )}
                        <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">{job.title}</h3>
                        <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">{job.description}</p>
                        <a
                          href={job.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                        >
                          查看详情
                          <span className="text-blue-600">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 导航箭头 */}
            <button
              onClick={goToPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10 hidden lg:flex items-center justify-center"
              aria-label="上一个"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10 hidden lg:flex items-center justify-center"
              aria-label="下一个"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* 指示器 */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`h-2 rounded-full transition-all ${
                    Math.floor(hotJobsIndex / itemsPerView) === index
                      ? 'bg-teal-500 w-8'
                      : 'bg-slate-300 w-2 hover:bg-slate-400'
                  }`}
                  aria-label={`跳转到第 ${index + 1} 页`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
