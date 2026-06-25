'use client'

import { useEffect } from 'react'

export function useExitIntent(callback: () => void) {
  useEffect(() => {
    // Show at most once per browser session.
    if (sessionStorage.getItem('exitIntentShown')) return
    const handler = (e: MouseEvent) => {
      if (e.clientY < 0) {
        sessionStorage.setItem('exitIntentShown', 'true')
        // Detach immediately so the modal can never re-trigger this session.
        document.removeEventListener('mouseleave', handler)
        callback()
      }
    }
    document.addEventListener('mouseleave', handler)
    return () => document.removeEventListener('mouseleave', handler)
  }, [callback])
}
