import {Injectable} from '@angular/core';
import {InterceptorService} from "ng2-interceptors";
import {Api} from "../../app/config/api";
import {AtmActions} from "../actions/atm-actions";

@Injectable()
export class Atm {

  constructor(private http: InterceptorService) {
  }


  Middleware = store => next => action => {
    switch (action.type) {
      case AtmActions.ATM_GET_STATUS:
        this.http.post(Api.getAtmStatus.url, Object.assign(Api.getAtmStatus.payload,action.payload))
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: AtmActions.ATM_SET_STATUS,
              payload: res
            });
          });
        break;
      default:
        return next(action);
    }
  }
}
