import { Body, Controller, Post } from '@nestjs/common';
import { PrismaService } from 'src/databases/prisma.service';
import { randomUUID } from "node:crypto";
import { CreateFirstProjectBody } from 'src/dtos/create-firstProject-body';
import { FirstProjectRepository } from 'src/repositories/first-project-repository';

@Controller()
export class AppPrismaController {
  constructor(private firstProjectRepository: FirstProjectRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateFirstProjectBody) {
    const {name, 'function': memberFunction} = body

    await this.firstProjectRepository.create(name, memberFunction)
  }
}
