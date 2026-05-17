import SectionLabel from '@/components/ui/SectionLabel'
import AnimateIn from '@/components/ui/AnimateIn'
import styles from './ServiceCallout.module.css'

interface CalloutItem {
  title: string
  body: string
}

interface ServiceCalloutProps {
  eyebrow: string
  heading: React.ReactNode
  items: CalloutItem[]
}

export default function ServiceCallout({ eyebrow, heading, items }: ServiceCalloutProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <SectionLabel variant="ember">{eyebrow}</SectionLabel>
          <h2 className={styles.heading}>{heading}</h2>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 80}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.body}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
