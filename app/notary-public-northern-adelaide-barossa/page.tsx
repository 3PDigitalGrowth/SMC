import ServiceAreaPage, { META, SLUG } from '@/components/notary/pages/ServiceAreaPage'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: `/${SLUG}`,
  title: META.title,
  description: META.description,
})

export default function Page() {
  return <ServiceAreaPage base="" />
}
