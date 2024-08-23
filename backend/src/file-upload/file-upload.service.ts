import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileUpload } from './file-upload.entity'; // Adjust the path to your FileUpload entity

@Injectable()
export class FileUploadsService {
  constructor(
    @InjectRepository(FileUpload)
    private readonly fileUploadRepository: Repository<FileUpload>,
  ) {}

  async saveFile(bugReportId: string, file: Express.Multer.File) {
    // Create a new FileUpload instance and save it to the database
    const fileUpload = new FileUpload();
    fileUpload.filename = file.filename;
    fileUpload.path = file.path;
    fileUpload.bugReportId = parseInt(bugReportId, 10);
    console.log(fileUpload);
    await this.fileUploadRepository.save(fileUpload);
  }
}
