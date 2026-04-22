import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { MovieModule } from './movie/movie.module';
// import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

// -----  .env
//process.env['POSTGRES_HOST']
//process.env.POSTGRES_HOST

@Module({
  imports: [
    TypeOrmModule.forRoot({ //обычные библиотеки до модулей
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5433,
      username: 'root',
      password: '12345',
      database: 'nestjs-basics',
      // for dev only:
      autoLoadEntities: true,
      synchronize: true,
    }),
    TaskModule,
    MovieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
