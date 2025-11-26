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

  return (
    <section id="hot-jobs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">热门职位</h2>
          <div className="w-16 h-0.5 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all group border border-slate-100">
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
          ))}
        </div>
      </div>
    </section>
  )
}

