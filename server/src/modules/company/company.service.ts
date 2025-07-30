import { prisma } from "@config/db";
import { Companies } from '@types';

export async function getAllCompaniesService() {
  try {
    return await prisma.companies.findMany();
  } catch (error) {
    throw new Error('Error fetching companies');
  }
}

export async function createCompanyService(data: Omit<Companies, 'id' | 'createdAt'>) {
  return prisma.companies.create({ data });
}

export async function getCompanyByIdService(id: string) {
  return prisma.companies.findUnique({ where: { id } });
}

export async function updateCompanyService(id: string, data: Partial<Omit<Companies, 'id' | 'createdAt'>>) {
  return prisma.companies.update({ where: { id }, data });
}

export async function deleteCompanyService(id: string) {
  return prisma.companies.delete({ where: { id } });
}