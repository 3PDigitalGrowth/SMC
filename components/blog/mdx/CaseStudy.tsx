import styles from './CaseStudy.module.css'

interface CaseStudyProps {
  industry: string
  metric: string
  metricLabel?: string
  quote: string
  author: string
  children: React.ReactNode
}

export default function CaseStudy({
  industry,
  metric,
  metricLabel,
  quote,
  author,
  children,
}: CaseStudyProps) {
  return (
    <aside className={styles.block}>
      <p className={styles.industry}>{industry}</p>
      <div className={styles.metricRow}>
        <span className={styles.metric}>{metric}</span>
        {metricLabel && <span className={styles.metricLabel}>{metricLabel}</span>}
      </div>
      <div className={styles.body}>{children}</div>
      <blockquote className={styles.quote}>
        <span aria-hidden className={styles.quoteMark}>&ldquo;</span>
        {quote}
      </blockquote>
      <p className={styles.author}>{author}</p>
    </aside>
  )
}
