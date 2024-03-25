import { Controller, Get } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
    });
  }
  @Get('/')
  async findAll() {
    return await this.client.send<any>('/', 'returm all products');
  }
}
