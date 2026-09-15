# Notary Public: hub-and-spoke rebuild, 15 September 2026

Status: built on an unlisted preview for client review. The live page at
/notary-public-gawler is untouched until Steve and Mahima say go.

Preview index: https://www.stevenmclark.com.au/preview/notary
Hub: https://www.stevenmclark.com.au/preview/notary/notary-public-gawler

## Why this page, and what the data says

Search Console, 28 days to 9 September (www property):

| Measure | Value |
|---|---|
| Impressions for /notary-public-gawler | 1,255 |
| Clicks | 5 |
| Click rate | 0.4% |
| Average position | 23 |
| GA4 landing sessions (28 days) | 8, with 2 key events |

It is the highest-impression service page on the site and the worst
converter. The impressions are real: the page is being shown for the right
searches, mostly from page two and three, and almost nobody clicks.

Queries the page is shown for (28 days, position in brackets): notary public
near me 114 (28), notary public adelaide 93 (11), english notary 66 (65),
free notary public service near me 28 (54), free notary public adelaide 23
(11), australian notary public 11 (9), commissioner of oaths near me 7 (12),
affidavit notary adelaide 4 (13), apostille service near me 1 (8), gawler jp
2 (9), italian notary near me 1 (13).

Read together: people north of Adelaide searching "near me", people
confusing Notary with JP and expecting it to be free, people needing an
apostille, and people with a specific destination in mind. The old page
answered none of those directly. The SERP for "notary public gawler" already
has us first; the SERP for "notary public adelaide" is the Notaries'
Society directory, three city firms and a mobile notary. There is no page
in that set written for the northern suburbs or the Barossa.

## The structure

One hub, six spokes, all interlinked, all flat slugs like the rest of the
site. The hub keeps its URL.

| Page | Slug | Job |
|---|---|---|
| Hub | /notary-public-gawler | The commercial page. Title and H1 lead with "Notary Public in Gawler", the lede answers who, how long, what to bring, what happens next (per the 14 Sep brief). |
| Spoke 1 | /apostille-and-authentication-south-australia | Apostille vs authentication, Hague list, DFAT fee (A$105), how we lodge. Targets "apostille service near me", "apostille adelaide". |
| Spoke 2 | /notary-public-or-justice-of-the-peace | Notary vs JP vs Commissioner for Oaths. Absorbs the "free notary", "jp gawler", "commissioner of oaths near me" searches honestly. |
| Spoke 3 | /notary-appointment-checklist | The brief's "what to bring" section, expanded. Pre-appointment intent. |
| Spoke 4 | /notary-fees-south-australia | Fee variables without a price list. Absorbs "cheap notary", "notary cost". |
| Spoke 5 | /notarising-documents-for-use-overseas | By destination: India, Italy and Greece, UK, China and Philippines, US/Canada/NZ, non-Convention countries. Absorbs "italian notary near me", "english notary". |
| Spoke 6 | /notary-public-northern-adelaide-barossa | Service-area page for the northern suburbs, Barossa, Light and Mid North. Absorbs "notary public near me" and "notary public adelaide" from the north. One page, not one per suburb. |

Every spoke links back to the hub and to two or three siblings. The hub
links to all six through the HubServices block. FAQPage JSON-LD is on all
seven pages (new FAQSchema component).

## What is new on the hub

- Title: "Notary Public, Gawler. Apostilles and documents for overseas."
- H1: "Notary Public in Gawler for overseas documents and apostilles."
- Lede rewritten to the brief's proposed intro.
- **Signature element: the document route.** Three stamped stops (our desk,
  DFAT, the authority overseas) with what happens, who does it, how long
  and what it costs at each. The one thing on the page that could not have
  come from a template, and the thing every caller wants explained.
- Checklist block (what to bring, what not to do).
- FAQ expanded from five to eight questions, with schema.
- Related services now point at the specific reason (PoA for property
  abroad, overseas contracts).

## Facts used, and their sources

- Notaries appointed by the Supreme Court of SA under the Notaries Public
  Act 2016 (SA).
- DFAT issues apostilles (Hague Convention countries) and authentications
  (others). Fee A$105 per document, Smartraveller, updated 18 Aug 2026.
- Hague Convention members named on the pages: UK, India, Italy, Greece,
  Germany, Netherlands, Philippines (2019), NZ, USA, China (November 2023),
  Canada (January 2024).
- Office: 1 Adelaide Road, Gawler South; Mon to Fri 9 to 5; (08) 8522 6025
  (from the site footer).
- "Only Public Notary between North Adelaide and the Riverland": the firm's
  existing claim, carried over.

## Client to confirm before go-live

- Parking beside the office, and whether there are steps to the front desk.
- Payment methods on the day (card and bank transfer are stated).
- Whether Steven will attend hospital or aged care within the district.
- Photograph and thumbprint materials on hand, and a second witness from
  the office, for Indian documents.
- Whether the firm wants the destination notes on the overseas page, or
  prefers a shorter version.
- The fixed-fee wording, which is stronger than the old page.

## Go-live steps (after approval)

1. Replace app/notary-public-gawler/page.tsx with a one-line wrapper that
   renders NotaryHub with base "".
2. Add six route folders (one line each) rendering the spoke components
   with base "", using each page's META through pageMetadata.
3. Add the six slugs to STATIC_ROUTES in app/sitemap.ts.
4. Nav: add "Apostilles" and "Notary or JP?" under Notarial services in the
   mega menu; footer gets the hub link only (already there).
5. Internal links from /gawler-estate-lawyer, /power-of-attorney and
   /gawler-property-lawyers to the hub and the overseas spoke.
6. Delete the /preview/notary routes.
7. Request indexing for the seven URLs through Search Console.

## Images

The hub reuses the existing seal photograph. The service-area page reuses
the Gawler street photograph. Spokes 1 to 5 have no hero image. If the
client wants them, generate with Nano Banana using the site's
STYLE_PREAMBLE plus:

- Apostille: "A single sheet with a printed government certificate stapled
  behind a notarial certificate, DFAT-style red seal, on a timber desk, one
  passport beside it. Overhead, 3:2, warm paper tones, no people."
- Notary or JP: "Two pens side by side on cream paper, one with a brass
  seal beside it and one with a plain rubber stamp, morning window light,
  3:2, no people."
- Checklist: "A passport, an unsigned document and a folded email printout
  laid out neatly on a desk edge, one hand resting on the passport,
  mid-50s man, cuff of an open-collar shirt, 3:2."
- Fees: "A handwritten fixed-fee note on the firm's letterhead beside a
  fountain pen, soft focus, 3:2, no people."
- Overseas: "A courier envelope addressed by hand to an Indian city, next
  to a bound document with a red ribbon and seal, warm light, 3:2, no
  people."

## Other changes in this commit

- AML banner: dropped the past "From 1 July 2026" date and made the link
  say what it goes to (from the 14 Sep brief).
