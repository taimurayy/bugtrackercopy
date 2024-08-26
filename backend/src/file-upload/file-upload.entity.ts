import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('file_upload')
export class FileUpload {
  @PrimaryGeneratedColumn()
  id: number = 0; // Initialize with a default value

  @Column()
  filename: string = ''; // Initialize with a default value

  @Column()
  path: string = ''; // Initialize with a default value

  @Column()
  bugReportId: number = 0; // Initialize with a default value

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  uploadedAt: Date = new Date(); // Initialize with the current date
}
