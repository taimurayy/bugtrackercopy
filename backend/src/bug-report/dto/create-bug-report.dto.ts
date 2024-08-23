import { IsString, IsOptional, IsInt } from 'class-validator';

export class CreateBugReportDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsString()
  @IsOptional()
  status?: string = 'open';

  @IsInt()
  @IsOptional()
  assigned_id?: number;
}
