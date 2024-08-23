import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileUpload } from './file-upload.entity';
import { BugReport } from '../bug-report/bug-report.entity';

@Injectable()
export class FileUploadService {
  constructor(
    @InjectRepository(FileUpload)
    private readonly fileUploadRepository: Repository<FileUpload>,
    @InjectRepository(BugReport)
    private readonly bugReportRepository: Repository<BugReport>,
  ) {}

  async saveFile(file: Express.Multer.File, bugReportId: number): Promise<FileUpload> {
    // Check if the bug report exists
    const bugReport = await this.bugReportRepository.findOneBy({ id: bugReportId });
    if (!bugReport) {
      throw new BadRequestException(`Bug report with ID ${bugReportId} not found`);
    }

    // Create file upload record
    const fileUpload = new FileUpload();
    fileUpload.filename = file.filename;
    fileUpload.path = file.path;
    fileUpload.bugReportId = bugReportId; // Set bugReportId directly as a number
    console.log(fileUpload);
    return this.fileUploadRepository.save(fileUpload);
  }
}
