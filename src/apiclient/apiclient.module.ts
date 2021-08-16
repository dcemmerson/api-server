import { Module } from '@nestjs/common';
import { ApiClientController } from './apiclient.controller';
import { ApiClientService } from './apiclient.service';

@Module({
  controllers: [ApiClientController],
  providers: [ApiClientService],
})
export class ApiClientModule {}
