import { Test, TestingModule } from '@nestjs/testing';
import { ApiClientService } from './apiclient.service';

describe('ApiclientService', () => {
  let service: ApiClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiClientService],
    }).compile();

    service = module.get<ApiClientService>(ApiClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
