import {Injectable} from '@angular/core';
import {InterceptorService} from "ng2-interceptors";
import {Api} from "../../app/config/api";
import {NotificationsActions} from "../actions/notifications-actions";
import {EppActions} from "../actions/epp-actions";

@Injectable()
export class Epp {

  constructor(private http: InterceptorService) {
  }


  Middleware = store => next => action => {
    switch (action.type) {
      case EppActions.EPP_GET:
        this.http.post(Api.epp_get.url, Object.assign({}, Api.epp_get.payload, action.payload))
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: EppActions.EPP_SET,
              payload: res
            });
          });
        break;
      case EppActions.EPP_CREATE:
        this.http.post(Api.epp_add.url, Object.assign({}, Api.epp_add.payload, action.payload))
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: NotificationsActions.NOTIFICATION,
              payload: res
            });
          });
        break;

      default:
        return next(action);
    }
  }
}
