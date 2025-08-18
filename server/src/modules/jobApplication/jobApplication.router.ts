import { Router } from 'express';
/* import { auth } from '@modules/auth/v1/auth.middleware'; */
import { getAllJobApplications, getJobApplicationById, createJobApplication, updateJobApplication, deleteJobApplication } from './jobApplication.controller';

const router = Router();

/* router.use(auth);
 */
router.get('/', getAllJobApplications);
router.get('/:id', getJobApplicationById);
router.post('/', createJobApplication);
router.put('/:id', updateJobApplication);
router.delete('/:id', deleteJobApplication);

export default router;
