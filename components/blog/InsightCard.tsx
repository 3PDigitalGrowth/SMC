import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'
import styles from './InsightCard.module.css'

interface InsightCardProps {
  post: BlogPost
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString('en-AU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}

export default function InsightCard({ post }: InsightCardProps) {
  const { frontmatter, excerpt } = post
  return (
    <Link href={`/insights/${frontmatter.slug}`} className={styles.card}>
      <p className={styles.tag}>{frontmatter.primaryKeyword || frontmatter.tags[0]}</p>
      <h3 className={styles.title}>{frontmatter.title}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
      <div className={styles.meta}>
        <span>{formatDate(frontmatter.date)}</span>
        <span aria-hidden>·</span>
        <span>{frontmatter.readTime}</span>
      </div>
    </Link>
  )
}
