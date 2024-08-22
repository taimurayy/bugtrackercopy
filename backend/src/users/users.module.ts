import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Import TypeOrmModule and provide User entity
  controllers: [UsersController],
  providers: [UsersService], // Ensure UsersService is provided here
  exports: [UsersService], // Export UsersService if needed in other modules
})
export class UsersModule {}
