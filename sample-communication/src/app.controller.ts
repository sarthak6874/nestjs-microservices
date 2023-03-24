import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserEvent } from './create-user.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('user_created')
  async handleUserCreated(data: CreateUserEvent) {
    return await this.appService.handleUserCreated(data);
  }
}
