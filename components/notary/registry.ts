/**
 * Notary hub-and-spoke registry.
 *
 * The hub is the existing /notary-public-gawler URL (it already ranks first
 * for "notary public gawler", so the address stays). Each spoke is a flat
 * slug like the rest of the site. `base` lets the same components render
 * under /preview/notary for client review and at the root once approved.
 */

export const NOTARY_HUB_SLUG = 'notary-public-gawler'

export interface NotarySpoke {
  slug: string
  title: string
  blurb: string
}

export const NOTARY_SPOKES: NotarySpoke[] = [
  {
    slug: 'apostille-and-authentication-south-australia',
    title: 'Apostilles and DFAT authentication',
    blurb: 'What an apostille actually is, which countries want one, what DFAT charges, and how we lodge it for you from Gawler.',
  },
  {
    slug: 'notary-public-or-justice-of-the-peace',
    title: 'Notary, JP or Commissioner for Oaths?',
    blurb: 'Three different officers, three different jobs. Which one your document needs, and when the free option is the right one.',
  },
  {
    slug: 'notary-appointment-checklist',
    title: 'What to bring to your appointment',
    blurb: 'The five things that make a notarisation happen in one visit, and the one thing you must not do before you arrive.',
  },
  {
    slug: 'notary-fees-south-australia',
    title: 'What a Notary costs',
    blurb: 'Why the fee is fixed but not published, what moves it up or down, and the DFAT and courier costs to budget for.',
  },
  {
    slug: 'notarising-documents-for-use-overseas',
    title: 'Documents for India, Italy, the UK and elsewhere',
    blurb: 'Powers of Attorney for property abroad, citizenship applications, foreign probate, overseas contracts. What each destination tends to ask for.',
  },
  {
    slug: 'notary-public-northern-adelaide-barossa',
    title: 'Serving northern Adelaide and the Barossa',
    blurb: 'Elizabeth, Salisbury, Munno Para, Roseworthy, Tanunda, Nuriootpa, Kapunda. Closer than the city, with parking beside the office.',
  },
]

export const NOTARY_SLUGS = [NOTARY_HUB_SLUG, ...NOTARY_SPOKES.map((s) => s.slug)]

export function notaryHref(base: string, slug: string): string {
  return `${base}/${slug}`
}

export function spokeLinks(base: string, exclude?: string) {
  return NOTARY_SPOKES.filter((s) => s.slug !== exclude).map((s) => ({
    title: s.title,
    body: s.blurb,
    href: notaryHref(base, s.slug),
  }))
}

export function hubLink(base: string) {
  return {
    title: 'Notary Public, Gawler',
    body: 'The main page: what a Notary does, what we handle, and how to book a single appointment.',
    href: notaryHref(base, NOTARY_HUB_SLUG),
  }
}
