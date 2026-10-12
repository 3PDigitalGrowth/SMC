import NotaryHub, { HUB_META } from '@/components/notary/pages/NotaryHub'
import { pageMetadata } from '@/lib/seo'
import { IMAGES } from '@/lib/images'

export const metadata = pageMetadata({
  path: '/notary-public-gawler',
  title: HUB_META.title,
  description: HUB_META.description,
  image: IMAGES.notaryDetailHero.src,
})

export default function NotaryPublicGawlerPage() {
  return <NotaryHub base="" />
}
