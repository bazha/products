import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://myuser:mypassword@rabbitmq:5672'],
        queue: 'products_queue',
        queueOptions: {
          durable: true,
        },
      },
    },
  );

  await app.listen();
  logger.log('App has started');
}
bootstrap();
