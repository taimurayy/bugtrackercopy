// src/users/users.controller.ts
import { Body, Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { UpdateUserRoleDto } from './update-user-role.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  async register(@Body() userDto: Partial<User>): Promise<User> {
    return this.userService.create(userDto);
  }
  @Put(':id/role')
    async updateRole(@Param('id') id: number, @Body() updateUserRoleDto: UpdateUserRoleDto) {
        await this.userService.updateRole(id, updateUserRoleDto);
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
      await this.userService.remove(id);
      return { message: 'User deleted successfully.' };
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
