import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { blogMdxComponents } from './mdx-components'
import AuthorBio from './AuthorBio'
import FAQ from './mdx/FAQ'
import References from './References'
import RelatedPosts from './RelatedPosts'
import Booking from '@/components/home/Booking'
import type { BlogPost } from '@/lib/blog'
import styles from './BlogTemplate.module.css'

interface BlogTemplateProps {
  post: BlogPost
  related: BlogPost[]
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

export default function BlogTemplate({ post, related }: BlogTemplateProps) {
  const { frontmatter, content } = post
  const breadcrumb = frontmatter.breadcrumb ?? ['Insights', frontmatter.title]

  return (
    <>
      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.inner}>
            <nav className={styles.crumbs} aria-label="Breadcrumb">
              {breadcrumb.map((c, i) => (
                <span key={c} className={styles.crumb}>
                  {i === 0 ? (
                    <Link href="/insights" className={styles.crumbLink}>{c}</Link>
                  ) : (
                    <span>{c}</span>
                  )}
                  {i < breadcrumb.length - 1 && <span aria-hidden className={styles.crumbSep}>/</span>}
                </span>
              ))}
            </nav>

            <h1 className={styles.title}>{frontmatter.title}</h1>

            <div className={styles.byline}>
              <span className={styles.bylineAuthor}>{frontmatter.author}</span>
              <span aria-hidden>·</span>
              <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
              <span aria-hidden>·</span>
              <span>{frontmatter.readTime}</span>
            </div>

            {frontmatter.heroImage && (
              <div className={styles.heroImage}>
                <Image
                  src={frontmatter.heroImage}
                  alt={frontmatter.title}
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1023px) 90vw, 880px"
                  className={styles.heroImageInner}
                />
              </div>
            )}
          </div>
        </header>

        <div className={styles.bodyWrap}>
          <div className={styles.body}>
            <MDXRemote
              source={content}
              components={blogMdxComponents}
              options={{ mdxOptions: {}, parseFrontmatter: false, scope: {}, blockJS: false }}
            />
          </div>

          <div className={styles.tail}>
            <FAQ items={frontmatter.faqSchema ?? []} />
            <References items={frontmatter.references ?? []} />
            <AuthorBio name={frontmatter.author} />
            <RelatedPosts posts={related} />
          </div>
        </div>
      </article>

      <Booking />
    </>
  )
}
