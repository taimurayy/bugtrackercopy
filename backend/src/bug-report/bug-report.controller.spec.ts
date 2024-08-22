import { Test, TestingModule } from '@nestjs/testing';
import { BugReportController } from './bug-report.controller';

describe('BugReportController', () => {
  let controller: BugReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BugReportController],
    }).compile();

    controller = module.get<BugReportController>(BugReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
