import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { ApiClientRequestService } from './apiclientrequest.service';
import { RequestParams } from './dto/requestparams.dto';

@Controller('apiclientrequest')
export class ApiClientRequestController {
  constructor(private readonly apiClientService: ApiClientRequestService) {}

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
      .catch((err) => {
        console.log('BAD REQUEST');
        console.log(err);
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
