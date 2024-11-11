import { Controller } from '@nestjs/common';
import { GrpcMethod, MessagePattern } from '@nestjs/microservices';

@Controller()
export class ProductsController {
  @MessagePattern({ cmd: 'hello' })
  hello(input?: string): string {
    return `Hello, ${input || 'there'}!`;
  }

  @GrpcMethod('ProductService', 'GetProduct')
  getProduct(data: { id: string }): {
    id: string;
    name: string;
    price: number;
  } {
    return { id: data.id, name: 'Sample name', price: 11.22 };
  }
}
