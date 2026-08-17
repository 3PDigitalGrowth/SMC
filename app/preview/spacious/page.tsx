import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Preview: proposed desktop layout',
  robots: { index: false, follow: false },
}

const PAGES = [
  { label: 'Home page', preview: '/preview/spacious/home', live: '/' },
  { label: 'About Us', preview: '/preview/spacious/about', live: '/about' },
  { label: 'Contact Us', preview: '/preview/spacious/contact', live: '/contact' },
]

export default function SpaciousIndex() {
  return (
    <main
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '160px 24px 96px',
        fontFamily: 'var(--font-body), Inter, sans-serif',
        color: 'var(--ink)',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-display), Georgia, serif',
          fontSize: '40px',
          lineHeight: 1.1,
          marginBottom: '16px',
        }}
      >
        Proposed desktop layout
      </h1>
      <p style={{ lineHeight: 1.65, color: 'var(--ink-muted)', marginBottom: '12px' }}>
        These previews widen the desktop content area and give the extra room to the
        photographs, so the pages feel fuller on large screens. The text keeps its
        comfortable reading width, and nothing changes on mobile.
      </p>
      <p style={{ lineHeight: 1.65, color: 'var(--ink-muted)', marginBottom: '40px' }}>
        Open a preview and the live page side by side to compare. Best viewed on a
        desktop monitor, where the difference is most visible.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '16px' }}>
        {PAGES.map((p) => (
          <li
            key={p.preview}
            style={{
              border: '1px solid var(--rule)',
              borderRadius: '10px',
              padding: '20px 24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontWeight: 600 }}>{p.label}</span>
            <span style={{ display: 'flex', gap: '18px' }}>
              <Link href={p.preview} style={{ color: 'var(--leaf-deep)' }}>
                Proposed →
              </Link>
              <Link href={p.live} style={{ color: 'var(--ink-muted)' }}>
                Current
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}
