"use client"

import { useEffect, useRef, useState } from "react"

export default function Services() {
  const services = [
    {
      title: "全球高端人才寻访",
      features: [
        "千万级高端人选库",
        "全球范围人才寻访，中国，美国，新加坡，日本等",
        "资深顾问直访，精准猎寻与吸引人选，确保人岗匹配",
      ],
      category: "人才寻访",
      image: "/service/全球高端人才寻访.jpg",
    },
    {
      title: "Mapping与专家咨询",
      features: [
        "关键岗位人才库构建、目标公司盘点",
        "行业人才结构调研与薪酬竞争分析",
        "定点业务咨询，竞对业务调研",
      ],
      category: "人才咨询",
      image: "/service/人才地图与精准咨询.jpg",
    },
    {
      title: "组织优化与风险管理",
      features: [
        "组织结构与岗位体系搭建",
        "招聘流程梳理",
        "人力管理风险诊断",
      ],
      category: "组织优化",
      image: "/service/组织优化与风险管理.jpg",
    },
    {
      title: "劳务派遣与外包",
      features: [
        "IT / AI 岗位派遣与项目制外包",
        "海外团队落地与本地化灵活用工咨询",
        "外包团队管理与交付质量监控",
      ],
      category: "劳务外包",
      image: "/service/劳务派遣与外包.jpg",
    },
  ]

  const [isVisible, setIsVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState<boolean[]>([])
  const [cardsAnimationKey, setCardsAnimationKey] = useState<number[]>([]) // 用于强制重新触发动画
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let observer: IntersectionObserver | null = null

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

    return () => {
      clearTimeout(timer)
      if (observer && sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  // 移动端服务卡片加载动画 - 每次进入视口都触发
  useEffect(() => {
    // 初始化卡片可见性状态和动画key
    setCardsVisible(new Array(services.length).fill(false))
    setCardsAnimationKey(new Array(services.length).fill(0))

    let observer: IntersectionObserver | null = null

    // 延迟初始化，确保DOM已渲染
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '100px 0px 0px 0px',
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const index = cardsRef.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            if (entry.isIntersecting) {
              // 卡片进入视口，触发动画
              // 先更新动画key，强制重新渲染，然后设置为可见
              setCardsAnimationKey((prev) => {
                const newState = [...prev]
                newState[index] = (prev[index] || 0) + 1
                return newState
              })
              
              // 使用 setTimeout 确保 key 更新后再更新可见性
              setTimeout(() => {
                setCardsVisible((prev) => {
                  const newState = [...prev]
                  newState[index] = true
                  return newState
                })
              }, 10)
            } else {
              // 卡片离开视口，重置为不可见
              setCardsVisible((prev) => {
                const newState = [...prev]
                newState[index] = false
                return newState
              })
            }
          }
        })
      }, observerOptions)

      // 观察所有卡片，让动画可以重复触发
      cardsRef.current.forEach((card) => {
        if (card && observer) {
          observer.observe(card)
        }
      })
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

  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <img 
          src="/image/bg2.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* 装饰元素 */}
      <div className="absolute top-10 right-20 w-40 h-40 opacity-10">
        <img 
          src="/image/circle.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">服务介绍</h2>
          <div className="w-16 h-0.5 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">24小时触达；48小时交付；72小时安排面试</p>
        </div>

        {/* Grid Layout - 一排四个 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const isVisible = cardsVisible[index] ?? false
            const animationKey = cardsAnimationKey[index] ?? 0
            return (
              <div 
                key={`${index}-${animationKey}`}
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
                {/* 装饰性叠加层 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

              {/* Content Card */}
              <div className="bg-white rounded-3xl p-6 pt-10 pb-8 shadow-lg hover:shadow-xl transition-shadow relative z-10 flex-1 flex flex-col min-h-[240px]">
                <div className="inline-block px-5 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-lg text-base font-bold mb-4 self-start shadow-sm">
                  {service.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                
                {/* Features List */}
                <ul className="space-y-3 mb-4 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></span>
                      <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
