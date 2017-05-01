import { Interceptor, InterceptedRequest, InterceptedResponse } from 'ng2-interceptors';
import {Injectable} from "@angular/core";
import {NgRedux} from "@angular-redux/store";
import {IStore} from "../store/index";
import {ErrorHandlerActions} from "../store/actions/error-handler-actions";

@Injectable()
export class ServerURLInterceptor implements Interceptor {
  constructor(private ngRedux: NgRedux<IStore>){}

  public activeCalls = 0;
  public interceptBefore(request: InterceptedRequest): InterceptedRequest {
    // Do whatever with request: get info or edit it
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
    if(!response.response.ok){
      this.ngRedux.dispatch({type:ErrorHandlerActions.ERROR_HANDLER,payload:response.response});
    }
    this.activeCalls--;
    return response;
    /*
     You can return:
     - Response: The modified response
     - Nothing: For convenience: It's just like returning the response
     */
  }
}
