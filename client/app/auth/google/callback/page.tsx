"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';

export default function GoogleCallbackPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string>('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, token } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Controlla se ci sono parametri di errore nell'URL
        const errorParam = searchParams.get('error');
        if (errorParam) {
          setError('Errore durante l\'autenticazione con Google');
          setStatus('error');
          return;
        }

        // Controlla se ci sono parametri di successo (token, user, ecc.)
        const tokenParam = searchParams.get('token');
        const userParam = searchParams.get('user');

        if (tokenParam && userParam) {
          // Salva i dati ricevuti dal callback
          try {
            const userData = JSON.parse(decodeURIComponent(userParam));
            
            if (typeof window !== 'undefined') {
              localStorage.setItem('token', tokenParam);
              localStorage.setItem('user', JSON.stringify(userData));
            }
            
            setStatus('success');
            setTimeout(() => {
              router.push('/dashboard');
            }, 2000);
            return;
          } catch (parseError) {
            console.error('Errore nel parsing dei dati utente:', parseError);
            setError('Errore nei dati ricevuti');
            setStatus('error');
            return;
          }
        }

        // Se l'utente è già autenticato nel context, reindirizza
        if (user && token) {
          setStatus('success');
          setTimeout(() => {
            router.push('/dashboard');
          }, 2000);
          return;
        }

        // Se non ci sono errori ma nemmeno dati, aspetta un po'
        setTimeout(() => {
          if (!user && !token) {
            setError('Errore durante l\'autenticazione. Riprova.');
            setStatus('error');
          }
        }, 5000);

      } catch (err) {
        console.error('Errore callback Google:', err);
        setError('Errore durante l\'autenticazione');
        setStatus('error');
      }
    };

    handleCallback();
  }, [searchParams, user, token, router]);

  const handleRetry = () => {
    router.push('/auth');
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Completamento accesso...
            </h2>
            <p className="text-gray-600">
              Stiamo completando il tuo accesso con Google. Attendere prego.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Accesso completato!
            </h2>
            <p className="text-gray-600">
              Reindirizzamento alla dashboard in corso...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Errore di autenticazione
          </h2>
          <p className="text-gray-600 mb-4">
            {error}
          </p>
          <button
            onClick={handleRetry}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Riprova
          </button>
        </div>
      </div>
    </div>
  );
}
