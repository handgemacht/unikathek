import { Injectable } from '@nestjs/common';
import { db } from '@repo/database';
import type { CulturalObject } from '@prisma/client';

@Injectable()
export class CulturalObjectService {
  async findAll(): Promise<CulturalObject[]> {
    return db.culturalObject.findMany();
  }

  async findOne(id: string): Promise<CulturalObject | null> {
    return db.culturalObject.findUnique({ where: { id } });
  }

  async create(data: any): Promise<CulturalObject | null> {
    return db.culturalObject.create({ data });
  }

  async update(id: string, data: any): Promise<CulturalObject | null> {
    return db.culturalObject.update({ where: { id }, data });
  }

  async remove(id: string): Promise<CulturalObject | null> {
    return db.culturalObject.delete({ where: { id } });
  }
}
