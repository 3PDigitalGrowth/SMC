import Link from 'next/link'
import ArtImage from '@/components/ui/ArtImage'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimateIn from '@/components/ui/AnimateIn'
import { IMAGES } from '@/lib/images'
import styles from './Pathways.module.css'

const cards = [
  {
    image: IMAGES.pathwaySeparation,
    eyebrow: 'Family',
    title: 'Going through a separation.',
    body: 'You do not have to figure this out alone. A confidential first call clarifies what your options actually are: what you are entitled to, what comes next, and what it will cost.',
    link: '#book',
    linkLabel: 'Talk to Us',
  },
  {
    image: IMAGES.pathwayEstate,
    eyebrow: 'Estates',
    title: 'Planning what happens next.',
    body: 'A properly prepared Will, Power of Attorney and Advance Care Directive give your family certainty when they need it most. Get it right once, and forget about it.',
    link: '#book',
    linkLabel: 'Sort your estate',
  },
  {
    image: IMAGES.pathwayBusiness,
    eyebrow: 'Business',
    title: 'Running a business in the region.',
    body: 'Straight legal advice for SMEs across the Gawler region and South Australia: from the contract on the table this week, to the succession plan five years away.',
    link: '#book',
    linkLabel: 'Get an opinion',
  },
]

export default function Pathways() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <SectionLabel variant="leaf">What&apos;s brought you here?</SectionLabel>
          <div className={styles.headRow}>
            <h2 className={styles.heading}>
              Three reasons most people pick up the phone.
            </h2>
            <p className={styles.lede}>
              We are a general practice, so if your situation is not one of these three,
              we almost certainly still handle it. Start anywhere; we&apos;ll put you in
              front of the right person.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          {cards.map((card, i) => (
            <AnimateIn key={card.title} delay={i * 120}>
              <Link href={card.link} className={styles.card}>
                <div className={styles.cardImage}>
                  <ArtImage
                    src={card.image.src}
                    alt={card.image.alt}
                    caption={card.image.caption}
                    fill
                    treatment="mono"
                    sizes="(max-width: 1023px) 90vw, 33vw"
                  />
                </div>
                <span className={styles.cardEyebrow}>{card.eyebrow}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
                <span className={styles.cardLink}>
                  {card.linkLabel}
                  <span aria-hidden>→</span>
                </span>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
