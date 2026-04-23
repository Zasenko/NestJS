import { ConfigService } from "@nestjs/config";
import type { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { MovieEntity } from "src/movie/entities/movie.entity";

export async function getTypeOrmConfig(
    configService: ConfigService,
): Promise<TypeOrmModuleOptions> {
    return {
        type: 'postgres',
        host: configService.getOrThrow<string>('POSTGRES_HOST'),
        port: configService.getOrThrow<number>('POSTGRES_PORT'),
        username: configService.getOrThrow<string>('POSTGRES_USER'),
        password: configService.getOrThrow<string>('POSTGRES_PASSWORD'),
        database: configService.getOrThrow<string>('POSTGRES_DB'),

        entities: [MovieEntity],
        // for dev only:
        autoLoadEntities: true,
        synchronize: true,
        logging: true,  
    }
}