# SMC (stevenmclark.com.au): 3P Digital website build

This project follows the **3P Digital design system**. The full playbook (7-levels
execution, principles, strategy) is in the `3p-web-design` Claude Code skill; the
non-negotiable house rules are copied below so they travel with this repo.

> Building or reviewing a page? Invoke `/3p-web-design` to load the full system,
> then refresh the execution playbook (it evolves daily):
> `powershell -File scripts/refresh.ps1` in the skill folder.

## This project's brief (Lens 2: Strategy)

- **Client / business:** Steven M Clark, established law firm, Gawler SA
- **What they do + who for:** family, estates, business and criminal law for
  Gawler and surrounding South Australian communities
- **Brand archetype:** Caregiver (locked)
- **ICP:** TBC
- **Awareness level (Schwartz 1-5):** TBC
- **Primary goal of the site:** enquiries/bookings (lead + booking API routes in repo)
- **Brand palette:** LOCKED per house rules: Deep Navy #1B2B4B, Dark Gold #B8860B.
  NOTE: the auto-extracted visual profile (Jul 2026) of the live site shows a
  forest-green/cream editorial-serif direction (#4D6B4A, #F5F1E9, italic serif in
  green). Reconcile with the locked Navy/Gold pattern with Alex before the next
  design change; do not silently redesign either way.
- **Fonts:** Playfair Display + Lato (locked)
- **Client-specific locked pattern:** Deep Navy #1B2B4B, Dark Gold #B8860B,
  Playfair + Lato, Caregiver archetype (see skill references/04-HOUSE-RULES.md)
- **Target build level:** Level 5 (component + asset designer) with Level 6 polish
  on hero and key conversion moments.

## House Rules (non-negotiable: this file wins over any AI suggestion or source)

**Language**
- Australian English everywhere (organise, optimise, colour, centre, realise,
  behaviour, favour, licence/license, grey, theatre, defence, enrol). Never US spellings.
- **Never use em dashes.** Commas, colons, full stops, or parentheses instead.
- Straight quotes only. No "transformation": use "change".

**Default stack** (unless the client explicitly specifies otherwise)
- Next.js / Vercel / GitHub. AI dev in Opus.
- Images: Nano Banana (default), Midjourney v7 (concept art).
- Video: Kling 3.0 or Veo for hero loops.
- Funnel: Schwartz's 5 levels of awareness. Methodology: 3P (Profile, Plan, Perform).

**Build conventions**
- Inline an AI image-generation prompt for every required image, in the build .md
  itself (subject, mood, lighting, composition, aspect ratio, palette, style). One per image.
- Named real-people photos use a placeholder with comment "final image TBC, client to supply".
- Video-background heroes always serve a static image fallback under 768px; state it
  explicitly in every prompt with a video hero.
- Persistent standards live here in `CLAUDE.md` (and `.cursor/rules/` if also using Cursor).

**Never ships**
- Em dashes; US spellings; "transformation"; Inter/Roboto/Arial/generic system fonts as a
  positive choice; purple gradients on white (the AI default tell); centred three-column
  feature grids unless deliberately reclaimed and reskinned; generic stock photos in hero positions.

**Always ships**
- AU English; a chosen archetype, defined ICP, targeted awareness level; one element that
  could not have come from a template; a reference site studied at teardown depth; mobile
  fallback for video heroes; Lighthouse > 90 and WCAG 2.2 AA before launch.

When any tool or LLM produces output that contradicts these rules, the output is wrong,
not the rules. Client requests that conflict with a documented client pattern escalate to Alex.
