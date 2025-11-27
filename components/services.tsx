"use client"

import { useEffect, useRef, useState } from "react"

export default function Services() {
  const services = [
    {
      title: "全球高端人才寻访",
      description: "千万级高端人选库，全球范围人才寻访。资深顾问直访，精准猎寻与吸引人选，确保人岗匹配",
      category: "人才寻访",
      image: "/service/全球高端人才寻访.jpg",
    },
    {
      title: "人才地图与精准咨询",
      description: "关键岗位人才库构建、目标公司盘点。行业人才结构调研与薪酬竞争分析",
      category: "人才咨询",
      image: "/service/人才地图与精准咨询.jpg",
    },
    {
      title: "组织优化与风险管理",
      description: "组织结构与岗位体系梳理。招聘流程与人力管理风险诊断",
      category: "组织优化",
      image: "/service/组织优化与风险管理.jpg",
    },
    {
      title: "劳务派遣与外包",
      description: "IT / AI 岗位派遣与项目制外包。海外团队落地与本地化灵活用工咨询。外包团队管理与交付质量监控",
      category: "劳务外包",
      image: "/service/劳务派遣与外包.jpg",
    },
  ]

  const [isVisible, setIsVisible] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [posterUrl, setPosterUrl] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [isWeChat, setIsWeChat] = useState(false)
  const [cardsVisible, setCardsVisible] = useState<boolean[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  const videoElementRef = useRef<HTMLVideoElement>(null)
  const deepFocusSectionRef = useRef<HTMLElement>(null)
  const mobileBgRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let observer: IntersectionObserver | null = null
    let videoObserver: IntersectionObserver | null = null

    // 延迟检查，确保DOM已完全渲染
    const timer = setTimeout(() => {
      const checkVisibility = () => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect()
          const viewportHeight = window.innerHeight || document.documentElement.clientHeight
          // 如果元素在视口内或接近视口，立即显示
          const isInViewport = rect.top < viewportHeight + 500 && rect.bottom > -500
          if (isInViewport) {
            setIsVisible(true)
            return true
          }
        }
        return false
      }

      // 立即检查一次
      if (checkVisibility()) {
        return
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true)
            }
          })
        },
        { threshold: 0.01, rootMargin: '300px 0px 0px 0px' }
      )

      const currentRef = sectionRef.current
      if (currentRef) {
        observer.observe(currentRef)
      }

      // 如果2秒后还没有触发，强制显示内容（fallback）
      setTimeout(() => {
        setIsVisible(true)
      }, 2000)
    }, 100)

    // 视频懒加载：只有当视频容器进入视口时才加载视频
    const videoTimer = setTimeout(() => {
      if (videoRef.current) {
        videoObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setShouldLoadVideo(true)
                // 加载后取消观察
                if (videoObserver && videoRef.current) {
                  videoObserver.unobserve(videoRef.current)
                }
              }
            })
          },
          { threshold: 0.1, rootMargin: '200px 0px 0px 0px' }
        )

        videoObserver.observe(videoRef.current)
      }
    }, 200)

    return () => {
      clearTimeout(timer)
      clearTimeout(videoTimer)
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      if (videoObserver && videoRef.current) {
        videoObserver.unobserve(videoRef.current)
      }
    }
  }, [])

  // 捕获视频第一帧作为封面
  useEffect(() => {
    if (shouldLoadVideo && videoElementRef.current && !posterUrl) {
      const video = videoElementRef.current
      
      const captureFirstFrame = () => {
        try {
          // 确保视频尺寸有效
          if (video.videoWidth === 0 || video.videoHeight === 0) {
            // 如果视频尺寸无效，等待loadeddata事件
            video.addEventListener('loadeddata', () => {
              if (video.videoWidth > 0 && video.videoHeight > 0) {
                captureFrame()
              }
            }, { once: true })
            return
          }
          
          captureFrame()
        } catch (error) {
          console.error('Failed to capture first frame:', error)
        }
      }
      
      const captureFrame = () => {
        // 设置视频时间为第一帧
        video.currentTime = 0.1
        
        // 等待视频帧加载
        const onSeeked = () => {
          try {
            // 创建canvas来捕获第一帧
            const canvas = document.createElement('canvas')
            canvas.width = video.videoWidth
            canvas.height = video.videoHeight
            
            const ctx = canvas.getContext('2d')
            if (ctx) {
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
              
              // 转换为base64图片
              const dataUrl = canvas.toDataURL('image/jpeg', 0.85)
              setPosterUrl(dataUrl)
            }
          } catch (error) {
            console.error('Failed to draw frame:', error)
          }
        }
        
        video.addEventListener('seeked', onSeeked, { once: true })
      }
      
      if (video.readyState >= 2) {
        // 视频元数据已加载
        captureFirstFrame()
      } else {
        // 等待视频元数据加载
        video.addEventListener('loadedmetadata', captureFirstFrame, { once: true })
      }
    }
  }, [shouldLoadVideo, posterUrl])

  // 视频加载后尝试自动播放（PC端）
  useEffect(() => {
    if (shouldLoadVideo && videoElementRef.current) {
      const video = videoElementRef.current
      // 检测是否是移动设备
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768
      
      if (!isMobile) {
        // PC端尝试自动播放
        const playPromise = video.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
            })
            .catch(() => {
              // 自动播放失败，显示播放按钮
              setIsPlaying(false)
            })
        }
      }
    }
  }, [shouldLoadVideo])

  // 移动端服务卡片加载动画
  useEffect(() => {
    // 初始化卡片可见性状态
    setCardsVisible(new Array(services.length).fill(false))

    let observer: IntersectionObserver | null = null

    // 延迟初始化，确保DOM已渲染
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '100px 0px 0px 0px',
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && observer) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setCardsVisible((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
              // 观察后取消观察
              observer.unobserve(entry.target)
            }
          }
        })
      }, observerOptions)

      // 检查卡片是否已经在视口中
      const checkInitialVisibility = () => {
        cardsRef.current.forEach((card, index) => {
          if (card) {
            const rect = card.getBoundingClientRect()
            const windowHeight = window.innerHeight || document.documentElement.clientHeight
            const isInViewport = rect.top < windowHeight + 200 && rect.bottom > -200
            
            if (isInViewport) {
              setCardsVisible((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            } else if (observer) {
              observer.observe(card)
            }
          }
        })
      }

      checkInitialVisibility()
    }, 300)

    return () => {
      clearTimeout(timer)
      const currentObserver = observer
      if (currentObserver) {
        cardsRef.current.forEach((card) => {
          if (card) {
            currentObserver.unobserve(card)
          }
        })
      }
    }
  }, [services.length])

  // 检测是否是移动设备（包括微信浏览器）
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) || window.innerWidth < 768
      // 检测微信浏览器（X5内核）
      const isWeChatBrowser = /MicroMessenger/i.test(userAgent) || /QQBrowser/i.test(userAgent)
      setIsWeChat(isWeChatBrowser)
      setIsMobile(isMobileDevice || isWeChatBrowser)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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
        console.log('Parallax elements not found:', { section: !!section, bg: !!bg })
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
        const sectionHeight = sectionEl.offsetHeight
        const scrollY = window.pageYOffset || window.scrollY || document.documentElement.scrollTop

        // 计算section在视口中的位置比例
        // 实现视差滚动：背景位置根据section滚动位置动态调整
        // 当section顶部在视口顶部时，显示背景底部（70%）
        // 当section顶部在视口底部时，显示背景顶部（0%）
        
        // 计算section相对于视口的位置
        // sectionTop = 0 时（section顶部在视口顶部），progress = 1
        // sectionTop = windowHeight 时（section顶部刚进入视口），progress = 0
        // sectionTop < 0 时（section在视口上方），progress > 1，但限制为1
        // sectionBottom < 0 时（section完全在视口上方），progress = 1
        
        let progress = 0
        
        if (sectionBottom < 0) {
          // section完全在视口上方，显示背景底部
          progress = 1
        } else if (sectionTop > windowHeight) {
          // section完全在视口下方，显示背景顶部
          progress = 0
        } else {
          // section在视口中或部分在视口中
          // 计算进度：基于section顶部到视口顶部的距离
          // 当sectionTop = 0时，progress = 1
          // 当sectionTop = windowHeight时，progress = 0
          const normalizedTop = Math.max(0, Math.min(windowHeight, sectionTop))
          progress = 1 - (normalizedTop / windowHeight)
        }
        
        // 背景位置：从0%到100%，让效果更明显
        // 限制在0-1之间，确保背景位置在合理范围内
        progress = Math.max(0, Math.min(1, progress))
        // 对于横版图片，使用更大的范围（0%到100%）来显示更多内容
        const bgPositionY = progress * 100
        
        // 应用样式
        bgEl.style.backgroundPosition = `center ${bgPositionY}%`
        bgEl.style.opacity = '1'
        bgEl.style.visibility = 'visible'
        
        // 调试信息（开发时使用）
        if (process.env.NODE_ENV === 'development') {
          console.log('Parallax:', {
            scrollY,
            sectionTop: Math.round(sectionTop),
            progress: progress.toFixed(2),
            bgPosition: `${bgPositionY.toFixed(1)}%`
          })
        }

        rafId = null
      }

      const handleScroll = () => {
        if (rafId === null) {
          rafId = requestAnimationFrame(updateBackground)
        }
      }

      // 立即执行一次
      updateBackground()

      // 监听滚动
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
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Video Section */}
        <div ref={videoRef} className="mt-12 mb-28 rounded-3xl overflow-hidden shadow-2xl max-h-[400px] relative bg-slate-200">
          {shouldLoadVideo ? (
            <>
              <video
                ref={videoElementRef}
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                webkit-playsinline="true"
                x5-playsinline="true"
                x5-video-player-type="h5"
                x5-video-player-fullscreen="true"
                x5-video-orientation="portraint"
                preload="metadata"
                poster={posterUrl || "/placeholder.jpg"}
                controls={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/business-video.mp4" type="video/mp4" />
                您的浏览器不支持视频播放
              </video>
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer group"
                  onClick={() => {
                    if (videoElementRef.current) {
                      videoElementRef.current.play()
                      setIsPlaying(true)
                    }
                  }}
                >
                  <div className="bg-white/90 rounded-full p-6 group-hover:bg-white transition-all group-hover:scale-110 shadow-xl">
                    <svg 
                      className="w-12 h-12 text-blue-600 ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-slate-200">
              <img 
                src="/placeholder.jpg" 
                alt="视频预览" 
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-slate-600 font-medium">视频加载中...</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mb-24 lg:mb-32">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">服务介绍</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">为您提供全面的人才解决方案</p>
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8">
          {services.map((service, index) => {
            const isVisible = cardsVisible[index] ?? false
            return (
              <div 
                key={index}
                ref={(el) => {
                  if (el) {
                    cardsRef.current[index] = el
                  }
                }}
                className={`group relative flex flex-col transition-all duration-700 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-20'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                }}
              >
              {/* Image Section - 溜出卡片 */}
              <div className="relative overflow-hidden rounded-t-3xl h-64 mb-[-2rem]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                  </div>

              {/* Content Card */}
              <div className="bg-white rounded-3xl p-6 pt-10 pb-8 shadow-lg hover:shadow-xl transition-shadow relative z-10 flex-1 flex flex-col min-h-[240px]">
                <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium mb-3 self-start">
                  {service.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
            )
          })}
        </div>

        {/* PC Circular Layout */}
        <div className="hidden lg:flex relative h-[900px] items-center justify-center mb-24">
          <div ref={sectionRef} className="absolute top-0 left-0 w-full h-1"></div>
          {services.map((service, index) => {
            // 计算每个卡片在圆形上的位置（4个卡片，每个90度）
            const angle = (index * 90 - 90) * (Math.PI / 180) // 转换为弧度，从顶部开始
            const radius = 320 // 圆形半径（像素）
            
            // 计算位置（相对于中心点）
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius
            
            return (
              <div
                key={index}
                className={`absolute group transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: isVisible 
                    ? `translate(-50%, -50%)` 
                    : `translate(-50%, calc(-50% + 80px))`,
                  width: '280px',
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <div className="relative flex flex-col">
                  {/* Image Section - 溜出卡片 */}
                  <div className="relative overflow-hidden rounded-t-3xl h-64 mb-[-2rem]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Card */}
                  <div className="bg-white rounded-3xl p-6 pt-10 pb-8 shadow-lg hover:shadow-xl transition-shadow relative z-10 flex-1 flex flex-col min-h-[240px]">
                    <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium mb-3 self-start">
                      {service.category}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>

    {/* Deep Focus Areas - Full Width Section */}
    <section ref={deepFocusSectionRef} className="relative py-20 overflow-hidden">
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
              backgroundSize: 'auto 200%', // 横版图片：保持宽度自动，高度放大到200%，让垂直方向有更多内容可滚动
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
              WebkitTransform: 'translateZ(0)', // 硬件加速
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden', // 优化渲染
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
          <h2 className="text-4xl font-bold text-white mb-4">深耕领域</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            我们专注服务于人工智能、大模型、云服务平台、金融科技、前沿科技等领域
          </p>
          </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {[
            { name: "人工智能", icon: "/icon/icons8-人工智能-100.png" },
            { name: "大模型", icon: "/icon/icons8-工程-100.png" },
            { name: "云服务平台", icon: "/icon/icons8-云开发-100.png" },
            { name: "金融科技", icon: "/icon/icons8-金融科技-100.png" },
            { name: "前沿科技", icon: "/icon/icons8-simulation-100.png" },
          ].map((item) => (
            <div key={item.name} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 mb-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-indigo-500/40 group-hover:via-purple-500/40 group-hover:to-pink-500/40 group-hover:border-indigo-400/50 transition-all group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-purple-500/20 p-4">
                <img 
                  src={item.icon} 
                  alt={item.name}
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
              <p className="text-white font-medium text-lg">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
