import { Injectable } from '@nestjs/common';
import { RequestParams } from './dto/requestparams.dto';
import axios, { AxiosResponse } from 'axios';
import { RequestModifier } from './models/requestmodifier.model';

@Injectable()
export class ApiClientService {
  getSaved() {
    return 'test??';
  }

  async fetchNewRequest(
    requestParams: RequestParams,
  ): Promise<AxiosResponse<any>> {
    const requestModifier = new RequestModifier(requestParams);
    if (!requestModifier.isValid) {
      requestModifier.modifyRequestToValid();
    }
    console.log(requestParams);
    switch (requestModifier.request.type.toUpperCase()) {
      case 'GET':
        const res = await axios.get(requestModifier.request.requestUrl);
        console.log(res);
        return res;
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
