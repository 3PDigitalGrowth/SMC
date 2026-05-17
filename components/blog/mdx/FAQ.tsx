import type { BlogFAQ } from '@/lib/blog'
import styles from './FAQ.module.css'

interface FAQProps {
  items: BlogFAQ[]
}

export default function FAQ({ items }: FAQProps) {
  if (!items || items.length === 0) return null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: it.answer,
      },
    })),
  }

  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>Frequently asked</p>
      <h2 className={styles.heading}>Questions about this</h2>
      <div className={styles.list}>
        {items.map((it) => (
          <div key={it.question} className={styles.item}>
            <h3 className={styles.q}>{it.question}</h3>
            <p className={styles.a}>{it.answer}</p>
          </div>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  )
}
