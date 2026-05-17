import SectionLabel from '@/components/ui/SectionLabel'
import AnimateIn from '@/components/ui/AnimateIn'
import styles from './Testimonials.module.css'

export interface Testimonial {
  quote: string
  author: string
  context?: string
  rating?: number
}

interface TestimonialsProps {
  items?: Testimonial[]
}

const DEFAULT_ITEMS: Testimonial[] = [
  {
    quote:
      "Steven and his team supported my dad for 20+ years. My dad chose wisely. As an expat with us as family based overseas, the closing down of his estate on his passing could have been a nightmare.",
    author: 'Tony C.',
    context: 'Estate · long-term client',
    rating: 5,
  },
  {
    quote:
      'Very helpful, professional and dealt with our situation with sympathy and nothing was too much trouble.',
    author: 'Andrea M.',
    rating: 5,
  },
  {
    quote:
      'Steven and his team are very professional, caring and take the time to listen and explain how they set out to achieve the best outcome possible for you, the client.',
    author: 'Russell P.',
    rating: 5,
  },
]

const GOOGLE_PROFILE_URL = 'https://maps.app.goo.gl/zKVSLimjnENP8s5Z9'

export default function Testimonials({ items = DEFAULT_ITEMS }: TestimonialsProps) {
  const hasItems = items.length > 0

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <SectionLabel variant="leaf">What clients say</SectionLabel>
          <h2 className={styles.heading}>
            {hasItems ? (
              <>
                Words from the people we&apos;ve <em>actually helped</em>.
              </>
            ) : (
              <>
                Reviews from people we&apos;ve <em>actually helped</em>.
              </>
            )}
          </h2>
          <p className={styles.intro}>
            Reproduced from our public Google profile. If we&apos;ve helped you before, a Google
            review means a lot to a small firm.
          </p>
        </div>

        {hasItems ? (
          <ul className={styles.list}>
            {items.map((t, i) => (
              <AnimateIn key={`${t.author}-${i}`} delay={i * 80}>
                <li className={styles.item}>
                  {t.rating !== undefined && (
                    <span className={styles.stars} aria-label={`${t.rating} out of 5 stars`}>
                      {'★'.repeat(Math.round(t.rating))}
                      <span className={styles.starsDim}>{'★'.repeat(5 - Math.round(t.rating))}</span>
                    </span>
                  )}
                  <p className={styles.quote}>
                    <span aria-hidden className={styles.quoteMark}>&ldquo;</span>
                    {t.quote}
                  </p>
                  <p className={styles.author}>
                    {t.author}
                    {t.context && <span className={styles.context}> · {t.context}</span>}
                  </p>
                </li>
              </AnimateIn>
            ))}
          </ul>
        ) : (
          <div className={styles.empty}>
            <p className={styles.emptyHeading}>
              We&apos;re reproducing reviews from our Google profile here shortly.
            </p>
            <p className={styles.emptyBody}>
              In the meantime, you can read them directly, or add your own.
            </p>
          </div>
        )}

        <div className={styles.cta}>
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaLink}
          >
            Read all reviews on Google
            <span aria-hidden>→</span>
          </a>
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSecondary}
          >
            Leave a review →
          </a>
        </div>
      </div>
    </section>
  )
}
