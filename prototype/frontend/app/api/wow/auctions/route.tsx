import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const connectedRealmId = searchParams.get('realmId') || '509'
  const region = process.env.BLIZZARD_REGION || 'eu'

  // Get token
  const tokenRes = await fetch('http://localhost:3000/api/blizzard/token')
  const { access_token } = await tokenRes.json()

  // Fetch auctions
  const res = await fetch(
    `https://${region}.api.blizzard.com/data/wow/connected-realm/${connectedRealmId}/auctions?namespace=dynamic-${region}&locale=en_US`,
    {
      headers: { 'Authorization': `Bearer ${access_token}` },
    }
  )

  if (!res.ok) {
    return NextResponse.json({ error: res.statusText }, { status: res.status })
  }

  const data = await res.json()
  return NextResponse.json(data)
}