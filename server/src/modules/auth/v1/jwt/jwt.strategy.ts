import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import {prisma} from '@config/db';

export function setupJwtStrategy() {
    passport.use(new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET as string,
    }, async (payload, done) => {
        try {
            const user = await prisma.user.findUnique({ where: { id: payload.userId } });
            if (!user) return done(null, false);

            // Controllo sessione attiva per userId+deviceId
            if (!payload.deviceId) return done(null, false);
            const session = await prisma.session.findFirst({
                where: {
                    userId: payload.userId,
                    deviceId: payload.deviceId,
                    expires: { gt: new Date() },
                },
            });
            if (!session) return done(null, false);

            // Aggiungi il deviceId dal payload all'oggetto user
            const userWithDevice = { ...user, deviceId: payload.deviceId };
            return done(null, userWithDevice);
        } catch (err) {
            return done(err, false);
        }
    }));
}
