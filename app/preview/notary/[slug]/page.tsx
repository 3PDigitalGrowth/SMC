import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NOTARY_PAGES } from '@/components/notary/pages'
import { NOTARY_SLUGS } from '@/components/notary/registry'
import { pageMetadata } from '@/lib/seo'

const BASE = '/preview/notary'

interface RouteParams {
  params: { slug: string }
}

export const dynamicParams = false

export function generateStaticParams() {
  return NOTARY_SLUGS.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: RouteParams): Metadata {
  const def = NOTARY_PAGES[params.slug]
  if (!def) return { title: 'Not found' }
  return pageMetadata({
    path: `${BASE}/${params.slug}`,
    title: `Preview: ${def.meta.title}`,
    description: def.meta.description,
    noindex: true,
  })
}

export default function NotaryPreviewPage({ params }: RouteParams) {
  const def = NOTARY_PAGES[params.slug]
  if (!def) notFound()
  return def.render(BASE)
}
