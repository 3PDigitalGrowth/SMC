import SectionLabel from '@/components/ui/SectionLabel'
import AnimateIn from '@/components/ui/AnimateIn'
import styles from './ServiceBody.module.css'

interface ServiceBodyProps {
  eyebrow: string
  heading: React.ReactNode
  paragraphs: string[]
  asideTitle?: string
  asideItems?: string[]
}

export default function ServiceBody({
  eyebrow,
  heading,
  paragraphs,
  asideTitle,
  asideItems,
}: ServiceBodyProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <SectionLabel variant="leaf">{eyebrow}</SectionLabel>
          <h2 className={styles.heading}>{heading}</h2>
        </div>

        <div className={styles.spread}>
          <AnimateIn>
            <div className={styles.body}>
              {paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? styles.lede : undefined}>
                  {p}
                </p>
              ))}
            </div>
          </AnimateIn>

          {asideItems && asideItems.length > 0 && (
            <AnimateIn delay={120}>
              <aside className={styles.aside}>
                {asideTitle && <p className={styles.asideTitle}>{asideTitle}</p>}
                <ul className={styles.asideList}>
                  {asideItems.map((item) => (
                    <li key={item} className={styles.asideItem}>{item}</li>
                  ))}
                </ul>
              </aside>
            </AnimateIn>
          )}
        </div>
      </div>
    </section>
  )
}
