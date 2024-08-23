import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BugReport } from './bug-report.entity';
import { BugReportService } from './bug-report.service';
import { BugReportController } from './bug-report.controller';
@Module({
  imports: [TypeOrmModule.forFeature([BugReport])],
  providers: [BugReportService],
  controllers: [BugReportController],
})
export class BugReportModule {}
