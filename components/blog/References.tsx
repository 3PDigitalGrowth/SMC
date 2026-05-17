import SectionLabel from '@/components/ui/SectionLabel'
import type { BlogReference } from '@/lib/blog'
import styles from './References.module.css'

interface ReferencesProps {
  items: BlogReference[]
}

export default function References({ items }: ReferencesProps) {
  if (!items || items.length === 0) return null
  return (
    <section className={styles.section} aria-label="References">
      <SectionLabel variant="leaf">References</SectionLabel>
      <ol className={styles.list}>
        {items.map((ref, i) => (
          <li key={ref.url} className={styles.item}>
            <span className={styles.num}>{i + 1}.</span>
            <span className={styles.body}>
              <a href={ref.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {ref.title}
              </a>
              {ref.note && <span className={styles.note}> — {ref.note}</span>}
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}
