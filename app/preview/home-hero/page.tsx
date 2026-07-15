import Link from 'next/link'

export const metadata = {
  title: 'Home hero options',
  robots: { index: false, follow: false },
}

const options = [
  {
    href: '/preview/home-hero/option-1',
    name: 'Option 1, photo band',
    blurb:
      'The team photo owns a clear band across the top of the page, with the headline and booking form resting below it.',
  },
  {
    href: '/preview/home-hero/option-2',
    name: 'Option 2, two cards',
    blurb:
      'The headline and booking form sit on two separate cards, so more of the photo shows through around and between them.',
  },
  {
    href: '/preview/home-hero/option-3',
    name: 'Option 3, fading panel',
    blurb:
      'Same layout as today, but the panel fades away towards the top so the team shows through clearly above the headline.',
  },
  {
    href: '/preview/home-hero/option-4',
    name: 'Option 4, quick enquiry button',
    blurb:
      'The booking form comes off the page entirely, so the team photo takes centre stage. A "Quick enquiry" button under the headline opens the form in a pop-up.',
  },
]

export default function HeroOptionsIndex() {
  return (
    <section
      style={{
        maxWidth: 720,
        margin: '0 auto',
        padding: '160px 24px 96px',
      }}
    >
      <h1 style={{ fontSize: 40, marginBottom: 12 }}>Home page hero options</h1>
      <p style={{ marginBottom: 40, lineHeight: 1.5 }}>
        Three ways of presenting the team photo on the home page while keeping
        the headline and booking form. Open each option to view it full screen.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: 24 }}>
        {options.map((o) => (
          <li key={o.href}>
            <Link href={o.href} style={{ fontSize: 22, textDecoration: 'underline' }}>
              {o.name}
            </Link>
            <p style={{ marginTop: 6, lineHeight: 1.5 }}>{o.blurb}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
