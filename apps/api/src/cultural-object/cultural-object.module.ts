import { Module } from '@nestjs/common';
import { CulturalObjectController } from './cultural-object.controller';
import { CulturalObjectService } from './cultural-object.service';

@Module({
  controllers: [CulturalObjectController],
  providers: [CulturalObjectService],
  exports: [CulturalObjectService],
})
export class CulturalObjectModule {}