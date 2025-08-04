import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    console.log('API Route /me ricevuta richiesta GET');
    
    // Inoltra i cookie al backend
    const cookies = req.headers.get('cookie') || '';
    
    console.log('Cookie inoltrati:', cookies);

    // Inoltra la richiesta al backend
    const response = await fetch(`${process.env.BACKEND_URL || 'http://localhost:5001'}/api/v1/auth/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookies,
      },
    });

    console.log('Response dal backend:', response.status);

    if (!response.ok) {
      const errorData = await response.text();
      console.log('Errore dal backend:', errorData);
      
      try {
        const errorJson = JSON.parse(errorData);
        return NextResponse.json(
          { error: errorJson.error || "Errore durante il recupero dei dati utente" },
          { status: response.status }
        );
      } catch {
        return NextResponse.json(
          { error: "Errore durante il recupero dei dati utente" },
          { status: response.status }
        );
      }
    }

    const data = await response.json();
    console.log('Dati utente dal backend:', data);
    
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    console.error('Errore nella rotta /me:', error);
    return NextResponse.json({ error: 'Errore interno del server' }, { status: 500 });
  }
}
