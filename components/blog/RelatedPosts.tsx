import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import type { BlogPost } from '@/lib/blog'
import styles from './RelatedPosts.module.css'

interface RelatedPostsProps {
  posts: BlogPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className={styles.section}>
      <SectionLabel variant="leaf">Read next</SectionLabel>
      <div className={styles.grid}>
        {posts.map((p) => (
          <Link key={p.frontmatter.slug} href={`/insights/${p.frontmatter.slug}`} className={styles.card}>
            <p className={styles.tag}>{p.frontmatter.primaryKeyword || p.frontmatter.tags[0]}</p>
            <h4 className={styles.title}>{p.frontmatter.title}</h4>
            <span className={styles.more}>
              Read on
              <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
