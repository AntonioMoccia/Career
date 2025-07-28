import { Application } from "express";
import passport from "passport";
import {jwtStrategy} from './jwt/jwt.strategy';
const initPassport = (app:Application) => {
    app.use(passport.initialize());
    passport.use(jwtStrategy);

}

export {
    initPassport
}