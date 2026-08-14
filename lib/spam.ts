// Spam screening for the website enquiry forms.
//
// The firm was receiving marketing pitches (guest-post and SEO outreach) through
// the public callback form, landing in law@ alongside genuine client enquiries.
// Nothing is ever silently destroyed: a suspected submission is quarantined to
// the agency inbox instead of the firm's, so a false positive can still be
// recovered by hand.

export type SpamVerdict = 'clean' | 'quarantine' | 'block'

export interface SpamSignal {
  verdict: SpamVerdict
  score: number
  reasons: string[]
}

export interface SpamInput {
  name?: string
  email?: string
  phone?: string
  message?: string
  /** Honeypot field: a real person never sees it, so any value is a bot. */
  hp?: string
  /** Milliseconds between the page loading and the form being submitted. */
  elapsedMs?: number
  ip?: string | null
}

// Phrases that only ever appear in outreach pitches, never in a legal enquiry.
const PITCH_PHRASES = [
  'guest post',
  'guest article',
  'free article',
  'write for your',
  'write an article',
  'your audience',
  'your readers',
  'backlink',
  'link building',
  'link exchange',
  'seo services',
  'seo audit',
  'rank higher',
  'first page of google',
  'increase your traffic',
  'boost your traffic',
  'web design services',
  'digital marketing services',
  'lead generation service',
  'sponsored post',
  'collaboration opportunity',
  'partnership opportunity',
  'crypto',
  'bitcoin',
  'casino',
  'loan offer',
  'investment opportunity',
]

const URL_RE = /(https?:\/\/|www\.)/i
// AU mobile/landline as typed by a real person: 10 digits from 0, or +61.
const AU_PHONE_RE = /^(?:\+?61|0)[2-478]\d{8}$/

// Per-IP submission window. In-memory, so it is per serverless instance: a
// speed bump for repeat submitters rather than a hard global limit.
const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string | null | undefined): boolean {
  if (!ip) return false
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)

  // Opportunistic cleanup so the map cannot grow without bound.
  if (hits.size > 500) {
    hits.forEach((times, key) => {
      if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key)
    })
  }

  return recent.length > RATE_MAX
}

export function clientIp(request: Request): string | null {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return request.headers.get('x-real-ip')
}

export function screenSubmission(input: SpamInput): SpamSignal {
  const reasons: string[] = []

  if (input.hp && input.hp.trim()) {
    return { verdict: 'block', score: 100, reasons: ['honeypot filled'] }
  }

  if (rateLimited(input.ip)) {
    return { verdict: 'block', score: 100, reasons: ['rate limit'] }
  }

  let score = 0
  const haystack = [input.name, input.message, input.email]
    .filter(Boolean)
    .join(' \n ')
    .toLowerCase()

  const matched = PITCH_PHRASES.filter((phrase) => haystack.includes(phrase))
  if (matched.length) {
    score += 2
    reasons.push(`pitch phrase: ${matched.slice(0, 3).join(', ')}`)
  }

  if (input.message && URL_RE.test(input.message)) {
    score += 2
    reasons.push('link in message')
  }

  const phone = (input.phone || '').replace(/[\s()-]/g, '')
  if (phone && !AU_PHONE_RE.test(phone)) {
    score += 1
    reasons.push('phone is not an Australian number')
  }

  // Under two seconds from page load is faster than a person can type a name.
  if (typeof input.elapsedMs === 'number' && input.elapsedMs >= 0 && input.elapsedMs < 2000) {
    score += 2
    reasons.push('submitted too fast')
  }

  return { verdict: score >= 2 ? 'quarantine' : 'clean', score, reasons }
}
