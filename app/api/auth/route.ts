import { NextResponse } from 'next/server'
import { verifyToken } from "@/lib/clients/auth"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const accessToken = searchParams.get('token')

  if (!accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Create a JWT
  const token = verifyToken(accessToken)
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // Set the JWT as an HTTP-only cookie
  const response = NextResponse.json({ success: true })
  response.cookies.set('auth_token', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 3600, // 1 hr
    path: '/',
  })

  return response
}
