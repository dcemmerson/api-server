import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
// import axios from '@nestjs/axios';

import { RequestParams } from './dto/requestparams.dto';
import { AxiosResponse } from 'axios';
import { RequestModifier } from './models/requestmodifier.model';
import { Observable } from 'rxjs';

@Injectable()
export class ApiClientService {
  constructor(private httpService: HttpService) {}
  getSaved() {
    return 'test??';
  }

  fetchNewRequest(
    requestParams: RequestParams,
  ): Observable<AxiosResponse<any>> {
    const requestModifier = new RequestModifier(requestParams);
    if (!requestModifier.isValid) {
      requestModifier.modifyRequestToValid();
    }
    console.log(requestParams);
    switch (requestModifier.request.type.toUpperCase()) {
      case 'GET':
        return this.httpService.get(requestModifier.request.requestUrl);
      case 'POST':
        break;
      case 'PUT':
        break;
      case 'DELETE':
        break;
      default:
        return null;
    }
  }
}
