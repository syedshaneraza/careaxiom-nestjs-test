import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { BullModule } from '@nestjs/bull';
import { MessageProcessor } from '../queues/message.processor';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    BullModule.registerQueue({ name: 'message-queue' }),
  ],
  controllers: [UsersController],
  providers: [UsersService, MessageProcessor],
})
export class UsersModule {}
