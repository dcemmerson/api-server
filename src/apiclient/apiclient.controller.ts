import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AxiosResponse } from 'axios';
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
      .then((axiosResponse: AxiosResponse<any>) => {
        console.log('final res');
        console.log(axiosResponse);
        return axiosResponse;
      })
      .catch(() => {
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error: 'Incorrect request method type or bad url',
          },
          HttpStatus.BAD_REQUEST,
        );
      });
  }
}
