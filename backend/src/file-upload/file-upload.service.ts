// file-upload.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileUpload } from './file-upload.entity'; // Adjust the path as necessary

@Injectable()
export class FileUploadService {
  constructor(
    @InjectRepository(FileUpload)
    private readonly fileUploadRepository: Repository<FileUpload>,
  ) {}

  async saveFile(file: Express.Multer.File, bugReportId: number): Promise<FileUpload> {
    const newFile = this.fileUploadRepository.create({
      filename: file.originalname,
      path: file.path,
      bugReportId,
      uploadedAt: new Date(),
    });
    return await this.fileUploadRepository.save(newFile);
  }
}
