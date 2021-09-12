import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { ApiClientService } from './apiclient.service';
import { RequestParams } from './dto/requestparams.dto';

@Controller('apiclient')
export class ApiClientController {
  constructor(private readonly apiClientService: ApiClientService) {}

  @Get('/getsaved')
  getSaved(): string {
    return this.apiClientService.getSaved();
  }

  @Post('/newrequest')
  newRequest(@Body() newRequestParams: RequestParams) {
    return this.apiClientService
      .fetchNewRequest(newRequestParams)
      .pipe(map((response) => response.data));
  }
}
