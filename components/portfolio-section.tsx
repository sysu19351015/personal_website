import Image from "next/image"

export function PortfolioSection() {
  const projects = [
    {
      title: "BiliMind：把视频收藏夹变成可对话知识库",
      description:
        "将收藏视频内容转成可检索、可追溯来源的个人知识库；支持 B站（扫码登录）与抖音（Cookie 登录，MVP）。",
      details: [
        "B站：扫码登录、读取收藏夹、内容提取（摘要/字幕/ASR 兜底）、向量入库与语义检索问答、默认收藏夹整理（预览/执行/清理失效）。",
        "抖音（MVP）：Cookie 登录、拉取喜欢/收藏单分组视频、基于标题/简介入库、检索问答（来源链接跳转抖音）。",
        "使用流程：登录 → 选择平台（B站扫码/抖音Cookie）→ 勾选分组 → 入库/更新 → 聊天区提问。",
      ],
      image: "/演示图片1.png",
      href: "https://github.com/sysu19351015/bilibili-douyin-RAG",
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

                <ul className="mt-4 space-y-2 text-sm md:text-base text-[#393939] leading-relaxed list-disc pl-5">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
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
      </div>
    </section>
  )
}
