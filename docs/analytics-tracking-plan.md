# Analytics and conversion tracking: current state and open items

Audited 15 August 2026 against the live site, the GA4 property, the Search
Console property and the published GTM container.

## Accounts

| Layer | Identifier | Notes |
|---|---|---|
| GTM | `GTM-N2ZSJVLJ` | Container "www.stevenmclark.com.au", account 6366172043, container 258380211, live version 3 |
| GA4 | Property 545683343, stream `G-9HMHVNBY0B` | "Steven M Clark Solicitors" under the 3P Master MCC. Stream URI is the www host |
| GSC | `https://www.stevenmclark.com.au/` and `https://stevenmclark.com.au/` | Both prefix properties verified, siteOwner. Domain property still pending a DNS TXT record |

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
- The apex host verified and added as a second prefix property. The ANALYTICS
  verification method failed ("the necessary verification token could not be
  found on your site") because gtag loads in the body and Google's checker
  reads the head. TAG_MANAGER verification passed against the same page, using
  the container that was already there.

## GTM cleanup, built and waiting to publish

Prepared 16 August 2026 in workspace **"3P tracking cleanup 16 Aug 2026"**
(workspace 5). None of it affects the live container until that workspace is
published. Version 3 remains live in the meantime.

Removed, with the triggers that existed only to serve them:

| Tag | Why |
|---|---|
| generate_lead (evt_003) | Listened for a dataLayer event named `guide_signup`. The site pushes `lead_captured` with `source=homepage_checklist`, so this never fired once. Guide downloads already reach GA4 through evt_002 and are identifiable by `source` |
| generate_lead (evt_006) | Waited for a page URL containing "thank". The forms morph in place with no navigation, so no such page exists |
| contact (evt_004) | Fired on any click whose text contained "Book a free 15-minute call". That text sits on four mega-menu links, the mobile menu, the exit-intent button and the hero form's submit button, so it counted scroll-to-form clicks and failed submissions as conversions. Phone taps are the real contact signal and reach GA4 directly as `phone_click` |
| view_item (evt_007) | Fired on click text containing "Business sale & purchase". Brittle against any copy edit, and a service link click is not a conversion |

Added: a Data Layer Variable `dlv - source`, wired as a `source` event
parameter on both surviving tags, so GTM-sent events populate the "Lead source"
dimension the same way the direct gtag events already do.

Surviving tags: generate_lead (evt_002) on the `lead_captured` dataLayer event,
and view_item (evt_005) on practice-area page views, which is now a plain
engagement event rather than a conversion.

**After publishing:** unmark `contact` as a key event in GA4. Once evt_004 is
gone nothing feeds it, and leaving it marked keeps a dead conversion in the
reports.

## Other open items

- **No domain property in Search Console.** Both prefix properties are now
  verified, but a `sc-domain:` property covers every host and protocol variant
  in one place. Domain properties accept DNS_TXT or DNS_CNAME only, whatever
  tags sit on the page, so this one needs a record added at the registrar.
  Nameservers are ns1/ns2/ns3.nameserver.net.au. The verification token has
  been issued and is with Alex. Add it as an additional TXT record: the
  existing apex TXT is the Outlook SPF record and mail breaks if it is
  replaced.
- **`purchase`, `qualify_lead` and `close_convert_lead`** are marked as key
  events and mean nothing on this site. They never fire, so they are harmless,
  but they clutter the conversion list.
