import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BugReport } from './bug-report.entity';
import { CreateBugReportDto } from './dto/create-bug-report.dto';
import { UpdateBugReportDto } from './dto/update-bug-report.dto';
import { FileUploadService } from '../file-upload/file-upload.service'; // Adjust import path as necessary
import { FileUpload } from '../file-upload/file-upload.entity'; // Adjust import path as necessary

@Injectable()
export class BugReportService {
  constructor(
    @InjectRepository(BugReport)
    private readonly bugReportRepository: Repository<BugReport>,
    private readonly fileUploadService: FileUploadService, // Inject FileUploadService
  ) {}

  async create(createBugReportDto: CreateBugReportDto): Promise<BugReport> {
    const bugReport = this.bugReportRepository.create(createBugReportDto);
    console.log(bugReport);
    return this.bugReportRepository.save(bugReport);
  }

  async updateStatus(id: number, updateBugReportDto: UpdateBugReportDto): Promise<BugReport> {
    const bugReport = await this.bugReportRepository.findOneBy({ id });

    if (!bugReport) {
      throw new NotFoundException(`Bug report with ID ${id} not found`);
    }

    bugReport.status = updateBugReportDto.status;
    await this.bugReportRepository.save(bugReport);
    return bugReport;
  }

  async findAll(): Promise<BugReport[]> {
    return this.bugReportRepository.find();
  }

  async uploadFile(file: Express.Multer.File, bugReportId: number): Promise<FileUpload> {
    // Validate that the bug report exists
    const bugReport = await this.bugReportRepository.findOneBy({ id: bugReportId });

    if (!bugReport) {
      throw new NotFoundException(`Bug report with ID ${bugReportId} not found`);
    }

    // Save the file using the FileUploadService
    try {
      return await this.fileUploadService.saveFile(file, bugReportId);
    } catch (error) {
      throw new BadRequestException('Failed to upload file');
    }
  }
}
