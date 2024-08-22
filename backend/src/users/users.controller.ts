// src/users/users.controller.ts
import { Body, Controller, Post, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  async register(@Body() userDto: Partial<User>): Promise<User> {
    return this.userService.create(userDto);
  }
  @Get('users')
  async getUsers() {
    return this.userService.getAllUsers();
  }
  @Post('login')
  async login(@Body() { email, password }: { email: string; password: string }): Promise<{ roleId: number }> {
    const user = await this.userService.validateUser(email, password);
    if (user) {
      return { roleId: user.roleId };
    }
    throw new Error('Invalid credentials');
  }
}
