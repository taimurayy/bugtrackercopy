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

  async saveFile(bugReportId: number, file: Express.Multer.File) {
    // Create a new FileUpload instance and save it to the database
    const fileUpload = new FileUpload();
    fileUpload.id = bugReportId;
    fileUpload.filename = file.originalname; // Use originalname for the original filename
    fileUpload.path = file.path;
    fileUpload.bugReportId = bugReportId;
    console.log(fileUpload);
    return this.fileUploadRepository.save(fileUpload);
  }
}
