import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {prisma} from '@config/db'; // Assuming prisma is exported from here




export async function register(email: string, password: string, username: string) {
    let user = await prisma.user.findUnique({ where: { email } });
    if (user) {
        // L'utente esiste già (magari da Google), aggiungi solo l'account 'credentials'
        const existingAccount = await prisma.account.findUnique({
            where: {
                provider_providerAccountId: {
                    provider: 'credentials',
                    providerAccountId: email,
                },
            },
        });
        if (existingAccount) throw new Error('User already exists');
        await prisma.account.create({
            data: {
                type: 'credentials',
                provider: 'credentials',
                providerAccountId: email,
                hashedPassword: await bcrypt.hash(password, 10),
                userId: user.id,
            },
        });
        return user;
    } else {
        // Crea nuovo utente e account
        user = await prisma.user.create({
            data: {
                email,
                name: username,
                accounts: {
                    create: {
                        type: 'credentials',
                        provider: 'credentials',
                        providerAccountId: email,
                        hashedPassword: await bcrypt.hash(password, 10),
                    },
                },
            },
        });
        return user;
    }
}

export async function login(email: string, password: string) {
    const account = await prisma.account.findUnique({
        where: {
            provider_providerAccountId: {
                provider: 'credentials',
                providerAccountId: email,
            },
        },
        include: { user: true },
    });

    if (!account || !account.hashedPassword) throw new Error('Invalid credentials');
    const valid = await bcrypt.compare(password, account.hashedPassword);
    if (!valid) throw new Error('Invalid credentials');

    const token = generateToken({ userId: account.user.id, email: account.user.email, name: account.user.name });
    const refreshToken = generateRefreshToken(account.user.id);

    await prisma.session.create({
        data: {
            sessionToken: refreshToken,
            userId: account.user.id,
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
    });

    return { token, refreshToken, user: account.user };
}

export async function refreshToken(refreshToken: string) {
    const session = await prisma.session.findUnique({
        where: { sessionToken: refreshToken },
    });
    if (!session) throw new Error('Invalid refresh token');

    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string) as any;
    if (!decoded || !decoded.userId) throw new Error('Invalid refresh token');

    const newToken = generateToken({ userId: decoded.userId });
    return newToken;
}

export async function findOrCreateGoogleUser(profile: any) {
    
    let account = await prisma.account.findUnique({
        where: {
            provider_providerAccountId: {
                provider: 'google',
                providerAccountId: profile.id,
            },
        },
        include: { user: true },
    });
    if (account) return account.user;

    const user = await prisma.user.create({
        data: {
            email: profile.emails[0].value,
            name: profile.displayName,
            image: profile.photos?.[0]?.value,
            accounts: {
                create: {
                    type: 'oauth',
                    provider: 'google',
                    providerAccountId: profile.id,
                },
            },
        },
    });
    return user;
}

export function generateToken(payload: any) {
    return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '15m' });
}

export function generateRefreshToken(userId: string) {
    return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET as string, { expiresIn: '7d' });
}
