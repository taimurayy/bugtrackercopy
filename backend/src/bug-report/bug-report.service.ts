import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BugReport } from './bug-report.entity';

@Injectable()
export class BugReportService {
  constructor(
    @InjectRepository(BugReport)
    private bugReportRepository: Repository<BugReport>,
  ) {}

  create(bugReport: Partial<BugReport>): Promise<BugReport> {
    const newBugReport = this.bugReportRepository.create(bugReport);
    return this.bugReportRepository.save(newBugReport);
  }

  findAll(): Promise<BugReport[]> {
    return this.bugReportRepository.find();
  }
}
