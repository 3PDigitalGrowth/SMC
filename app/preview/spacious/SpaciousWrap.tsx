import Link from 'next/link'
import type { CSSProperties } from 'react'

// Approved 18 Aug 2026 and promoted to the site-wide defaults, so this
// wrapper no longer overrides anything. The routes stay up because the
// preview link was emailed to the client; they now simply mirror the live
// pages. Safe to delete once the link has gone stale.
const SPACIOUS_TOKENS = {} as CSSProperties

export default function SpaciousWrap({
  liveHref,
  children,
}: {
  /** The production page this preview mirrors, for side-by-side comparison. */
  liveHref: string
  children: React.ReactNode
}) {
  return (
    <div style={SPACIOUS_TOKENS}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 200,
          background: '#3A4F37',
          color: '#FBF7EE',
          fontFamily: 'var(--font-body), Inter, sans-serif',
          fontSize: '14px',
          lineHeight: 1.4,
          padding: '10px 20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '18px',
          flexWrap: 'wrap',
        }}
      >
        <span>This layout was approved and is now live on the site.</span>
        <Link href={liveHref} style={{ color: '#FBF7EE', textDecoration: 'underline' }}>
          View the current live page
        </Link>
        <Link href="/preview/spacious" style={{ color: '#FBF7EE', textDecoration: 'underline' }}>
          All previews
        </Link>
      </div>
      {children}
    </div>
  )
}
