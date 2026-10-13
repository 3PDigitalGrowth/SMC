import Button from '@/components/ui/Button'
import PhoneLink from '@/components/ui/PhoneLink'
import styles from './InlineCallback.module.css'

interface InlineCallbackProps {
  text: string
  buttonLabel: string
  location: string
}

// A mid-page prompt that sends readers to the callback form (#book) before
// they reach the bottom of a long service page.
export default function InlineCallback({ text, buttonLabel, location }: InlineCallbackProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.row}>
          <p className={styles.text}>{text}</p>
          <div className={styles.actions}>
            <Button variant="leaf" href="#book">
              {buttonLabel}
            </Button>
            <PhoneLink location={location} className={styles.phone}>
              (08) 8522 6025
            </PhoneLink>
          </div>
        </div>
      </div>
    </section>
  )
}
