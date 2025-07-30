import { prisma } from '@config/db';
import { InterviewSteps } from '@types';

export async function getAllInterviewStepsService() {
  return prisma.interviewSteps.findMany();
}

export async function getInterviewStepByIdService(id: string) {
  return prisma.interviewSteps.findUnique({ where: { id } });
}

export async function createInterviewStepService(data: Omit<InterviewSteps, 'id'>) {
  return prisma.interviewSteps.create({ data });
}

export async function updateInterviewStepService(id: string, data: Partial<Omit<InterviewSteps, 'id'>>) {
  return prisma.interviewSteps.update({ where: { id }, data });
}

export async function deleteInterviewStepService(id: string) {
  return prisma.interviewSteps.delete({ where: { id } });
}
