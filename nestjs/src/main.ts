import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // ГЛОБАЛЬНАЯ ВАЛИДАЦИЯ ВСЕХ ВХОДЯЩИХ ЗАПРОСТОВ. в проекте: yarn add class-validator class-transformer

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
