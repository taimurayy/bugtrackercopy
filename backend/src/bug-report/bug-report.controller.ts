import { Controller, Post, Patch, Param, Get, Body } from '@nestjs/common';
import { BugReportService } from './bug-report.service';
import { CreateBugReportDto } from './dto/create-bug-report.dto';
import { BugReport } from './bug-report.entity';
import { UpdateBugReportDto } from './dto/update-bug-report.dto'; // Adjust path if necessary

@Controller('bug-reports')
export class BugReportController {
  constructor(private readonly bugReportService: BugReportService) {}

  @Post()
  async create(@Body() createBugReportDto: CreateBugReportDto): Promise<BugReport> {
    return this.bugReportService.create(createBugReportDto);
  }
  @Patch(':id')
    async updateStatus(
        @Param('id') id: number,
        @Body() updateBugReportDto: UpdateBugReportDto,
    ) {
        return this.bugReportService.updateStatus(id, updateBugReportDto);
  }
  @Get()
  async findAll(): Promise<BugReport[]> {
    return this.bugReportService.findAll();
  }
}
