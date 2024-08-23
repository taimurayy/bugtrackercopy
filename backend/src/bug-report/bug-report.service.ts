import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BugReport } from './bug-report.entity';
import { CreateBugReportDto } from './dto/create-bug-report.dto';
import { UpdateBugReportDto } from './dto/update-bug-report.dto';
@Injectable()
export class BugReportService {
  constructor(
    @InjectRepository(BugReport)
    private readonly bugReportRepository: Repository<BugReport>,
  ) {}

  async create(createBugReportDto: CreateBugReportDto): Promise<BugReport> {
    const bugReport = this.bugReportRepository.create(createBugReportDto);
    console.log(bugReport);
    return this.bugReportRepository.save(bugReport);
  }
  async delete(id: number): Promise<void> {
    const result = await this.bugReportRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Bug Report with ID "${id}" not found.`);
    }
  }

  async updateStatus(id: number, updateBugReportDto: UpdateBugReportDto): Promise<BugReport> {
    const bugReport = await this.bugReportRepository.findOneBy({ id });

    if (!bugReport) {
      throw new NotFoundException(`Bug report with ID ${id} not found`);
    }

    bugReport.status = updateBugReportDto.status;
    await this.bugReportRepository.save(bugReport);
    return bugReport;
  }

  async findAll(): Promise<BugReport[]> {
    return this.bugReportRepository.find();
  }


}
