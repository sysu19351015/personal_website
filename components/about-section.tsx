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
      content: "燕云十六声",
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
      name: "深圳时空壶技术有限公司",
      brief: "产品经理实习生 | 用户研究与AI功能设计",
      date: "2025.05 – 2025.08",
      full: "背景：用户群体区分度不足，无法有效指导产品迭代，缺少会议等场景下的长文本信息分析工具。\n\n• 	用户研究与需求挖掘： 基于JTBD理论，通过问卷调研、用户访谈和行为数据分析，细分5类用户群体，并从“人群画像”深化为“场景意图”，挖掘会议场景下的长文本信息分析需求。\n• 	需求定义与功能设计：主导长文本翻译记录的AI分析功能设计。明确功能模型边界，定义了从发言人区分到会议进程划分再到to-do-list的工作流设计，制订Prompt 设计策略化，并最终交付AI需求PRD。\n• 	数据集搭建与优化： 构建典型测试集，包含典型样本、base case与无关样本。制定包含“数据格式遵循率”、“区分准确性”等维度的评测标准。基于测试结果，优化提示词设计，降低模型成本。\n• 项目管理与协作：跟进产品开发与交付进度，确保版本按时高质量交付。",
      icon: Flag,
      cardColor: "bg-[#2F81F7]",
    },
    {
      track: "side",
      name: "城市渣土车监管项目",
      date: "2024.06 – 2025.05",
      brief: "项目负责人 | 设计城市大脑智能分析系统",
      full: "概述：城市治理中，针对海量视频数据处理效率低、噪音大、关键信息提取难等问题，设计城市大脑智能分析系统。\n\n• 训练数据优化：针对数据长尾场景下模型泛化能力差，通过案例分析，策略性应用多种方法扩充数据集。\n• 数据处理策略：发现数据不连续导致轨迹中断。创新性提出自然语言问题类比解决方案。\n• 数据处理模块：面对每日百万级的非结构化数据处理需求，设计并实施了分布式、多进程处理流水线。\n\n成果：识别准召率提升至90%以上，数据重建准确率达97%，支撑百万级数据并发处理，系统在多个城市落点试验。",
      icon: Target,
      cardColor: "bg-[#FF6B7A]",
    },
    {
      track: "main",
      name: "深圳交通研究中心",
      date: "2022.07 – 2022.09",
      brief: "产品实习生 | 基于动态奖励的路径推荐策略",
      full: "背景：传统路径推荐算法，无法理解用户多样化意图（时间、POI等），向相同起终点的大量用户推荐同质化路径。\n\n• 需求分析：问卷调研、访谈，分析不同用户群体对路径选择的隐性需求与偏好，洞察路径时间确定性需求。\n• 策略优化与设计：借鉴排序思想，设计了基于动态奖励的路径推荐策略。通过激励机制引导用户。\n• 数据驱动迭代：通过A/B测试验证策略效果，路网平均通行速度提升5%，用户平均出行时间缩短8%。",
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

  const renderProgressDetail = (text: string, textSizeClass: string) => {
    return (
      <div className={`mt-2 leading-relaxed text-[#3f3f3f] ${textSizeClass}`}>
        {text.split("\n").map((line, lineIndex) => {
          const trimmedLine = line.trim()

          if (!trimmedLine) {
            return <div key={lineIndex} className="h-2" />
          }

          if (trimmedLine.startsWith("•")) {
            return (
              <p key={lineIndex} className="pl-4 -indent-3 mb-1.5">
                {trimmedLine}
              </p>
            )
          }

          if (trimmedLine.startsWith("成果：")) {
            return (
              <p key={lineIndex} className="font-semibold mt-1.5">
                {trimmedLine}
              </p>
            )
          }

          return (
            <p key={lineIndex} className="mb-1.5">
              {trimmedLine}
            </p>
          )
        })}
      </div>
    )
  }

  return (
    <section className="container mx-auto px-5 py-10 sm:px-6 sm:py-16 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex justify-center">
          <div className="relative w-[calc(100%_-_1rem)] max-w-lg rotate-[-1deg] rounded-3xl border-[4px] border-black bg-white p-3 shadow-[-5px_5px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 sm:w-full sm:p-4 md:p-5 md:rotate-[-2deg] md:shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)] lg:hover:rotate-[-6deg]">
            <div className="relative border-[3px] border-black rounded-2xl overflow-hidden bg-white">
              <div className="border-b-[3px] border-black bg-[#4ADE80] px-3 py-3 pr-20 sm:px-4 sm:pr-24">
                <p className="text-2xl font-black leading-none sm:text-3xl md:text-4xl">ID CARD</p>
                <p className="mt-1 text-[10px] font-bold tracking-wide sm:text-sm md:text-base">PERSONAL PORTFOLIO</p>
              </div>

              <div className="absolute top-3 right-3 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-[4px] border-black bg-[#FF6BBD] flex items-center justify-center overflow-visible">
                <span className="text-4xl sm:text-5xl md:text-6xl leading-none translate-y-[-2px]">☺</span>
              </div>

              <div className="space-y-4 p-3 sm:p-4 md:p-5">
                <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] items-start gap-2 sm:gap-3 md:gap-4">
                  <div>
                    <div className="aspect-[3/4] rounded-2xl border-[4px] border-black bg-[#F3F0E9] overflow-hidden">
                      <img src="/person-picture.png" alt="陈泽头像" className="w-full h-full object-cover object-center scale-[1.06]" />
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                      <span className="rounded-xl border-[3px] border-black bg-[#60A5FA] px-1.5 py-1 text-[10px] font-black sm:px-2 sm:text-xs md:text-sm">1999.12.8</span>
                      <span className="rounded-xl border-[3px] border-black bg-[#F472B6] px-1.5 py-1 text-[10px] font-black sm:px-2 sm:text-xs md:text-sm">深圳</span>
                    </div>
                  </div>

                  <div className="min-w-0 space-y-2 sm:space-y-3">
                    <div className="min-w-0 rounded-2xl border-[4px] border-black bg-[#FDE047] px-2 py-2 sm:px-3">
                      <p className="text-xs md:text-sm font-bold text-gray-700">NAME</p>
                      <p className="mt-1 text-2xl font-black leading-none sm:text-3xl md:text-4xl">陈泽</p>
                    </div>
                    <div className="min-w-0 rounded-2xl border-[4px] border-black bg-[#DBEAFE] px-2 py-2 sm:px-3">
                      <p className="text-xs md:text-sm font-bold text-gray-700">COLLEGE</p>
                      <p className="mt-1 break-words text-lg font-black leading-tight sm:text-xl md:text-3xl">智能工程学院</p>
                    </div>
                    <div className="min-w-0 rounded-2xl border-[4px] border-black bg-[#E9D5FF] px-2 py-2 sm:px-3">
                      <p className="text-xs md:text-sm font-bold text-gray-700">ROLE</p>
                      <p className="mt-1 break-words text-lg font-black leading-tight sm:text-xl md:text-3xl">AI产品经理</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs md:text-sm font-bold tracking-wide">ID NO.</p>
                  <p className="break-all text-xl font-black leading-none sm:text-2xl md:text-4xl">CZ-19991208-PM</p>
                </div>

                <div className="flex min-w-0 items-end justify-between gap-2 sm:gap-4">
                  <div className="flex-1 rounded-2xl border-[4px] border-black bg-white px-3 py-4">
                    <div className="h-10 rounded-lg border-[3px] border-black bg-white px-2 flex items-center justify-center overflow-hidden">
                      <span className="whitespace-nowrap text-[clamp(0.48rem,2.3vw,1rem)] font-black uppercase leading-none tracking-wide">
                        something for nothing
                      </span>
                    </div>
                  </div>
                  <div className="flex h-16 w-16 flex-shrink-0 rotate-[10deg] items-center justify-center rounded-full border-[4px] border-black bg-[#FB7185] sm:h-20 sm:w-20 md:h-24 md:w-24">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-black bg-[#86EFAC] text-center text-[8px] font-black leading-tight sm:h-14 sm:w-14 sm:text-[10px] md:h-16 md:w-16 md:text-xs">
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

        <div className="min-w-0 space-y-6 md:space-y-8">
          <div>
            <h2 className="mb-4 max-w-full break-words text-3xl font-bold md:text-4xl lg:text-5xl">
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block rotate-[-2deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:rotate-[-6deg]">
                教育与能力概览
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              中山大学智能工程学院交通运输硕士（保送）。具备用户研究、需求分析、
              Agent 设计与数据分析能力，能够推动项目从 0 到 1 落地。
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#6366F1] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">工具与方法能力</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  熟悉 Axure、Figma，掌握 Python、SQL、Excel数据分析；掌握用户研究方法、Prompt Engineering
                  及AI工作流。
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-5 h-5 bg-[#FF6B7A] border-2 border-black rounded-[5px] flex-shrink-0 mt-1"></div>
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">学习与项目能力</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  深度关注 AIGC、Agent 等AI相关技术，具备敏捷协作经验；曾获优秀学生奖学金、
                  学院奖助金及美国大学生数学建模竞赛 H 奖。
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
        <div className="relative w-full max-w-5xl rounded-sm border-[4px] border-black bg-[#FFC224] px-4 py-6 text-center shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] sm:px-8 md:px-10 md:py-8 md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
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

      <div className="mx-auto mt-20 w-full max-w-7xl md:mt-24">
        <h3 className="mb-8 text-center text-2xl font-black leading-relaxed md:mb-10 md:text-4xl">
          地球Online
          <span className="mt-2 block rotate-[-2deg] border-[3px] border-black bg-[#FF6B7A] px-3 py-1 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:rotate-[-7deg] sm:ml-2 sm:mt-0 sm:inline-block">
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
                            {isExpanded && renderProgressDetail(item.full, "text-sm md:text-base")}
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
                                  <span className="break-words text-xl font-black leading-tight lg:text-2xl">{item.name}</span>
                                </div>
                                <p className="text-lg font-bold leading-snug">{item.date}</p>
                                <p className="text-lg font-bold leading-snug">{item.brief}</p>
                                {isExpanded && renderProgressDetail(item.full, "text-base")}
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
                                  <span className="break-words text-xl font-black leading-tight lg:text-2xl">{item.name}</span>
                                </div>
                                <p className="text-lg font-bold leading-snug">{item.date}</p>
                                <p className="text-lg font-bold leading-snug">{item.brief}</p>
                                {isExpanded && renderProgressDetail(item.full, "text-base")}
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
