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
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

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

  return (
    <>
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Video Section */}
        <div ref={videoRef} className="mt-12 mb-28 rounded-3xl overflow-hidden shadow-2xl max-h-[400px] relative bg-slate-200">
          {shouldLoadVideo ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              x5-playsinline="true"
              x5-video-player-type="h5"
              x5-video-player-fullscreen="true"
              x5-video-orientation="portraint"
              preload="metadata"
              poster="/placeholder.jpg"
              controls
            >
              <source src="/business-video.mp4" type="video/mp4" />
              您的浏览器不支持视频播放
            </video>
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
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col"
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
          ))}
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
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
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
