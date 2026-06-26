import Image from 'next/image'
import styles from './AuthorBio.module.css'

interface AuthorBioProps {
  name: string
}

const STEVEN_BIO = {
  role: 'Principal Solicitor, Public Notary',
  body: "Admitted in 1983. Commenced practice as Steven M Clark Lawyers in 1985 and has been its principal ever since. Gawler resident since 1971, board member of the Central District Football Club, past Director of the Trinity College Foundation and the Gawler Health Service Foundation, and a Paul Harris Fellow.",
  photo: '/images/Steve-headshot-400pxw.jpg',
}

export default function AuthorBio({ name }: AuthorBioProps) {
  return (
    <aside className={styles.bio}>
      <div className={styles.avatar}>
        <Image
          src={STEVEN_BIO.photo}
          alt={`${name}, ${STEVEN_BIO.role}`}
          fill
          sizes="80px"
          className={styles.avatarImg}
          unoptimized
        />
      </div>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>About the author</p>
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{STEVEN_BIO.role}</p>
        <p className={styles.body}>{STEVEN_BIO.body}</p>
      </div>
    </aside>
  )
}
