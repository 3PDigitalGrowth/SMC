'use client'

import { useEffect } from 'react'

export function useExitIntent(callback: () => void) {
  useEffect(() => {
    if (localStorage.getItem('exitIntentShown')) return
    const handler = (e: MouseEvent) => {
      if (e.clientY < 0) {
        localStorage.setItem('exitIntentShown', 'true')
        callback()
      }
    }
    document.addEventListener('mouseleave', handler)
    return () => document.removeEventListener('mouseleave', handler)
  }, [callback])
}
