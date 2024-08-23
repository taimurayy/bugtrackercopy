import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileUpload } from './file-upload.entity';
import { FileUploadsController } from './file-upload.controller';
import { FileUploadsService } from './file-upload.service';

@Module({
  imports: [TypeOrmModule.forFeature([FileUpload])],
  controllers: [FileUploadsController],
  providers: [FileUploadsService],
})
export class FileUploadsModule {}
