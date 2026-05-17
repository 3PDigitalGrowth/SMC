'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './ArtImage.module.css'

interface ArtImageProps {
  src?: string
  alt: string
  caption?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
  className?: string
  sizes?: string
  treatment?: 'pan' | 'static' | 'mono'
}

/**
 * Editorial image with graceful placeholder.
 *
 * Uses unoptimized rendering so a missing file 404s in the browser
 * (triggering our onError → placeholder swap) instead of crashing
 * the Next.js image optimizer server-side. When the real images land
 * in /public/images/ they'll just render normally.
 */
export default function ArtImage({
  src,
  alt,
  caption,
  fill,
  width,
  height,
  priority,
  className = '',
  sizes,
  treatment = 'static',
}: ArtImageProps) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = !src || failed

  return (
    <figure className={`${styles.frame} ${styles[treatment]} ${className}`}>
      {showPlaceholder ? (
        <div className={styles.placeholder}>
          <div className={styles.placeholderGrain} aria-hidden />
          <div className={styles.placeholderContent}>
            <span className={styles.placeholderLabel}>Photograph</span>
            <span className={styles.placeholderCaption}>{caption ?? alt}</span>
          </div>
        </div>
      ) : (
        <Image
          src={src!}
          alt={alt}
          fill={fill}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          priority={priority}
          sizes={sizes}
          unoptimized
          onError={() => setFailed(true)}
          className={styles.img}
        />
      )}
    </figure>
  )
}
