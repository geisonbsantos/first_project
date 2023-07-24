import { PrismaService } from "src/databases/prisma.service";
import { FirstProjectRepository } from "../first-project-repository";
import { randomUUID } from "node:crypto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaFirstProjectRepository implements FirstProjectRepository {
    constructor(private prisma: PrismaService) {

    }
    async create(name: string, memberFunction: string): Promise<void> {
        await this.prisma.firstProject.create({
        data: {
            id: randomUUID(),
            name,
            function: memberFunction,
        },
        })
    }
}