import SectionLabel from '@/components/ui/SectionLabel'
import styles from './NotaryChecklist.module.css'

interface NotaryChecklistProps {
  eyebrow?: string
  heading?: React.ReactNode
  intro?: string
  items?: string[]
  footnote?: string
}

export const CHECKLIST_ITEMS = [
  'The original document that needs notarising. Do not sign it beforehand unless we have told you to; most documents must be signed in front of the Notary.',
  'Current government-issued photo identification: your passport, or your Australian driver\'s licence. Bring both if you have them.',
  'Any email, checklist or written instructions from the overseas authority that asked for the document. They often specify the exact wording of the certificate.',
  'The correct spelling of every name that appears, and the country the document is going to. Both go on the notarial certificate.',
  'Any supporting originals the document refers to: a company extract if you are signing for a company, a marriage certificate if a name has changed.',
]

export default function NotaryChecklist({
  eyebrow = 'Before you come in',
  heading = <>What to bring to a <em>notary appointment</em>.</>,
  intro = 'Send us the document and the overseas instructions before your appointment where you can. We then confirm whether notarisation on its own is enough, or whether a DFAT apostille or authentication is also needed, and quote the fixed fee.',
  items = CHECKLIST_ITEMS,
  footnote = 'If a person signing does not read English confidently, tell us when you book. We arrange an interpreter or explain what the certificate needs to say about it.',
}: NotaryChecklistProps) {
  return (
    <section className={styles.section} aria-labelledby="notary-checklist-heading">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <SectionLabel variant="leaf">{eyebrow}</SectionLabel>
          <h2 id="notary-checklist-heading" className={styles.heading}>{heading}</h2>
          <p className={styles.intro}>{intro}</p>
        </div>
        <div className={styles.listWrap}>
          <ol className={styles.list}>
            {items.map((item) => (
              <li key={item} className={styles.item}>{item}</li>
            ))}
          </ol>
          {footnote && <p className={styles.footnote}>{footnote}</p>}
        </div>
      </div>
    </section>
  )
}
