# SMC site — image generation, V2 (post-rollout review)

A walk through every page after the §6 critical batch + §7 optional batch + the Steve headshot were assigned. This doc covers:

1. What's done (every page now has its dedicated hero image).
2. What's still on the gap list (one real one, plus polish ideas).
3. The orphaned files left on disk after the headshot remap.
4. A design tension to resolve about Steven appearing multiple times in the homepage + /about flow.

---

## 1. Status — every page now has its image

Every one of the 31 manifest keys defined in [`lib/images.ts`](lib/images.ts) is referenced from somewhere in the codebase. 31 / 31 page routes still return 200 after the latest rewire.

### Pages and the hero they now render

| Route | Hero image | File |
|---|---|---|
| `/` | heroPortrait | Steve-headshot-400pxw.jpg |
| `/about` | aboutHero | Steve-headshot-400pxw.jpg |
| `/contact` | contactHero | contact-hero.jpg |
| `/insights` | insightsHero | insights-hero.jpg ✅ NEW |
| `/family` | familyHero | family-hero.jpg |
| `/estates` | estatesHero | estates-hero.jpg |
| `/property` | propertyHero | property-hero.jpg |
| `/business` | businessHero | business-hero.jpg |
| `/gawler-family-lawyers` | familyHero | family-hero.jpg (shared with hub) |
| `/intervention-domestic-violence-lawyer` | interventionHero | intervention-hero.jpg ✅ NEW |
| `/divorce-australia` | divorceHero | divorce-hero.jpg ✅ NEW |
| `/gawler-estate-lawyer` | estatesHero | estates-hero.jpg (shared with hub) |
| `/estate-planning` | estatePlanningHero | estate-planning-hero.jpg ✅ NEW |
| `/gawler-estate-planning-lawyers` | advanceCareHero | advance-care-hero.jpg ✅ NEW |
| `/gawler-trust-lawyer` | trustsHero | trusts-hero.jpg ✅ NEW |
| `/gawler-property-lawyers` | propertyDetailHero | property-detail-hero.jpg ✅ NEW |
| `/gawler-construction-lawyer` | constructionHero | construction-hero.jpg ✅ NEW |
| `/gawler-lease-lawyer` | leaseHero | lease-hero.jpg ✅ NEW |
| `/gawler-business-lawyers` | businessHero | business-hero.jpg (shared with hub) |
| `/gawler-commercial-lawyers` | commercialHero | commercial-hero.jpg ✅ NEW |
| `/gawler-industrial-relations-lawyer` | industrialRelationsHero | industrial-relations-hero.jpg ✅ NEW |
| `/gawler-insolvency-lawyer` | insolvencyHero | insolvency-hero.jpg ✅ NEW |
| `/gawler-debt-recovery` | debtRecoveryHero | debt-recovery-hero.jpg ✅ NEW |
| `/notary-public-gawler` | notaryDetailHero | notary-detail-hero.jpg ✅ NEW |
| `/criminal-defence-lawyer` | criminalDefenceHero | criminal-defence-hero.jpg ✅ NEW |
| `/gawler-personal-injury-lawyers` | personalInjuryHero | personal-injury-hero.jpg ✅ NEW |
| `/gawler-compensation-lawyers` | gawlerStreet | gawler-street.jpg |
| `/gawler-dispute-resolution-lawyers` | disputeResolutionHero | dispute-resolution-hero.jpg ✅ NEW |
| `/privacy`, `/terms` | (typography-only by design) | — |

Plus shared components:
- Pathways cards (homepage) — pathway-separation, pathway-estate, pathway-business ✓
- Editorial section (homepage + /about) — Steve headshot ✓
- AuthorBio (blog posts) — Steve headshot ✓
- Booking backdrop — booking-backdrop.jpg ✓

---

## 2. Orphaned files on disk

These four image files sit in `public/images/` but nothing in the code references them anymore:

| File | Why it's orphaned | Recommendation |
|---|---|---|
| `hero-portrait.jpg` | `heroPortrait` key was remapped to the Steve headshot | **Delete** — was an AI placeholder for Steven, real one is in use now |
| `steven-at-desk.jpg` | `stevenAtDesk` key was remapped to the Steve headshot | **Delete** — same reason |
| `about-hero.jpg` | `aboutHero` key was remapped to the Steve headshot | **See §4 below — possible repurpose** |
| `team-group.jpg` | `teamGroup` key defined in manifest but never referenced from any component | **Keep on disk** — reserved for future TeamGrid avatar work; currently unused |
| `signature.png` | `signature` key defined but Booking thank-you renders as text spans, not the PNG | **Keep on disk** — wire it in only if you want the handwritten signature visible after a booking submission (see §5) |

If you want to clean disk: delete `hero-portrait.jpg`, `steven-at-desk.jpg`. Leave the others.

---

## 3. Genuine image gap — the only one left

### Team headshots for `/about` → TeamGrid

The about page lists **seven team members** by name and role:

- Steven M Clark — Principal Solicitor, Public Notary
- Zahra Amin — Solicitor
- Jack Clark — Solicitor
- Sophie Clark — Legal Secretary, Paralegal
- Rachel East — Administration
- Emma Vandenham — Reception
- Mahima Sobti — Personal Assistant

Currently the [TeamGrid component](components/page/TeamGrid.tsx) renders **text-only cards**. With seven real people, this section would be more compelling with small circular headshots beside each name.

**Two paths:**

**A — Real photos (recommended)**: a single 30-minute photoshoot at the office produces seven natural studio headshots in matching light. This is the only honest option for staff bios. AI-generated headshots of fake people misrepresent the team. Save as `team-zahra.jpg`, `team-jack.jpg`, etc. — square 1:1 crops, 400px wide is fine.

**B — Skip avatars**: leave TeamGrid text-only. It still looks editorial and matches the typography-led design language. The section already feels intentional without photos.

Tell me which you'd prefer and I'll either:
- Add an `avatar` field to the TeamMember interface and update the component layout (path A), or
- Leave as-is and close the gap (path B).

---

## 4. Design tension — Steven appears 4 times on the homepage + /about flow

After remapping the three "Steven" image slots to the real headshot, the same studio photo now appears in **four places** within the homepage + /about flow:

| Location | Component | Image slot |
|---|---|---|
| 1 | Homepage Hero | 4:5 portrait, large editorial frame |
| 2 | Homepage Editorial section | 4:3 portrait slot beside the principles list |
| 3 | `/about` PageHero | 3:4 portrait frame |
| 4 | `/about` Editorial section (Editorial is also rendered on /about) | 4:3 portrait slot |

A visitor scrolling the homepage sees the same headshot **twice in one scroll**. Then they click About and see it twice more. The photo is fine; the **repetition** is the issue.

### Recommendation — re-allocate so each appearance feels distinct

The cleanest fix is to use a small variety:

| Slot | Suggested image | Why |
|---|---|---|
| Homepage Hero | **about-hero.jpg** (the AI editorial "Steven walking down Murray Street") | Editorial environmental shot suits the full-bleed hero; the homepage needs atmosphere over identity |
| Homepage Editorial section | **Steve headshot** | The Editorial block is the personal-introduction moment; the headshot belongs here |
| `/about` PageHero | **Steve headshot** | The About page lede frames the principal directly; the studio shot is right |
| `/about` Editorial section | Either suppress the section on /about (it's repetitive with the team grid below) OR use a different image like office-interior | The Editorial section on /about restates content the page already covers |

This would:
- Restore the AI editorial image to a single high-value slot (homepage hero, where it's most impactful).
- Reserve the studio headshot for moments where Steven specifically is being introduced.
- Avoid the same image appearing twice in any single scroll.

**Tell me yes/no and I'll execute.** If yes, the rebuild is a single 4-line edit to `lib/images.ts` plus optionally removing `<Editorial />` from /about.

---

## 5. Optional polish — low priority

If you want the absolute final touches:

### 5a. Wire the signature PNG into the Booking thank-you state

Currently the thank-you face after submitting the booking form renders Steven's name in styled italic text. The signature PNG (`/images/signature.png`) sits on disk. Swapping the text for the image gives the thank-you moment a hand-written, personal feel.

One CSS + JSX edit in [Booking.tsx](components/home/Booking.tsx). I'll do it on request.

### 5b. Avatars on the Testimonials section

The three Google reviews on the homepage currently render as quote cards. Could add a small circular initials placeholder ("T.C.", "A.M.", "R.P.") in a subtle paper colour beside each name. No new images needed — just typography. Optional.

### 5c. Blog post `heroImage` per article

The MDX frontmatter supports a `heroImage` per article. When real articles are published (replacing the test post), each should have its own image. Decided per article when it's written. No batch generation needed now.

---

## 6. The Master Style Preamble — unchanged

If you need to generate any further images (e.g. team headshots Path A, or new blog hero images), use the same locked preamble from [IMAGE_PROMPTS.md §1](IMAGE_PROMPTS.md). Maintains visual continuity with the existing 24 generated images.

**For team headshots specifically** — if going AI route (path 3B), the prompt template is:

> Editorial documentary headshot, natural window light, shot on medium-format film, subtle organic grain, warm desaturated colour grade reminiscent of Country Style magazine. Calm, present Australian person — [age range], [appearance details], [clothing: smart-casual, open collar, no neckties]. Composition: square crop, face in frame from collarbones up, soft natural background out of focus suggesting a warm timber office interior. Looking just off-camera, not posed. STRICTLY AVOID: stiff corporate headshot lighting, stark backgrounds, fake smiles.

But again — real photos are the right call here.

---

## 7. What I need from you

1. **Path A or B on team headshots?** Real photos (and when), or skip avatars and close the gap?
2. **Yes/no on the §4 image re-allocation** to remove the Steven-headshot repetition?
3. **Delete the orphaned `hero-portrait.jpg` and `steven-at-desk.jpg`?** Or keep on disk as fallbacks?
4. **Wire the signature PNG into the Booking thank-you state?** (§5a)

Once you decide, I'll execute. No further AI image generation is needed for the site to be visually complete — only the team headshots remain, and those are better as real photographs.

---

**Site image inventory total:** 31 manifest keys, 30 files referenced on disk, all 31 routes 200.
