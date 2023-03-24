import { Injectable } from '@nestjs/common';
import { CreateUserLogsEvent } from './create-user-logs.event';
import { InjectRepository } from '@nestjs/typeorm';
import { UserLogs } from './user-logs.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(UserLogs) private readonly userLogsRepository: Repository<UserLogs>,
  ) {}

  async handleUserLogs(data: CreateUserLogsEvent) {
    console.log('User got created, number of users increased');
    const newUser = this.userLogsRepository.create(data);
    return await this.userLogsRepository.save(newUser);
  }

  async getAnalytics() {
    const userLogs = await this.userLogsRepository.find();
    return userLogs;
  }
}
