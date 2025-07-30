import { Request, Response } from 'express';
import { getAllJobApplicationsService, getJobApplicationByIdService, createJobApplicationService, updateJobApplicationService, deleteJobApplicationService } from './jobApplication.service';

export const getAllJobApplications = async (req: Request, res: Response) => {
  try {
    const jobs = await getAllJobApplicationsService();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job applications' });
  }
};

export const getJobApplicationById = async (req: Request, res: Response) => {
  try {
    const job = await getJobApplicationByIdService(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job application not found' });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job application' });
  }
};

export const createJobApplication = async (req: Request, res: Response) => {
  try {
    const job = await createJobApplicationService(req.body);
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job application' });
  }
};

export const updateJobApplication = async (req: Request, res: Response) => {
  try {
    const job = await updateJobApplicationService(req.params.id, req.body);
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error updating job application' });
  }
};

export const deleteJobApplication = async (req: Request, res: Response) => {
  try {
    await deleteJobApplicationService(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting job application' });
  }
};
