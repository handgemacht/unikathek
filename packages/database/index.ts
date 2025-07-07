import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();

export * from '@prisma/client'; // <- Exportiert alle Typen, z.B. CulturalObject