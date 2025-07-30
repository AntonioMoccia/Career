import { Request, Response } from 'express';
import {
  getAllCompaniesService,
  createCompanyService,
  getCompanyByIdService,
  updateCompanyService,
  deleteCompanyService
} from './company.service';

export const getAllCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await getAllCompaniesService();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching companies' });
  }
};

export const getCompanyById = async (req: Request, res: Response) => {
  try {
    const company = await getCompanyByIdService(req.params.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching company' });
  }
};

export const createCompany = async (req: Request, res: Response) => {
  try {
    const company = await createCompanyService(req.body);
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ message: 'Error creating company' });
  }
};

export const updateCompany = async (req: Request, res: Response) => {
  try {
    const company = await updateCompanyService(req.params.id, req.body);
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: 'Error updating company' });
  }
};

export const deleteCompany = async (req: Request, res: Response) => {
  try {
    await deleteCompanyService(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting company' });
  }
};