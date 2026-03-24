import styles from './SocialProofBar.module.css'

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

export default function SocialProofBar() {
  return (
    <section className={styles.bar}>
      <div className={styles.inner}>
        <div className={styles.item}>
          <div className={styles.stars}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
          <span className={styles.label}>Google Reviews</span>
        </div>

        <div className={styles.item}>
          <span className={styles.value}>40 Years</span>
          <span className={styles.label}>Serving Gawler</span>
        </div>

        <div className={styles.item}>
          <span className={styles.badge}>Gold Alliance Member</span>
        </div>

        <div className={styles.item}>
          <span className={styles.smallValue}>Public Notary</span>
          <span className={styles.smallLabel}>Only Notary: North Adelaide to Riverland</span>
        </div>

        <div className={styles.item}>
          <span className={styles.smallValue}>Free Consult</span>
          <span className={styles.smallLabel}>No obligation, no pressure</span>
        </div>
      </div>
    </section>
  )
}
