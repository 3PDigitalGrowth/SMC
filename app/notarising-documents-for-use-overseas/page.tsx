import OverseasPage, { META, SLUG } from '@/components/notary/pages/OverseasPage'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: `/${SLUG}`,
  title: META.title,
  description: META.description,
})

export default function Page() {
  return <OverseasPage base="" />
}
