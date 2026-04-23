import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ActorDto } from './dto/actor.dto';
import { Actor } from '@prisma/client';
// import { ActorEntity } from './entities/actor.entity';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

@Injectable()
export class ActorService {

    constructor(
        private readonly prismaService: PrismaService,
    ) {}
    async create(dto: ActorDto): Promise<Actor> {
        const { name } = dto;
        const actor = await this.prismaService.actor.create({
            data: {
                name: 'Brad Pitt',
            },
        });
        return actor;
    }


    // constructor(
    //     @InjectRepository(ActorEntity) private readonly actorRepo: Repository<ActorEntity>,
    // ) {}
    // async create(dto: ActorDto):
    //     Promise<ActorEntity> {
    //     const { name } = dto;
    //     const actor = this.actorRepo.create({
    //         name,
    //     });
    //     return await this.actorRepo.save(actor);
    // }
}
