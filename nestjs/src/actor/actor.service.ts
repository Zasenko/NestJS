import { Injectable } from '@nestjs/common';
import { ActorEntity } from './entities/actor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActorDto } from './dto/actor.dto';

@Injectable()
export class ActorService {
    constructor(
        @InjectRepository(ActorEntity) private readonly actorRepo: Repository<ActorEntity>,
    ) {}
    async create(dto: ActorDto):
        Promise<ActorEntity> {
        const { name } = dto;
        const actor = this.actorRepo.create({
            name,
        });
        return await this.actorRepo.save(actor);
    }
}
