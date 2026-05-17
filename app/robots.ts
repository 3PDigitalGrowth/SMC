import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://stevenmclark.com.au/sitemap.xml',
    host: 'https://stevenmclark.com.au',
  }
}
