import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { getAccessToken } from '@/lib/utils/auth'

export async function middleware(request: NextRequest) {
    const accessToken = await getAccessToken(request)
    const {pathname} = request.nextUrl

    const isAuthRoute = pathname.startsWith('/auth')
    const isProtectedRoute = pathname.startsWith('/dashboard')

    if (isProtectedRoute && !accessToken) {
        const url = new URL('/auth/login', request.url)
        url.searchParams.set('callbackUrl', request.url)
        return NextResponse.redirect(url)
    }

    if (isAuthRoute && accessToken) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*', '/auth/:path*'],
}
