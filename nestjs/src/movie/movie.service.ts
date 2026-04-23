import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { In, Repository } from 'typeorm';
import { MovieDto } from './dto/movie.dto';
import { ActorEntity } from 'src/actor/entities/actor.entity';
import { PosterEntity } from './entities/poster.entity';

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(MovieEntity) private readonly movieRepo: Repository<MovieEntity>,
        @InjectRepository(ActorEntity) private readonly actorRepo: Repository<ActorEntity>,
        @InjectRepository(PosterEntity) private readonly posterRepo: Repository<PosterEntity>,
    ) { }

    async findAll(): Promise<MovieEntity[]> {
        return await this.movieRepo.find({
            where: {
                isPublic: true,
            },
            order: {
                createdAt: 'DESC', //от нового к старому
            },
            select: {
                id: true,
                title: true,
                releaseYear: true,
            },
        });
    }

    async create(dto: MovieDto): Promise<MovieEntity> {
        const { title, releaseYear, actortsIds, imageUrl } = dto;

        const actors = await this.actorRepo.find({
            where: {
                id: In(actortsIds)
            },
        });

        if (!actors || !actors.length) {
            throw new NotFoundException('Один или несколько актеров не найдены');
        }

        let poster: PosterEntity | null = null;
        if (imageUrl) {
            poster = this.posterRepo.create({ url: imageUrl });
            await this.posterRepo.save(poster);

        }
        const movie = this.movieRepo.create({
            title,
            releaseYear,
            actors,
            poster,
        });
        return await this.movieRepo.save(movie);
    }

    async findById(id: string): Promise<MovieEntity> {
        const movie = await this.movieRepo.findOne({
            where: {
                id,
            },
            relations: ['actors', 'reviews']
        });

        if (!movie) throw new NotFoundException('фильм не найден');
        return movie;
    }

    async update(id: string, dto: MovieDto): Promise<boolean> {
        const movie = await this.findById(id);

        Object.assign(movie, dto);

        await this.movieRepo.save(movie);
        return true;
    }

    async delete(id: string): Promise<string> {
        const movie = await this.findById(id);
        await this.movieRepo.remove(movie);
        return movie.id;
    }
}
