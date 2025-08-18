import { Router } from 'express';
/* import { auth } from '@modules/auth/v1/auth.middleware';
 */import { getAllHR, getHRById, createHR, updateHR, deleteHR } from './hr.controller';

const router = Router();

/* router.use(auth); */

router.get('/', getAllHR);
router.get('/:id', getHRById);
router.post('/', createHR);
router.put('/:id', updateHR);
router.delete('/:id', deleteHR);

export default router;
