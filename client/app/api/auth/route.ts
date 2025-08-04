import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log('API Route ricevuta richiesta POST');
    
    const body = await req.json();
    const { email, password } = body;
    
    console.log('Body ricevuto:', { email, password });

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email e password sono richiesti" },
        { status: 400 }
      );
    }

    // Inoltra la richiesta al backend senza deviceId (lo genererà il backend)
    const response = await fetch(`http://localhost:5001/api/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    console.log('Response dal backend:', response.status);

    if (!response.ok) {
      const errorData = await response.text();
      console.log('Errore dal backend:', errorData);
      
      try {
        const errorJson = JSON.parse(errorData);
        return NextResponse.json(
          { error: errorJson.error || "Errore durante il login" },
          { status: response.status }
        );
      } catch {
        return NextResponse.json(
          { error: "Errore durante il login" },
          { status: response.status }
        );
      }
    }

    const data = await response.json();
    console.log('Dati dal backend completi:', JSON.stringify(data, null, 2));
    console.log('AccessToken presente?:', data.accessToken ? 'SÌ' : 'NO');
    console.log('User presente?:', data.user ? 'SÌ' : 'NO');
    
    // Crea la response con i dati
    const nextResponse = NextResponse.json(data, { status: 200 });
    
    // Inoltra i cookie Set-Cookie dal backend al client
    const setCookieHeaders = response.headers.get('set-cookie');
    if (setCookieHeaders) {
      // Next.js gestisce automaticamente i cookie se li impostiamo sulla response
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
    console.error('Errore in API Route:', error);
    return NextResponse.json(
      { error: "Errore interno del server" },
      { status: 500 }
    );
  }
}
