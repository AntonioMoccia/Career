import { Router } from 'express';

import { login, register } from '@modules/auth/v1/auth.controller';


const router = Router();

router.post('/register', register);

router.post('/login', login);

export default router;
