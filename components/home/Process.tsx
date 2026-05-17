import ArtImage from '@/components/ui/ArtImage'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimateIn from '@/components/ui/AnimateIn'
import { IMAGES } from '@/lib/images'
import styles from './Process.module.css'

const steps = [
  {
    n: '01',
    title: 'Call.',
    body: "Use the form, the phone, or walk in. The first conversation costs nothing and carries no obligation. You speak to a lawyer, not a gatekeeper.",
  },
  {
    n: '02',
    title: 'Meet.',
    body: 'We listen properly to your situation, explain what the law actually says in plain English, and give you an honest fee estimate before any work begins.',
  },
  {
    n: '03',
    title: 'We handle it.',
    body: "From there, you'll always know what's happening, what it's costing, and what comes next. No surprises, no jargon, no waiting weeks for a reply.",
  },
]

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.backdrop} aria-hidden>
        <ArtImage
          src={IMAGES.officeInterior.src}
          alt=""
          caption={IMAGES.officeInterior.caption}
          fill
          treatment="static"
          sizes="100vw"
        />
        <div className={styles.tint} />
      </div>

      <div className={styles.inner}>
        <div className={styles.head}>
          <SectionLabel variant="paper">How it works</SectionLabel>
          <h2 className={styles.heading}>
            Three steps. No mystery, no pressure.
          </h2>
          <p className={styles.lede}>
            The most common reason people put off making the call is not knowing what
            will happen if they do. Here it is, plainly.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((step, i) => (
            <AnimateIn key={step.n} delay={i * 140}>
              <article className={styles.card}>
                <span className={styles.cardNum}>{step.n}</span>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardBody}>{step.body}</p>
              </article>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
