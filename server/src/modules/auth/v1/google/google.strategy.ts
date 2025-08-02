import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import passport from 'passport';
import { findOrCreateGoogleUser } from '@modules/auth/v1/auth.service' // Assuming this function is defined in auth.service

export function setupGoogleStrategy() {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        callbackURL: process.env.GOOGLE_CALLBACK_URL! as string,
    }, async (accessToken:string, refreshToken:string, profile:any, done:any) => {

        

        try {
            const user = await findOrCreateGoogleUser(profile);
            return done(null, user);
        } catch (err) {
            return done(err, false);
        }
    }));
}
