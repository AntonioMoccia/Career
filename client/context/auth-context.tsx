"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  image?: string;
  emailVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  deviceId: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (email: string, password: string, username: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  refreshAccessToken: () => Promise<boolean>;
  loginWithGoogle: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api/v1';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Genera o recupera deviceId
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let storedDeviceId = localStorage.getItem('deviceId');
      if (!storedDeviceId) {
        storedDeviceId = crypto.randomUUID();
        localStorage.setItem('deviceId', storedDeviceId);
      }
      setDeviceId(storedDeviceId);

      // Recupera token e dati utente salvati
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');

      if (storedToken) {
        setToken(storedToken);
      }
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          console.error('Errore nel parsing dei dati utente:', e);
        }
      }
    }
  }, []);

  // Funzione per salvare i dati di autenticazione
  const saveAuthData = (data: {
    token: string;
    user: User;
  }) => {
    setToken(data.token);
    setUser(data.user);

    if (typeof window !== 'undefined') {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
  };

  // Login con email e password
  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setLoading(true);
    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      // Includi deviceId nell'header se disponibile
      if (deviceId && token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers,
        credentials: 'include', // Per gestire i cookie httpOnly
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        return { success: false, error: data.error || 'Errore durante il login' };
      }

      saveAuthData(data);
      return { success: true };
    } catch (error) {
      console.error('Errore login:', error);
      return { success: false, error: 'Errore di connessione' };
    } finally {
      setLoading(false);
    }
  };

  // Registrazione
  const register = async (email: string, password: string, username: string): Promise<{ success: boolean; error?: string }> => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, username }),
      });

      const data = await res.json();

      if (!res.ok) {
        return { success: false, error: data.error || 'Errore durante la registrazione' };
      }

      return { success: true };
    } catch (error) {
      console.error('Errore registrazione:', error);
      return { success: false, error: 'Errore di connessione' };
    } finally {
      setLoading(false);
    }
  };

  // Refresh del token
  const refreshAccessToken = async (): Promise<boolean> => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Per i cookie httpOnly
      });

      if (!res.ok) {
        logout();
        return false;
      }

      const data = await res.json();
      setToken(data.token);
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token);
      }

      return true;
    } catch (error) {
      console.error('Errore refresh token:', error);
      logout();
      return false;
    }
  };

  // Login con Google
  const loginWithGoogle = () => {
    // Per Google OAuth, semplicemente reindirizza al backend
    // Il deviceId verrà gestito nel callback
    window.location.href = `${API_BASE_URL}/auth/google`;
  };

  // Logout
  const logout = () => {
    setToken(null);
    setUser(null);

    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        token, 
        deviceId,
        loading, 
        login, 
        register,
        logout, 
        refreshAccessToken,
        loginWithGoogle
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth deve essere usato dentro AuthProvider');
  return ctx;
};
