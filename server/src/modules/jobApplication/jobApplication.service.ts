import { prisma } from '@config/db';
import { JobApplications } from '@types';

export async function getAllJobApplicationsService() {
  return prisma.jobApplications.findMany();
}

export async function getJobApplicationByIdService(id: string) {
  return prisma.jobApplications.findUnique({ where: { id } });
}

export async function createJobApplicationService(data: Omit<JobApplications, 'id' | 'createdAt'>) {
  return prisma.jobApplications.create({ data });
}

export async function updateJobApplicationService(id: string, data: Partial<Omit<JobApplications, 'id' | 'createdAt'>>) {
  return prisma.jobApplications.update({ where: { id }, data });
}

export async function deleteJobApplicationService(id: string) {
  return prisma.jobApplications.delete({ where: { id } });
}
