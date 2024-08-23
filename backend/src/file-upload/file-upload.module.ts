// file-upload.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileUploadController } from './file-upload.controller';
import { FileUploadService } from './file-upload.service';
import { FileUpload } from './file-upload.entity'; // Assuming this is the entity

@Module({
  imports: [TypeOrmModule.forFeature([FileUpload])], // Import the repository
  controllers: [FileUploadController],
  providers: [FileUploadService],
  exports: [FileUploadService], // Export the service if needed elsewhere
})
export class FileUploadModule {}
