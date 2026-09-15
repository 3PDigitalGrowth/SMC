import type { Metadata } from 'next'
import Link from 'next/link'
import { NOTARY_HUB_SLUG, NOTARY_SPOKES } from '@/components/notary/registry'

export const metadata: Metadata = {
  title: 'Preview: Notary Public pages',
  robots: { index: false, follow: false },
}

const BASE = '/preview/notary'

export default function NotaryPreviewIndex() {
  return (
    <main
      style={{
        maxWidth: '760px',
        margin: '0 auto',
        padding: '160px 24px 96px',
        fontFamily: 'var(--font-body), sans-serif',
        color: 'var(--ink)',
      }}
    >
      <p style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--leaf)', marginBottom: '12px' }}>
        For review · not linked from the site, not indexed
      </p>
      <h1 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '40px', lineHeight: 1.1, marginBottom: '16px' }}>
        Notary Public: the rewritten page and six supporting guides
      </h1>
      <p style={{ lineHeight: 1.65, color: 'var(--ink-muted)', marginBottom: '12px' }}>
        The main notary page is rewritten around what people actually search for (the
        difference from a JP, apostilles, what it costs, what to bring, and where the
        office is for people north of Adelaide). Each of those becomes its own short guide,
        linked from the main page and back to it. Nothing here is live: the current page at
        /notary-public-gawler is untouched until you say go.
      </p>
      <p style={{ lineHeight: 1.65, color: 'var(--ink-muted)', marginBottom: '40px' }}>
        Read the main page first, then the guides. Anything wrong, anything you would say
        differently, anything a real client has asked that is missing: tell us and we change it.
      </p>

      <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '24px', marginBottom: '12px' }}>The main page</h2>
      <p style={{ marginBottom: '32px' }}>
        <Link href={`${BASE}/${NOTARY_HUB_SLUG}`} style={{ color: 'var(--leaf-deep)', fontWeight: 500 }}>
          Notary Public in Gawler for overseas documents and apostilles →
        </Link>
        <br />
        <span style={{ color: 'var(--ink-muted)', fontSize: '14px' }}>
          Replaces the current /notary-public-gawler page at the same address.
        </span>
      </p>

      <h2 style={{ fontFamily: 'var(--font-display), Georgia, serif', fontSize: '24px', marginBottom: '12px' }}>The six guides</h2>
      <ol style={{ paddingLeft: '20px', lineHeight: 1.6 }}>
        {NOTARY_SPOKES.map((s) => (
          <li key={s.slug} style={{ marginBottom: '14px' }}>
            <Link href={`${BASE}/${s.slug}`} style={{ color: 'var(--leaf-deep)', fontWeight: 500 }}>
              {s.title} →
            </Link>
            <br />
            <span style={{ color: 'var(--ink-muted)', fontSize: '14px' }}>{s.blurb}</span>
          </li>
        ))}
      </ol>
    </main>
  )
}
