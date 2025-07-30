import { Router } from 'express';
import passport from 'passport';
import * as controller from './auth.controller';

const router = Router();

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/refresh', controller.refresh);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false }), controller.googleCallback);

export default router;
