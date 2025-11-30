"use client"

import { useEffect, useState } from "react"
import { Brain, Layers, Globe, Zap } from "lucide-react"

interface AdvantageNode {
  title: string
  description: string
  icon: React.ReactNode
}

export default function CoreAdvantages() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // 4个优势节点
  const advantages: AdvantageNode[] = [
    {
      title: "深度行业理解",
      description: "专注AI与前沿科技领域，精准识别关键岗位与核心人才",
      icon: <Brain className="w-6 h-6" />,
    },
    {
      title: "一站式服务",
      description: "从人才寻访、团队搭建到组织优化，提供完整解决方案",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "全球交付",
      description: "千万级人才资源库，支持企业全球化用人需求",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "极速交付",
      description: "24小时触达，48小时交付，72小时安排面试",
      icon: <Zap className="w-6 h-6" />,
    },
  ]

  if (!mounted) {
    return null
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">核心优势</h2>
          <div className="w-16 h-0.5 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            我们拥有业界领先的人才库和专业的顾问团队，为您提供卓越的人才解决方案
          </p>
        </div>

        {/* 4个矩形并排布局 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md border border-slate-200 p-6 lg:p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 hover:border-blue-300 transition-all duration-300 ease-out cursor-pointer"
            >
              {/* 图标 */}
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-200 to-blue-300 border-2 border-blue-400 flex items-center justify-center text-blue-600 shadow-md mb-4 group-hover:scale-110 group-hover:rotate-3 group-hover:from-blue-300 group-hover:to-blue-400 group-hover:border-blue-500 transition-all duration-300 ease-out">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
              </div>
              
              {/* 标题和描述 */}
              <h4 className="font-bold text-slate-900 text-lg md:text-xl mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                {advantage.title}
              </h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
