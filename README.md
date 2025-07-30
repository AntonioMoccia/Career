
# Career server

## Possibili Miglioramenti e Best Practice

1. **Validazione dei dati**
   - Usa librerie come Joi, Zod o express-validator per validare i dati in ingresso nelle request, soprattutto per le POST/PUT.

2. **Gestione degli errori centralizzata**
   - Implementa un middleware di error handling per risposte uniformi e logging degli errori.

3. **Gestione delle relazioni**
   - Aggiungi endpoint per collegare HR, interviewStep e jobApplication tra loro (es: aggiungere uno step a una candidatura).

4. **Autorizzazione**
   - Oltre all’autenticazione, implementa controlli sui permessi (es: solo l’utente proprietario può modificare le sue candidature).

5. **Paginazione e filtri**
   - Per le GET (soprattutto liste), aggiungi supporto a paginazione, ricerca e filtri.

6. **Documentazione API**
   - Integra Swagger/OpenAPI per documentare e testare facilmente le API.

7. **Test**
   - Aggiungi test automatici (unitari e/o end-to-end) per controller e service.

8. **Gestione file/allegati**
   - Se vuoi permettere upload di CV o altri documenti, integra una gestione file (es. multer per Express).

9. **Notifiche/Reminder**
   - Implementa invio email o notifiche per reminder di colloqui o cambi di stato.

10. **Rate limiting e sicurezza**
    - Aggiungi rate limiting, helmet e altre best practice di sicurezza per API pubbliche.


## Esempi di body per richieste POST

### Company
```json
{
  "name": "Acme S.p.A.",
  "location": "Milano",
  "website": "https://www.acme.com",
  "industry": "IT",
  "size": "PMI",
  "logo": "https://www.acme.com/logo.png"
}
```

### HR (HRContacts)
```json
{
  "companyId": "id_azienda",
  "name": "Mario Rossi",
  "email": "mario.rossi@acme.com",
  "phone": "+39021234567",
  "role": "Recruiter",
  "notes": "Contatto molto disponibile",
  "linkedin": "https://linkedin.com/in/mariorossi"
}
```

### InterviewStep
```json
{
  "jobId": "id_candidatura",
  "title": "Technical Interview",
  "date": "2025-08-01T10:00:00.000Z",
  "status": "SCHEDULED",
  "notes": "Colloquio tecnico con il team lead",
  "location": "Google Meet",
  "interviewer": "Luca Bianchi",
  "feedback": "",
  "reminderAt": "2025-07-31T10:00:00.000Z",
  "hrContactId": "id_hr"
}
```

### JobApplication
```json
{
  "companyId": "id_azienda",
  "position": "Backend Developer",
  "description": "Sviluppo API Node.js",
  "status": "APPLIED",
  "notes": "Candidatura inviata tramite LinkedIn",
  "appliedAt": "2025-07-30T09:00:00.000Z",
  "source": "LinkedIn",
  "cvFile": "https://mio-cv.com/cv.pdf",
  "coverLetterFile": "https://mio-cv.com/lettera.pdf",
  "userId": "id_utente"
}





Gestire gli stati delle candidature con kanban su desktop