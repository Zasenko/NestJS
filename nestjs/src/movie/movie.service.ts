import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { MovieDto } from './dto/movie.dto';

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(MovieEntity) private readonly movieRepo: Repository<MovieEntity>,
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
        const movie = this.movieRepo.create(dto);
        return await this.movieRepo.save(movie);
    }

    async findById(id: string): Promise<MovieEntity> {
        const movie = await this.movieRepo.findOne({
            where: {
                id,
            },
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
