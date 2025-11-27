"use client"

import { useEffect, useRef, useState } from "react"

export default function Services() {
  const services = [
    {
      title: "全球高端人才寻访",
      description: "1. 千万级高端人选库\n2. 全球范围人才寻访，中国，美国，新加坡，日本等\n3. 资深顾问直访，精准猎寻与吸引人选，确保人岗匹配\n服务承诺：24小时触达；48小时交付；72小时安排面试",
      category: "人才寻访",
      image: "/service/全球高端人才寻访.jpg",
    },
    {
      title: "Mapping与专家咨询",
      description: "1. 关键岗位人才库构建、目标公司盘点\n2. 行业人才结构调研与薪酬竞争分析\n3. 定点业务咨询，竞对业务调研",
      category: "人才咨询",
      image: "/service/人才地图与精准咨询.jpg",
    },
    {
      title: "组织优化与风险管理",
      description: "1. 组织结构与岗位体系搭建\n2. 招聘流程梳理\n3. 人力管理风险诊断",
      category: "组织优化",
      image: "/service/组织优化与风险管理.jpg",
    },
    {
      title: "劳务派遣与外包",
      description: "1. IT / AI 岗位派遣与项目制外包\n2. 海外团队落地与本地化灵活用工咨询\n3. 外包团队管理与交付质量监控",
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
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">服务介绍</h2>
          <div className="w-16 h-0.5 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">为您提供全面的人才解决方案</p>
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
                  </div>

              {/* Content Card */}
              <div className="bg-white rounded-3xl p-6 pt-10 pb-8 shadow-lg hover:shadow-xl transition-shadow relative z-10 flex-1 flex flex-col min-h-[240px]">
                <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-600 rounded-lg text-sm font-medium mb-3 self-start">
                  {service.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <div className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{service.description}</div>
              </div>
            </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
