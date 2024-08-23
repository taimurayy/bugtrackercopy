import { Controller, Post, Patch, Param, Get, Body, UploadedFile, UseInterceptors, BadRequestException } from '@nestjs/common';
import { BugReportService } from './bug-report.service';
import { CreateBugReportDto } from './dto/create-bug-report.dto';
import { BugReport } from './bug-report.entity';
import { UpdateBugReportDto } from './dto/update-bug-report.dto'; 
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

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

  @Get()
  async findAll(): Promise<BugReport[]> {
    return this.bugReportService.findAll();
  }

  @Post(':id/upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
    @Body('bugReportId') bugReportId: number,
  ) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    try {
      return await this.bugReportService.uploadFile(file, bugReportId);
    } catch (error) {
      throw new BadRequestException('Failed to upload file');
    }
  }
}
