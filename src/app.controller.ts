import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('getProducts')
  getProducts(data: string) {
    return data;
  }
}
