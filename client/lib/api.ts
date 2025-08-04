"use client";
import { useAuth } from '@/context/auth-context';
import { useCallback } from 'react';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api/v1';

interface ApiOptions extends RequestInit {
  requireAuth?: boolean;
}

export const useApi = () => {
  const { token, refreshAccessToken, logout } = useAuth();

  const apiCall = useCallback(async (
    endpoint: string, 
    options: ApiOptions = {}
  ): Promise<Response> => {
    const { requireAuth = true, headers = {}, ...restOptions } = options;

    const requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...headers as Record<string, string>,
    };

    // Aggiungi token di autorizzazione se richiesto
    if (requireAuth && token) {
      requestHeaders['Authorization'] = `Bearer ${token}`;
    }

    try {
      let response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...restOptions,
        headers: requestHeaders,
        credentials: 'include', // Per gestire i cookie httpOnly
      });

      // Se il token è scaduto, prova a rinnovarlo
      if (response.status === 401 && requireAuth) {
        const refreshSuccess = await refreshAccessToken();
        
        if (refreshSuccess) {
          // Riprova la chiamata con il nuovo token
          requestHeaders['Authorization'] = `Bearer ${token}`;
          response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...restOptions,
            headers: requestHeaders,
            credentials: 'include',
          });
        } else {
          // Se il refresh fallisce, effettua il logout
          logout();
          throw new Error('Sessione scaduta. Effettua nuovamente il login.');
        }
      }

      return response;
    } catch (error) {
      console.error('Errore API:', error);
      throw error;
    }
  }, [token, refreshAccessToken, logout]);

  return { apiCall };
};

// Hook per chiamate API specifiche
export const useAuthApi = () => {
  const { apiCall } = useApi();

  // Esempio di chiamate API specifiche
  const getProfile = useCallback(async () => {
    const response = await apiCall('/auth/profile');
    if (!response.ok) {
      throw new Error('Errore nel recupero del profilo');
    }
    return response.json();
  }, [apiCall]);

  const updateProfile = useCallback(async (data: any) => {
    const response = await apiCall('/auth/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Errore nell\'aggiornamento del profilo');
    }
    return response.json();
  }, [apiCall]);

  return {
    getProfile,
    updateProfile,
  };
};

// Utility per chiamate API senza hook (per uso in funzioni non-React)
export const apiClient = {
  async call(
    endpoint: string, 
    options: RequestInit & { token?: string } = {}
  ): Promise<Response> {
    const { token, headers = {}, ...restOptions } = options;

    const requestHeaders: Record<string, string> = {
      'Content-Type': 'application/json',
      ...headers as Record<string, string>,
    };

    if (token) {
      requestHeaders['Authorization'] = `Bearer ${token}`;
    }

    return fetch(`${API_BASE_URL}${endpoint}`, {
      ...restOptions,
      headers: requestHeaders,
      credentials: 'include',
    });
  }
};
