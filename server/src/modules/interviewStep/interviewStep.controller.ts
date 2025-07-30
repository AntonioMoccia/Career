import { Request, Response } from 'express';
import { getAllInterviewStepsService, getInterviewStepByIdService, createInterviewStepService, updateInterviewStepService, deleteInterviewStepService } from './interviewStep.service';

export const getAllInterviewSteps = async (req: Request, res: Response) => {
  try {
    const steps = await getAllInterviewStepsService();
    res.status(200).json(steps);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching interview steps' });
  }
};

export const getInterviewStepById = async (req: Request, res: Response) => {
  try {
    const step = await getInterviewStepByIdService(req.params.id);
    if (!step) return res.status(404).json({ message: 'Interview step not found' });
    res.status(200).json(step);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching interview step' });
  }
};

export const createInterviewStep = async (req: Request, res: Response) => {
  try {
    const step = await createInterviewStepService(req.body);
    res.status(201).json(step);
  } catch (error) {
    res.status(500).json({ message: 'Error creating interview step' });
  }
};

export const updateInterviewStep = async (req: Request, res: Response) => {
  try {
    const step = await updateInterviewStepService(req.params.id, req.body);
    res.status(200).json(step);
  } catch (error) {
    res.status(500).json({ message: 'Error updating interview step' });
  }
};

export const deleteInterviewStep = async (req: Request, res: Response) => {
  try {
    await deleteInterviewStepService(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting interview step' });
  }
};
