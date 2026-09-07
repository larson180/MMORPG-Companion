import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const realmSlug = searchParams.get('realm') // e.g. 'silvermoon'
  const region = process.env.BLIZZARD_REGION || 'eu'

  // Get token
  const tokenRes = await fetch('http://localhost:3000/api/blizzard/token')
  const { access_token } = await tokenRes.json()

  // Look up realm
  const res = await fetch(
    `https://${region}.api.blizzard.com/data/wow/realm/${realmSlug}?namespace=dynamic-${region}&locale=en_US`,
    {
      headers: { 'Authorization': `Bearer ${access_token}` },
    }
  )

  const data = await res.json()
  return NextResponse.json(data)
}