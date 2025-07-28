import { Strategy as JwtStrategy } from 'passport-jwt'


import { ExtractJwt } from 'passport-jwt';
import { prisma } from '@config/db'
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || 'secret',
};
export const jwtStrategy = new JwtStrategy(opts, (jwtPayload, done) => {
    // Find the user in the database using the id from the JWT payload
    prisma.user.findUnique(jwtPayload.id)
        .then(user => {
            return done(null, user);
        })
        .catch(err => {
            return done(err, false);
        });
    done(null, jwtPayload);
});