import ArtImage from '@/components/ui/ArtImage'
import SectionLabel from '@/components/ui/SectionLabel'
import type { ImageDef } from '@/lib/images'
import styles from './PageHero.module.css'

interface PageHeroProps {
  eyebrow: string
  heading: React.ReactNode
  lede: string
  image?: ImageDef
  imageCaption?: string
  /** 4:3 landscape image frame instead of the default 4:5 portrait. */
  wideImage?: boolean
  /** CSS aspect-ratio override for the image frame, e.g. "3 / 2". */
  imageAspect?: string
}

export default function PageHero({ eyebrow, heading, lede, image, imageCaption, wideImage, imageAspect }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <SectionLabel variant="leaf">{eyebrow}</SectionLabel>
          <h1 className={styles.heading}>{heading}</h1>
          <p className={styles.lede}>{lede}</p>
        </div>

        {image && (
          <div
            className={`${styles.imageWrap} ${wideImage ? styles.imageWrapWide : ''}`}
            style={imageAspect ? { aspectRatio: imageAspect } : undefined}
          >
            <ArtImage
              src={image.src}
              alt={image.alt}
              caption={image.caption}
              fill
              priority
              treatment="pan"
              sizes="(max-width: 1023px) 90vw, 42vw"
            />
            {imageCaption && (
              <div className={styles.imageCaption}>
                <span>{imageCaption}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
