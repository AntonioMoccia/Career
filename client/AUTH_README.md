# Sistema di Autenticazione Client - CareerFlow

Questo è il sistema di autenticazione completo per la parte client dell'applicazione CareerFlow, integrato con le API del backend.

## 🔧 Funzionalità Implementate

### ✅ Autenticazione
- **Login con email/password** - Integrato con API `/auth/login`
- **Registrazione utenti** - Integrato con API `/auth/register`
- **OAuth Google** - Integrato con API `/auth/google` e callback
- **Refresh automatico token** - Gestione automatica scadenza token
- **Logout completo** - Pulizia session e localStorage

### ✅ Gestione Sessioni
- **Device ID tracking** - Ogni dispositivo ha un ID univoco
- **Session ID management** - Gestione completa delle sessioni backend
- **Refresh token** - Rinnovo automatico access token
- **Cookie HttpOnly** - Gestione sicura refresh token

### ✅ Sicurezza
- **Protected Routes** - Componente per proteggere pagine
- **Auto-refresh token** - Rinnovo automatico prima della scadenza
- **Error handling** - Gestione completa errori di autenticazione
- **TypeScript** - Type safety completo

## 📁 Struttura File

```
client/
├── context/
│   └── auth-context.tsx          # Context principale autenticazione
├── lib/
│   └── api.ts                    # Hook e utilities per API calls
├── components/
│   ├── forms/
│   │   ├── LoginForm.tsx         # Form di login
│   │   └── RegisterForm.tsx      # Form di registrazione
│   └── common/
│       ├── ProtectedRoute.tsx    # Componente protezione route
│       └── Navbar.tsx            # Navbar con gestione auth
├── app/
│   ├── (auth)/
│   │   └── auth/
│   │       ├── page.tsx          # Pagina auth principale
│   │       └── google/
│   │           └── callback/
│   │               └── page.tsx  # Callback Google OAuth
│   └── dashboard/
│       └── page.tsx              # Dashboard protetta
└── .env.example                  # Variabili d'ambiente
```

## 🚀 Come Usare

### 1. Configurazione Variabili d'Ambiente
```bash
cp .env.example .env.local
```

Modifica `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5001/api/v1
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
```

### 2. Context di Autenticazione
Il `AuthProvider` è già configurato nel layout principale:

```tsx
// Già implementato in app/layout.tsx
<AuthProvider>
  {children}
</AuthProvider>
```

### 3. Uso nei Componenti

#### Hook useAuth
```tsx
import { useAuth } from '@/context/auth-context';

function MyComponent() {
  const { 
    user, 
    token, 
    login, 
    logout, 
    loading,
    loginWithGoogle 
  } = useAuth();

  // Login programmatico
  const handleLogin = async () => {
    const result = await login(email, password);
    if (result.success) {
      // Login riuscito
    } else {
      // Gestisci errore: result.error
    }
  };
}
```

#### Protezione Route
```tsx
import { ProtectedRoute } from '@/components/common/ProtectedRoute';

function SecurePage() {
  return (
    <ProtectedRoute requireEmailVerification={true}>
      <h1>Contenuto protetto</h1>
    </ProtectedRoute>
  );
}
```

#### Chiamate API Autenticate
```tsx
import { useApi } from '@/lib/api';

function DataComponent() {
  const { apiCall } = useApi();

  const fetchData = async () => {
    try {
      const response = await apiCall('/data/endpoint');
      const data = await response.json();
    } catch (error) {
      // Gestione errore
    }
  };
}
```

### 4. Google OAuth Setup

Il login Google funziona reindirizzando a:
```
GET /api/v1/auth/google
```

Il callback viene gestito automaticamente da:
```
/auth/google/callback
```

## 🔄 Flusso di Autenticazione

### Login Standard
1. Utente inserisce credenziali
2. Frontend chiama API `/auth/login` con deviceId
3. Backend restituisce { token, refreshToken, sessionId, user }
4. Frontend salva tutto in localStorage + cookie
5. Redirect alla dashboard

### Google OAuth
1. Utente clicca "Login con Google"
2. Redirect a `/api/v1/auth/google`
3. Google OAuth flow
4. Callback a `/api/v1/auth/google/callback`
5. Backend gestisce sessione e redirect a `/auth/google/callback`
6. Frontend elabora risultato e redirect

### Refresh Token
1. Ad ogni API call, controlla scadenza token
2. Se scaduto, chiama `/auth/refresh`
3. Aggiorna token localStorage
4. Riprova API call originale
5. Se refresh fallisce, logout automatico

## 🛡️ Sicurezza

- **HTTPS required** in produzione
- **Secure cookies** per refresh token
- **Device fingerprinting** per sessioni uniche
- **Auto-logout** su errori di autenticazione
- **Token rotation** con refresh automatico

## 📋 TODO / Miglioramenti

- [ ] Email verification flow
- [ ] Password reset functionality
- [ ] Remember me option
- [ ] Multi-factor authentication
- [ ] Session management dashboard
- [ ] Social login (GitHub, LinkedIn)
- [ ] Biometric authentication

## 🐛 Debug

### Problemi Comuni

**Token non aggiornato dopo refresh:**
```tsx
// Assicurati che il context sia aggiornato
const { token } = useAuth();
console.log('Current token:', token);
```

**Google OAuth non funziona:**
- Verifica GOOGLE_CLIENT_ID in .env
- Controlla URL callback configurato in Google Console
- Verifica che l'API backend sia raggiungibile

**Refresh loop infinito:**
- Controlla che la data di scadenza del token sia corretta
- Verifica che il refresh token sia valido

### Logging
```tsx
// Abilita debug in auth-context.tsx
console.log('Auth state:', { user, token, loading });
```

## 🔗 Integrazione Backend

Assicurati che il backend abbia:
- ✅ CORS configurato per il frontend
- ✅ Cookie parser middleware
- ✅ Gestione deviceId negli header
- ✅ Refresh token in httpOnly cookies
