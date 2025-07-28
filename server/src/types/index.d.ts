export { AuthProvider, User } from '@prisma/client'

export type TokenPayload = {
    userId: string;
    email?: string;
    name?: string;
    provider?: string;
    providerUserId?: string;
    iat?: number;
    exp?: number;
};