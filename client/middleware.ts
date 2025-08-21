import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log('Request Pathname:', pathname);
  // Protected routes
  const protectedRoutes = ['/dashboard', '/profile'];
  
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    const sessionCookie = request.cookies.get('better-auth.session_token');

    if (!sessionCookie) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    // Verifica la sessione con il backend
    try {
      const apiRes = await fetch(
        `${process.env.API_URL || "http://localhost:5001"}/api/me`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "credentials": "include",
            "Cookie": `better-auth.session_token=${sessionCookie?.value}`
          },
          // Importante: Next.js middleware gira su Edge Runtime, quindi fetch è limitato
          credentials: "include"
        }
      );
      if (!apiRes.ok) {
        return NextResponse.redirect(new URL('/', request.url));
      }
      // Potresti anche controllare la risposta JSON se vuoi gestire ruoli, ecc.
    } catch (err) {

      // In caso di errore di rete o altro, fallback su redirect
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*']
};