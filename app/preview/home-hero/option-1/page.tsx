import Hero from '@/components/home/Hero'

export const metadata = {
  title: 'Home hero preview, Option 1',
  robots: { index: false, follow: false },
}

export default function HeroOption1() {
  return <Hero variant="band" />
}
