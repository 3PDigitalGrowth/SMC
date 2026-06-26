/**
 * Image library manifest.
 *
 * This is the single source of truth for every photograph on the site.
 * - `src`: path under /public. Leave empty until generated/uploaded.
 * - `alt`: accessibility text. Always written.
 * - `caption`: shown in the placeholder until the real image arrives.
 * - `prompt`: the locked GPT Image 2 prompt the generator task will use.
 * - `aspect`: target aspect ratio for generation.
 *
 * The Trigger.dev task at src/trigger/images/generate-library.ts reads this
 * manifest and produces each image into /public/images/.
 */

export const STYLE_PREAMBLE = `Editorial documentary photograph, natural window light, shot on medium-format film, subtle organic grain, warm desaturated colour grade reminiscent of Country Style magazine and Kinfolk. South Australian country town (Gawler region) — heritage sandstone buildings, wide pale skies, native gum trees, sun-bleached colours. Real-feeling people, never stock-photo. Mid-50s warm lawyer character — approachable, weathered, kind. Clothing: smart-casual, open collar, no slick suits. Composition: asymmetric, generous negative space, magazine-quality. STRICTLY AVOID: handshakes, glass office towers, Adelaide CBD signifiers, neckties, gavels, scales of justice, stock corporate cliches, dramatic shadows, hard advertising lighting.`

export interface ImageDef {
  src: string
  alt: string
  caption: string
  prompt: string
  aspect: '1:1' | '3:4' | '4:3' | '16:9' | '9:16'
}

export const IMAGES = {
  heroPortrait: {
    src: '/images/Steve-headshot-400pxw.jpg',
    alt: 'Steven M Clark, Principal Solicitor and Public Notary',
    caption: 'Steven M Clark. Principal Solicitor and Public Notary, Gawler.',
    prompt: `Real client-supplied studio headshot. Do not regenerate.`,
    aspect: '3:4',
  },
  stevenAtDesk: {
    src: '/images/steven-editorial-portrait.png',
    alt: 'Steven M Clark, Principal Solicitor',
    caption: 'Steven M Clark. Serving the Gawler community since 1985.',
    prompt: `Real client-supplied studio headshot. Do not regenerate.`,
    aspect: '4:3',
  },
  officeInterior: {
    src: '/images/office-interior.jpg',
    alt: 'Interior of the Gawler office',
    caption: 'Office interior. Heritage timber, lived-in, calm. Not a showroom.',
    prompt: `${STYLE_PREAMBLE}. Wide interior shot of a country lawyer's office. Timber bookshelves with worn legal texts, a pair of soft leather chairs, a low coffee table, a vase of native gum branches. Late afternoon light falling across a rug. No people. Calm, established, human-scale. Feels like a room someone has worked in for thirty years.`,
    aspect: '16:9',
  },
  teamGroup: {
    src: '/images/team-group.jpg',
    alt: 'The Steven M Clark Lawyers team on a Gawler street',
    caption: 'The team on Murray Street, a Tuesday morning, not a brochure shoot.',
    prompt: `${STYLE_PREAMBLE}. Environmental group portrait of three to four Australian lawyers — a senior man in his 50s, a woman in her 30s, a younger man in his 20s — standing in conversation on a sunlit country-town main street outside their office. Not lined up. Not looking at camera. Mid-conversation. Soft warm colour. Heritage shopfronts and a glimpse of jacaranda or gum tree.`,
    aspect: '4:3',
  },
  gawlerStreet: {
    src: '/images/gawler-street.jpg',
    alt: 'A heritage sandstone shopfront in Gawler',
    caption: 'A texture frame: Gawler sandstone, gum branches, morning shadow.',
    prompt: `${STYLE_PREAMBLE}. Detail shot — close-cropped view of a heritage sandstone shopfront in a country South Australian town. Warm honey-coloured stone, hand-painted window lettering blurred, dappled shadow from a eucalyptus branch falling across the wall. No people. Slow, quiet, considered. Texture image, used as a section divider.`,
    aspect: '16:9',
  },
  pathwaySeparation: {
    src: '/images/pathway-separation.jpg',
    alt: 'A quiet kitchen scene: two mugs of tea, one untouched',
    caption: 'Two mugs of tea, one untouched. Morning kitchen, soft light.',
    prompt: `${STYLE_PREAMBLE}. Quiet still-life: a kitchen table in soft morning light. Two mugs of tea — one half-drunk, one full and cold. A folded newspaper. An empty chair across the table. No people. Emotional, restrained, suggestive of separation without being literal. Warm and tender, not bleak.`,
    aspect: '3:4',
  },
  pathwayEstate: {
    src: '/images/pathway-estate.jpg',
    alt: 'A grandfather and grandchild on a back verandah',
    caption: 'A grandfather and grandchild on the back verandah, late afternoon.',
    prompt: `${STYLE_PREAMBLE}. A weathered Australian grandfather in his 70s sits on a verandah step in late afternoon light, a young grandchild (perhaps 5) leaning against his knee, both looking out across a country backyard with gum trees. Not posed for the camera. Warm, generous, unforced. Suggestive of legacy and care.`,
    aspect: '3:4',
  },
  pathwayBusiness: {
    src: '/images/pathway-business.png',
    alt: 'A small business owner in a workshop or shopfront',
    caption: 'A Gawler business owner at the start of the day. Practical, capable, alone.',
    prompt: `${STYLE_PREAMBLE}. A Australian small-business owner in her 40s standing in the doorway of her own shopfront / workshop / cafe in a country town, early morning, holding a clipboard or apron, taking a breath before the day starts. Warm light. Authentic, working, capable. Not a stock CEO. Could be a baker, a tradie's office manager, a winery operator.`,
    aspect: '3:4',
  },
  bookingBackdrop: {
    src: '/images/booking-backdrop.jpg',
    alt: 'A soft-focus interior near a window',
    caption: 'Soft-focus interior detail. Warmth, calm, no distraction.',
    prompt: `${STYLE_PREAMBLE}. Softly defocused interior — a warm timber room near a window, late afternoon light catching dust, a vase of native foliage out of focus, no readable detail. Used as background under the booking form. Must feel calm, safe, generous. Almost abstract.`,
    aspect: '16:9',
  },
  signature: {
    src: '/images/signature.png',
    alt: "Steven's handwritten signature",
    caption: "Steven's handwritten signature mark.",
    prompt: `Black ink handwritten signature reading "Steven M Clark", in a confident, slightly looping fountain pen hand. Transparent background. High contrast. Used as a personal sign-off on the booking confirmation.`,
    aspect: '4:3',
  },
  aboutHero: {
    src: '/images/steven-about-hero.png',
    alt: 'Steven M Clark, founder and principal',
    caption: 'Steven M Clark. Commenced practice in 1985. Still its principal.',
    prompt: `Real client-supplied studio headshot. Do not regenerate.`,
    aspect: '3:4',
  },
  contactHero: {
    src: '/images/contact-hero.jpg',
    alt: 'The Gawler office at the start of the day',
    caption: 'The Adelaide Road office. Lights on, kettle just boiled, door open.',
    prompt: `${STYLE_PREAMBLE}. Wide architectural detail of a small heritage solicitor's office on a wide country South Australian street, morning light catching the sandstone, the front door slightly ajar, a single warm interior light glowing through a window. Empty footpath, native gum branch overhanging. No people. A welcoming, quiet, established place of business. Composition: building right of frame, the open street and pale morning sky filling the left two-thirds.`,
    aspect: '4:3',
  },
  familyHero: {
    src: '/images/family-hero.jpg',
    alt: 'Two adults sitting together in conversation',
    caption: 'A conversation that has been needed for a long time.',
    prompt: `${STYLE_PREAMBLE}. Two Australian adults, mid 30s to mid 40s, sitting close on a worn linen sofa in a warm timber-floored living room, soft afternoon light through sheer curtains, in the middle of a careful conversation. Faces only partly visible, one in profile, one looking down. Mugs of tea on the coffee table. Restrained, tender, real. Suggests a hard but honest moment. No conflict, no drama, no tears. Calm.`,
    aspect: '3:4',
  },
  estatesHero: {
    src: '/images/estates-hero.jpg',
    alt: 'A weathered Australian hand signing a paper document at a kitchen table',
    caption: 'The quiet moment a Will is signed. Tuesday morning at the kitchen table.',
    prompt: `${STYLE_PREAMBLE}. Close, intimate top-down view of a weathered older Australian hand holding a fountain pen, signing a paper document on a warm timber kitchen table. Soft window light from the side. A cup of tea, a pair of reading glasses, a posy of dried native foliage in a small jar nearby. Slow, considered, generational. No corporate connotations. Hand only, no face.`,
    aspect: '4:3',
  },
  propertyHero: {
    src: '/images/property-hero.jpg',
    alt: 'A stone Gawler-region country house in morning light',
    caption: 'A South Australian country property at the moment it changes hands.',
    prompt: `${STYLE_PREAMBLE}. Establishing exterior of a heritage South Australian country stone house — single storey, verandah across the front, established garden of olives and native shrubs, a long gravel drive leading to it, a single gum tree to one side. Early morning, low golden light, soft mist over the paddock behind. No people, no real-estate signage. Calm, established, the kind of property a family has owned for two generations or is about to.`,
    aspect: '4:3',
  },
  businessHero: {
    src: '/images/business-hero.jpg',
    alt: 'A Gawler main-street business at the start of the day',
    caption: 'Murray Street, Gawler, just after seven. The town getting started.',
    prompt: `${STYLE_PREAMBLE}. Wide street-level view of a country South Australian main street just after dawn — sandstone shopfronts opening for the day, one shop owner sweeping the footpath, a chalkboard sign being set out, a delivery van pulled in. Warm low sun raking across the heritage facades, long shadows. Real people working, mid-action, not posed. The texture of a working country town doing business.`,
    aspect: '16:9',
  },
  interventionHero: {
    src: '/images/intervention-hero.jpg',
    alt: 'A closed timber front door, soft light glowing from inside',
    caption: 'A closed front door. Safety, privacy, late afternoon light.',
    prompt: `${STYLE_PREAMBLE}. A closed timber front door of a country cottage, late afternoon light glowing softly from inside through a side window. A pot of native lavender by the step. No people. Composition asymmetric — door on right, weatherboard wall and softly defocused garden filling the left. Suggestive of safety and privacy, not threat.`,
    aspect: '3:4',
  },
  divorceHero: {
    src: '/images/divorce-hero.jpg',
    alt: 'Overhead view of a teacup, fountain pen and folded document',
    caption: 'A teacup, a pen, a folded document. Decisions made carefully.',
    prompt: `${STYLE_PREAMBLE}. Overhead still-life on a warm timber table — a single white teacup, a fountain pen, a folded paper document at one edge, a sprig of dried eucalyptus to one side. Soft morning window light raking across the wood grain. Quiet, contemplative, suggestive of decisions being made carefully. No people.`,
    aspect: '3:4',
  },
  estatePlanningHero: {
    src: '/images/estate-planning-hero.jpg',
    alt: 'An older Australian couple sitting at a kitchen table with paperwork',
    caption: 'Late afternoon at the kitchen table. Planning together, unhurried.',
    prompt: `${STYLE_PREAMBLE}. A weathered older Australian couple in their late 60s sitting at a kitchen table, viewed from the side, the man's hand resting on the woman's. A folder of paperwork open between them, two reading glasses, two mugs of tea. Late afternoon golden light through a window. They are looking at the document, not at each other and not at camera. Warm, unhurried, planning together.`,
    aspect: '4:3',
  },
  advanceCareHero: {
    src: '/images/advance-care-hero.jpg',
    alt: 'A young adult hand and an elderly hand resting beside a document',
    caption: 'Two hands beside a document. The careful conversation.',
    prompt: `${STYLE_PREAMBLE}. A pair of well-loved hands — one belonging to an adult child in their 40s, one to an elderly parent in their 80s — resting on a kitchen table beside a single document. Soft window light. No faces, no posing. Suggests difficult-but-loving conversation about future care.`,
    aspect: '4:3',
  },
  trustsHero: {
    src: '/images/trusts-hero.jpg',
    alt: 'Overhead view of a desk with a legal folder, paperweight and pen',
    caption: 'A clean desk, a careful document. Structure and continuity.',
    prompt: `${STYLE_PREAMBLE}. Overhead view of a clean timber desk: a leather-bound folder open to a page of typed legal text, a brass paperweight in the shape of a small tree, a fountain pen, a single sprig of olive branch. Late afternoon raking light. No people. Quiet, considered, suggests structure and continuity.`,
    aspect: '3:4',
  },
  propertyDetailHero: {
    src: '/images/property-detail-hero.jpg',
    alt: 'A set of keys on a folded property contract',
    caption: 'Keys on a contract. The quiet moment of exchange.',
    prompt: `${STYLE_PREAMBLE}. Close detail of a set of brass keys on a key ring resting on a folded property contract on a timber kitchen table, soft morning light from a window catching the metal. A vase of native foliage and a half-drunk mug of tea visible at the frame edge. No people. The quiet moment of exchange.`,
    aspect: '4:3',
  },
  constructionHero: {
    src: '/images/construction-hero.jpg',
    alt: 'A country building site at dawn, no workers yet',
    caption: 'The build at first light, before the crew arrives.',
    prompt: `${STYLE_PREAMBLE}. A country building site at first light: a half-finished timber-frame country house, no workers yet, scaffolding casting long shadows across red soil, a single thermos and a hard hat resting on a sawhorse. Warm dawn light, pale sky. Calm, considered, suggests work-in-progress not chaos.`,
    aspect: '4:3',
  },
  leaseHero: {
    src: '/images/lease-hero.jpg',
    alt: 'A wooden A-frame sign being set out on a country footpath',
    caption: 'The "now open" sign goes out. A new lease, a new business day.',
    prompt: `${STYLE_PREAMBLE}. A small "now open" wooden A-frame sign being set out on the footpath of a country shopfront in early morning light. Hand of the owner partially visible at the edge of frame placing it. Heritage sandstone wall, swept footpath, gum branch overhead. Warm, hopeful, the start of a business day.`,
    aspect: '4:3',
  },
  debtRecoveryHero: {
    src: '/images/debt-recovery-hero.jpg',
    alt: 'Overhead view of a folded letter on letterhead paper with a pen',
    caption: 'A letter on letterhead. Careful correspondence, not confrontation.',
    prompt: `${STYLE_PREAMBLE}. Overhead view of a writing desk: a folded letter on letterhead paper, a fountain pen capped beside it, a brass desk lamp casting warm pool of light. Late afternoon, calm, deliberate. No people. Suggests careful, professional correspondence rather than confrontation.`,
    aspect: '3:4',
  },
  commercialHero: {
    src: '/images/commercial-hero.jpg',
    alt: 'A country small-business owner reading paperwork at a wooden counter',
    caption: 'Behind the counter. Real, working, contemplative.',
    prompt: `${STYLE_PREAMBLE}. Mid-shot of a country small-business owner — middle-aged, soft flannel shirt, sleeves rolled — leaning over a wooden counter reading paperwork, side window light. Cash register, jar of pens, calendar of local events on the wall behind. Real, working, contemplative. Not posed for camera.`,
    aspect: '4:3',
  },
  industrialRelationsHero: {
    src: '/images/industrial-relations-hero.jpg',
    alt: 'A row of high-vis work jackets on timber hooks inside a workshop',
    caption: 'High-vis jackets on hooks. The dignity of working life.',
    prompt: `${STYLE_PREAMBLE}. A row of high-vis work jackets hung on timber hooks inside a country workshop doorway, soft morning light from outside catching them. A pair of work boots on the floor beneath. No people. Quiet, respectful, suggests the dignity of working life — not corporate HR.`,
    aspect: '4:3',
  },
  insolvencyHero: {
    src: '/images/insolvency-hero.jpg',
    alt: 'A small-business owner viewed from behind, looking out a shop window',
    caption: 'A quiet morning in the shop. The moment of considering what comes next.',
    prompt: `${STYLE_PREAMBLE}. A country small-business owner standing at the back of a quiet shop or workshop, viewed from behind, looking out a window at the morning, hands in pockets. Inside is calm: stock on shelves, swept floor, no chaos. Late golden light. The moment of considering what comes next — calm, not panicked.`,
    aspect: '3:4',
  },
  notaryDetailHero: {
    src: '/images/notary-detail-hero.jpg',
    alt: "A notary's brass embossed seal pressed into cream paper",
    caption: 'The notarial seal. Ceremony, gravity, international recognition.',
    prompt: `${STYLE_PREAMBLE}. Close detail of a notary's brass embossed seal pressed into thick cream paper, beside an open fountain pen and a folded document with a wax-style ribbon. Warm directional desk lamp. No people. Suggests ceremony, gravity, internationally recognised authority.`,
    aspect: '4:3',
  },
  criminalDefenceHero: {
    src: '/images/criminal-defence-hero.jpg',
    alt: 'A quiet country courthouse corridor in early morning light',
    caption: 'A courthouse corridor at first light. Calm institution, not battleground.',
    prompt: `${STYLE_PREAMBLE}. A quiet country courthouse corridor in early morning light — sandstone walls, polished timber bench, a single shaft of sun across the floor. No people. Heritage, considered, suggests the law as a calm, fair institution rather than a battleground.`,
    aspect: '4:3',
  },
  personalInjuryHero: {
    src: '/images/personal-injury-hero.jpg',
    alt: 'A walking stick leaning against a sun-warmed timber doorway',
    caption: 'A walking stick in the morning light. Recovery, home, dignity.',
    prompt: `${STYLE_PREAMBLE}. A walking stick leaning against a sun-warmed timber doorway, beside a soft armchair half visible in the room beyond. Morning light through a window, native foliage in a vase. No people. Quiet, dignified, suggests recovery and home — not injury.`,
    aspect: '3:4',
  },
  disputeResolutionHero: {
    src: '/images/dispute-resolution-hero.jpg',
    alt: 'Two empty chairs facing each other across a wooden table',
    caption: 'Two chairs, a carafe of water. Neutral ground for hard conversations.',
    prompt: `${STYLE_PREAMBLE}. Two empty wooden chairs facing each other across a warm timber table in a quiet, light-filled room, a single carafe of water and two glasses between them. Soft window light. No people. Suggests mediation, conversation, neutral ground — not a courtroom.`,
    aspect: '4:3',
  },
  insightsHero: {
    src: '/images/insights-hero.jpg',
    alt: 'A writing desk by a window in late afternoon light',
    caption: 'The desk where the thinking happens. Late afternoon.',
    prompt: `${STYLE_PREAMBLE}. A timber writing desk by a window in late afternoon light, a brass lamp on, a stack of newspapers and a marked-up magazine, a fountain pen on an open notebook, a pair of reading glasses, a single sprig of native foliage in a small glass. No people. The room of someone who thinks carefully and writes for a living.`,
    aspect: '4:3',
  },
} satisfies Record<string, ImageDef>

export type ImageKey = keyof typeof IMAGES
