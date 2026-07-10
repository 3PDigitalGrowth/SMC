import ArtImage from '@/components/ui/ArtImage'
import SectionLabel from '@/components/ui/SectionLabel'
import AnimateIn from '@/components/ui/AnimateIn'
import { IMAGES } from '@/lib/images'
import styles from './Editorial.module.css'

const principles = [
  {
    title: 'We listen before we advise.',
    body: 'No clock-watching in the first conversation. The advice that follows is better because of it.',
  },
  {
    title: 'Plain English, always.',
    body: 'You will always know what is happening and why, without needing a law degree.',
  },
  {
    title: 'Genuinely local.',
    body: 'Steven has lived in Gawler since 1971. The team works, lives, and raises families here. That changes outcomes.',
  },
  {
    title: 'Upfront on cost.',
    body: 'A fee estimate before you commit. If anything changes, we tell you before it does.',
  },
]

export default function Editorial() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.headRow}>
          <div>
            <SectionLabel variant="leaf">Why people in Gawler call Steven</SectionLabel>
            <h2 className={styles.heading}>
              A general practice that has served the Gawler region <em>since 1985</em>.
            </h2>
          </div>
          <p className={styles.intro}>
            Steven M Clark Lawyers has been part of the Gawler community since 1985.
            Generalist by design. We handle the call when you don&apos;t yet know which
            specialist you need, and we know when to bring one in.
          </p>
        </div>

        <div className={styles.spread}>
          <div className={styles.portraitCol}>
            <AnimateIn>
              <div className={styles.portraitWrap}>
                <ArtImage
                  src={IMAGES.teamHallway.src}
                  alt={IMAGES.teamHallway.alt}
                  caption={IMAGES.teamHallway.caption}
                  fill
                  treatment="static"
                  sizes="(max-width: 1023px) 90vw, 45vw"
                />
              </div>
              <p className={styles.portraitCaption}>
                <span className={styles.portraitName}>Steven M Clark</span>
                <span> and the team. Steven was admitted in 1983 and is the only Public Notary between North Adelaide and the Riverland.</span>
              </p>
            </AnimateIn>
          </div>

          <div className={styles.bodyCol}>
            <AnimateIn delay={120}>
              <p className={styles.lead}>
                Steven commenced practice in 1985 and has continued serving the
                Gawler community ever since. The reason people drive past closer
                firms to see him is not branding. It is that he has spent decades
                answering the call that begins with <em>&ldquo;I&apos;m not sure
                whether I should even be ringing you, but&hellip;&rdquo;</em>
              </p>

              <p className={styles.bodyText}>
                He has lived in Gawler since 1971, raised seven children here, sits on
                the board of the Central District Football Club as Director and Club
                Solicitor, and is a Paul Harris Fellow with the Rotary Club of Gawler
                Light. Past board roles include Trinity College Foundation, the
                Gawler Hospital Foundation and the Gawler Business Development Board.
              </p>

              <p className={styles.bodyText}>
                Today he works alongside a team of seven: solicitors Zahra Amin and
                Jack Clark, and the support team who keep the door open Monday to
                Friday.
              </p>

              <div className={styles.principles}>
                {principles.map((p, i) => (
                  <div key={p.title} className={styles.principle}>
                    <span className={styles.principleNum}>0{i + 1}</span>
                    <div>
                      <h3 className={styles.principleTitle}>{p.title}</h3>
                      <p className={styles.principleBody}>{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>

        <AnimateIn>
          <figure className={styles.pullQuote}>
            <p>
              &ldquo;Steven and his team guided me through the most difficult period of my life
              with patience, real expertise and care. I always knew exactly where things stood.&rdquo;
            </p>
            <figcaption>
              <span>SJ</span>
              <span>Family law client · Gawler · 2025</span>
            </figcaption>
          </figure>
        </AnimateIn>
      </div>
    </section>
  )
}
