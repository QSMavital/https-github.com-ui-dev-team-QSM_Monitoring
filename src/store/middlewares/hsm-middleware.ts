import {Injectable} from '@angular/core';
import {InterceptorService} from "ng2-interceptors";
import {Api} from "../../app/config/api";
import {HsmActions} from "../actions/hsms-actions";
import {NotificationsActions} from "../actions/notifications-actions";

@Injectable()
export class Hsm {

  constructor(private http: InterceptorService) {
  }


  Middleware = store => next => action => {
    switch (action.type) {
      case HsmActions.HSM_GET_STATISTICS:
        this.http.post(Api.hsm_statistics.url, Object.assign({}, Api.hsm_statistics.payload, action.payload))
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: HsmActions.HSM_SET_STATISTICS,
              payload: res
            });
          });
        break;
      case HsmActions.HSM_GET:
        this.http.post(Api.hsm_status.url, Object.assign({}, Api.hsm_status.payload, action.payload))
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: HsmActions.HSM_SET,
              payload: res
            });
          });
        break;
      case HsmActions.HSM_CREATE:
        this.http.post(Api.hsm_add.url, Object.assign({}, Api.hsm_add.payload, action.payload))
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: NotificationsActions.NOTIFICATION,
              payload: res
            });
          });
        break;
      case HsmActions.HSM_ACTION:
        this.http.post(Api.hsm_action.url, Object.assign({}, Api.hsm_action.payload, action.payload))
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: NotificationsActions.NOTIFICATION,
              payload: res
            });
          });
        break;
      case HsmActions.HSM_SESSIONS_ACTION:
        this.http.post(Api.hsm_sessions_action.url, Object.assign({}, Api.hsm_sessions_action.payload, action.payload))
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
