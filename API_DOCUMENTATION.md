# API Documentation - Career Flow

## Base URL
```
http://localhost:5001/api/v1
```

## Authentication
La maggior parte degli endpoint richiede autenticazione. Usa il token JWT ricevuto dal login nell'header `Authorization`:

```
Authorization: Bearer <your-jwt-token>
```

I refresh token sono gestiti tramite cookie HTTP-only per sicurezza.

---

## 🔐 Authentication Endpoints

### POST `/auth/register`
Registra un nuovo utente.

**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "username": "Nome Utente",
  "deviceId": "optional-device-uuid"
}
```

**Response (200):**
```json
{
  "id": "user_id",
  "name": "Nome Utente",
  "email": "user@example.com",
  "emailVerified": false,
  "emailVerifiedData": null,
  "image": null,
  "phone": null,
  "linkedin": null
}
```

**Errors:**
- `400`: "User already exists" | "Invalid input"

---

### POST `/auth/login`
Autentica un utente esistente.

**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "deviceId": "optional-device-uuid"
}
```

**Response (200):**
```json
{
  "user": {
    "id": "user_id",
    "name": "Nome Utente",
    "email": "user@example.com",
    "emailVerified": true,
    "image": null,
    "phone": null,
    "linkedin": null
  },
  "token": "jwt_access_token"
}
```

**Headers Set:**
- `Set-Cookie`: refreshToken (HttpOnly, 7 giorni)

**Errors:**
- `400`: "Invalid credentials" | "Email e password sono obbligatori"
- `403`: "Email non verificata"

---

### POST `/auth/refresh`
Rinnova il token di accesso usando il refresh token.

**Headers:**
- Cookie: refreshToken (automatico)

**Response (200):**
```json
{
  "token": "new_jwt_access_token",
  "user": {
    "id": "user_id",
    "name": "Nome Utente",
    "email": "user@example.com",
    "emailVerified": true
  }
}
```

**Errors:**
- `401`: "Refresh token mancante o non valido"

---

### GET `/auth/google`
Inizia il flusso di autenticazione con Google OAuth.

**Response:** Redirect all'authorization server di Google

---

### GET `/auth/google/callback`
Callback per Google OAuth (gestito automaticamente).

**Response:** Redirect al client con parametri di successo/errore

---

## 🏢 Companies Endpoints
**🔒 Richiede autenticazione**

### GET `/companies`
Ottieni tutte le aziende.

**Response (200):**
```json
[
  {
    "id": "company_id",
    "name": "Nome Azienda",
    "location": "Milano, Italia",
    "website": "https://example.com",
    "industry": "Technology",
    "size": "50-100",
    "logo": "https://example.com/logo.png",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

---

### GET `/companies/:id`
Ottieni una specifica azienda per ID.

**Parameters:**
- `id`: ID dell'azienda

**Response (200):**
```json
{
  "id": "company_id",
  "name": "Nome Azienda",
  "location": "Milano, Italia",
  "website": "https://example.com",
  "industry": "Technology",
  "size": "50-100",
  "logo": "https://example.com/logo.png",
  "jobs": [],
  "contacts": [],
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

**Errors:**
- `404`: "Company not found"

---

### POST `/companies`
Crea una nuova azienda.

**Body:**
```json
{
  "name": "Nome Azienda",
  "location": "Milano, Italia",
  "website": "https://example.com",
  "industry": "Technology",
  "size": "50-100",
  "logo": "https://example.com/logo.png"
}
```

**Response (201):**
```json
{
  "id": "new_company_id",
  "name": "Nome Azienda",
  "location": "Milano, Italia",
  "website": "https://example.com",
  "industry": "Technology",
  "size": "50-100",
  "logo": "https://example.com/logo.png",
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

---

### PUT `/companies/:id`
Aggiorna un'azienda esistente.

**Parameters:**
- `id`: ID dell'azienda

**Body:** (tutti i campi sono opzionali)
```json
{
  "name": "Nome Aggiornato",
  "location": "Roma, Italia",
  "website": "https://newexample.com",
  "industry": "Fintech",
  "size": "100-200",
  "logo": "https://newexample.com/logo.png"
}
```

**Response (200):** Azienda aggiornata

---

### DELETE `/companies/:id`
Elimina un'azienda.

**Parameters:**
- `id`: ID dell'azienda

**Response (200):**
```json
{
  "message": "Company deleted successfully"
}
```

---

## 👥 HR Contacts Endpoints
**🔒 Richiede autenticazione**

### GET `/hr`
Ottieni tutti i contatti HR.

**Response (200):**
```json
[
  {
    "id": "hr_id",
    "companyId": "company_id",
    "name": "Mario Rossi",
    "email": "mario.rossi@company.com",
    "phone": "+39 123 456 7890",
    "role": "HR Manager",
    "notes": "Molto disponibile",
    "linkedin": "https://linkedin.com/in/mariorossi",
    "company": {
      "name": "Nome Azienda"
    },
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

---

### GET `/hr/:id`
Ottieni un specifico contatto HR per ID.

**Response (200):** Dettagli completi del contatto HR

---

### POST `/hr`
Crea un nuovo contatto HR.

**Body:**
```json
{
  "companyId": "company_id",
  "name": "Mario Rossi",
  "email": "mario.rossi@company.com",
  "phone": "+39 123 456 7890",
  "role": "HR Manager",
  "notes": "Molto disponibile",
  "linkedin": "https://linkedin.com/in/mariorossi"
}
```

---

### PUT `/hr/:id`
Aggiorna un contatto HR esistente.

---

### DELETE `/hr/:id`
Elimina un contatto HR.

---

## 📋 Job Applications Endpoints
**🔒 Richiede autenticazione**

### GET `/jobApplication`
Ottieni tutte le candidature.

**Response (200):**
```json
[
  {
    "id": "job_id",
    "companyId": "company_id",
    "position": "Senior Frontend Developer",
    "description": "Sviluppo applicazioni React...",
    "status": "IN_PROGRESS",
    "notes": "Candidatura promettente",
    "appliedAt": "2024-01-01T00:00:00.000Z",
    "source": "LinkedIn",
    "cvFile": "https://example.com/cv.pdf",
    "coverLetterFile": "https://example.com/cover.pdf",
    "company": {
      "name": "Nome Azienda"
    },
    "steps": [],
    "hrContacts": [],
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

---

### GET `/jobApplication/:id`
Ottieni una specifica candidatura per ID.

---

### POST `/jobApplication`
Crea una nuova candidatura.

**Body:**
```json
{
  "companyId": "company_id",
  "position": "Senior Frontend Developer",
  "description": "Sviluppo applicazioni React...",
  "status": "APPLIED",
  "notes": "Prima candidatura",
  "appliedAt": "2024-01-01T00:00:00.000Z",
  "source": "LinkedIn",
  "cvFile": "https://example.com/cv.pdf",
  "coverLetterFile": "https://example.com/cover.pdf",
  "userId": "user_id"
}
```

**Status Enum:**
- `APPLIED`: Candidatura inviata
- `IN_PROGRESS`: Processo di selezione in corso
- `OFFER`: Offerta ricevuta
- `REJECTED`: Candidatura rifiutata

---

### PUT `/jobApplication/:id`
Aggiorna una candidatura esistente.

---

### DELETE `/jobApplication/:id`
Elimina una candidatura.

---

## 🎯 Interview Steps Endpoints
**🔒 Richiede autenticazione**

### GET `/interviewStep`
Ottieni tutti gli step di colloquio.

**Response (200):**
```json
[
  {
    "id": "step_id",
    "jobId": "job_id",
    "title": "Technical Interview",
    "date": "2024-01-15T10:00:00.000Z",
    "status": "SCHEDULED",
    "notes": "Preparare algoritmi",
    "location": "Google Meet",
    "interviewer": "John Smith",
    "feedback": "",
    "reminderAt": "2024-01-14T10:00:00.000Z",
    "hrContactId": "hr_id",
    "job": {
      "position": "Senior Frontend Developer",
      "company": {
        "name": "Nome Azienda"
      }
    },
    "hrContact": {
      "name": "Mario Rossi"
    }
  }
]
```

---

### GET `/interviewStep/:id`
Ottieni un specifico step di colloquio per ID.

---

### POST `/interviewStep`
Crea un nuovo step di colloquio.

**Body:**
```json
{
  "jobId": "job_id",
  "title": "Technical Interview",
  "date": "2024-01-15T10:00:00.000Z",
  "status": "SCHEDULED",
  "notes": "Preparare algoritmi",
  "location": "Google Meet",
  "interviewer": "John Smith",
  "feedback": "",
  "reminderAt": "2024-01-14T10:00:00.000Z",
  "hrContactId": "hr_id"
}
```

**Status Enum:**
- `SCHEDULED`: Step pianificato
- `COMPLETED`: Step completato
- `CANCELED`: Step annullato

---

### PUT `/interviewStep/:id`
Aggiorna uno step di colloquio esistente.

---

### DELETE `/interviewStep/:id`
Elimina uno step di colloquio.

---

## 🔧 General Information

### Content-Type
Tutti gli endpoint che ricevono dati nel body richiedono:
```
Content-Type: application/json
```

### CORS
Il server accetta richieste da:
- `http://localhost:3000` (development)
- Configurabile tramite variabile `CORS_ORIGIN`

### Cookies
- `refreshToken`: Cookie HTTP-only per il refresh dei token (7 giorni)
- `SameSite=Strict` per sicurezza
- `Secure=true` in produzione

### Error Responses
Formato standard degli errori:
```json
{
  "error": "Messaggio di errore descrittivo"
}
```

### Status Codes
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Server Error

---

## 🚀 Getting Started

1. **Registrazione**: Usa `/auth/register` per creare un account
2. **Login**: Usa `/auth/login` per ottenere il token JWT
3. **Autenticazione**: Includi il token nell'header `Authorization: Bearer <token>`
4. **Refresh**: Usa `/auth/refresh` per rinnovare il token quando scade

### Esempio di flusso client:

```javascript
// 1. Login
const loginResponse = await fetch('/api/v1/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include', // Per i cookie
  body: JSON.stringify({
    email: 'user@example.com',
    password: 'password123',
    deviceId: 'device-uuid'
  })
});

const { token, user } = await loginResponse.json();

// 2. Chiamate autenticate
const companiesResponse = await fetch('/api/v1/companies', {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  },
  credentials: 'include'
});

// 3. Refresh token quando necessario
const refreshResponse = await fetch('/api/v1/auth/refresh', {
  method: 'POST',
  credentials: 'include' // Cookie refreshToken automatico
});
```

---

## 📝 Notes for Frontend Developers

### Device ID
- Genera un UUID unico per dispositivo e salvalo nel localStorage
- Invia il `deviceId` nelle richieste di login/registrazione
- Usato per gestire sessioni multiple per utente

### Token Management
- I token JWT hanno durata limitata (15 minuti)
- Implementa un sistema di refresh automatico
- I refresh token durano 7 giorni e sono in cookie HTTP-only

### Google OAuth
- Reindirizza a `/auth/google` per iniziare il flusso
- Il callback gestirà automaticamente il redirect al client
- Gestisci i parametri di successo/errore nel callback

### State Management
- Salva user e token nel localStorage per persistenza
- Implementa un context React per lo stato di autenticazione
- Gestisci gli stati di loading durante le chiamate API

Buona programmazione! 🚀
