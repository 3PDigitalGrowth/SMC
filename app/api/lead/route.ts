// TODO: Connect to Mailchimp, ActiveCampaign, or CRM
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.json()
  console.log('Lead received:', data)
  return NextResponse.json({ success: true })
}
