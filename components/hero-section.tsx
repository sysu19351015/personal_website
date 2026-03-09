import { User, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px]">
            <span className="block">
              我是
              <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block ml-2 rotate-[-2deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:rotate-[-6deg]">
                陈泽
              </span>
              ，
            </span>
            <span className="block whitespace-nowrap">AI Product Manager，</span>
            <span className="block">
              练习时长
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block ml-2 rotate-[-2deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-300 hover:rotate-[-6deg]">
                两年半
              </span>
            </span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            我具备产品设计、用户研究与 AI Agent 设计能力，有过两段产品实习经历，期待未来能在AI产品经理方向继续深耕。
            目前聚焦 AIGC、Agent 场景下的产品落地与数据驱动迭代。这个网页由我基于AIcoding制作。
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Button
              asChild
              className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg px-8 md:px-[62px] text-base md:text-lg font-semibold h-14 md:h-16 w-full sm:w-auto sm:min-w-[240px]"
            >
              <Link href="/about">
                <User className="w-5 h-5" />
                关于我
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg px-8 md:px-[62px] text-base md:text-lg font-semibold h-14 md:h-16 w-full sm:w-auto sm:min-w-[240px]"
            >
              <Link href="/portfolio">
                <FolderOpen className="w-5 h-5" />
                查看作品
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image
              src="/person-picture.png"
              alt="陈泽个人头像"
              fill
              className="object-cover scale-[1.12] object-[center_20%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
