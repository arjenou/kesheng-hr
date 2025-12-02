"use client"

import { useI18n } from "@/lib/i18n/context"

export default function ClientLogos() {
  const { t } = useI18n()
  // 添加版本号以清除缓存
  const version = "20241127"
  
  const logos = [
    { name: "MiniMax", image: "/icone-spnn/MiniMax.png" },
    { name: "夸克", image: "/icone-spnn/quark.png" },
    { name: "小鹏汽车", image: "/icone-spnn/xpeng-motors.png" },
    { name: "支付宝", image: "/icone-spnn/alipay.png" },
    { name: "通义", image: "/icone-spnn/tongyi.png" },
    { name: "阿丘科技", image: "/icone-spnn/aqiu-tech.png" },
    { name: "Momo", image: "/icone-spnn/momo.png" },
    { name: "千寻智能", image: "/icone-spnn/qianxun-intelligence.png" },
    { name: "它石智能", image: "/icone-spnn/tashi-intelligence.png" },
    { name: "快手", image: "/icone-spnn/kuaishou.jpg" },
    { name: "智源", image: "/icone-spnn/zhiyuan.png" },
    { name: "灵初智能", image: "/icone-spnn/lingchu-intelligence.png" },
    { name: "青心意创", image: "/icone-spnn/qingxin-yichuang.png" },
    { name: "Collov", image: "/icone-spnn/Collov.png" },
    { name: "Deepseek", image: "/icone-spnn/Deepseek.png" },
    { name: "Soul", image: "/icone-spnn/Soul.png" },
    { name: "Xreal", image: "/icone-spnn/Xreal.png" },
    { name: "小米", image: "/icone-spnn/xiaomi.png" },
    { name: "掌阅科技", image: "/icone-spnn/zhangyue-tech.png" },
    { name: "水木分子", image: "/icone-spnn/shuimu-molecules.png" },
    { name: "淘宝", image: "/icone-spnn/taobao.png" },
    { name: "白龙马出行", image: "/icone-spnn/bailongma-travel.png" },
    { name: "脉脉", image: "/icone-spnn/maimai.png" },
    { name: "蚂蚁金服", image: "/icone-spnn/ant-financial.png" },
    { name: "钉钉", image: "/icone-spnn/dingtalk.png" },
    { name: "阿里云", image: "/icone-spnn/alibaba-cloud.png" },
    { name: "阿里巴巴", image: "/icone-spnn/alibaba.png" },
    { name: "饿了么", image: "/icone-spnn/eleme.png" },
    { name: "高德地图", image: "/icone-spnn/amap.png" },
    { name: "360集团", image: "/icone-spnn/360-group.png" },
    { name: "QFIN", image: "/icone-spnn/QFIN.png" },
    { name: "幻方", image: "/icone-spnn/huanfang.png" },
  ]

  // 显示所有logo（5排 x 8个 = 40个，当前有37个）
  const displayLogos = logos
  
  // 将logo分成5排，每排8个
  const logosPerRow = 8
  const rows: typeof logos[] = []
  const totalRows = Math.ceil(displayLogos.length / logosPerRow)
  
  for (let i = 0; i < totalRows; i++) {
    const start = i * logosPerRow
    const end = start + logosPerRow
    rows.push(displayLogos.slice(start, end))
  }

  return (
    <section id="client-logos" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <img 
          src="/image/bg12.jpg" 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* 装饰元素 */}
      <div className="absolute top-10 left-10 w-40 h-40 opacity-10">
        <img 
          src="/image/shape3.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{t.partners.title}</h2>
          <div className="w-16 h-0.5 bg-teal-500 mx-auto mb-4"></div>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:whitespace-nowrap 2xl:max-w-none mx-auto">
            {t.partners.subtitle}
          </p>
        </div>

        {/* 静态展示 - 4排布局，每排8个 */}
        <div className="space-y-6">
          {rows.map((row, rowIndex) => (
            <div 
              key={`row-${rowIndex}`}
              className="grid grid-cols-4 md:grid-cols-8 gap-4 md:gap-6 items-center justify-items-center"
            >
              {row.map((logo, index) => (
                <div
                  key={`row-${rowIndex}-${index}`}
                  className="flex items-center justify-center h-12 md:h-14 lg:h-16 w-full"
                >
                  <img
                    src={`${logo.image}?v=${version}`}
                    alt={logo.name}
                    className={`h-full w-auto object-contain max-w-full ${logo.name === "高德地图" ? "scale-[2]" : ""}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

