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
    <section id="advantages" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">核心优势</h2>
          <div className="w-16 h-0.5 bg-teal-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            我们拥有业界领先的人才库和专业的顾问团队，为您提供卓越的人才解决方案
          </p>
        </div>

        {/* 4个矩形并排布局 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg border border-slate-200 p-8 lg:p-10 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-3 hover:border-blue-400 transition-all duration-300 ease-out cursor-pointer min-h-[280px]"
            >
              {/* 图标 */}
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-200 to-blue-300 border-2 border-blue-400 flex items-center justify-center text-blue-600 shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:from-blue-300 group-hover:to-blue-400 group-hover:border-blue-500 transition-all duration-300 ease-out">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
              </div>
              
              {/* 标题和描述 */}
              <h4 className="font-bold text-slate-900 text-xl md:text-2xl mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                {advantage.title}
              </h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300 flex-1">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
