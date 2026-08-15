# Analytics and conversion tracking: current state and open items

Audited 15 August 2026 against the live site, the GA4 property, the Search
Console property and the published GTM container.

## Accounts

| Layer | Identifier | Notes |
|---|---|---|
| GTM | `GTM-N2ZSJVLJ` | Container "www.stevenmclark.com.au", account 6366172043, container 258380211, live version 3 |
| GA4 | Property 545683343, stream `G-9HMHVNBY0B` | "Steven M Clark Solicitors" under the 3P Master MCC. Stream URI is the www host |
| GSC | `https://www.stevenmclark.com.au/` | Verified, siteOwner. No domain property |

Both GTM and a hardcoded gtag snippet load from `app/layout.tsx`. That is
deliberate: site events reach GA4 directly through gtag even when no GTM tag
has been built for them, and GTM handles the mapped conversion events.

## Site events

`lib/analytics.ts` pushes every event twice, once onto the dataLayer for GTM
and once through gtag for GA4.

| Event | Fired from | Parameters |
|---|---|---|
| `lead_captured` | Hero form, booking form, guide signup, article inline form | `source`, `event_category` |
| `phone_click` | Nav, mobile menu, sticky CTA, hero (three placements), booking section, booking success, contact page, footer, article success | `source` (placement), `event_category` |

`source` values in use: `homepage_hero`, `homepage_hero_modal`,
`homepage_booking`, `homepage_checklist`, `blog_inline_form`, plus the phone
placements `nav`, `mobile_menu`, `sticky_cta`, `hero_form`, `hero_cta`,
`hero_success`, `booking_section`, `booking_success`, `contact_page`,
`footer`, `blog_success`.

## Changes applied 15 August 2026

Site:
- Phone tracking added to the four links that had none: footer, contact page,
  booking success state, article success state. Every `trackPhoneClick` call
  now passes its placement.
- The article inline form now reports `lead_captured`. It previously submitted
  without telling analytics anything.
- Canonical host moved from the apex to `https://www.stevenmclark.com.au`
  across metadata, sitemap, robots and article JSON-LD. The server already
  308-redirected the apex to www, so the old canonical pointed at a URL that
  redirects, and the sitemap listed 36 URLs outside the verified property.
- `console.log` calls removed from the analytics helper.

GA4:
- `phone_click` marked as a key event, counted once per session.
- `view_item` unmarked. It fired on practice-area page views, so a page view
  was being counted as a conversion.
- Custom dimension "Lead source" registered against the `source` parameter, so
  a callback request can be told apart from a guide download in reporting.

Search Console:
- `https://www.stevenmclark.com.au/sitemap.xml` submitted. It had never been
  submitted despite the route serving correctly since May.

## Open items in GTM

These need write access to the container. The delegated service account
(`id-p-digital-g-ads-ai-agent@recaptcha-3p-for-1749881494023.iam.gserviceaccount.com`,
client ID `115796183789131613694`) currently holds `tagmanager.readonly` only.
Adding `https://www.googleapis.com/auth/tagmanager.edit.containers` and
`https://www.googleapis.com/auth/tagmanager.publish` to the domain-wide
delegation entry in Workspace Admin would let this be scripted. Otherwise the
work is manual in the GTM UI.

**1. Trigger evt_003 fires on nothing.** It listens for a dataLayer event named
`guide_signup`. The site pushes `lead_captured` with `source=homepage_checklist`
instead, so the tag "GA4 Event - generate_lead (evt_003)" has never fired.
Delete both the tag and the trigger. Guide downloads already reach GA4 through
evt_002 and are identifiable by the `source` parameter.

**2. Trigger evt_006 fires on nothing.** It waits for a page URL containing
"thank". The forms morph in place with no navigation, so there is no thank-you
page and never will be. Delete the tag and the trigger.

**3. Tag evt_004 counts the wrong thing.** It fires GA4 `contact` on any click
whose text contains "Book a free 15-minute call". That text is on four mega-menu
links, the mobile menu link, the exit-intent button and the hero form's submit
button, so the event counts scroll-to-form clicks and failed submissions as
contacts. `contact` is a key event in GA4, so those all report as conversions.
Repoint the trigger at the `phone_click` dataLayer event with `method=phone`,
or delete it and rely on the `phone_click` key event now set in GA4.

**4. Tag evt_007 is brittle.** It fires on click text containing
"Business sale & purchase". Any copy edit silently kills it, and a service link
click is not a conversion. Delete it.

**5. No dataLayer variables exist in the container.** Create a Data Layer
Variable named `source` and add it as an event parameter on the remaining GA4
event tags, so GTM-sent events populate the "Lead source" dimension the same
way the direct gtag events do.

## Other open items

- **No domain property in Search Console.** Only the www prefix property is
  verified, so apex and any subdomain traffic sit outside it. Adding a domain
  property needs a DNS TXT record at the registrar.
- **`contact` remains a key event** while evt_004 still feeds it. Fix the
  trigger first, then decide whether to keep the event marked.
- **`purchase`, `qualify_lead` and `close_convert_lead`** are marked as key
  events and mean nothing on this site. They never fire, so they are harmless,
  but they clutter the conversion list.
