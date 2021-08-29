import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiClientRequestModule } from './apiclient/request/apiclientrequest.module';

@Module({
  imports: [ApiClientRequestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
