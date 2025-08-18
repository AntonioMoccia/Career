import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log('Request Pathname:', pathname);
  // Protected routes
  const protectedRoutes = ['/dashboard', '/profile'];
  
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    const sessionCookie = request.cookies.get('better-auth.session_token');
    console.log('Session Cookie:', sessionCookie);  
    if (!sessionCookie) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    
    // You could also verify the session with your backend here
    // For now, just check if the cookie exists
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*']
};