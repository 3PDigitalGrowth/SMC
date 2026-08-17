import Link from 'next/link'
import type { CSSProperties } from 'react'

// The proposed desktop layout, expressed entirely as design-token overrides.
// The content band widens from 1280px to 1560px and every gained pixel goes
// to the photography: hero and section grids tilt toward the image column,
// and image frames take slightly taller crops. Mobile is untouched because
// the sub-1024px media queries collapse these grids to a single column.
const SPACIOUS_TOKENS = {
  '--max-width': '1560px',
  '--ph-cols': 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
  '--ph-aspect': '3 / 4',
  '--ph-aspect-wide': '5 / 4',
  '--ti-cols': '1.25fr 0.85fr',
  '--ed-spread-cols': '1.2fr 0.9fr',
  '--ed-portrait-aspect': '5 / 4',
} as CSSProperties

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
        <span>Preview: proposed desktop layout, larger photography.</span>
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
