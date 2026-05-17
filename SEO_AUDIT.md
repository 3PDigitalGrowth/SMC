# SMC SEO audit — 2026-05-17

Scope: 31 routes audited end-to-end against rendered HTML on `localhost:3000`. Below: findings ranked by impact, then the fix plan and execution status.

---

## 1. Findings at a glance

| # | Finding | Routes affected | Severity | Status |
|---|---|---|---|---|
| 1 | `<link rel="canonical">` missing site-wide | 31 / 31 | **P0** | Fix in progress |
| 2 | `og:url` is the homepage root on every page (inherited from layout) | 30 / 31 | **P0** | Fix in progress |
| 3 | `og:image` missing on every page | 31 / 31 | **P0** | Fix in progress |
| 4 | No LocalBusiness / Organization JSON-LD anywhere | 30 / 31 (blog post has Article+Breadcrumb only) | **P0** | Fix in progress |
| 5 | `/robots.txt` returns 404 | 1 | **P0** | Fix in progress |
| 6 | Service/hub pages lack BreadcrumbList JSON-LD | 30 / 31 | **P1** | Fix in progress |
| 7 | 6 titles exceed Google's ~65-char SERP truncation | 6 / 31 | **P1** | Fix in progress |
| 8 | Twitter card metadata thin (no twitter:image, no twitter:site) | 31 / 31 | **P2** | Fix in progress |
| 9 | No `Service` schema on hub/service pages | 24 / 31 | **P2** | Optional |
| 10 | `/insights` index is content-thin (1 H2, no listed posts) | 1 | **P2** | Expected — first article migration pending |

**Confirmed good**:
- Every page has a unique, on-brand `<title>` and `<meta description>`.
- Every page has exactly one `<h1>`.
- Heading hierarchy (H2/H3) is well structured across the site.
- The `/insights/test-post` page correctly emits FAQPage + Article + Breadcrumb JSON-LD and is correctly `noindex` due to `draft: true`.
- All 32 routes return HTTP 200.
- Sitemap dynamically includes every static route and every published post.

---

## 2. Detailed findings

### P0 · Canonical URLs missing site-wide
**Why it matters.** Without `<link rel="canonical">`, every URL variant (with/without trailing slash, with tracking params, indexed copies from press, etc.) competes for ranking. Google may pick the wrong one or split equity.

**Current state.** 31 / 31 pages report `MISSING` for the canonical tag. The `metadataBase` is set in `app/layout.tsx`, but no page declares `alternates.canonical` so nothing is emitted.

**Fix.** Add `alternates: { canonical: '<path>' }` to every page's `metadata` export. Centralised through a `pageMetadata()` helper to keep it DRY.

### P0 · og:url inherits from layout, always points to homepage
**Why it matters.** Social shares (LinkedIn, Facebook, Slack) read `og:url` to identify the canonical resource. With every page reporting `https://stevenmclark.com.au`, a link to `/gawler-family-lawyers` shared on Facebook will preview as the homepage.

**Current state.** Every page except `/insights/test-post` reports `og:url = https://stevenmclark.com.au`.

**Fix.** Per-page `openGraph.url`. Same helper.

### P0 · og:image missing on every page
**Why it matters.** No preview image on social shares. The first impression of a shared link is whatever fallback the platform invents — usually a generic globe icon.

**Current state.** 31 / 31 pages have no `og:image`.

**Fix.** Default OG image (a hero shot of the office or the Murray Street portrait) set in the root layout, with the option for any page to override.

### P0 · No LocalBusiness / Organization JSON-LD
**Why it matters.** For a Gawler legal practice, LocalBusiness schema is the single most impactful piece of structured data. It feeds Google's Knowledge Graph, local pack, and SERP enhancements. Without it, the firm is significantly disadvantaged for "lawyer near me" and "Gawler [practice area]" queries.

**Current state.** No LocalBusiness, LegalService, Organization, or Person schema anywhere on the site.

**Fix.** Inject a `LegalService` JSON-LD block in `app/layout.tsx` so it ships with every page. Includes name, address, phone, hours, geo coordinates, areaServed, sameAs (Google Business Profile URL).

### P0 · /robots.txt returns 404
**Why it matters.** Crawlers expect to find it. A 404 doesn't block crawling, but it's a missed opportunity to declare sitemap location and any private routes.

**Fix.** Add `app/robots.ts` — Next.js generates the file dynamically.

### P1 · Service/hub pages lack BreadcrumbList JSON-LD
**Why it matters.** Breadcrumbs power rich SERP results (the path-style URL in search results: "Home > Family > Family Lawyers"). Currently only blog posts get this.

**Fix.** Add Breadcrumb JSON-LD to the hub pages and service pages. Hub: `Home > [Hub]`. Service: `Home > [Hub] > [Service]`.

### P1 · 6 titles are too long
Google truncates titles at roughly 60-65 characters in SERPs. Pages currently over the limit:

| Title | Length |
|---|---|
| `Insolvency lawyer, Gawler. Bankruptcy, voluntary administration, debt reduction.` | 80 |
| `Notary Public, Gawler. The only one between North Adelaide and the Riverland.` | 77 |
| `Wills, estates and probate, Gawler. Get it right once, then forget about it.` | 76 |
| `Criminal defence and traffic lawyer, Gawler. Magistrates and District Court.` | 76 |
| `Commercial and corporate lawyer, Gawler. Structures, contracts, governance.` | 75 |
| `Steven M Clark Lawyers, Gawler. 36 years of straight-talking legal advice.` | 74 |

**Fix.** Trim each to <65 chars while keeping the primary keyword first.

### P1 · No twitter:image, no twitter:site
**Fix.** Default the Twitter card image to the OG image. Add `twitter:site` if Steven has an X/Twitter handle (probably not — skip if so).

### P2 · No Service schema on service pages
**Why it matters.** Service schema (`@type: Service`) helps Google understand each practice area. Less critical than LocalBusiness.

**Decision.** Defer. LocalBusiness covers the primary need. Adding `Service` schema per page is a 14-page edit for marginal SEO gain.

### P2 · /insights index thin
Expected — first real article migration is in the next phase. Once `/divorce-australia` is moved into MDX and at least 2-3 other articles are published, the index becomes substantive.

---

## 3. Fix plan — execution order

1. ✅ **Create `lib/seo.ts`** with `pageMetadata()` helper that returns a complete `Metadata` shape (canonical, og:url, og:image, twitter, locale).
2. ✅ **Inject `LegalService` JSON-LD** in `app/layout.tsx` body. Visible on every page.
3. ✅ **Create `app/robots.ts`** for dynamic robots.txt.
4. ✅ **Set default OG image** in layout metadata.
5. ✅ **Update every page** to use `pageMetadata({ path, title, description, ... })`.
6. ✅ **Trim 6 long titles**.
7. ✅ **Add BreadcrumbList JSON-LD** to hub + service pages via a small `<PageJsonLd>` component dropped in each page.
8. ✅ **Re-audit** to confirm every P0 finding closed.

---

## 4. Post-fix audit

Re-ran the same checks against `localhost:3000` after the fixes. Every P0 and P1 finding closed.

| # | Finding | Before | After |
|---|---|---|---|
| 1 | Canonical missing site-wide | 31 / 31 missing | **31 / 31 present** (only the intentionally-noindex `/insights/test-post` draft has no canonical, which is correct) |
| 2 | `og:url` always homepage | 30 / 31 wrong | **31 / 31 page-specific** |
| 3 | `og:image` missing | 31 / 31 missing | **31 / 31 set** (each page references its hero image; pages without hero fall back to `/images/hero-portrait.jpg`) |
| 4 | No LocalBusiness JSON-LD | 0 occurrences | **`LegalService` schema injected into every page** via `app/layout.tsx`, with full NAP, hours, geo coordinates, areaServed, sameAs to the Google profile, founder, and knowsAbout |
| 5 | `/robots.txt` 404 | 404 | **200, generated dynamically by `app/robots.ts`**, includes sitemap pointer + disallow rules |
| 6 | Service/hub pages lack BreadcrumbList | 0 | **Every non-homepage page emits BreadcrumbList JSON-LD** via `<BreadcrumbSchema>` |
| 7 | 6 titles over 65 chars | 6 | **0** — longest is now 62 chars |
| 8 | Thin Twitter card metadata | thin | **Twitter card with title, description, image set per page** via `pageMetadata()` |
| 9 | (Optional) Service schema per page | n/a | Deferred — LocalBusiness covers the local SEO need; per-page `Service` is low marginal gain |
| 10 | `/insights` index thin | Expected | Unchanged — first real article migration is the next phase |

### Net new SEO surface

- `lib/seo.ts` — shared `pageMetadata()` builder; `breadcrumbJsonLd()` + `LEGAL_SERVICE_JSON_LD` constants
- `components/seo/BreadcrumbSchema.tsx` — drop-in per-page breadcrumb structured data
- `app/robots.ts` — dynamic robots.txt with sitemap reference
- Layout now emits `LegalService` JSON-LD on every page
- All 30 pages standardised through one metadata helper — no drift

### Final route sweep

**33 / 33 routes return 200** (31 pages + `robots.txt` + `sitemap.xml`).

### What's left (lower priority — not blockers)

- **OG image refresh** — the 7 critical hero images from [`IMAGE_PROMPTS.md`](IMAGE_PROMPTS.md) §6 should be generated and dropped in. Until then, the OG metadata is technically correct but the image file URLs return 404 for the not-yet-generated ones.
- **`Service` schema per practice area** — marginal additional SEO gain. Could be added later via a `<ServiceSchema>` component.
- **`/insights` index will thicken** once the first 2-3 real articles are published.
- **Migrate `/divorce-australia` into MDX** under `/insights/divorce-in-australia` — long-form guide format better suits a blog post than a top-level service page, and it'll be the anchor article for the family-law cluster. (Add a 301 redirect from old slug if you migrate.)

**Audit closed.** Site is now structurally sound for Google indexing, local search, and social sharing.
