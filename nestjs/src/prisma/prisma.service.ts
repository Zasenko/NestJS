import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {
    
    // constructor() {
    //     super({
    //         datasourceUrl: process.env.POSTGRES_URI, // 🔥 REQUIRED in Prisma 7
    //     });
    // }

    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
}
