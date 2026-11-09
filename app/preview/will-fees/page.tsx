import type { Metadata } from 'next'
import WillFees from '@/components/page/WillFees'

// Unlisted review page: the will fee block as it will sit on /gawler-estate-lawyer,
// for Steve to confirm prices and wording before WILL_FEES.published goes true.
export const metadata: Metadata = {
  title: 'Will fees (draft for review)',
  robots: { index: false, follow: false },
}

export default function WillFeesPreview() {
  return (
    <>
      <div style={{ padding: '120px var(--gutter) 0', maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        <p style={{ fontSize: 'var(--t-body-s)', color: 'var(--ink-muted)', maxWidth: '62ch' }}>
          Draft for review. This block will sit on the Wills and estate page once the prices and wording
          below are confirmed. It is not linked from the site.
        </p>
      </div>
      <WillFees preview />
    </>
  )
}
