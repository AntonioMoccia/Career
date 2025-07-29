import { prisma } from "@config/db";
import { Companies } from '@types';


class CompanyService {
    async getAll() {
        try {
            await prisma.companies.findMany();
        } catch (error) {
           throw new Error('Error fetching companies'); 
        }
    }  
    private static instance: CompanyService;
    
    private constructor() {}

    static getInstance(): CompanyService {
        if (!CompanyService.instance) {
            CompanyService.instance = new CompanyService();
        }
        return CompanyService.instance;
    }
    
    async create(data: Omit<Companies, 'id' | 'createdAt'>) {
    return prisma.companies.create({
      data
    });
  }

  async getById(id: string) {
    return prisma.companies.findUnique({
      where: { id }
    });
  }

  async update(id: string, data: Partial<Omit<Companies, 'id' | 'createdAt'>>) {
    return prisma.companies.update({
      where: { id },
      data
    });
  }

  async delete(id: string) {
    return prisma.companies.delete({
      where: { id }
    });
  }

}
export default CompanyService