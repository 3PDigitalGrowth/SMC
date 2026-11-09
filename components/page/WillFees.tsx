import SectionLabel from '@/components/ui/SectionLabel'
import AnimateIn from '@/components/ui/AnimateIn'
import { WILL_FEES } from '@/lib/will-fees'
import styles from './WillFees.module.css'

/**
 * Will fee list for the estate page. Renders nothing until the firm has
 * confirmed the figures (WILL_FEES.published). `preview` forces it on for the
 * unlisted review page, with unconfirmed prices marked.
 */
export default function WillFees({ preview = false }: { preview?: boolean }) {
  if (!WILL_FEES.published && !preview) return null

  return (
    <section className={styles.section} id="fees" aria-labelledby="will-fees-heading">
      <div className={styles.inner}>
        <div className={styles.head}>
          <SectionLabel variant="leaf">What it costs</SectionLabel>
          <h2 id="will-fees-heading" className={styles.heading}>
            Will fees, fixed and quoted before we start.
          </h2>
        </div>

        <AnimateIn>
          <ul className={styles.list}>
            {WILL_FEES.items.map((item) => (
              <li key={item.label} className={styles.row}>
                <div className={styles.text}>
                  <p className={styles.label}>{item.label}</p>
                  <p className={styles.includes}>{item.includes}</p>
                </div>
                <p className={item.price ? styles.price : `${styles.price} ${styles.pending}`}>
                  {item.price ?? 'Price to confirm'}
                </p>
              </li>
            ))}
          </ul>
          <p className={styles.note}>{WILL_FEES.note}</p>
        </AnimateIn>
      </div>
    </section>
  )
}
