import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileUpload } from './file-upload.entity';
import { FileUploadService } from './file-upload.service';
import { BugReport } from '../bug-report/bug-report.entity'; // Import BugReport entity if needed

@Module({
  imports: [
    TypeOrmModule.forFeature([FileUpload, BugReport]), // Ensure BugReport is included if needed
  ],
  providers: [FileUploadService],
  exports: [FileUploadService], // Export FileUploadService if it needs to be used in other modules
})
export class FileUploadModule {}
