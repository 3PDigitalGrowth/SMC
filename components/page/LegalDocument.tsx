import styles from './LegalDocument.module.css'

interface Section {
  heading: string
  paragraphs: string[]
}

interface LegalDocumentProps {
  lastUpdated: string
  sections: Section[]
  intro?: string[]
  closing?: string[]
}

export default function LegalDocument({ lastUpdated, sections, intro, closing }: LegalDocumentProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.meta}>Last updated · {lastUpdated}</p>
        {intro && intro.length > 0 && (
          <div className={styles.intro}>
            {intro.map((p, i) => (
              <p key={i} className={styles.paragraph}>{p}</p>
            ))}
          </div>
        )}
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
        {closing && closing.length > 0 && (
          <div className={styles.closing}>
            {closing.map((p, i) => (
              <p key={i} className={styles.paragraph}>{p}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
