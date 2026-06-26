// Renders the enquiry emails to /tmp HTML files for visual review.
// Run: npx tsx scripts/preview-emails.ts
import { writeFileSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'
import { clientConfirmationEmail, adminNotificationEmail } from '../lib/emails'
import type { EnquiryPayload } from '../lib/enquiry'

const sample: EnquiryPayload = {
  name: 'Sarah Whitfield',
  email: 'sarah.whitfield@example.com',
  phone: '0412 345 678',
  message: "We're buying a property in Gawler East and there's a boundary issue with the neighbour. Would like to talk it through before we sign.",
  source: 'homepage_booking',
  page: {
    path: '/gawler-property-lawyers',
    title: 'Property law and conveyancing, Gawler. Steven M Clark Lawyers.',
    url: 'https://stevenmclark.com.au/gawler-property-lawyers',
  },
}

const out = tmpdir()
const client = clientConfirmationEmail(sample)
const admin = adminNotificationEmail(sample)
writeFileSync(join(out, 'smc-email-client.html'), client.html)
writeFileSync(join(out, 'smc-email-admin.html'), admin.html)
console.log('CLIENT subject:', client.subject)
console.log('ADMIN subject :', admin.subject)
console.log('Wrote:', join(out, 'smc-email-client.html'))
console.log('Wrote:', join(out, 'smc-email-admin.html'))
