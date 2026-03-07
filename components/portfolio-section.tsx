import Image from "next/image"

export function PortfolioSection() {
  const projects = [
    {
      title: "AI口语陪练 Analyst Agent 设计",
      description:
        "在时空壶实习中负责核心功能设计，提出“隐性纠错+显性报告”双层反馈机制，推动 Chat Agent 与 Analyst Agent 分层协同。",
      image: "/images/studio-workspace.svg",
      href: "https://example.com/project-1",
    },
    {
      title: "多意图路径推荐策略优化",
      description:
        "在深圳交通规划设计中心实习期间，基于调研与A/B测试优化路径推荐策略，使路网平均通行速度提升 5%，平均出行时间缩短 8%。",
      image: "/images/venture-workspace.svg",
      href: "https://example.com/project-2",
    },
    {
      title: "城市渣土车监控智能分析系统",
      description:
        "作为项目负责人，围绕海量视频噪声大、关键信息提取难的问题，推进训练数据优化与数据处理策略设计，提升模型在长尾场景的泛化能力。",
      image: "/images/studio-workspace.svg",
      href: "https://example.com/project-3",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            我的
            <span className="mx-2 bg-[#FFC224] text-black px-3 py-1 inline-block border-[3px] border-black rotate-[-2deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:rotate-[-7deg]">
              AIcoding
            </span>
            作品
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group grid md:grid-cols-2 bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="p-6 md:p-12 flex flex-col justify-center bg-white">
                <h3 className="text-xl md:text-[28px] font-bold mb-4 leading-tight md:leading-[40px] text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[18px] text-[#393939] leading-relaxed md:leading-[30px] font-medium">
                  {project.description}
                </p>
              </div>

              <div className="relative overflow-hidden min-h-[250px] md:min-h-[500px] bg-[#F3F4F6]">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-black text-white px-6 md:px-8 py-4 md:py-5 rounded-[12px] font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            查看更多项目
          </button>
        </div>
      </div>
    </section>
  )
}
