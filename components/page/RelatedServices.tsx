import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimateIn from '@/components/ui/AnimateIn'
import styles from './RelatedServices.module.css'

interface RelatedItem {
  title: string
  body: string
  href: string
}

interface RelatedServicesProps {
  eyebrow: string
  heading: React.ReactNode
  items: RelatedItem[]
}

export default function RelatedServices({ eyebrow, heading, items }: RelatedServicesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <SectionLabel variant="leaf">{eyebrow}</SectionLabel>
          <h2 className={styles.heading}>{heading}</h2>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 60}>
              <Link href={item.href} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.body}</p>
                <span className={styles.cardLink}>
                  Read more
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
