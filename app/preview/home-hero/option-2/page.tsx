import Hero from '@/components/home/Hero'

export const metadata = {
  title: 'Home hero preview, Option 2',
  robots: { index: false, follow: false },
}

export default function HeroOption2() {
  return <Hero variant="split" />
}
