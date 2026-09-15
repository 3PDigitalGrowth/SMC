import SectionLabel from '@/components/ui/SectionLabel'
import styles from './NotaryRoute.module.css'

interface Stop {
  place: string
  who: string
  what: string
  time: string
}

const STOPS: Stop[] = [
  {
    place: '1 Adelaide Road, Gawler South',
    who: 'Steven M Clark, Public Notary',
    what: 'We check your identity, watch you sign (or attest the copy), then attach the notarial certificate and press the seal. The document is now recognised under Australian law for use abroad.',
    time: 'One appointment, 15 to 30 minutes',
  },
  {
    place: 'Department of Foreign Affairs and Trade',
    who: 'Australian Government, Adelaide office',
    what: 'DFAT confirms the notary\'s signature and seal are genuine and issues an apostille (for Hague Convention countries) or an authentication (for the rest). We lodge it for you, or show you how.',
    time: 'A few business days once lodged. DFAT charges A$105 per document.',
  },
  {
    place: 'The authority that asked for it',
    who: 'Overseas court, land registry, bank, consulate, university or employer',
    what: 'They receive a document they can rely on without contacting Australia. A handful of countries outside the Convention add one more step: legalisation at their own embassy, which we tell you about before you start.',
    time: 'Your courier or theirs. We prepare the pack so it arrives intact.',
  },
]

export default function NotaryRoute() {
  return (
    <section className={styles.section} aria-labelledby="notary-route-heading">
      <div className={styles.inner}>
        <div className={styles.head}>
          <SectionLabel variant="ember">Where your document goes</SectionLabel>
          <h2 id="notary-route-heading" className={styles.heading}>
            Three stops between our desk and the <em>authority overseas</em>.
          </h2>
          <p className={styles.intro}>
            Most people arrive knowing only that someone abroad has said the word notarised. This is the whole journey, so you know what each step costs, how long it takes, and which ones we handle.
          </p>
        </div>

        <ol className={styles.route}>
          {STOPS.map((stop, i) => (
            <li key={stop.place} className={styles.stop}>
              <div className={styles.seal} aria-hidden>
                <span className={styles.sealNum}>{i + 1}</span>
              </div>
              <div className={styles.card}>
                <p className={styles.place}>{stop.place}</p>
                <p className={styles.who}>{stop.who}</p>
                <p className={styles.what}>{stop.what}</p>
                <p className={styles.time}>{stop.time}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className={styles.note}>
          If the document is only for use inside Australia, you will usually not need a Notary at all. A Justice of the Peace can witness it at no charge. We will tell you that on the first call rather than book you in.
        </p>
      </div>
    </section>
  )
}
