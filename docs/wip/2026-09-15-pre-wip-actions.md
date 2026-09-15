# SMC pre-WIP action list, Tuesday 15 September 2026

Meeting: today 10:00am Brisbane (9:30am Adelaide), Google Meet szf-zehn-hzf.
Steve accepted; Mahima's invite still shows no response. Deck sent 9 Sep.

Source: every SMC email 5 to 15 September, plus the two open website threads
back to 3 September, Xero, the repo and the live site.

## 1. Unanswered client emails (only the out-of-office went back)

Mahima, Fri 11 Sep, "RE: Steven M Clark - Website", to Alex and Steve:

- **Cannot see the Insights articles for approval.** The six articles have
  been public at stevenmclark.com.au/insights since 18 August, so she is
  most likely looking for the probate piece. That one sits on the
  blog-review branch and returns 404 on the live site. Action: put the
  probate article somewhere she can read it (Vercel preview of the branch,
  or merge it flagged draft so it is noindexed), then reply with the link
  and confirm the six are live.
- **Reception and Accounts email signatures.** Neither exists. Emma's file
  still carries EMAIL-TBC even though Mahima supplied
  reception@stevenmclark.com.au on 4 Sep. Accounts
  (accounts@stevenmclark.com.au) was never built. Action: add both to
  build_signatures.py, rebuild, refresh the zip under /signature, send.

Mahima, Fri 4 Sep, same thread family, still open:

- **Remove Rachel East from the website.** She is still on the live About
  page. Action: delete her entry in app/about/page.tsx, drop her from the
  signature set, push.
- **Signatures "as images in Word format".** Alex offered a Zoom walkthrough
  instead on 4 Sep; no reply. Ask on the call whether the six installed. If
  they still want images, ship PNG exports (already generated in
  docs/signatures) plus a .docx with the image dropped in. Cheap to give.

Mahima, Thu 3 Sep:

- **Google Ads login supplied** (stevenclark532@gmail.com, password in the
  thread). The deck's decision slide still asks for access to that account.
  Do not ask again. Log in before the call, check whether it is still
  spending, and report. Suggest they rotate the password afterwards since
  it went over email.

## 2. Waiting on the client (chase on the call)

- **Social posts and account access**, open since Hannah's 18 Aug email:
  six posts on smclark-social.vercel.app, zero approvals, no access to
  Google Business Profile, LinkedIn or Facebook. Note Hannah's email gave
  the wrong domain for the GBP manager invite (3psigital instead of
  3pdigital). If Steve tried it, the invite went nowhere. Resend the
  correct address today and book the fifteen-minute screen-share.
- **Probate article go-ahead**, once they can read it.
- **Past-enquiries spreadsheet** from kick-off, needed for the nurture
  emails.
- **Photos**: Abby's headshot, and the wider team and office photos Mahima
  said (3 Sep) would be organised "within the next few weeks".
- **Clarity yes** (free, ten minutes) and the **Digital PR choice**
  (funding newsjack first, or the approved small-town privacy angle).
- **Instagram**: set one up in the firm's name, or leave it.

## 3. Internal housekeeping before or straight after the call

- **Weekly wrap, Fri 11 Sep, went out as PREVIEW only** (to Alex and
  Hannah, not Steve). Its week-on-week numbers read down: Google visits 19
  (down 30%), enquiries and key actions 8 (down 43%), page-one terms 36.
  Decide whether SMC should receive the automated wrap at all while the
  fortnightly deck is the client-facing report. The SEO paragraph in it is
  boilerplate.
- **SEO weekly digest, 10 Sep**: 2,008 impressions (down 808), 3 clicks,
  average position 52. Have the four-week view from the deck ready if Steve
  quotes a single week.
- **Page update briefs sitting unactioned**: /gawler-estate-lawyer (7 Sep)
  and /notary-public-gawler (14 Sep). The deck promised page refreshes for
  Monday 14 Sep; nothing has shipped since the 3 Sep signature commit.
- **Topical cluster report (13 Sep)**: 8 posts across 29 clusters, 27 thin.
  Feeds the next content plan; no client action.
- **Digital PR drafts**: eight pitch drafts from 18 Aug still sit in the
  pr@ Gmail drafts folder with placeholder brackets. Editorial QA failed all
  eight. Leave them unsent; the rewrite is the deliverable.

## 4. Good news for the call

Five real enquiries since 5 September through the site form:

| Date | Name | Matter |
|---|---|---|
| 5 Sep | Connie Parac | Notary public |
| 7 Sep | Paul Truslove | General (submitted twice) |
| 9 Sep | Emily Lewis | General |
| 12 Sep | Ross Byrnes | Wills and probate |
| 14 Sep | Jai Dickeson | Property settlement |

Invoice INV-0241 (21 Aug, $880) is paid, settled 22 Aug. Nothing owing.
Next monthly invoice is Hannah's, around 21 Sep.

## 5. Order of work this morning

1. Reply to Mahima's 11 Sep email (Insights link, probate preview link,
   Reception and Accounts signatures attached).
2. Push the Rachel East removal.
3. Log in to the old Google Ads account and note spend.
4. Hannah: resend the GBP invite instructions with the correct address.
5. Then the call.
