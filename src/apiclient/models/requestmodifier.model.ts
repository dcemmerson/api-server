import { RequestParams } from 'src/apiclient/dto/requestparams.dto';
import { ApiRequest } from 'src/apiclient/models/apirequest.model';

export class RequestModifier {
  request: ApiRequest;
  isValid: boolean;
  hasProtocol: boolean;
  isHttps: boolean;

  constructor(requestParams: RequestParams) {
    this.request = new ApiRequest(requestParams);
    this._validateRequest();
  }

  modifyRequestToValid(): RequestParams {
    return null;
  }

  _validateRequest() {
    this._analyzeProtocol();
    this.isValid = this.hasProtocol;
  }

  _analyzeProtocol() {
    this.hasProtocol = this.request.isProtocolSet();
    this.isHttps = this.request.isHttps();
  }
}
