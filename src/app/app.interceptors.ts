import { Interceptor, InterceptedRequest, InterceptedResponse } from 'ng2-interceptors';
import {Injectable} from "@angular/core";

@Injectable()
export class ServerURLInterceptor implements Interceptor {
  public activeCalls = 0;
  public interceptBefore(request: InterceptedRequest): InterceptedRequest {
    // Do whatever with request: get info or edit it
    console.log('out');
    this.activeCalls++;
    return request;
    /*
     You can return:
     - Request: The modified request
     - Nothing: For convenience: It's just like returning the request
     - <any>(Observable.throw("cancelled")): Cancels the request, interrupting it from the pipeline, and calling back 'interceptAfter' in backwards order of those interceptors that got called up to this point.
     */
  }

  public interceptAfter(response: InterceptedResponse): InterceptedResponse {
    // Do whatever with response: get info or edit it
    console.log('error',response);
    this.activeCalls--;
    return response;
    /*
     You can return:
     - Response: The modified response
     - Nothing: For convenience: It's just like returning the response
     */
  }
}
