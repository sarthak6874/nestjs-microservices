import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async handleUserCreated(data: CreateUserEvent) {
    console.log('handlerUserCreated - COMMUNICATIONS', data);
    const newUser = this.userRepository.create(data);
    return await this.userRepository.save(newUser);
  }
}
