import { Router } from 'express';
import passport from 'passport';
import * as controller from './auth.controller';
import { auth } from '@modules/auth/v1/auth.middleware';

const router = Router();

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/refresh', controller.refresh);


router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false }), controller.googleCallback);

router.get('/me', auth,controller.me);

export default router;
