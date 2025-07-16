import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CulturalObjectModule } from './cultural-object/cultural-object.module';

@Module({
  imports: [CulturalObjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
