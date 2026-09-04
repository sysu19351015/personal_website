"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()
  const navigationItems = [
    { href: "/", label: "首页" },
    { href: "/about", label: "关于我" },
    { href: "/portfolio", label: "作品" },
  ]

  const navItemClass = (href: string) =>
    cn(
      "rounded-md px-2 py-1 text-center text-sm font-bold leading-5 transition-opacity hover:opacity-70 sm:px-3 sm:text-[18px]",
      pathname === href && "bg-[#FFC224] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
    )

  return (
    <div className="container mx-auto px-4 pb-4 pt-5 sm:pt-8">
      <nav className="mx-auto grid max-w-2xl grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl border-4 border-black bg-white px-3 py-3 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] sm:px-5 sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div aria-hidden="true" className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-black">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>

        <div className="hidden min-w-0 items-center justify-center gap-4 sm:flex md:gap-6">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className={navItemClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </div>

        <Button asChild className="col-start-3 h-11 min-w-11 flex-shrink-0 rounded-sm bg-black px-3 text-white hover:bg-black/90 sm:h-12 sm:px-5">
          <a href="mailto:chenz9@mail2.sysu.edu.cn" aria-label="邮件联系陈泽">
            <Mail className="h-6 w-6" strokeWidth={2.5} />
          </a>
        </Button>

        <div className="col-span-3 grid grid-cols-3 gap-1 border-t-2 border-black pt-3 sm:hidden">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className={navItemClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
