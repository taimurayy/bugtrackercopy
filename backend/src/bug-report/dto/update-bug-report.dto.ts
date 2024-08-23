import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateBugReportDto {
    @IsString()
    @IsNotEmpty() // Ensures that status is not an empty string
    status: string = ''; // Initialize with a default value if appropriate
}
