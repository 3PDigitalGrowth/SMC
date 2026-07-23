import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimateIn from '@/components/ui/AnimateIn'
import styles from './TeamIntro.module.css'

export default function TeamIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.photoCol}>
          <AnimateIn>
            <div className={styles.photoWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-team-portrait-1280.jpg"
                srcSet="/images/hero-team-portrait-1280.jpg 1280w, /images/hero-team-portrait-2333.jpg 2333w"
                sizes="(max-width: 1023px) 92vw, 46vw"
                alt="The Steven M Clark Lawyers team on the front steps of the firm's Gawler South office"
                className={styles.photo}
              />
            </div>
            <p className={styles.caption}>
              <span className={styles.captionNames}>
                Mahima Sobti, Steven Clark, Jack Clark and Zahra Amin
              </span>
              <span> on the front steps at 1 Adelaide Road, Gawler South.</span>
            </p>
          </AnimateIn>
        </div>

        <div className={styles.copyCol}>
          <AnimateIn delay={120}>
            <SectionLabel variant="leaf">The people</SectionLabel>
            <h2 className={styles.heading}>
              This is who you&apos;d be <em>calling</em>.
            </h2>
            <p className={styles.body}>
              Principal Steven Clark and solicitors Zahra Amin, Jack Clark and
              Mahima Sobti are pictured outside the firm&apos;s long-established
              office. Together with a dedicated support team, they ensure
              clients receive professional service and assistance throughout
              the week, Monday to Friday.
            </p>
            <Link href="/about" className={styles.link}>
              Meet the full team
              <span aria-hidden className={styles.linkArrow}>→</span>
            </Link>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}
