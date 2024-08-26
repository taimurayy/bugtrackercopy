import { IsString } from 'class-validator';

export class CreateFileUploadDto {
  @IsString()
  filename!: string;

  @IsString()
  path!: string;

}
