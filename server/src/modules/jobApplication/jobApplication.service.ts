import { prisma } from '@config/db';
import { JobApplications } from '@types';

export async function getAllJobApplicationsService() {
  return prisma.jobApplications.findMany();
}

export async function getJobApplicationByIdService(id: string) {
  return prisma.jobApplications.findUnique({ where: { id } });
}

export async function createJobApplicationService(data: Omit<JobApplications, 'id' | 'createdAt'>) {
  try {
    return await prisma.jobApplications.create({ data });
  } catch (error) {
    console.error('Error creating job application:', error);
    throw new Error('Error creating job application');
  }
}

export async function updateJobApplicationService(id: string, data: Partial<Omit<JobApplications, 'id' | 'createdAt'>>) {
  try {
    return await prisma.jobApplications.update({ where: { id }, data });
  } catch (error) {
    console.error('Error updating job application:', error);
    throw new Error('Error updating job application');
  }
}

export async function deleteJobApplicationService(id: string) {
  try {
    return await prisma.jobApplications.delete({ where: { id } });
  } catch (error) {
    console.error('Error deleting job application:', error);
    throw new Error('Error deleting job application');
  }
}
