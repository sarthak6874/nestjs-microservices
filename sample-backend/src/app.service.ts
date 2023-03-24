import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './create-user-request.dto';
import { CreateUserEvent } from './create-user.event';
import { CreateUserLogsEvent } from './create-user-logs.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
    @Inject('ANALYTICS') private readonly analyticsClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Backend App service';
  }

  async createUser(createUserRequest: CreateUserRequest) {
    this.communicationClient.send(
      'user_created',
      new CreateUserEvent(createUserRequest.name, createUserRequest.email, createUserRequest.password),
    ).subscribe((user: {id: number}) => {
      this.analyticsClient.emit(
        'user_created',
        new CreateUserLogsEvent(user.id.toString(), "User Created"),
      );
    });
    
  }

  getAnalytics() {
    return this.analyticsClient.send({ cmd: 'get_analytics' }, {});
  }
}
