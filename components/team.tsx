export default function Team() {
  const team = [
    {
      name: "李楠",
      title: "高级合伙人",
      description: "拥有15年以上人力资源与组织管理经验，心理学硕士，国家二级心理咨询师",
      image: "/images/e6-9d-8e-e6-a5-a0.jpg",
      email: "linan07@keshengcaidao.com",
    },
    {
      name: "王佳",
      title: "高级合伙人",
      description: "资深猎头专家，10年以上高阶岗位寻访经验，计算机专业背景",
      image: "/images/e7-8e-8b-e4-bd-b3.jpg",
      email: "luck@keshengcaidao.com",
    },
    {
      name: "温煦森",
      title: "高级合伙人",
      description: "精通人才Mapping，全球顶尖实验室定点寻访专家，服务过多个一线互联网企业",
      image: "/images/e6-b8-a9-e7-85-a6-e6-a3-ae.jpg",
      email: "contact@keshengcaidao.com",
    },
    {
      name: "魏忻伶",
      title: "合伙人",
      description: "资深人力资源专家，专注于组织发展和人才战略",
      image: "/images/e9-ad-8f-e5-bf-bb-e4-bc-b6.jpg",
      email: "contact@keshengcaidao.com",
    },
  ]

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">我们的团队</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            由行业资深专家组成的顾问团队，为您提供专业的人才解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all"
            >
              <div className="relative h-80 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover object-top md:object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a href={`mailto:${member.email}`} className="text-white text-sm font-medium hover:underline">
                    {member.email}
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-blue-600 mb-3">{member.title}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
