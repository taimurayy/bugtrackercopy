import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { BugReport } from './bug-report/bug-report.entity';
// import { JwtModule } from '@nestjs/jwt';
import { BugReportModule } from './bug-report/bug-report.module';
import { FileUploadsModule } from './file-upload/file-upload.module';
import { FileUpload } from './file-upload/file-upload.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // JwtModule.register({
      //   secret: 'your_secret_key', // Replace with your secret key
      //   signOptions: { expiresIn: '1h' }, // Token expiration time
      // }),
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '123',
      database: 'bug_tracker',
      entities: [User,BugReport,FileUpload],
      synchronize: true, // Set to false in production
    }),
    UsersModule,
    BugReportModule,
    FileUploadsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
