"use client";
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';

interface ProtectedRouteProps {
  children: React.ReactNode;
  redirectTo?: string;
  requireEmailVerification?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectTo = '/auth/login',
  requireEmailVerification = true
}) => {
  const { user, token, loading } = useAuth();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      // Se è ancora in caricamento, aspetta
      if (loading) return;

      // Se non c'è token o utente, reindirizza al login
      if (!token || !user) {
        router.push(redirectTo);
        return;
      }

      // Se richiede email verificata e non è verificata
      if (requireEmailVerification && !user.emailVerified) {
        router.push('/auth/verify-email');
        return;
      }

      // Tutto ok
      setIsChecking(false);
    };

    checkAuth();
  }, [user, token, loading, router, redirectTo, requireEmailVerification]);

  // Mostra loader durante il controllo
  if (loading || isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Se arriviamo qui, l'utente è autenticato correttamente
  return <>{children}</>;
};

// Hook per controllare se l'utente è autenticato
export const useRequireAuth = (redirectTo = '/auth/login') => {
  const { user, token, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!token || !user)) {
      router.push(redirectTo);
    }
  }, [user, token, loading, router, redirectTo]);

  return { user, token, loading };
};
