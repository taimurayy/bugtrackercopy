import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';
import { FileUpload } from './file-upload.entity'; // Adjust the path to your FileUpload entity

@Injectable()
export class FileUploadsService {
  constructor(
    @InjectRepository(FileUpload)
    private readonly fileUploadRepository: Repository<FileUpload>,
    private readonly entityManager: EntityManager, // Ensure EntityManager is injected
  ) {}

  async saveFile(bugReportId: number, file: Express.Multer.File) {
    const query = `
      INSERT INTO file_upload (id, filename, path, "bugReportId", "uploadedAt")
      VALUES ($1, $2, $3, $4, NOW())
    `;

    const parameters = [
      bugReportId,
      file.originalname,
      file.path,
      bugReportId,
    ];

    await this.entityManager.query(query, parameters);

    return {
      id: bugReportId,
      filename: file.originalname,
      path: file.path,
      bugReportId: bugReportId,
      uploadedAt: new Date(), // You can return additional fields if needed
    };
  }
}
