import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({ unique: true })
  username: string = '';

  @Column({ unique: true })
  email: string = '';

  @Column()
  password: string = '';

  @Column()
  roleId: number = 1; // Default value if applicable
}
