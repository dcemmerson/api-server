import { Test, TestingModule } from '@nestjs/testing';
import { ApiclientController } from './apiclient.controller';

describe('ApiclientController', () => {
  let controller: ApiclientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiclientController],
    }).compile();

    controller = module.get<ApiclientController>(ApiclientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
