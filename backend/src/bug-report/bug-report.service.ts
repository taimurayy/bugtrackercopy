import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BugReport } from './bug-report.entity';
import { CreateBugReportDto } from './dto/create-bug-report.dto';

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

  async findAll(): Promise<BugReport[]> {
    return this.bugReportRepository.find();
  }
}
