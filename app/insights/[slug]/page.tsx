import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogTemplate from '@/components/blog/BlogTemplate'
import { getAllSlugs, getPostBySlug, getRelatedPosts } from '@/lib/blog'

interface RouteParams {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: RouteParams): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Not found' }
  const { frontmatter } = post
  const canonical = `https://stevenmclark.com.au/insights/${frontmatter.slug}`
  const isDraft = !!frontmatter.draft

  return {
    title: frontmatter.metaTitle,
    description: frontmatter.metaDescription,
    keywords: frontmatter.keywords,
    alternates: isDraft ? undefined : { canonical },
    robots: isDraft ? { index: false, follow: false } : undefined,
    openGraph: {
      title: frontmatter.metaTitle,
      description: frontmatter.metaDescription,
      url: canonical,
      type: 'article',
      images: frontmatter.heroImage ? [{ url: frontmatter.heroImage }] : undefined,
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.metaTitle,
      description: frontmatter.metaDescription,
    },
  }
}

export default function InsightPage({ params }: RouteParams) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(post)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.frontmatter.title,
    description: post.frontmatter.metaDescription,
    datePublished: post.frontmatter.date,
    author: { '@type': 'Person', name: post.frontmatter.author },
    publisher: {
      '@type': 'Organization',
      name: 'Steven M Clark Lawyers',
    },
    image: post.frontmatter.heroImage
      ? `https://stevenmclark.com.au${post.frontmatter.heroImage}`
      : undefined,
    mainEntityOfPage: `https://stevenmclark.com.au/insights/${post.frontmatter.slug}`,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: (post.frontmatter.breadcrumb ?? ['Insights', post.frontmatter.title]).map(
      (label, i, arr) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: label,
        item:
          i === 0
            ? 'https://stevenmclark.com.au/insights'
            : i === arr.length - 1
              ? `https://stevenmclark.com.au/insights/${post.frontmatter.slug}`
              : undefined,
      }),
    ),
  }

  return (
    <>
      <BlogTemplate post={post} related={related} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  )
}

