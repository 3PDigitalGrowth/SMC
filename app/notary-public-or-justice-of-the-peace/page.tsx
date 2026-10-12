import NotaryVsJPPage, { META, SLUG } from '@/components/notary/pages/NotaryVsJPPage'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: `/${SLUG}`,
  title: META.title,
  description: META.description,
})

export default function Page() {
  return <NotaryVsJPPage base="" />
}
