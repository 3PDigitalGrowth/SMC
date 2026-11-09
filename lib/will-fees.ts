// Will fees shown on /gawler-estate-lawyer.
//
// Hidden on the live site until Steve confirms every figure. To publish:
// fill in each `price` (e.g. '$450'), check the `includes` and `note` wording
// with him, then set `published: true`. Until then the block only renders on
// the unlisted review page /preview/will-fees.

export interface WillFee {
  label: string
  /** Display price, e.g. '$450'. null = not yet confirmed by the firm. */
  price: string | null
  includes: string
}

export const WILL_FEES: { published: boolean; items: WillFee[]; note: string } = {
  published: false,
  items: [
    {
      label: 'A single Will',
      price: null,
      includes: 'A first meeting, drafting, a signing appointment, and safe keeping of the signed original in our office.',
    },
    {
      label: 'Wills for a couple',
      price: null,
      includes: 'Two Wills prepared together, with one meeting and one signing appointment.',
    },
    {
      label: 'The full set for a couple',
      price: null,
      includes: 'Wills, enduring powers of attorney and advance care directives for both of you, signed together.',
    },
  ],
  note: 'Wills with a testamentary trust, a farm or business, or a blended family are quoted after the first call. Probate and estate administration are quoted once we have seen the estate.',
}
