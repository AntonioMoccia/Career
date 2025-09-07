
export type Company = {
  id: string;
  name: string;
  location: string;
  website: string;
  industry: string;
  size: string;
  logo: string;
  createdAt: string; // ISO date string
};

export type Step = {
  id: string;
  jobId: string;
  title: string;
  date: string; // ISO date string
  status: string;
  notes: string;
  location: string;
  interviewer: string;
  feedback: string;
  reminderAt: string; // ISO date string
  hrContactId: string;
};

export type HrContact = {
  // Definisci i campi reali se disponibili, altrimenti lascia any
  [key: string]: any;
};

export type Application = {
  id: string;
  companyId: string;
  position: string;
  description: string;
  status: string;
  notes: string;
  appliedAt: string; // ISO date string
  source: string;
  cvFile: string;
  coverLetterFile: string;
  userId: string;
  createdAt: string; // ISO date string
  company: Company;
  salary: string;
  hrContacts: HrContact[];
  steps: Step[];
};