import { getAllPosts } from '@/lib/blog'
import RelatedServices from './RelatedServices'

interface RelatedGuidesProps {
  /** Insights slugs, in display order. Drafts and unpublished slugs are skipped, so a guide appears here the day it goes live. */
  slugs: string[]
  eyebrow?: string
  heading?: React.ReactNode
}

function shorten(text: string, max = 140): string {
  if (text.length <= max) return text
  return text.slice(0, text.lastIndexOf(' ', max)).replace(/[,.;:]$/, '') + '…'
}

export default function RelatedGuides({
  slugs,
  eyebrow = 'Guides',
  heading = <>Read this before you call.</>,
}: RelatedGuidesProps) {
  const live = new Map(getAllPosts().map((p) => [p.frontmatter.slug, p]))
  const items = slugs
    .map((slug) => live.get(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .slice(0, 3)
    .map((p) => ({
      title: p.frontmatter.title,
      body: shorten(p.frontmatter.metaDescription || p.excerpt),
      href: `/insights/${p.frontmatter.slug}`,
    }))
  if (items.length === 0) return null
  return <RelatedServices eyebrow={eyebrow} heading={heading} items={items} />
}
