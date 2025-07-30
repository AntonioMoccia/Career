// Funzioni per chiamare le API del backend

export async function fetchWithAuth(url: string, token: string, options: RequestInit = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
}

export async function getCompanies(token: string) {
  const res = await fetchWithAuth('http://localhost:5001/companies', token);
  if (!res.ok) throw new Error('Errore nel recupero aziende');
  return res.json();
}

export async function createCompany(token: string, data: any) {
  const res = await fetchWithAuth('http://localhost:5001/companies', token, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Errore nella creazione azienda');
  return res.json();
}

// Aggiungi funzioni simili per HR, JobApplication, InterviewStep
