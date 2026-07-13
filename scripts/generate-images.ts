/**
 * Generate the image library defined in lib/images.ts via the OpenAI Images API.
 *
 * Usage:
 *   1. Add OPENAI_API_KEY to .env.local
 *   2. npm run images           — generate any missing images
 *   3. npm run images:force     — regenerate every image (slow + costly)
 *   4. npm run images -- heroPortrait teamGroup   — generate specific keys only
 *
 * Output: writes JPGs/PNGs to /public/images/, named per the manifest src paths.
 */

import { config as loadEnv } from 'dotenv'
loadEnv({ path: '.env.local' })
loadEnv()
import fs from 'node:fs/promises'
import path from 'node:path'
import OpenAI from 'openai'
import { IMAGES, type ImageKey, type ImageDef } from '../lib/images'

const PUBLIC_DIR = path.join(process.cwd(), 'public')
const MODEL = process.env.IMAGE_MODEL ?? 'gpt-image-1'

const ASPECT_TO_SIZE: Record<ImageDef['aspect'], '1024x1024' | '1024x1536' | '1536x1024'> = {
  '1:1':  '1024x1024',
  '3:4':  '1024x1536',
  '9:16': '1024x1536',
  '4:3':  '1536x1024',
  '3:2':  '1536x1024',
  '16:9': '1536x1024',
}

async function fileExists(p: string): Promise<boolean> {
  try { await fs.access(p); return true } catch { return false }
}

async function generateOne(
  key: ImageKey,
  def: ImageDef,
  client: OpenAI,
  force: boolean,
): Promise<{ key: ImageKey; status: 'created' | 'skipped' | 'failed'; note?: string }> {
  const outPath = path.join(PUBLIC_DIR, def.src.replace(/^\//, ''))
  if (!force && await fileExists(outPath)) {
    return { key, status: 'skipped', note: 'already exists' }
  }
  await fs.mkdir(path.dirname(outPath), { recursive: true })

  try {
    const result = await client.images.generate({
      model: MODEL,
      prompt: def.prompt,
      size: ASPECT_TO_SIZE[def.aspect],
      n: 1,
    })

    const item = result.data?.[0]
    if (!item?.b64_json) {
      return { key, status: 'failed', note: 'API returned no image data' }
    }
    const buffer = Buffer.from(item.b64_json, 'base64')
    await fs.writeFile(outPath, buffer)
    return { key, status: 'created', note: `${(buffer.length / 1024).toFixed(0)}kb` }
  } catch (err: any) {
    return { key, status: 'failed', note: err?.message ?? String(err) }
  }
}

async function main() {
  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    console.error('\n  ✗ OPENAI_API_KEY is not set. Add it to .env.local and rerun.\n')
    process.exit(1)
  }

  const args = process.argv.slice(2).filter((a) => !a.startsWith('-'))
  const force = process.argv.includes('--force')
  const keys: ImageKey[] = args.length
    ? (args as ImageKey[]).filter((k) => k in IMAGES)
    : (Object.keys(IMAGES) as ImageKey[])

  if (args.length && keys.length !== args.length) {
    const unknown = args.filter((a) => !(a in IMAGES))
    console.error(`\n  ✗ Unknown image key(s): ${unknown.join(', ')}\n`)
    process.exit(1)
  }

  const client = new OpenAI({ apiKey })

  console.log(`\n  Generating ${keys.length} image(s) via ${MODEL}${force ? ' (forced)' : ''}\n`)

  for (const key of keys) {
    process.stdout.write(`  · ${key.padEnd(22)} `)
    const result = await generateOne(key, IMAGES[key], client, force)
    const tag = result.status === 'created' ? '✓ created' : result.status === 'skipped' ? '· skipped' : '✗ failed '
    console.log(`${tag} ${result.note ?? ''}`)
  }

  console.log('\n  Done.\n')
}

main().catch((err) => {
  console.error('\n  Fatal:', err)
  process.exit(1)
})
