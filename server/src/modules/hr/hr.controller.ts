import { Request, Response } from 'express';
import { getAllHRService, getHRByIdService, createHRService, updateHRService, deleteHRService } from './hr.service';

export const getAllHR = async (req: Request, res: Response) => {
  try {
    const hrs = await getAllHRService();
    res.status(200).json(hrs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching HR contacts' });
  }
};

export const getHRById = async (req: Request, res: Response) => {
  try {
    const hr = await getHRByIdService(req.params.id);
    if (!hr) return res.status(404).json({ message: 'HR contact not found' });
    res.status(200).json(hr);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching HR contact' });
  }
};

export const createHR = async (req: Request, res: Response) => {
  try {
    const hr = await createHRService(req.body);
    res.status(201).json(hr);
  } catch (error) {
    res.status(500).json({ message: 'Error creating HR contact' });
  }
};

export const updateHR = async (req: Request, res: Response) => {
  try {
    const hr = await updateHRService(req.params.id, req.body);
    res.status(200).json(hr);
  } catch (error) {
    res.status(500).json({ message: 'Error updating HR contact' });
  }
};

export const deleteHR = async (req: Request, res: Response) => {
  try {
    await deleteHRService(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting HR contact' });
  }
};
