import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export interface BlogReference {
  title: string
  url: string
  note?: string
}

export interface BlogInternalLink {
  url: string
  anchor: string
}

export interface BlogFAQ {
  question: string
  answer: string
}

export interface BlogFrontmatter {
  title: string
  slug: string
  date: string
  author: string
  readTime: string
  metaTitle: string
  metaDescription: string
  primaryKeyword: string
  keywords: string[]
  tags: string[]
  heroImage?: string
  breadcrumb?: string[]
  faqSchema?: BlogFAQ[]
  internalLinks?: BlogInternalLink[]
  references?: BlogReference[]
  draft?: boolean
}

export interface BlogPost {
  frontmatter: BlogFrontmatter
  content: string
  excerpt: string
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

function safeReadDir(): string[] {
  try {
    return fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))
  } catch {
    return []
  }
}

function buildExcerpt(body: string, length = 160): string {
  const stripped = body
    .replace(/^---[\s\S]*?---/, '')
    .replace(/<[^>]+>/g, '')
    .replace(/[#*_`>]/g, '')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    .trim()
  const firstPara = stripped.split('\n\n').find((p) => p.length > 40) ?? stripped
  return firstPara.length > length ? firstPara.slice(0, length).trimEnd() + '…' : firstPara
}

export function getAllSlugs(): string[] {
  return safeReadDir().map((f) => f.replace(/\.mdx$/, ''))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const parsed = matter(raw)
  const frontmatter = parsed.data as BlogFrontmatter
  if (!frontmatter.slug) frontmatter.slug = slug
  return {
    frontmatter,
    content: parsed.content,
    excerpt: buildExcerpt(parsed.content),
  }
}

export function getAllPosts({ includeDrafts = false } = {}): BlogPost[] {
  return safeReadDir()
    .map((file) => getPostBySlug(file.replace(/\.mdx$/, '')))
    .filter((p): p is BlogPost => p !== null)
    .filter((p) => (includeDrafts ? true : !p.frontmatter.draft))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime(),
    )
}

export function getRelatedPosts(
  current: BlogPost,
  { limit = 3 }: { limit?: number } = {},
): BlogPost[] {
  const all = getAllPosts().filter((p) => p.frontmatter.slug !== current.frontmatter.slug)
  const tagged = all
    .map((p) => ({
      post: p,
      score: p.frontmatter.tags.filter((t) => current.frontmatter.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || new Date(b.post.frontmatter.date).getTime() - new Date(a.post.frontmatter.date).getTime())
  return tagged.slice(0, limit).map((r) => r.post)
}
