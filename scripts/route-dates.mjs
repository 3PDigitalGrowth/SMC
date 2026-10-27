// Writes lib/route-dates.json: the date each static route's content last changed,
// so the sitemap's lastmod is honest (Google ignores lastmod that changes every build).
// Run `npm run sitemap:dates` before committing page changes. Files with uncommitted
// edits count as changed today.
import { execSync } from 'node:child_process'
import fs from 'node:fs'

const sitemap = fs.readFileSync('app/sitemap.ts', 'utf8')
const routes = [...sitemap.matchAll(/^\s*'(\/[^']*|)',$/gm)].map((m) => m[1])

// Shared components whose copy renders on these routes
const EXTRA = {
  '': ['components/home'],
  '/notary-public-gawler': ['components/notary'],
  '/apostille-and-authentication-south-australia': ['components/notary'],
  '/notary-public-or-justice-of-the-peace': ['components/notary'],
  '/notary-appointment-checklist': ['components/notary'],
  '/notary-fees-south-australia': ['components/notary'],
  '/notarising-documents-for-use-overseas': ['components/notary'],
  '/notary-public-northern-adelaide-barossa': ['components/notary'],
}

const today = new Date().toISOString().slice(0, 10)
const sh = (cmd) => execSync(cmd, { encoding: 'utf8' }).trim()
const dirty = new Set(sh('git status --porcelain').split('\n').filter(Boolean).map((l) => l.slice(3).trim()))

const out = {}
for (const route of routes) {
  const paths = [`app${route}/page.tsx`, ...(EXTRA[route] ?? [])]
  let latest = ''
  for (const p of paths) {
    if ([...dirty].some((d) => d === p || d.startsWith(p + '/'))) latest = today
    const d = sh(`git log -1 --format=%cs -- "${p}"`)
    if (d > latest) latest = d
  }
  out[route] = latest || today
}
fs.writeFileSync('lib/route-dates.json', JSON.stringify(out, null, 2) + '\n')
console.log(`route-dates: ${Object.keys(out).length} routes`)
