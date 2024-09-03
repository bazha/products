import { Controller, Inject, Get, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('PRODCUTS_SERVICE') private client: ClientProxy) {}

  @Get()
  getHelloByName(@Param('name') name = 'there') {
    return this.client.send({ cmd: 'hello' }, name);
  }
}
