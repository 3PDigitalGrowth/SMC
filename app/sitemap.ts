import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const BASE_URL = 'https://www.stevenmclark.com.au'

const STATIC_ROUTES = [
  '',
  '/about',
  '/contact',
  '/insights',
  '/family',
  '/estates',
  '/property',
  '/business',
  '/divorce-australia',
  '/divorce-separation',
  '/parenting-children',
  '/property-settlement',
  '/de-facto-relationships',
  '/family-mediation',
  '/gawler-family-lawyers',
  '/intervention-domestic-violence-lawyer',
  '/gawler-estate-lawyer',
  '/estate-planning',
  '/gawler-estate-planning-lawyers',
  '/gawler-trust-lawyer',
  '/power-of-attorney',
  '/gawler-property-lawyers',
  '/property-disputes',
  '/gawler-construction-lawyer',
  '/gawler-lease-lawyer',
  '/gawler-business-lawyers',
  '/gawler-commercial-lawyers',
  '/gawler-debt-recovery',
  '/gawler-industrial-relations-lawyer',
  '/gawler-insolvency-lawyer',
  '/notary-public-gawler',
  '/criminal-defence-lawyer',
  '/gawler-personal-injury-lawyers',
  '/gawler-compensation-lawyers',
  '/gawler-dispute-resolution-lawyers',
  '/identity-checks',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))

  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/insights/${post.frontmatter.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}
