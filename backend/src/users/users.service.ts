// src/users/users.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(userDto: Partial<User>): Promise<User> {
    this.logger.log(`Creating user with email: ${userDto.email}`);
    const user = this.userRepository.create(userDto);
    const savedUser = await this.userRepository.save(user);
    this.logger.log(`User created with id: ${savedUser.id}`);
    return savedUser;
  }
  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
  async validateUser(email: string, password: string): Promise<User | null> {
    this.logger.log(`Validating user with email: ${email}`);
    const user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      this.logger.log(`User found: ${JSON.stringify(user)}`);
      // Compare plain text password
      if (user.password === password) {
        return user;
      } else {
        this.logger.log('Invalid password');
      }
    } else {
      this.logger.log('User not found');
    }
    return null;
  }
}
