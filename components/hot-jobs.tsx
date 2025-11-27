"use client"

import { useState, useEffect } from "react"

export default function HotJobs() {
  const jobs = [
    {
      date: "2022-07-22",
      author: "科盛",
      title: "一周热门职位",
      description: "快来看看您感兴趣的职位吧...",
      image: "/placeholder.jpg",
    },
    {
      date: "2022-07-15",
      author: "科盛",
      title: "一周热门职位",
      description: "快来看看您感兴趣的职位吧...",
      image: "/placeholder.jpg",
    },
    {
      date: "2022-07-08",
      author: "科盛",
      title: "一周热门职位",
      description: "快来看看您感兴趣的职位吧...",
      image: "/placeholder.jpg",
    },
    {
      date: "2019-06-22",
      author: "科盛",
      title: "雇主品牌 公益随行",
      description: "雇主品牌 公益随行",
      image: "/placeholder.jpg",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4) // 每次显示的卡片数量

  // 响应式设置每次显示的卡片数量
  useEffect(() => {
    const updateItemsPerView = () => {
      let newItemsPerView = 4
      if (window.innerWidth < 768) {
        newItemsPerView = 1 // 移动端显示1个
      } else if (window.innerWidth < 1024) {
        newItemsPerView = 2 // 平板显示2个
      }
      
      setItemsPerView(newItemsPerView)
      // 重置索引，确保显示正确
      setCurrentIndex(0)
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const totalPages = Math.ceil(jobs.length / itemsPerView)

  // 自动轮播
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextPage = (prev + 1) % totalPages
        return nextPage * itemsPerView
      })
    }, 4000) // 每4秒切换一次

    return () => clearInterval(interval)
  }, [totalPages, itemsPerView])

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const currentPage = Math.floor(prev / itemsPerView)
      const nextPage = (currentPage + 1) % totalPages
      return nextPage * itemsPerView
    })
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => {
      const currentPage = Math.floor(prev / itemsPerView)
      const prevPage = currentPage === 0 ? totalPages - 1 : currentPage - 1
      return prevPage * itemsPerView
    })
  }

  const goToPage = (page: number) => {
    setCurrentIndex(page * itemsPerView)
  }

  return (
    <section id="hot-jobs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">热门职位</h2>
          <div className="w-16 h-0.5 bg-teal-500 mx-auto"></div>
        </div>

        {/* 轮播容器 */}
        <div className="relative">
          {/* 轮播内容 */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {jobs.map((job, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-slate-100 h-full">
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <img
                        src={job.image}
                        alt={job.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="text-xs text-slate-500 mb-3">
                        {job.date} / {job.author}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">{job.title}</h3>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">{job.description}</p>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                      >
                        查看详情
                        <span className="text-blue-600">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 导航箭头 */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10 hidden lg:flex items-center justify-center"
            aria-label="上一个"
          >
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all hover:scale-110 z-10 hidden lg:flex items-center justify-center"
            aria-label="下一个"
          >
            <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* 指示器 */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? 'bg-teal-500 w-8'
                    : 'bg-slate-300 w-2 hover:bg-slate-400'
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

