"use client"

import { useState, useEffect, useRef } from "react"
import { useI18n } from "@/lib/i18n/context"

export default function Team() {
  const { t } = useI18n()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

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

  // 自动轮播功能（仅移动端）
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

  // 手动切换时暂停自动轮播
  const handleManualChange = (newIndex: number) => {
    setIsPaused(true)
    setCurrentIndex(newIndex)
    // 3秒后恢复自动轮播
    setTimeout(() => {
      setIsPaused(false)
    }, 3000)
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
  )
}
