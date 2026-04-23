import { Module } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorEntity } from './entities/actor.entity';
import { MovieEntity } from 'src/movie/entities/movie.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActorEntity, MovieEntity])
  ],
  controllers: [ActorController],
  providers: [ActorService],
})
export class ActorModule {}
