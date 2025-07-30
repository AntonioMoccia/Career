export { AuthProviders, Users, Companies, HRContacts, JobApplications, InterviewSteps } from '@prisma/client'

export type TokenPayload = {
    userId: string;
    email?: string;
    username: string;
    provider: string;
};