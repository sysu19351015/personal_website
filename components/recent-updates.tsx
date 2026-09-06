"use client"

import { ArrowUpRight, BookOpen, Gamepad2, GraduationCap, RotateCw, Sparkles } from "lucide-react"
import { useState } from "react"
import styles from "./recent-updates.module.css"

type Update = { title: string; content: string; href?: string }

function Illustration({ index, active, pulse }: { index: number; active: boolean; pulse: number }) {
  return (
    <svg viewBox="0 0 320 176" fill="none" aria-hidden="true" className={styles.illustration}>
      <ellipse cx="160" cy="151" rx="89" ry="8" fill="currentColor" opacity=".12" />
      {index === 0 ? (
        <g className={styles.book}>
          <path d="M76 39 156 49 242 34 243 131 157 149 75 137Z" fill="#111" stroke="#111" strokeWidth="3" strokeLinejoin="round" />
          <path d="m72 32 84 12 83-16v98l-83 17-84-13Z" fill="#fffdf5" stroke="#111" strokeWidth="3" strokeLinejoin="round" />
          <path d="m156 44 83-16v98l-83 17Z" fill="#dbeafe" stroke="#111" strokeWidth="3" strokeLinejoin="round" />
          <path d="m90 56 47 7m-47 8 47 7m-47 8 33 5m-33 10 43 6" stroke="#111" strokeWidth="3" strokeLinecap="round" />
          <path d="m175 65 44-9m-44 23 44-9m-44 23 30-6" stroke="#2f81f7" strokeWidth="3" strokeLinecap="round" />
          <g className={`${styles.page} ${active ? styles.pageTurned : ""}`}>
            <path d="m156 44 65-21v96l-65 24Z" fill="#fff" stroke="#111" strokeWidth="3" strokeLinejoin="round" />
            <path d="m174 57 28-9m-28 24 28-9m-28 24 20-7" stroke="#111" strokeWidth="3" strokeLinecap="round" />
            <path d="m189 34 15-5v36l-8-4-7 9Z" fill="#ff6b7a" stroke="#111" strokeWidth="2" />
          </g>
          <path d="m48 48-9-9m13-3-2-11m-11 34-12-1" stroke="#2f81f7" strokeWidth="3" strokeLinecap="round" />
          <path d="m270 93 4 10 10 4-10 4-4 10-4-10-10-4 10-4Z" fill="#ffc224" stroke="#111" strokeWidth="2" />
        </g>
      ) : index === 1 ? (
        <g key={pulse} className={pulse ? styles.gamePulse : styles.game}>
          <path d="M160 51V37c0-24 46-8 46-29" stroke="#111" strokeWidth="3" strokeLinecap="round" />
          <path d="M111 53h98c19 0 27 18 33 40l9 32c5 20-14 32-28 18l-24-22h-79l-24 22c-14 14-33 2-28-18l9-32c6-22 15-40 34-40Z" fill="#111" stroke="#111" strokeWidth="3" transform="translate(0 5)" />
          <path d="M111 48h98c19 0 27 18 33 40l9 32c5 20-14 32-28 18l-24-22h-79l-24 22c-14 14-33 2-28-18l9-32c6-22 15-40 34-40Z" fill="#ff8e9a" stroke="#111" strokeWidth="3" />
          <path d="M103 68h13v13h13v13h-13v13h-13V94H90V81h13Z" fill="#fff8e7" stroke="#111" strokeWidth="3" strokeLinejoin="round" />
          <circle cx="208" cy="76" r="9" fill="#ffc224" stroke="#111" strokeWidth="3" className={styles.gameButton} />
          <circle cx="225" cy="94" r="9" fill="#2f81f7" stroke="#111" strokeWidth="3" />
          <rect x="146" y="93" width="12" height="5" rx="2" fill="#111" />
          <rect x="166" y="93" width="12" height="5" rx="2" fill="#111" />
          <path d="m46 62 5 11 12 2-9 9 2 12-10-6-11 6 2-12-9-9 12-2Z" fill="#ffc224" stroke="#111" strokeWidth="2" className={styles.gameStar} />
          <path d="m270 42 9-8m-5 22 13-1" stroke="#111" strokeWidth="3" strokeLinecap="round" />
        </g>
      ) : (
        <g className={styles.network}>
          <path d="M64 58h61m70 0h61M160 102v31h80" stroke="#111" strokeWidth="3" strokeDasharray="5 6" className={styles.signal} />
          <rect x="116" y="23" width="89" height="83" rx="19" fill="#111" transform="translate(3 4)" />
          <rect x="116" y="23" width="89" height="83" rx="19" fill="#4ade80" stroke="#111" strokeWidth="3" />
          <path d="M160 23v-9" stroke="#111" strokeWidth="3" />
          <circle cx="160" cy="10" r="5" fill="#ffc224" stroke="#111" strokeWidth="2" />
          <rect x="130" y="43" width="61" height="36" rx="11" fill="#fffdf5" stroke="#111" strokeWidth="3" />
          <path d="M144 55v10m32-10v10" stroke="#111" strokeWidth="5" strokeLinecap="round" />
          <path d="M151 89h18" stroke="#111" strokeWidth="3" strokeLinecap="round" />
          <rect x="32" y="37" width="43" height="42" rx="10" fill="#fff" stroke="#111" strokeWidth="3" />
          <path d="m48 49-7 9 7 9m12-18 7 9-7 9" stroke="#2f81f7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="240" y="37" width="43" height="42" rx="10" fill="#ffc224" stroke="#111" strokeWidth="3" />
          <path d="m251 58 7 7 13-15" stroke="#111" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="219" y="112" width="54" height="35" rx="9" fill="#fff" stroke="#111" strokeWidth="3" />
          <path d="M232 124h28m-28 10h17" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
          <path d="m76 113 4 9 9 4-9 4-4 9-4-9-9-4 9-4Z" fill="#ff6b7a" stroke="#111" strokeWidth="2" />
        </g>
      )}
    </svg>
  )
}

export function RecentUpdates({ items }: { items: Update[] }) {
  const [bookOpen, setBookOpen] = useState(false)
  const [gamePulse, setGamePulse] = useState(0)
  const icons = [BookOpen, Gamepad2, GraduationCap]

  return (
    <section className={styles.section} aria-labelledby="recent-updates-title">
      <header className={styles.header}>
        <h3 id="recent-updates-title">近日生活 <span>| RECENT UPDATES</span></h3>
        <div className={styles.headerDoodle} aria-hidden="true"><span /><Sparkles size={26} /></div>
      </header>
      <div className={styles.board}>
        <div className={styles.grid}>
          {items.map((item, index) => {
            const Icon = icons[index] || BookOpen
            const inner = (
              <>
                <div className={styles.cardTop}>
                  <span className={styles.icon}><Icon size={21} strokeWidth={2.2} /></span>
                  <span className={styles.title}>{item.title}</span>
                  <span className={styles.number} aria-hidden="true">0{index + 1}</span>
                </div>
                <div className={styles.scene}>
                  <Illustration index={index} active={bookOpen} pulse={gamePulse} />
                  <span className={styles.tape} aria-hidden="true" />
                </div>
                <div className={styles.cardBottom}>
                  <p>{item.content}</p>
                  <span className={styles.action} aria-hidden="true">
                    {item.href ? <ArrowUpRight size={22} /> : index === 0 ? <RotateCw size={19} /> : <Gamepad2 size={20} />}
                  </span>
                </div>
                {item.href && <span className={styles.linkLabel}>点击查看 <ArrowUpRight size={14} /></span>}
              </>
            )
            const className = `${styles.card} ${[styles.reading, styles.playing, styles.learning][index] || styles.reading}`
            return item.href ? (
              <a key={item.title} className={className} href={item.href} target="_blank" rel="noreferrer">{inner}</a>
            ) : (
              <button key={item.title} type="button" className={className}
                aria-label={`${item.title}：${item.content}，${index === 0 ? "点击翻动书页插画" : "点击让手柄动起来"}`}
                aria-pressed={index === 0 ? bookOpen : undefined}
                onClick={() => index === 0 ? setBookOpen((value) => !value) : setGamePulse((value) => value + 1)}>
                {inner}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
