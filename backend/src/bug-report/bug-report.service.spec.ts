import { Test, TestingModule } from '@nestjs/testing';
import { BugReportService } from './bug-report.service';

describe('BugReportService', () => {
  let service: BugReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BugReportService],
    }).compile();

    service = module.get<BugReportService>(BugReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
