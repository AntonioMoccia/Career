import passport from "passport";

import { setupGoogleStrategy } from "./google/google.strategy";
import { Application } from "express";

export function initPassport(app: Application) {
  app.use(passport.initialize());
  
  setupGoogleStrategy();
  return passport;
}
