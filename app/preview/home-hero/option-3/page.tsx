import Hero from '@/components/home/Hero'

export const metadata = {
  title: 'Home hero preview, Option 3',
  robots: { index: false, follow: false },
}

export default function HeroOption3() {
  return <Hero variant="frost" />
}
