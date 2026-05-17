import styles from './LegalDocument.module.css'

interface Section {
  heading: string
  paragraphs: string[]
}

interface LegalDocumentProps {
  lastUpdated: string
  sections: Section[]
}

export default function LegalDocument({ lastUpdated, sections }: LegalDocumentProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.meta}>Last updated · {lastUpdated}</p>
        <div className={styles.body}>
          {sections.map((s, i) => (
            <div key={s.heading} className={styles.block}>
              <h2 className={styles.heading}>
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                {s.heading}
              </h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className={styles.paragraph}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
