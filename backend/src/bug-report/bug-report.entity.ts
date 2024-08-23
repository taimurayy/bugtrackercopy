import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('bugrep')
export class BugReport {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({ type: 'varchar', length: 255 })
  title: string = '';

  @Column({ type: 'text' })
  description: string = '';

  @Column({ type: 'varchar', length: 50, default: 'open' })
  status: string = 'open';

  @Column({ type: 'int', nullable: true })
  assigned_id: number | null = null;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date = new Date();
}
