// Pre-publish check for Insights articles (house rules plus the problems the SEO
// agent's posts have shipped with). Run before moving a post from blog-review to main:
//   node scripts/check-posts.mjs                 every live post
//   node scripts/check-posts.mjs <slug> [...]    just these, drafts included
// Exits 1 when anything blocking is found.
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const BLOG = 'content/blog'
const SITE = 'https://www.stevenmclark.com.au'

const BLOCK = [
  [/[–—]/g, 'em or en dash'],
  [/\bplainly\b/gi, '"plainly" (banned)'],
  [/\btransformation/gi, '"transformation" (use "change")'],
  [/\b(organiz|optimiz|realiz|recogniz|prioritiz|minimiz|maximiz|emphasiz|summariz|authoriz|finaliz|specializ|apologiz)\w*/gi, 'US spelling (-ize)'],
  [/\b(color|behavior|favor|neighbor|honor|center|theater|gray|enroll|fulfill)(s|ed|ing|ly)?\b/gi, 'US spelling'],
  [/\bdefense\b/gi, 'US spelling (defence)'],
]
const WARN = [
  [/\b(delve|tapestry|pivotal|crucial|leverage|robust|seamless|foster|underscore|showcase|holistic|testament|vibrant|comprehensive|plethora|myriad|empower|unlock|navigate the complexities)\b/gi, 'AI-tell word'],
  [/\bit'?s (worth|important to) not(e|ing)\b/gi, 'empty pivot'],
]

const routes = new Set(['/'])
for (const f of fs.readdirSync('app', { recursive: true })) {
  const p = f.replaceAll('\\', '/')
  if (p.endsWith('/page.tsx') && !p.includes('[')) routes.add('/' + p.slice(0, -'/page.tsx'.length))
}
for (const m of fs.readFileSync('next.config.mjs', 'utf8').matchAll(/source:\s*'([^':]+)'/g)) routes.add(m[1])

const posts = new Map(
  fs.readdirSync(BLOG).filter((f) => f.endsWith('.mdx')).map((f) => {
    const { data, content } = matter(fs.readFileSync(path.join(BLOG, f), 'utf8'))
    return [f.slice(0, -4), { data, content, raw: fs.readFileSync(path.join(BLOG, f), 'utf8') }]
  }),
)
const live = (slug) => posts.has(slug) && !posts.get(slug).data.draft

const named = process.argv.slice(2)
const targets = named.length ? named : [...posts.keys()].filter(live)
let blocking = 0

for (const slug of targets) {
  const post = posts.get(slug)
  const problems = []
  if (!post) {
    console.log(`${slug}: no such file in ${BLOG}`)
    blocking++
    continue
  }
  const { data, raw } = post
  if (data.draft) problems.push(['block', 'still marked draft: true'])
  if (!data.date) problems.push(['block', 'no date'])

  const lineOf = (i) => raw.slice(0, i).split('\n').length
  // JSON-LD blocks hold schema.org names ("Organization"), not prose; blank them, keep line numbers
  const prose = raw.replace(/<script[\s\S]*?<\/script>/g, (s) => s.replace(/[^\n]/g, ' '))
  for (const [re, label] of BLOCK)
    for (const m of prose.matchAll(re)) problems.push(['block', `${label}: "${m[0]}" line ${lineOf(m.index)}`])
  for (const [re, label] of WARN)
    for (const m of prose.matchAll(re)) problems.push(['warn', `${label}: "${m[0]}" line ${lineOf(m.index)}`])

  const links = [...raw.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => [m[1], m.index])
  if (data.heroImage) links.push([data.heroImage, 0])
  for (const [url, i] of links) {
    if (url.includes('.com.au//')) {
      problems.push(['block', `double slash link: ${url} line ${lineOf(i)}`])
      continue
    }
    if (!url.startsWith('/') && !url.startsWith(SITE)) continue
    const p = url.replace(SITE, '').split(/[#?]/)[0].replace(/\/$/, '') || '/'
    let ok
    if (p.startsWith('/blog-images/') || p.startsWith('/images/')) ok = fs.existsSync('public' + p)
    else if (p.startsWith('/insights/')) ok = live(p.split('/')[2])
    else ok = routes.has(p)
    if (!ok) problems.push(['block', `broken link: ${url} line ${lineOf(i)}`])
  }

  const blocks = problems.filter(([k]) => k === 'block').length
  blocking += blocks
  console.log(`${blocks ? 'FAIL' : 'ok  '} ${slug}${problems.length ? '' : ' (clean)'}`)
  for (const [kind, msg] of problems) console.log(`     ${kind}: ${msg}`)
}

console.log(`\n${targets.length} post(s) checked, ${blocking} blocking problem(s)`)
process.exit(blocking ? 1 : 0)
