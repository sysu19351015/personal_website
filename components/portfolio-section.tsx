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
      href: "https://example.com/projects/bilibili-douyin-RAG",
    },
  ]

  return (
    <section className="container mx-auto px-5 py-10 sm:px-6 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-3 text-3xl font-bold md:text-4xl lg:text-5xl">
            <span>我的</span>
            <span className="inline-block rotate-[-2deg] border-[3px] border-black bg-[#FFC224] px-3 py-1 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:rotate-[-7deg]">
              AIcoding
            </span>
            <span>作品</span>
          </h2>
        </div>

        <div className="space-y-8 mb-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group grid min-w-0 overflow-hidden rounded-3xl border-[3px] border-black bg-white transition-all hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:grid-cols-2 md:rounded-[32px]"
            >
              <div className="flex min-w-0 flex-col justify-center bg-white p-5 sm:p-6 md:p-10 lg:p-12">
                <h3 className="mb-4 break-words text-xl font-bold leading-tight text-[#0B0B0B] md:text-[28px] md:leading-[40px]">
                  {project.title}
                </h3>

                <p className="break-words text-base font-medium leading-relaxed text-[#393939] md:text-[18px] md:leading-[30px]">
                  {project.description}
                </p>

                <ul className="mt-4 list-disc space-y-2 break-words pl-5 text-sm leading-relaxed text-[#393939] md:text-base">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="relative min-h-[220px] overflow-hidden bg-[#F3F4F6] sm:min-h-[300px] md:min-h-[480px]">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.02] md:p-6"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
