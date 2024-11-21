import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCTS_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@rabbitmq:5672'],
          queue: 'products_queue',
          queueOptions: {
            durable: true,
          },
        },
      },
      {
        name: 'ORDER_GRPC_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'orders',
          url: 'orders: 3001',
          protoPath: join(process.cwd(), './src/orders/proto/orders.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
