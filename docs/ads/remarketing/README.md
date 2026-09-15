# Remarketing creatives for review, 15 September 2026

Three options for the Google Display remarketing campaign Alex described on
the 15 Sep call: a small always-on ad that follows people who have visited
stevenmclark.com.au, at about $1 a day. Steve and Mahima pick one (or say
which two to rotate), then it goes into the firm's Google Ads account.

Files: `output/smc-remarketing-{A,B,C}-1200x628.png` (landscape) and
`-1200x1200.png` (square), the two sizes Google's responsive display ads
need. `output/contact-sheet.jpg` shows all six on one page.

Every option does the same three things: says why the person is seeing it
("You visited stevenmclark.com.au"), names the firm and the town, and
offers the free 15-minute call. That is the whole job of a remarketing ad.

## The three options

| | Photo | Eyebrow | Headline | Line | Button |
|---|---|---|---|---|---|
| A. The street | Sandstone verandah, gum tree, morning | You visited stevenmclark.com.au | Still looking for a lawyer in Gawler? | When you are ready, the first 15 minutes are on us. | Book a free call |
| B. The desk | Cream desk phone, notepad, cup of tea | You looked us up recently | Looking us up is usually the hard part. | A free 15-minute call with Steven. No pressure to go further. | Ask your question |
| C. The door | Green door ajar in a sandstone wall, late light | You have been on our website | Gawler's law firm since 1985. | Wills, estates, property, business and notary. Free first call. | Call (08) 8522 6025 |

Recommendation: run A and B together and let Google rotate; A for people who
were comparing firms, B for people who were working up to a call. C is the
safe brand option if the firm would rather not lead with a question.

## Why the copy avoids practice areas

Google's personalised advertising policy does not allow remarketing that
references personal hardship: relationship breakdown, criminal matters,
debt. A remarketing ad saying "Going through a separation?" to someone who
looked at the family law page would be disapproved and could embarrass the
person seeing it. The three options name the firm, the town, the free call,
and (in C) the neutral practice areas only. Keep it that way in any edit.

## Google Ads text assets (responsive display ad)

Headlines (30 characters max):
- Still looking for a lawyer? (27)
- Gawler's law firm since 1985 (28)
- Free 15-minute call (19)
- Steven M Clark Lawyers (22)

Long headline (90 max):
- You visited stevenmclark.com.au. When you are ready, the first 15 minutes are on us. (84)

Descriptions (90 max):
- Gawler's general practice since 1985. Wills, estates, property, business, notary. (82)
- A free 15-minute call with Steven. No obligation, no pressure to go further. (77)

Business name: Steven M Clark Lawyers. Final URL: https://www.stevenmclark.com.au/
Logo: `public/images/smclogo.png` (square crop for the 1:1 logo slot).

## Campaign settings (once approved)

- Campaign type: Display. Goal: leads. Bidding: maximise clicks, budget
  $1.00 a day (about $30 a month), raise to $2 a day if frequency is low.
- Audience: website visitors, all pages, 30-day membership. Exclude people
  who submitted the callback form (thank-you event) so they are not chased
  after they have already enquired. Requires the Google Ads tag or the GA4
  link on the site; GA4 is already live, so link GA4 audiences.
- Location: South Australia. Language: English. Frequency cap: 3 a day.
- Placements: exclude apps, games and parked domains at the start.
- Conversion: the existing lead_captured and phone_click events from GA4.
- Account: the firm's own Google Ads account (login from Mahima, 3 Sep).
  Check spend on the old campaigns before adding this one.

## Rebuilding

```
python docs/ads/remarketing/build_remarketing.py
```

Backgrounds were generated with Higgsfield (Nano Banana Pro, 2k) on 15 Sep
2026 from the prompts in `backgrounds/PROMPTS.md`. No text or people in the
photographs; the type is laid on locally in the site's own fonts (Fraunces
and Inter) so it stays crisp at every size and can be changed in a minute.
