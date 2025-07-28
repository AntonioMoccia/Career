import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';

import { prisma } from '@config/db';
import { generateToken } from '@modules/auth/v1/jwt/utils';

async function register(req: Request, res: Response, next: NextFunction) {
    const { email, password, name } = req.body;
    console.log(req.body)
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const existing = await prisma.authProvider.findUnique({
            where: {
                provider_providerUserId: {
                    provider: 'local',
                    providerUserId: email,
                },
            },
        });

        if (existing) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                name,
                authProviders: {
                    create: {
                        provider: 'local',
                        providerUserId: email,
                        hashedPassword,
                    },
                },
            },
        });

        const token = generateToken(user.id);

        res.status(201).json({ token, user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Registration failed' });
    }
}

async function login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const provider = await prisma.authProvider.findUnique({
            where: {
                provider_providerUserId: {
                    provider: 'local',
                    providerUserId: email,
                },
            },
            include: { user: true },
        });

        if (!provider || !provider.hashedPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const valid = await bcrypt.compare(password, provider.hashedPassword);
        if (!valid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = generateToken(provider.providerUserId);

        res.json({ token, user: provider.user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Login failed' });
    }
}


export {
    register,
    login
}
