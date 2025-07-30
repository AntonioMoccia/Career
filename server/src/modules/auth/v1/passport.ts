import passport from 'passport';
import { setupJwtStrategy } from './jwt/jwt.strategy';
import { setupGoogleStrategy } from './google/google.strategy';
import { Application } from 'express';

export function initPassport(app:Application) {
    
    
    app.use(passport.initialize());
    setupJwtStrategy();
    setupGoogleStrategy();
    return passport;
}
