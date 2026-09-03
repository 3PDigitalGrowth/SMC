import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/signature/'],
    },
    sitemap: 'https://www.stevenmclark.com.au/sitemap.xml',
    host: 'https://www.stevenmclark.com.au',
  }
}
