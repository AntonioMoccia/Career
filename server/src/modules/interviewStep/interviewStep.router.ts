import { Router } from 'express';
import { auth } from '@modules/auth/v1/auth.middleware';
import { getAllInterviewSteps, getInterviewStepById, createInterviewStep, updateInterviewStep, deleteInterviewStep } from './interviewStep.controller';

const router = Router();

router.use(auth);

router.get('/', getAllInterviewSteps);
router.get('/:id', getInterviewStepById);
router.post('/', createInterviewStep);
router.put('/:id', updateInterviewStep);
router.delete('/:id', deleteInterviewStep);

export default router;
