import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BugReport } from './bug-report.entity';
import { BugReportService } from './bug-report.service';
import { BugReportController } from './bug-report.controller';
import { FileUploadModule } from '../file-upload/file-upload.module';  
@Module({
  imports: [TypeOrmModule.forFeature([BugReport]),FileUploadModule],
  providers: [BugReportService],
  controllers: [BugReportController],
})
export class BugReportModule {}
