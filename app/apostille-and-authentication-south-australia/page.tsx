import ApostillePage, { META, SLUG } from '@/components/notary/pages/ApostillePage'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  path: `/${SLUG}`,
  title: META.title,
  description: META.description,
})

export default function Page() {
  return <ApostillePage base="" />
}
