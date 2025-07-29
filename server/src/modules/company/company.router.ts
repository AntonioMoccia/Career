import { auth } from '@modules/auth/v1';
import {Router} from 'express'

const router = Router();

router.use(auth)

router.get('/companies', (req, res) => {
    res.status(200).json({ message: 'Company module is working' });
})

export default router