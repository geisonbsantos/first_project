import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { PrismaService } from 'src/databases/prisma.service';
import { AppPrismaController } from 'src/controllers/app.prisma.controller';
import { FirstProjectRepository } from 'src/repositories/first-project-repository';
import { PrismaFirstProjectRepository } from 'src/repositories/prisma/prisma-first-project-repository';

@Module({
  imports: [],
  controllers: [AppController, AppPrismaController],
  providers: [
    AppService, PrismaService,
    {
      provide: FirstProjectRepository,
      useClass: PrismaFirstProjectRepository,
    }
  ],
})
export class AppModule {}
