"use client"

import { useState, useEffect, useRef } from "react"
import { useI18n } from "@/lib/i18n/context"

export default function Team() {
  const { t } = useI18n()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const desktopIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const carouselContainerRef = useRef<HTMLDivElement>(null)

  const team = [
    {
      name: "李楠",
      title: "高级合伙人",
      description: "拥有 15 年以上人力资源与组织管理经验，深耕科技行业核心岗位招聘、组织发展与团队搭建。曾服务多家世界 500 强及头部科技企业，并担任上市集团 HR 负责人，具备丰富的组织战略与人才体系建设经验，并以心理学专业背景提升对人才能力、团队结构和组织管理问题的整体判断力。",
      image: "/member/李楠.jpg",
      email: "linan07@keshengcaidao.com",
    },
    {
      name: "王佳",
      title: "高级合伙人",
      description: "专注 AI 与工程技术领域人才招聘，拥有 10 年以上高阶技术岗位寻访经验。具备计算机专业背景，对大模型、平台工程等核心技术体系有系统理解，为科技企业提供高精准度的技术人才解决方案。",
      image: "/member/王佳.jpg",
      email: "luck@keshengcaidao.com",
    },
    {
      name: "李晟洋",
      title: "高级合伙人",
      description: "具备 10 年以上企业管理与组织运营经验，专注组织诊断、团队升级与关键岗位招聘。深度理解企业增长阶段的人才结构需求，擅长为客户提供兼具战略视角与落地能力的人才与组织优化方案。经验，涉猎众多行业，精通组织优化，团队建设，组织赋能能领域。计算机专业背景",
      image: "/member/李晟洋.jpg",
      email: "lishengyang@keshengcaidao.com",
    },
    {
      name: "温煦森",
      title: "高级合伙人",
      description: "长期服务全球领先科研机构和 AI 实验室，深耕高精度人才 Mapping 与战略级岗位寻访。擅长支持科研型组织的团队搭建与关键岗位引进，多次成功推动 VP、C-level 等高端人才的定向招募。",
      image: "/member/温煦森.jpg",
      email: "fuller@keshengcaidao.com",
    },
    {
      name: "闫鹏",
      title: "合伙人",
      description: "深耕 AI 大模型与算法类岗位招聘，拥有 10 年以上猎头经验。擅长高复杂度技术岗位的深度寻访与候选人评估，对前沿技术团队的人才结构和能力要求具备成熟认知。",
      image: "/member/闫鹏.jpg",
      email: "yanpeng@keshengcaidao.com",
    },
    {
      name: "李浩文",
      title: "合伙人",
      description: "聚焦产品与运营方向的核心岗位招聘，具备计算机背景及丰富的业务理解能力。擅长从用户体验与业务增长视角识别关键型产品人才，为企业的产品战略与组织发展提供专业支持。",
      image: "/member/李浩文.jpg",
      email: "bob@keshengcaidao.com",
    },
    {
      name: "魏忻伶",
      title: "合伙人",
      description: "专注研发与技术体系岗位招聘，对企业技术架构与研发能力模型有全面认知。擅长从业务场景与技术深度双维度评估候选人，为客户提供高匹配度的研发人才交付方案。",
      image: "/member/魏忻伶.jpg",
      email: "daisy@keshengcaidao.com",
    },
  ]

  // 复制数组以实现无缝循环（复制3次）
  const duplicatedTeam = [...team, ...team, ...team]
  const cardWidth = 100 / 5 // 每个卡片占20%宽度（一排5个）

  // PC端连续滚动自动播放
  useEffect(() => {
    const checkDesktop = () => {
      return window.innerWidth >= 768
    }

    if (!checkDesktop()) return

    const startAutoPlay = () => {
      if (desktopIntervalRef.current) {
        clearInterval(desktopIntervalRef.current)
      }
      
      if (!isPaused) {
        desktopIntervalRef.current = setInterval(() => {
          setTranslateX((prev) => {
            const step = cardWidth / 50 // 每次移动更小的距离，使滚动更平滑
            const newTranslate = prev + step
            // 当滚动到第二个数组的末尾时（即 team.length * 2），重置到第一个数组的开始位置
            if (newTranslate >= cardWidth * team.length * 2) {
              return cardWidth * team.length
            }
            return newTranslate
          })
        }, 50) // 每50ms更新一次，配合CSS transition实现丝滑效果
      }
    }

    startAutoPlay()

    return () => {
      if (desktopIntervalRef.current) {
        clearInterval(desktopIntervalRef.current)
      }
    }
  }, [isPaused, cardWidth, team.length])

  // 自动轮播功能（移动端）
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
  }, [isPaused])

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

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t.team.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.team.subtitle}
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative px-2">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {team.map((member, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg w-full flex flex-col h-full min-h-[600px]">
                    <div className="relative h-96 w-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 flex-shrink-0">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
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

          {/* Navigation Arrows */}
          <button
            onClick={() => handleManualChange(currentIndex === 0 ? team.length - 1 : currentIndex - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => handleManualChange(currentIndex === team.length - 1 ? 0 : currentIndex + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

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

        {/* Desktop Carousel - 连续滚动 */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden" ref={carouselContainerRef}>
            <div 
              className="flex"
              style={{ 
                transform: `translateX(-${translateX}%)`,
                transition: 'transform 0.5s linear' // 使用linear过渡，实现丝滑滚动
              }}
              onMouseEnter={handlePauseToggle}
              onMouseLeave={handlePauseToggle}
            >
              {duplicatedTeam.map((member, index) => (
                <div
                  key={`member-${index}`}
                  className="flex-shrink-0"
                  style={{ width: `${cardWidth}%` }}
                >
                  <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col h-full mx-4">
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
                      <p className="text-slate-600 text-sm leading-relaxed flex-1">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
