import { auth } from '@modules/auth/v1/auth.middleware';
import { Router } from 'express';
import { getAllCompanies, getCompanyById, createCompany, updateCompany, deleteCompany } from './company.controller';

const router = Router();

// Apply authentication middleware to all routes in this module
// This will ensure that all company routes are protected
// If you want to protect only specific routes, you can apply the middleware selectively
// For example, you can comment out the next line to disable auth for all routes
// router.use(auth);
// If you want to apply auth only to specific routes, you can do it like this:
// router.get('/', auth, getAllCompanies);

router.use(auth);
// GET all companies
router.get('/', getAllCompanies);

// GET company by id
router.get('/:id', getCompanyById);

// CREATE company
router.post('/', createCompany);

// UPDATE company
router.put('/:id', updateCompany);

// DELETE company
router.delete('/:id', deleteCompany);

export default router;