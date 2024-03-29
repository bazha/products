import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.HOST,
        port: Number(process.env.PORT),
      },
    },
  );
  await app.listen();
  logger.log(`App has started on ${process.env.HOST}:${process.env.PORT}`);
}
bootstrap();
