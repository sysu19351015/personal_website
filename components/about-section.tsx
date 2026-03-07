"use client"

import { User, BookOpen, Gamepad2, GraduationCap, ExternalLink, Flag, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function AboutSection() {
  const slogans = [
    "每一个大多数人看起来轻易的选择，都让我很兴奋",
    "不做简单复述，做真正有洞察的产品思考",
    "让 AI 产品既能落地，也能持续创造用户价值",
  ]

  const [activeSlogan, setActiveSlogan] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [expandedProgressIndex, setExpandedProgressIndex] = useState<number | null>(null)
  const recentUpdates = [
    {
      title: "最近在读",
      content: "《金字塔法则》",
      icon: BookOpen,
      dot: "bg-[#2F81F7]",
      underline: "border-[#2F81F7]",
      card: "bg-[#2F81F7]",
      border: "border-black",
      rotate: "rotate-[-2deg]",
    },
    {
      title: "最近在玩",
      content: "燕云十六shen",
      icon: Gamepad2,
      dot: "bg-[#FF6B7A]",
      underline: "border-[#FF6B7A]",
      card: "bg-[#FF6B7A]",
      border: "border-black",
      rotate: "rotate-[1deg]",
    },
    {
      title: "最近学习",
      content: "系统学习 AI Agent 评测与落地方法",
      icon: GraduationCap,
      href: "https://www.deeplearning.ai/short-courses/",
      dot: "bg-[#22C55E]",
      underline: "border-[#22C55E]",
      card: "bg-[#22C55E]",
      border: "border-black",
      rotate: "rotate-[-1deg]",
    },
  ]
  const gameProgress = [
    {
      track: "main",
      name: "时空壶-AI产品实习",
      brief: "AI口语陪练 Analyst Agent 设计",
      date: "2025.05-2026.08",
      full: "在 AI 产品实习中独立完成个人作品网站从信息结构、交互布局到视觉落地的全流程搭建，并持续迭代优化。",
      icon: Flag,
      cardColor: "bg-[#2F81F7]",
    },
    {
      track: "side",
      name: "个人项目",
      date: "2024.06-2025.05",
      brief: "搭建简历作品集框架并形成项目表达模板",
      full: "完成简历信息结构化整理，输出可复用的项目展示模板，支持后续项目内容快速扩展与替换。",
      icon: Target,
      cardColor: "bg-[#FF6B7A]",
    },
    {
      track: "main",
      name: "交通研究中心",
      date: "2022.07-2022.09",
      brief: "通过A/B测试验证策略效果，路网平均通行速度提升5%",
      full: "保送进入中山大学智能工程学院交通运输专业硕士阶段，系统深化数据分析与智能系统相关能力。",
      icon: Flag,
      cardColor: "bg-[#22C55E]",
    },
  ]

  useEffect(() => {
    const current = slogans[activeSlogan]
    let timeout: ReturnType<typeof setTimeout>

    if (typedText.length < current.length) {
      timeout = setTimeout(() => {
        setTypedText(current.slice(0, typedText.length + 1))
      }, 75)
    } else {
      timeout = setTimeout(() => {
        setTypedText("")
        setActiveSlogan((prev) => (prev + 1) % slogans.length)
      }, 1200)
    }

    return () => clearTimeout(timeout)
  }, [activeSlogan, typedText, slogans])

  return (
    <section className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg border-[4px] border-black rounded-3xl bg-white p-4 md:p-5 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] transition-transform duration-300 hover:rotate-[-6deg]">
            <div className="relative border-[3px] border-black rounded-2xl overflow-hidden bg-white">
              <div className="bg-[#4ADE80] border-b-[3px] border-black px-4 py-3 pr-24">
                <p className="text-3xl md:text-4xl font-black leading-none">ID CARD</p>
                <p className="text-sm md:text-base font-bold tracking-wide mt-1">PERSONAL PORTFOLIO</p>
              </div>

              <div className="absolute top-3 right-3 w-20 h-20 md:w-24 md:h-24 rounded-full border-[4px] border-black bg-[#FF6BBD] flex items-center justify-center overflow-visible">
                <span className="text-5xl md:text-6xl leading-none translate-y-[-2px]">☺</span>
              </div>

              <div className="p-4 md:p-5 space-y-4">
                <div className="grid grid-cols-[1fr_1.35fr] gap-3 md:gap-4 items-start">
                  <div>
                    <div className="aspect-[3/4] rounded-2xl border-[4px] border-black bg-[#F3F0E9] overflow-hidden">
                      <img src="/person-picture.png" alt="陈泽头像" className="w-full h-full object-cover object-center scale-[1.06]" />
                    </div>
                    <div className="mt-2 flex gap-2">
                      <span className="px-2 py-1 text-xs md:text-sm font-black bg-[#60A5FA] border-[3px] border-black rounded-xl">1999.12.8</span>
                      <span className="px-2 py-1 text-xs md:text-sm font-black bg-[#F472B6] border-[3px] border-black rounded-xl">深圳</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-2xl border-[4px] border-black bg-[#FDE047] px-3 py-2">
                      <p className="text-xs md:text-sm font-bold text-gray-700">NAME</p>
                      <p className="text-3xl md:text-4xl font-black leading-none mt-1">陈泽</p>
                    </div>
                    <div className="rounded-2xl border-[4px] border-black bg-[#DBEAFE] px-3 py-2">
                      <p className="text-xs md:text-sm font-bold text-gray-700">COLLEGE</p>
                      <p className="text-2xl md:text-3xl font-black leading-tight mt-1">智能工程学院</p>
                    </div>
                    <div className="rounded-2xl border-[4px] border-black bg-[#E9D5FF] px-3 py-2">
                      <p className="text-xs md:text-sm font-bold text-gray-700">ROLE</p>
                      <p className="text-2xl md:text-3xl font-black leading-tight mt-1">AI产品经理</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs md:text-sm font-bold tracking-wide">ID NO.</p>
                  <p className="text-3xl md:text-4xl font-black leading-none">CZ-19991208-PM</p>
                </div>

                <div className="flex items-end justify-between gap-4">
                  <div className="flex-1 rounded-2xl border-[4px] border-black bg-white px-3 py-4">
                    <div className="h-10 rounded-lg border-[3px] border-black bg-white px-2 flex items-center justify-center overflow-hidden">
                      <span className="font-black uppercase tracking-wide leading-none whitespace-nowrap text-[clamp(0.58rem,1.8vw,1rem)]">
                        something for nothing
                      </span>
                    </div>
                  </div>
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-[4px] border-black bg-[#FB7185] flex items-center justify-center rotate-[10deg]">
                    <span className="w-14 h-14 md:w-16 md:h-16 rounded-full border-[3px] border-black bg-[#86EFAC] flex items-center justify-center text-[10px] md:text-xs font-black text-center leading-tight">
                      OFFICIAL
                      <br />
                      CREATIVE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block rotate-[-2deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:rotate-[-6deg]">
                教育与能力概览
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              中山大学智能工程学院交通运输硕士（保送），本科交通工程专业。具备用户研究、需求分析、
              Agent 设计与数据分析能力，能够推动项目从 0 到 1 落地。
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">工具与方法能力</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  熟悉 Axure、Figma，掌握 Python、SQL、Excel；熟悉 Prompt Engineering、
                  用户研究方法及 Coze 工作流。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">学习与项目能力</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  深度关注 AIGC、RAG、Agent 技术，具备敏捷协作经验；曾获优秀学生奖学金、
                  研究生一等学院奖助金及美赛 H 奖。
                </p>
              </div>
            </div>
          </div>

          <Button asChild className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
            <a href="mailto:chenz9@mail2.sysu.edu.cn">
              <User className="w-5 h-5" />
              邮件联系
            </a>
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 md:mt-28 flex justify-center">
        <div className="relative w-full max-w-5xl border-[4px] border-black bg-[#FFC224] rounded-sm px-8 py-6 md:px-10 md:py-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
          <div className="absolute -top-4 left-6 bg-white border-[3px] border-black px-3 py-1 text-sm md:text-base font-bold uppercase tracking-wide">
            words
          </div>
          <p className="text-[22px] md:text-[36px] font-bold leading-relaxed min-h-[44px] md:min-h-[56px]">
            {typedText}
            <span className="inline-block ml-1 animate-pulse">|</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 md:mt-20 relative">
        <div className="inline-block bg-[#FF6B7A] border-[4px] border-black px-5 py-2 rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg]">
          <h3 className="text-base md:text-lg font-bold">近日生活 | RECENT UPDATES</h3>
        </div>

        <div className="mt-10 relative">
          <svg
            className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 240"
            preserveAspectRatio="none"
          >
            <path d="M360 120 C 430 80, 500 80, 570 120" stroke="black" strokeWidth="3" strokeDasharray="8 8" fill="none" />
            <path d="M760 120 C 830 160, 900 160, 970 120" stroke="black" strokeWidth="3" strokeDasharray="8 8" fill="none" />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-14 items-center">
          {recentUpdates.map((item, index) => (
            <div key={index} className="relative">
              {index === 0 && (
                <>
                  <span className="absolute -top-5 -left-3 text-2xl md:text-3xl rotate-[-12deg]">✦</span>
                  <span className="absolute -top-2 right-2 text-xl md:text-2xl rotate-[10deg]">✷</span>
                  <span className="absolute -bottom-4 left-3 text-xl md:text-2xl rotate-[18deg]">✧</span>
                  <span className="absolute top-1/2 -left-4 text-xl md:text-2xl -translate-y-1/2">~</span>
                </>
              )}

              {index === 1 && (
                <>
                  <span className="absolute -top-6 left-2 text-2xl md:text-3xl rotate-[8deg]">✦</span>
                  <span className="absolute top-2 -right-4 text-xl md:text-2xl rotate-[-10deg]">✷</span>
                  <span className="absolute -bottom-4 right-4 text-xl md:text-2xl rotate-[14deg]">✧</span>
                  <span className="absolute bottom-3 -left-4 text-xl md:text-2xl rotate-[-18deg]">~</span>
                </>
              )}

              {index === 2 && (
                <>
                  <span className="absolute -top-5 left-4 text-2xl md:text-3xl rotate-[-8deg]">✦</span>
                  <span className="absolute -top-1 -right-3 text-xl md:text-2xl rotate-[12deg]">✷</span>
                  <span className="absolute bottom-2 -right-4 text-xl md:text-2xl rotate-[-15deg]">✧</span>
                  <span className="absolute -bottom-4 left-2 text-xl md:text-2xl">~</span>
                </>
              )}

              {(() => {
                const Icon = item.icon

                const cardInner = (
                  <div className={`group relative ${item.rotate} hover:rotate-0 transition-transform duration-300`}>
                    <div className={`absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-2xl border-[3px] border-black ${item.card}`} />
                    <div className="relative bg-white border-[3px] border-black rounded-2xl p-4">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <span className={`w-10 h-10 md:w-11 md:h-11 rounded-xl border-[3px] border-black ${item.dot} flex items-center justify-center`}>
                            <Icon className="w-5 h-5 md:w-6 md:h-6" />
                          </span>
                          <p className="text-sm md:text-base font-bold">{item.title}</p>
                        </div>
                      </div>
                      <p className="text-sm md:text-base font-medium text-[#393939]">
                        <span className={`inline-block border-b-[3px] ${item.underline} pb-0.5`}>{item.content}</span>
                      </p>
                      {item.href && (
                        <div className="mt-3 inline-flex items-center gap-1 text-xs md:text-sm font-bold">
                          点击查看
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  </div>
                )

                if (item.href) {
                  return (
                    <a href={item.href} target="_blank" rel="noreferrer" className="block">
                      {cardInner}
                    </a>
                  )
                }

                return cardInner
              })()}
            </div>
          ))}
          </div>
        </div>
      </div>

      <div className="w-[80%] max-w-7xl mx-auto mt-20 md:mt-24">
        <h3 className="text-2xl md:text-4xl font-black text-center mb-8 md:mb-10">
          地球Online
          <span className="inline-block ml-2 bg-[#FF6B7A] px-3 py-1 border-[3px] border-black rotate-[-2deg] shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:rotate-[-7deg]">
            开放游戏进度
          </span>
        </h3>

        <div className="relative border-[4px] border-black rounded-[28px] p-5 md:p-8 overflow-hidden bg-[#F5F5F5]">
          <div className="absolute inset-0 opacity-40 [background-size:24px_24px] [background-image:linear-gradient(to_right,#cfcfcf_1px,transparent_1px),linear-gradient(to_bottom,#cfcfcf_1px,transparent_1px)]" />
          <div className="hidden md:block absolute top-5 bottom-5 left-1/2 -translate-x-1/2 border-l-[3px] border-dashed border-black" />

          <div className="relative grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-3 md:gap-10 mb-6 md:mb-8">
            <div className="flex justify-center md:justify-start">
              <span className="inline-block bg-white border-[3px] border-black px-4 py-1 font-bold rotate-[-1deg] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">实习经历</span>
            </div>
            <div className="flex justify-center md:justify-end">
              <span className="inline-block bg-white border-[3px] border-black px-4 py-1 font-bold rotate-[1deg] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">项目经历</span>
            </div>
          </div>

          <div className="relative space-y-5 md:space-y-6">
            {gameProgress.map((item, index) => {
              const Icon = item.icon
              const isLeft = item.track === "main"
              const isExpanded = expandedProgressIndex === index

              return (
                <div key={`${item.date}-${index}`} className="relative">
                  <div className="md:hidden">
                    <div className="relative">
                      <div className={`absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-2xl border-[3px] border-black ${item.cardColor}`} />
                      <button
                        type="button"
                        onClick={() => setExpandedProgressIndex(isExpanded ? null : index)}
                        className="relative w-full bg-white border-[3px] border-black rounded-2xl px-4 py-3 text-left cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <span className={`w-10 h-10 rounded-xl border-[3px] border-black ${item.cardColor} flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-5 h-5" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="inline-block bg-black text-white text-xs md:text-sm font-bold px-1.5 py-0.5 rounded-[5px] leading-none">
                                {isLeft ? "[实习]" : "[项目]"}
                              </span>
                              <span className="text-base md:text-xl font-black">{item.name}</span>
                            </div>
                            <p className="text-base md:text-lg font-bold leading-snug">{item.date}</p>
                            <p className="text-base md:text-lg font-bold leading-snug">{item.brief}</p>
                            {isExpanded && <p className="text-sm md:text-base text-[#3f3f3f] mt-2 leading-relaxed">{item.full}</p>}
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="mt-2 flex justify-center">
                      <span className="w-3.5 h-3.5 rounded-full border-[2px] border-black bg-white" />
                    </div>
                  </div>

                  <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] md:items-start">
                    <div className="min-w-0">
                      {isLeft ? (
                        <div className="md:mr-6 relative">
                          <div className={`absolute inset-0 translate-x-[7px] translate-y-[7px] rounded-2xl border-[3px] border-black ${item.cardColor}`} />
                          <button
                            type="button"
                            onClick={() => setExpandedProgressIndex(isExpanded ? null : index)}
                            className="relative w-full bg-white border-[3px] border-black rounded-2xl px-4 py-3 text-left cursor-pointer"
                          >
                            <div className="flex items-start gap-3">
                              <span className={`w-11 h-11 rounded-xl border-[3px] border-black ${item.cardColor} flex items-center justify-center flex-shrink-0`}>
                                <Icon className="w-5 h-5" />
                              </span>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2 mb-1.5">
                                  <span className="inline-block bg-black text-white text-sm font-bold px-1.5 py-0.5 rounded-[5px] leading-none">[实习]</span>
                                  <span className="text-[30px] leading-none md:text-3xl font-black">{item.name}</span>
                                </div>
                                <p className="text-lg font-bold leading-snug">{item.date}</p>
                                <p className="text-lg font-bold leading-snug">{item.brief}</p>
                                {isExpanded && <p className="text-base text-[#3f3f3f] mt-2 leading-relaxed">{item.full}</p>}
                              </div>
                            </div>
                          </button>
                        </div>
                      ) : (
                        <div />
                      )}
                    </div>

                    <div className="flex justify-center pt-3">
                      <span className="w-5 h-5 rounded-full border-[3px] border-black bg-white z-10" />
                    </div>

                    <div className="min-w-0">
                      {!isLeft ? (
                        <div className="md:ml-6 relative">
                          <div className={`absolute inset-0 translate-x-[7px] translate-y-[7px] rounded-2xl border-[3px] border-black ${item.cardColor}`} />
                          <button
                            type="button"
                            onClick={() => setExpandedProgressIndex(isExpanded ? null : index)}
                            className="relative w-full bg-white border-[3px] border-black rounded-2xl px-4 py-3 text-left cursor-pointer"
                          >
                            <div className="flex items-start gap-3">
                              <span className={`w-11 h-11 rounded-xl border-[3px] border-black ${item.cardColor} flex items-center justify-center flex-shrink-0`}>
                                <Icon className="w-5 h-5" />
                              </span>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2 mb-1.5">
                                  <span className="inline-block bg-black text-white text-sm font-bold px-1.5 py-0.5 rounded-[5px] leading-none">[项目]</span>
                                  <span className="text-[30px] leading-none md:text-3xl font-black">{item.name}</span>
                                </div>
                                <p className="text-lg font-bold leading-snug">{item.date}</p>
                                <p className="text-lg font-bold leading-snug">{item.brief}</p>
                                {isExpanded && <p className="text-base text-[#3f3f3f] mt-2 leading-relaxed">{item.full}</p>}
                              </div>
                            </div>
                          </button>
                        </div>
                      ) : (
                        <div />
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
