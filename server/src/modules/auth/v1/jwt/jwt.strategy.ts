import { Strategy as JwtStrategy } from 'passport-jwt'


import { ExtractJwt } from 'passport-jwt';
import { prisma } from '@config/db'
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || 'secret',
};
export const jwtStrategy = new JwtStrategy(opts, async (jwtPayload, done) => {

    try {
        const user = await prisma.user.findUnique({
            where: { id: jwtPayload.id },
        });
        return done(null, user);
    } catch (error) {
        return done(error, false);
        
    }
});