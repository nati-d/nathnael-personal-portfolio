import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Skip middleware for static files (images, etc.)
    const isStaticFile = /\.(png|jpg|jpeg|gif|svg|ico|webp|css|js|woff|woff2|ttf|eot)$/i.test(pathname)
    if (isStaticFile) {
        return NextResponse.next()
    }

    // No pages are protected - allow access to all routes
    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Static files are handled in the middleware function itself
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
