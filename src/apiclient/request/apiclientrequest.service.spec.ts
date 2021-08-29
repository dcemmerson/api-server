import { Test, TestingModule } from '@nestjs/testing';
import { ApiClientRequestService } from './apiclientrequest.service';

describe('ApiclientService', () => {
  let service: ApiClientRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiClientRequestService],
    }).compile();

    service = module.get<ApiClientRequestService>(ApiClientRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
