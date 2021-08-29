import { Test, TestingModule } from '@nestjs/testing';
import { ApiClientRequestController } from './apiclientrequest.controller';

describe('ApiclientController', () => {
  let controller: ApiClientRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiClientRequestController],
    }).compile();

    controller = module.get<ApiClientRequestController>(
      ApiClientRequestController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
