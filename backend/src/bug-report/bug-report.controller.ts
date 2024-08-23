import { Controller, Post, Get, Body } from '@nestjs/common';
import { BugReportService } from './bug-report.service';
import { CreateBugReportDto } from './dto/create-bug-report.dto';
import { BugReport } from './bug-report.entity';

@Controller('bug-reports')
export class BugReportController {
  constructor(private readonly bugReportService: BugReportService) {}

  @Post()
  async create(@Body() createBugReportDto: CreateBugReportDto): Promise<BugReport> {
    return this.bugReportService.create(createBugReportDto);
  }

  @Get()
  async findAll(): Promise<BugReport[]> {
    return this.bugReportService.findAll();
  }
}
