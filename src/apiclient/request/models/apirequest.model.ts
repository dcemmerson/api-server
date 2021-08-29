import { RequestParams } from 'src/apiclient/request/dto/requestparams.dto';

export class ApiRequest {
  type: string;
  requestUrl: string;

  constructor(requestParams: RequestParams) {
    this.type = requestParams.type;
    this.requestUrl = requestParams.requestUrl;
  }

  isProtocolSet(): boolean {
    const reProtocol = /^(https:\/\/|http:\/\/){1}/g;
    return reProtocol.test(this.requestUrl);
  }

  isHttps(): boolean {
    const reHttps = /^(https:\/\/){1}/g;
    return reHttps.test(this.requestUrl);
  }
}
