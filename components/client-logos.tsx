"use client"

import { useState, useEffect } from "react"

export default function ClientLogos() {
  // 添加版本号以清除缓存
  const version = "20241127"
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const logos = [
    { name: "360", image: "/icone-spnn/360.png" },
    { name: "MiniMax", image: "/icone-spnn/MiniMax.png" },
    { name: "夸克", image: "/icone-spnn/夸克.png" },
    { name: "小鹏汽车", image: "/icone-spnn/小鹏汽车.png" },
    { name: "支付宝", image: "/icone-spnn/支付宝.png" },
    { name: "通义", image: "/icone-spnn/通义.png" },
    { name: "Bigo", image: "/icone-spnn/bigo.png" },
    { name: "Momo", image: "/icone-spnn/momo.png" },
    { name: "千寻智能", image: "/icone-spnn/千寻智能.png" },
    { name: "它石智能", image: "/icone-spnn/它石智能.png" },
    { name: "快手", image: "/icone-spnn/快手.jpg" },
    { name: "智源", image: "/icone-spnn/智源.png" },
    { name: "灵初智能", image: "/icone-spnn/灵初智能.png" },
    { name: "青心意创", image: "/icone-spnn/青心意创.png" },
  ]

  // 移动端自动轮播：每排显示6个logo（2排共12个），每次移动一排
  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768
    if (!checkMobile()) return

    const logosPerRow = 6 // 每排6个logo
    const totalRows = Math.ceil(logos.length / logosPerRow)
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalRows)
    }, 3000) // 每3秒切换一次

    return () => clearInterval(interval)
  }, [logos.length])

  return (
    <section id="client-logos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">合作伙伴</h2>
          <div className="w-16 h-0.5 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            我们与众多知名企业建立了长期合作关系，共同推动行业发展
          </p>
        </div>

        {/* PC端：网格布局 */}
        <div className="hidden lg:grid lg:grid-cols-7 gap-6 md:gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 md:h-28 lg:h-32"
            >
              <img
                src={`${logo.image}?v=${version}`}
                alt={logo.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* 移动端：两排自动轮播 */}
        <div className="lg:hidden relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {Array.from({ length: Math.ceil(logos.length / 6) }).map((_, rowIndex) => {
              const rowLogos = logos.slice(rowIndex * 6, (rowIndex + 1) * 6)
              return (
                <div
                  key={rowIndex}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="grid grid-cols-3 gap-4">
                    {rowLogos.map((logo, logoIndex) => (
                      <div
                        key={logoIndex}
                        className="flex items-center justify-center h-20"
                      >
                        <img
                          src={`${logo.image}?v=${version}`}
                          alt={logo.name}
                          className="h-full w-auto object-contain"
                        />
                      </div>
                    ))}
                    {/* 如果一排不足6个，填充空位 */}
                    {rowLogos.length < 6 && Array.from({ length: 6 - rowLogos.length }).map((_, emptyIndex) => (
                      <div key={`empty-${emptyIndex}`} className="h-20"></div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* 指示器 */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(logos.length / 6) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? 'bg-teal-500 w-6' : 'bg-slate-300 w-2'
                }`}
                aria-label={`跳转到第 ${index + 1} 页`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

