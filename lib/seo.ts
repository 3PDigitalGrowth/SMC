import type { Metadata } from 'next'

const SITE_URL = 'https://www.stevenmclark.com.au'
const DEFAULT_OG_IMAGE = '/images/hero-portrait.jpg'

export interface PageMetadataInput {
  path: string
  title: string
  description: string
  image?: string
  noindex?: boolean
  type?: 'website' | 'article'
  publishedTime?: string
  authors?: string[]
}

export function pageMetadata({
  path,
  title,
  description,
  image,
  noindex,
  type = 'website',
  publishedTime,
  authors,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`
  const ogImage = image ?? DEFAULT_OG_IMAGE
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`

  return {
    title,
    description,
    alternates: noindex ? undefined : { canonical: url },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url,
      siteName: 'Steven M Clark Lawyers',
      locale: 'en_AU',
      type,
      images: [{ url: absoluteOgImage, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(authors ? { authors } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteOgImage],
    },
  }
}

export interface BreadcrumbCrumb {
  name: string
  href: string
}

export function breadcrumbJsonLd(crumbs: BreadcrumbCrumb[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href}`,
    })),
  })
}

export const LEGAL_SERVICE_JSON_LD = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${SITE_URL}/#legalservice`,
  name: 'Steven M Clark Lawyers',
  alternateName: 'Steven M Clark Pty Ltd',
  description:
    "Gawler's general law practice since 1985. Family law, estates, property, business, and the only Public Notary between North Adelaide and the Riverland.",
  url: SITE_URL,
  telephone: '+61 8 8522 6025',
  email: 'law@stevenmclark.com.au',
  faxNumber: '+61 8 8312 4960',
  foundingDate: '1985',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1 Adelaide Road',
    addressLocality: 'Gawler South',
    addressRegion: 'SA',
    postalCode: '5118',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.6034878,
    longitude: 138.7472319,
  },
  areaServed: [
    { '@type': 'City', name: 'Gawler' },
    { '@type': 'AdministrativeArea', name: 'Gawler region' },
    { '@type': 'State', name: 'South Australia' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  sameAs: ['https://maps.app.goo.gl/zKVSLimjnENP8s5Z9'],
  image: `${SITE_URL}/images/hero-portrait.jpg`,
  priceRange: '$$',
  founder: {
    '@type': 'Person',
    name: 'Steven M Clark',
    jobTitle: 'Principal Solicitor & Public Notary',
  },
  knowsAbout: [
    'Family law',
    'Divorce and separation',
    'Wills and estates',
    'Probate',
    'Estate planning',
    'Property law',
    'Conveyancing',
    'Commercial law',
    'Business law',
    'Notary public services',
    'Criminal defence',
    'Personal injury',
    'Dispute resolution',
  ],
})

export { SITE_URL }
