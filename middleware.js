import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/index'],
}

export function middleware(NextRequest) {
  const basicAuth = NextRequest.headers.get('authorization')
  const url = NextRequest.nextUrl

  console.log('triggered this middleware')

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === 'testuser' && pwd === '1234') {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}
