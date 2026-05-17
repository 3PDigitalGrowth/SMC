'use client'

import { useState } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'
import styles from './ServiceFAQ.module.css'

interface FAQItem {
  q: string
  a: string
}

interface ServiceFAQProps {
  eyebrow: string
  heading: React.ReactNode
  items: FAQItem[]
}

export default function ServiceFAQ({ eyebrow, heading, items }: ServiceFAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <SectionLabel variant="leaf">{eyebrow}</SectionLabel>
          <h2 className={styles.heading}>{heading}</h2>
        </div>

        <ul className={styles.list}>
          {items.map((item, i) => {
            const isOpen = openIdx === i
            return (
              <li key={item.q} className={styles.item}>
                <button
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                >
                  <span className={styles.q}>{item.q}</span>
                  <span aria-hidden className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
                    +
                  </span>
                </button>
                <div className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}>
                  <p>{item.a}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
