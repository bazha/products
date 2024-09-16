import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('helloWorldMethod')
  sayHello(data: string) {
    return data;
  }
}
