import { prisma } from '@config/db';
import { HRContacts } from '@types';

export async function getAllHRService() {
  return prisma.hRContacts.findMany();
}

export async function getHRByIdService(id: string) {
  return prisma.hRContacts.findUnique({ where: { id } });
}

export async function createHRService(data: Omit<HRContacts, 'id' | 'createdAt'>) {
  return prisma.hRContacts.create({ data });
}

export async function updateHRService(id: string, data: Partial<Omit<HRContacts, 'id' | 'createdAt'>>) {
  return prisma.hRContacts.update({ where: { id }, data });
}

export async function deleteHRService(id: string) {
  return prisma.hRContacts.delete({ where: { id } });
}
