'use client'

import { useState } from 'react'
import styles from './TeamGrid.module.css'

export interface TeamMember {
  name: string
  role: string
  bio?: string
  fullBio?: string[]
  photo?: string
  photoAlt?: string
}

export default function TeamMemberCard({ name, role, bio, fullBio, photo, photoAlt }: TeamMember) {
  const [open, setOpen] = useState(false)
  const hasMore = !!fullBio && fullBio.length > 0
  const panelId = `bio-${name.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <li className={styles.member}>
      {photo && (
        <div className={styles.photoWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} alt={photoAlt ?? name} className={styles.photo} loading="lazy" />
        </div>
      )}
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
      {bio && <p className={styles.bio}>{bio}</p>}

      {hasMore && (
        <>
          <div id={panelId} className={`${styles.full} ${open ? styles.fullOpen : ''}`} hidden={!open}>
            {fullBio!.map((p, i) => (
              <p key={i} className={styles.bio}>{p}</p>
            ))}
          </div>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Show less' : 'Read full bio'}
            <span aria-hidden className={styles.toggleIcon}>{open ? '↑' : '↓'}</span>
          </button>
        </>
      )}
    </li>
  )
}
