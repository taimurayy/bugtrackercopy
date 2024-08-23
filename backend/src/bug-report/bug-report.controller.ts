import { Controller, Post, Delete, Patch, Param, Get, Body, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { BugReportService } from './bug-report.service';
import { CreateBugReportDto } from './dto/create-bug-report.dto';
import { BugReport } from './bug-report.entity';
import { UpdateBugReportDto } from './dto/update-bug-report.dto'; 

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
  ): Promise<BugReport> {
    return this.bugReportService.updateStatus(id, updateBugReportDto);
  }
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.bugReportService.delete(id);
  }
  @Get()
  async findAll(): Promise<BugReport[]> {
    return this.bugReportService.findAll();
  }


}
