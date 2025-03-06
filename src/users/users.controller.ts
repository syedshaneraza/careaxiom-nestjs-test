import { Controller, Post, Get, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(
    @Body() body: { name: string; email: string; age: number },
  ): Promise<User> {
    return this.usersService.createUser(body.name, body.email, body.age);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }

  @Get('/adultUsers')
  async getAdultUsers(): Promise<User[]> {
    return this.usersService.getAdultUsers();
  }
}
