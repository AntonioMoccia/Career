import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');
    const state = searchParams.get('state');

    console.log('Google callback - code:', code, 'state:', state);

    if (!code) {
      return NextResponse.json({ error: 'Codice di autorizzazione mancante' }, { status: 400 });
    }

    // Inoltra la richiesta al backend
    const backendUrl = `${process.env.BACKEND_URL || 'http://localhost:5001'}/api/v1/auth/google/callback?code=${code}&state=${state || ''}`;
    
    console.log('Inoltro al backend:', backendUrl);

    const response = await fetch(backendUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Errore dal backend:', errorText);
      return NextResponse.json({ error: 'Errore durante l\'autenticazione Google' }, { status: response.status });
    }

    const data = await response.json();
    console.log('Dati dal backend:', data);
    
    // Crea la response con i dati
    const nextResponse = NextResponse.json(data, { status: 200 });
    
    // Inoltra i cookie Set-Cookie dal backend al client
    const setCookieHeaders = response.headers.get('set-cookie');
    if (setCookieHeaders) {
      const cookies = setCookieHeaders.split(', ');
      cookies.forEach(cookie => {
        const [nameValue, ...options] = cookie.split('; ');
        const [name, value] = nameValue.split('=');
        
        if (name === 'refreshToken') {
          nextResponse.cookies.set(name, value, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 giorni
          });
        }
      });
    }
    
    return nextResponse;

  } catch (error) {
    console.error('Errore durante il callback Google:', error);
    return NextResponse.json({ error: 'Errore interno del server' }, { status: 500 });
  }
}
