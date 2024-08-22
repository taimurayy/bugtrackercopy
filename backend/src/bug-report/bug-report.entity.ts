import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class BugReport {
  @PrimaryGeneratedColumn()
  id: number = 1;

  @Column()
  title: string = '';

  @Column('text')
  description: string = '';

  @Column({ default: 'open' })
  status: string = 'open';
}
