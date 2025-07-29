import { Strategy as JwtStrategy } from 'passport-jwt'


import { ExtractJwt } from 'passport-jwt';
import { prisma } from '@config/db'
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || 'secret',
};
export const jwtStrategy = new JwtStrategy(opts, async (jwtPayload, done) => {
    console.log(jwtPayload);
    
    try {
        const user = await prisma.users.findUnique({
            where: { id: jwtPayload.userId },
        });
        return done(null, user);
    } catch (error) {
        return done(error, false);
        
    }
});