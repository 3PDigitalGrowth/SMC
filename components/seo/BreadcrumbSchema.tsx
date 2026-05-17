import { breadcrumbJsonLd, type BreadcrumbCrumb } from '@/lib/seo'

interface BreadcrumbSchemaProps {
  crumbs: BreadcrumbCrumb[]
}

export default function BreadcrumbSchema({ crumbs }: BreadcrumbSchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd(crumbs) }}
    />
  )
}
