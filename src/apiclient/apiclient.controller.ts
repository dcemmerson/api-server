import { Controller, Get } from '@nestjs/common';
import { ApiClientService } from './apiclient.service';

@Controller('apiclient')
export class ApiClientController {
  constructor(private readonly apiClientService: ApiClientService) {}

  @Get('/getsaved')
  getSaved(): string {
    return this.apiClientService.getSaved();
  }
}
