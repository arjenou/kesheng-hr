"use client"

import { useEffect, useState } from "react"
import { Rocket, Wifi, RefreshCw, Box, FileDown } from "lucide-react"

interface AdvantageNode {
  title: string
  description: string
  icon: React.ReactNode
  angle: number // 角度（度）
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

  // 5个优势节点，按图片描述的顺序排列（从左上开始顺时针）
  const advantages: AdvantageNode[] = [
    {
      title: "高兼容性与性能",
      description: "SDK兼容2000+型号设备, 不影响应用业务进行",
      icon: <Rocket className="w-6 h-6" />,
      angle: -120, // 左上
    },
    {
      title: "多平台支持",
      description: "支持Android、iOS、web/wap/H5、小程序、Windows等多平台",
      icon: <Wifi className="w-6 h-6" />,
      angle: -30, // 右上
    },
    {
      title: "支持自定义策略",
      description: "支持根据业务需要自定义检测策略, 提供更多业务场景检测能力",
      icon: <RefreshCw className="w-6 h-6" />,
      angle: 30, // 右下
    },
    {
      title: "客户端风险识别",
      description: "风控SDK检测设备、环境、用户操作行为异常行为, 支持策略热更新, 客户端异常风险行为识别准确率高",
      icon: <Box className="w-6 h-6" />,
      angle: 90, // 底部
    },
    {
      title: "便捷接入",
      description: "SDK接入三步即可完成, 最快0.5天完成整体对接",
      icon: <FileDown className="w-6 h-6" />,
      angle: 150, // 左下
    },
  ]

  // 计算节点位置（基于椭圆）
  const calculatePosition = (angle: number, radiusX: number, radiusY: number) => {
    const rad = (angle * Math.PI) / 180
    const x = Math.cos(rad) * radiusX
    const y = Math.sin(rad) * radiusY
    return { x, y }
  }

  // 椭圆参数 - 水平椭圆（宽大于高）
  const radiusX = isMobile ? 180 : 280  // 水平半径（更宽）
  const radiusY = isMobile ? 100 : 140  // 垂直半径（更窄）
  const svgWidth = isMobile ? 500 : 800
  const svgHeight = isMobile ? 500 : 700
  const centerX = svgWidth / 2
  const centerY = svgHeight / 2

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

        {/* 椭圆布局容器 */}
        <div className="relative flex items-center justify-center min-h-[600px] md:min-h-[800px]">
          {/* SVG 用于绘制椭圆路径和连接箭头 */}
          <svg
            className="absolute"
            width={svgWidth}
            height={svgHeight}
            style={{ 
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              overflow: 'visible'
            }}
          >
            {/* 椭圆轨道 - 连接所有图标，这是关键视觉元素 */}
            {(() => {
              // 计算椭圆轨道半径，使其通过图标中心
              const iconCircleRadius = isMobile ? 28 : 32
              // 椭圆轨道应该通过图标中心
              const orbitRadiusX = radiusX + iconCircleRadius
              const orbitRadiusY = radiusY + iconCircleRadius
              
              return (
                <ellipse
                  cx={centerX}
                  cy={centerY}
                  rx={orbitRadiusX}
                  ry={orbitRadiusY}
                  fill="none"
                  stroke="#93c5fd"
                  strokeWidth="3"
                  opacity="0.7"
                  strokeDasharray="10,5"
                  className="z-0"
                />
              )
            })()}
            
            {/* 椭圆路径（浅色背景，带渐变效果） */}
            <ellipse
              cx={centerX}
              cy={centerY}
              rx={radiusX}
              ry={radiusY}
              fill="none"
              stroke="#dbeafe"
              strokeWidth="3"
              opacity="0.6"
            />
            {/* 内层椭圆（更浅） */}
            <ellipse
              cx={centerX}
              cy={centerY}
              rx={radiusX * 0.95}
              ry={radiusY * 0.95}
              fill="none"
              stroke="#e0f2fe"
              strokeWidth="1"
              opacity="0.4"
            />

            {/* 节点之间的椭圆轨道连接箭头（沿椭圆轨道，深灰色） */}
            {advantages.map((_, index) => {
              const nextIndex = (index + 1) % advantages.length
              const fromAngle = advantages[index].angle
              const toAngle = advantages[nextIndex].angle
              
              const iconCircleRadius = isMobile ? 28 : 32
              const orbitRadiusX = radiusX + iconCircleRadius
              const orbitRadiusY = radiusY + iconCircleRadius
              
              const from = calculatePosition(fromAngle, orbitRadiusX, orbitRadiusY)
              const to = calculatePosition(toAngle, orbitRadiusX, orbitRadiusY)
              
              const startX = centerX + from.x
              const startY = centerY + from.y
              const endX = centerX + to.x
              const endY = centerY + to.y
              
              // 计算箭头方向
              const dx = endX - startX
              const dy = endY - startY
              const angle = Math.atan2(dy, dx) * (180 / Math.PI)
              const arrowSize = 6
              
              return (
                <g key={`orbit-arrow-${index}`}>
                  {/* 沿椭圆轨道的箭头线（深灰色，细线） */}
                  <line
                    x1={startX}
                    y1={startY}
                    x2={endX}
                    y2={endY}
                    stroke="#64748b"
                    strokeWidth="1.5"
                    opacity="0.6"
                    strokeLinecap="round"
                  />
                  {/* 箭头头部 */}
                  <polygon
                    points={`
                      ${endX},${endY}
                      ${endX - arrowSize * Math.cos((angle - 20) * Math.PI / 180)},${endY - arrowSize * Math.sin((angle - 20) * Math.PI / 180)}
                      ${endX - arrowSize * Math.cos((angle + 20) * Math.PI / 180)},${endY - arrowSize * Math.sin((angle + 20) * Math.PI / 180)}
                    `}
                    fill="#64748b"
                    opacity="0.6"
                  />
                </g>
              )
            })}
          </svg>

          {/* 中心水平椭圆 */}
          <div className="absolute z-10 flex items-center justify-center">
            <div 
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 shadow-xl flex items-center justify-center"
              style={{
                width: isMobile ? '200px' : '300px',
                height: isMobile ? '80px' : '100px',
                borderRadius: '50%',
                padding: isMobile ? '0 24px' : '0 32px',
              }}
            >
              <h3 className="text-white text-lg md:text-2xl font-bold whitespace-nowrap">核心优势</h3>
            </div>
          </div>
          
          {/* 从中心到各节点的连接线（双向箭头） */}
          {advantages.map((advantage, index) => {
            // 使用图标在轨道上的位置
            const iconCircleRadius = isMobile ? 28 : 32
            const orbitRadiusX = radiusX + iconCircleRadius
            const orbitRadiusY = radiusY + iconCircleRadius
            const iconPosition = calculatePosition(advantage.angle, orbitRadiusX, orbitRadiusY)
            
            // 计算连接线的起点和终点（从中心椭圆边缘到图标边缘）
            const centerToIcon = Math.sqrt(iconPosition.x ** 2 + iconPosition.y ** 2)
            const centerEllipseWidth = isMobile ? 100 : 150 // 中心椭圆的一半宽度
            const centerEllipseHeight = isMobile ? 40 : 50 // 中心椭圆的一半高度
            const iconOffset = iconCircleRadius // 图标半径
            
            // 计算中心椭圆边缘点（考虑椭圆形状）
            const centerAngle = Math.atan2(iconPosition.y, iconPosition.x)
            const centerOffsetX = Math.cos(centerAngle) * centerEllipseWidth
            const centerOffsetY = Math.sin(centerAngle) * centerEllipseHeight
            
            const startX = centerX + centerOffsetX
            const startY = centerY + centerOffsetY
            const endX = centerX + iconPosition.x - (iconPosition.x / centerToIcon) * iconOffset
            const endY = centerY + iconPosition.y - (iconPosition.y / centerToIcon) * iconOffset
            
            const angle = Math.atan2(iconPosition.y, iconPosition.x) * (180 / Math.PI)
            const arrowSize = 8
            
            return (
              <svg
                key={`center-line-${index}`}
                className="absolute z-5"
                width={svgWidth}
                height={svgHeight}
                style={{ 
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  overflow: 'visible',
                  pointerEvents: 'none'
                }}
              >
                {/* 连接线 - 浅蓝色曲线 */}
                <line
                  x1={startX}
                  y1={startY}
                  x2={endX}
                  y2={endY}
                  stroke="#93c5fd"
                  strokeWidth="2"
                  opacity="0.7"
                  strokeLinecap="round"
                />
                {/* 箭头 - 指向节点图标（向外） */}
                <polygon
                  points={`
                    ${endX},${endY}
                    ${endX - arrowSize * Math.cos((angle - 25) * Math.PI / 180)},${endY - arrowSize * Math.sin((angle - 25) * Math.PI / 180)}
                    ${endX - arrowSize * Math.cos((angle + 25) * Math.PI / 180)},${endY - arrowSize * Math.sin((angle + 25) * Math.PI / 180)}
                  `}
                  fill="#93c5fd"
                  opacity="0.7"
                />
              </svg>
            )
          })}

          {/* 优势节点 - 图标在最外环上 */}
          {advantages.map((advantage, index) => {
            // 图标位置：使用椭圆轨道半径，让图标在轨道上
            const iconCircleRadius = isMobile ? 28 : 32
            const orbitRadiusX = radiusX + iconCircleRadius
            const orbitRadiusY = radiusY + iconCircleRadius
            const iconPosition = calculatePosition(advantage.angle, orbitRadiusX, orbitRadiusY)
            
            const isLeft = iconPosition.x < 0
            const isTop = iconPosition.y < 0
            
            // 根据位置调整文本块的位置（在图标外侧）
            let textOffsetX = 0
            let textOffsetY = 0
            let textAlign: 'left' | 'right' | 'center' = 'left'
            
            // 计算文本块的位置（在图标外侧）
            const iconRadius = iconCircleRadius + 10 // 图标半径 + 间距
            if (Math.abs(iconPosition.x) < 30) {
              // 顶部或底部节点
              textAlign = 'center'
              textOffsetY = isTop ? -iconRadius - 20 : iconRadius + 20
            } else if (isLeft) {
              // 左侧节点：文本在图标左侧
              textAlign = 'right'
              textOffsetX = -iconRadius - 20
            } else {
              // 右侧节点：文本在图标右侧
              textAlign = 'left'
              textOffsetX = iconRadius + 20
            }
            
            return (
              <div key={index} className="absolute z-20" style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}>
                {/* 图标圆圈 - 位于椭圆轨道上，浅蓝色带渐变 */}
                <div
                  className="absolute w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 border-2 border-blue-400 flex items-center justify-center text-blue-600 shadow-md group-hover:scale-110 transition-transform duration-300 z-30"
                  style={{
                    transform: `translate(${iconPosition.x}px, ${iconPosition.y}px) translate(-50%, -50%)`,
                  }}
                >
                  {advantage.icon}
                </div>
                
                {/* 文本块 - 在图标外侧，无背景，深灰色文字 */}
                <div
                  className={`absolute max-w-[220px] md:max-w-[280px] ${textAlign === 'center' ? 'text-center' : textAlign === 'right' ? 'text-right' : 'text-left'}`}
                  style={{
                    transform: `translate(${iconPosition.x + textOffsetX}px, ${iconPosition.y + textOffsetY}px) translate(-50%, -50%)`,
                  }}
                >
                  <h4 className="font-bold text-slate-800 text-base md:text-lg mb-2">{advantage.title}</h4>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
