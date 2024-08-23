import { Controller, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage, DiskStorageOptions, FileFilterCallback } from 'multer';
import { Request } from 'express';
import { FileUploadService } from './file-upload.service';
import { FileUpload } from './file-upload.entity';

@Controller('file-upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req: Request, file: Express.Multer.File, callback: (error: Error | null, filename: string) => void) => {
        const filename = `${Date.now()}-${file.originalname}`;
        callback(null, filename);
      },
    }),
    fileFilter: (req: Request, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) => {
      if (!file.mimetype.startsWith('image/')) {
        return callback(new Error('Only image files are allowed!'), false);
      }
      callback(null, true);
    },
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Body('bugReportId') bugReportId: number) {
    return await this.fileUploadService.saveFile(file, bugReportId);
  }
}
