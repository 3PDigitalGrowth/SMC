import ArtImage from '@/components/ui/ArtImage'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimateIn from '@/components/ui/AnimateIn'
import type { ImageDef } from '@/lib/images'
import styles from './HubProof.module.css'

interface HubProofProps {
  eyebrow: string
  quote: string
  attribution: string
  body: string[]
  image?: ImageDef
}

export default function HubProof({ eyebrow, quote, attribution, body, image }: HubProofProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <AnimateIn>
          <SectionLabel variant="leaf">{eyebrow}</SectionLabel>
        </AnimateIn>

        <div className={styles.grid}>
          {image && (
            <AnimateIn delay={80}>
              <div className={styles.imageWrap}>
                <ArtImage
                  src={image.src}
                  alt={image.alt}
                  caption={image.caption}
                  fill
                  treatment="mono"
                  sizes="(max-width: 1023px) 90vw, 38vw"
                />
              </div>
            </AnimateIn>
          )}

          <AnimateIn delay={160}>
            <div className={styles.copyBlock}>
              <p className={styles.quote}>
                <span aria-hidden className={styles.quoteMark}>&ldquo;</span>
                {quote}
              </p>
              <p className={styles.attribution}>{attribution}</p>

              <div className={styles.body}>
                {body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
