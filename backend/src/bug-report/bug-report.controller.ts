import { Controller, Post, Body, Get } from '@nestjs/common';
import { BugReportService } from './bug-report.service';
import { BugReport } from './bug-report.entity';

@Controller('bug-reports')
export class BugReportController {
  constructor(private readonly bugReportService: BugReportService) {}

  @Post()
  create(@Body() bugReport: Partial<BugReport>): Promise<BugReport> {
    return this.bugReportService.create(bugReport);
  }

  @Get('')
  findAll(): Promise<BugReport[]> {
    return this.bugReportService.findAll();
  }
}
