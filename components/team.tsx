"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n/context"

export default function Team() {
  const { t } = useI18n()
  const [currentPage, setCurrentPage] = useState(0) // 当前页码（0或1）

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

  // 分页：第一页4个人，第二页3个人
  const page1 = team.slice(0, 4) // 前4个
  const page2 = team.slice(4) // 后3个
  const pages = [page1, page2]
  const totalPages = 2

  // 手动切换页面
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
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

        {/* Mobile - 整页切换 */}
        <div className="md:hidden relative px-2">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((page, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full flex-shrink-0"
                >
                  <div className="grid grid-cols-1 gap-4">
                    {page.map((member, index) => (
                      <div
                        key={index}
                        className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg w-full flex flex-col h-full"
                      >
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
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => handlePageChange(currentPage === 0 ? totalPages - 1 : currentPage - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => handlePageChange(currentPage === totalPages - 1 ? 0 : currentPage + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentPage ? "bg-blue-600 w-6" : "bg-slate-300"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop - 整页切换：第一页4个，第二页3个 */}
        <div className="hidden md:block relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((page, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className={`flex gap-6 justify-center max-w-7xl mx-auto`}>
                    {page.map((member, index) => (
                      <div
                        key={index}
                        className={`group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col h-full ${page.length === 4 ? 'flex-1' : 'w-full max-w-sm'}`}
                      >
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
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => handlePageChange(currentPage === 0 ? totalPages - 1 : currentPage - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-blue-50 hover:shadow-2xl transition-all z-10 border border-slate-200 hover:border-blue-300"
            aria-label="Previous page"
          >
            <svg className="w-7 h-7 text-slate-700 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => handlePageChange(currentPage === totalPages - 1 ? 0 : currentPage + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-blue-50 hover:shadow-2xl transition-all z-10 border border-slate-200 hover:border-blue-300"
            aria-label="Next page"
          >
            <svg className="w-7 h-7 text-slate-700 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Page Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => handlePageChange(currentPage === 0 ? totalPages - 1 : currentPage - 1)}
              disabled={totalPages <= 1}
              className="px-6 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              上一页
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index)}
                  className={`rounded-full transition-all ${
                    index === currentPage ? "bg-blue-600 w-8 h-2" : "bg-slate-300 w-2 h-2"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={() => handlePageChange(currentPage === totalPages - 1 ? 0 : currentPage + 1)}
              disabled={totalPages <= 1}
              className="px-6 py-3 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              下一页
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
