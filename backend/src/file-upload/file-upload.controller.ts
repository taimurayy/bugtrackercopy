import { Controller, Post, UploadedFile, UseInterceptors, Req, BadRequestException, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from '../common/multer/multer.config';
import { FileUploadsService } from './file-upload.service';
import { Request } from 'express'; // Import the Request type from express

@Controller('file-uploads')
export class FileUploadsController {
  constructor(private readonly fileUploadsService: FileUploadsService) {}

  @Post('fileupload')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  async uploadFile(
    @Req() req: Request, // Add the Request type here
    @UploadedFile() file: Express.Multer.File,
  ) {
    const bugReportId = req.params.bugReportId;
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    // Save file information associated with the bug report
    await this.fileUploadsService.saveFile(bugReportId, file);

    return {
      message: 'File uploaded successfully',
      filename: file.filename,
    };
  }
}
