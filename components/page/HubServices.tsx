import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimateIn from '@/components/ui/AnimateIn'
import styles from './HubServices.module.css'

interface ServiceItem {
  title: string
  body: string
  href: string
}

interface HubServicesProps {
  eyebrow: string
  heading: React.ReactNode
  intro?: string
  items: ServiceItem[]
}

export default function HubServices({ eyebrow, heading, intro, items }: HubServicesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <SectionLabel variant="leaf">{eyebrow}</SectionLabel>
          <h2 className={styles.heading}>{heading}</h2>
          {intro && <p className={styles.intro}>{intro}</p>}
        </div>

        <ul className={styles.list}>
          {items.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 60}>
              <li className={styles.item}>
                <Link href={item.href} className={styles.link}>
                  <span className={styles.itemHead}>
                    <span className={styles.itemNum}>{String(i + 1).padStart(2, '0')}</span>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                  </span>
                  <p className={styles.itemBody}>{item.body}</p>
                  <span className={styles.itemMore}>
                    Read more
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              </li>
            </AnimateIn>
          ))}
        </ul>
      </div>
    </section>
  )
}
