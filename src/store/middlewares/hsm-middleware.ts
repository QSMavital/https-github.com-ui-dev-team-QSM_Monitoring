import {Injectable} from '@angular/core';
import {InterceptorService} from "ng2-interceptors";
import {Api} from "../../app/config/api";
import {HsmActions} from "../actions/hsms-actions";

@Injectable()
export class Hsm {

  constructor(private http: InterceptorService) {
  }


  Middleware = store => next => action => {
    switch (action.type) {
      case HsmActions.HSM_GET_STATISTICS:
        this.http.post(Api.hsm_statistics.url, Object.assign({},Api.hsm_statistics.payload,action.payload))
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: HsmActions.HSM_SET_STATISTICS,
              payload: res
            });
          });
        break;
      case HsmActions.HSM_GET:
        this.http.post(Api.hsm_status.url, Object.assign({},Api.hsm_status.payload,action.payload))
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: HsmActions.HSM_SET,
              payload: res
            });
          });
        break;

      default:
        return next(action);
    }
  }
}
