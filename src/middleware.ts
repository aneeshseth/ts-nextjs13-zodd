import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
 const path = request.nextUrl.pathname;
 const isPublicPaths = path === '/login' || path === '/'
 const token = request.cookies.get('token')?.value || ''
 if (isPublicPaths && token) {
    return NextResponse.redirect(new URL('/todos', request.nextUrl))
 }
 if (!isPublicPaths && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
 }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/', '/todos', '/login'],
}