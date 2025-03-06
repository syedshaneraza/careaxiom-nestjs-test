import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectQueue('message-queue') private messageQueue: Queue,
  ) {}

  async createUser(name: string, email: string, age: number): Promise<User> {
    const user = this.userRepository.create({ name, email, age });
    await this.userRepository.save(user);
    await this.messageQueue.add('send-welcome-message', { email, name });
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getAdultUsers(): Promise<User[]> {
    return await this.userRepository.find({
      where: { age: MoreThan(18) },
      order: { name: 'ASC' },
    });
  }
}
