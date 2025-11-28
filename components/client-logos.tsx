"use client"

import { useState, useEffect } from "react"

export default function ClientLogos() {
  // 添加版本号以清除缓存
  const version = "20241127"
  const [isMobile, setIsMobile] = useState(false)
  
  const logos = [
    { name: "360", image: "/icone-spnn/360.png" },
    { name: "360数科", image: "/icone-spnn/360数科.png" },
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
    { name: "Collov", image: "/icone-spnn/Collov.png" },
    { name: "Deepseek", image: "/icone-spnn/Deepseek.png" },
    { name: "Soul", image: "/icone-spnn/Soul.png" },
    { name: "Xreal", image: "/icone-spnn/Xreal.png" },
    { name: "小米", image: "/icone-spnn/小米.png" },
    { name: "掌阅科技", image: "/icone-spnn/掌阅科技.png" },
    { name: "水木分子", image: "/icone-spnn/水木分子.png" },
    { name: "淘宝", image: "/icone-spnn/淘宝.png" },
    { name: "白龙马出行", image: "/icone-spnn/白龙马出行.png" },
    { name: "脉脉", image: "/icone-spnn/脉脉.png" },
    { name: "蚂蚁金服", image: "/icone-spnn/蚂蚁金服.png" },
    { name: "钉钉", image: "/icone-spnn/钉钉.png" },
    { name: "阿里云", image: "/icone-spnn/阿里云.png" },
    { name: "阿里巴巴", image: "/icone-spnn/阿里巴巴.png" },
    { name: "饿了么", image: "/icone-spnn/饿了么.png" },
    { name: "高德地图", image: "/icone-spnn/高德地图.png" },
  ]

  // 将logo分成两排，并复制以实现无缝循环
  const logosPerRow = isMobile ? 3 : 7
  const firstRowLogos: typeof logos = []
  const secondRowLogos: typeof logos = []
  
  logos.forEach((logo, index) => {
    if (index % 2 === 0) {
      firstRowLogos.push(logo)
    } else {
      secondRowLogos.push(logo)
    }
  })
  
  // 复制数组以实现无缝循环（每排复制3次）
  const duplicatedFirstRow = [...firstRowLogos, ...firstRowLogos, ...firstRowLogos]
  const duplicatedSecondRow = [...secondRowLogos, ...secondRowLogos, ...secondRowLogos]

  // 检测屏幕尺寸
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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

        {/* PC端和移动端：无限循环轮播 */}
        <div className="relative overflow-hidden">
          {/* 第一排 */}
          <div className="mb-4 md:mb-6">
            <div className="flex animate-scroll-left">
              {duplicatedFirstRow.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className={`flex items-center justify-center flex-shrink-0 px-2 md:px-3 lg:px-4 ${
                    isMobile ? 'h-20 w-[calc((100vw-2rem)/3)]' : 'h-24 md:h-28 lg:h-32 w-[calc((100vw-8rem)/7)]'
                  }`}
                >
                  <img
                    src={`${logo.image}?v=${version}`}
                    alt={logo.name}
                    className="h-full w-auto object-contain max-w-full"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* 第二排 */}
          <div>
            <div className="flex animate-scroll-right">
              {duplicatedSecondRow.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className={`flex items-center justify-center flex-shrink-0 px-2 md:px-3 lg:px-4 ${
                    isMobile ? 'h-20 w-[calc((100vw-2rem)/3)]' : 'h-24 md:h-28 lg:h-32 w-[calc((100vw-8rem)/7)]'
                  }`}
                >
                  <img
                    src={`${logo.image}?v=${version}`}
                    alt={logo.name}
                    className="h-full w-auto object-contain max-w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

