import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserLogsEvent } from './create-user-logs.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('user_created')
  handleUserCreated(data: CreateUserLogsEvent) {
    this.appService.handleUserLogs(data);
  }

  @MessagePattern({ cmd: 'get_analytics' })
  getAnalytics() {
    return this.appService.getAnalytics();
  }
}
