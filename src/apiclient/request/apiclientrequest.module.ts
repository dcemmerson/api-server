import { Module } from '@nestjs/common';
import { ApiClientRequestController } from './apiclientrequest.controller';
import { ApiClientRequestService } from './apiclientrequest.service';

@Module({
  controllers: [ApiClientRequestController],
  providers: [ApiClientRequestService],
})
export class ApiClientRequestModule {}
