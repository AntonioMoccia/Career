import CompanyService from '@modules/company/company.service';
import { Request, Response } from 'express';


const getAllCompanies = async (req:Request, res:Response) => {
    try {
        const companies = await CompanyService.getInstance().getAll();
        res.status(200).json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching companies' });
    }
}

export {
    getAllCompanies
}