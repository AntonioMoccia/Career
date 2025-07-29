import { Router } from 'express';

import { login, refresh, register } from '@modules/auth/v1/auth.controller';


const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh', refresh);

//google auth
//linkedin auth

export default router;
