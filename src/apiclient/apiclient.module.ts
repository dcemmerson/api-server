import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ApiClientController } from './apiclient.controller';
import { ApiClientService } from './apiclient.service';

@Module({
  imports: [HttpModule],
  controllers: [ApiClientController],
  providers: [ApiClientService],
})
export class ApiClientModule {}
