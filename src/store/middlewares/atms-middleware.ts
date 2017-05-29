import {Injectable} from '@angular/core';
import {AtmsActions} from "../actions/atms-actions";
import {InterceptorService} from "ng2-interceptors";
import {Api} from "../../app/config/api";

@Injectable()
export class Atms {

  constructor(private http: InterceptorService) {
  }


  Middleware = store => next => action => {
    switch (action.type) {
      case AtmsActions.ATMS_GET_INVENTORY:
        this.http.post(Api.atms_inventory.url, Object.assign(Api.atms_inventory.payload,action.payload))
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: AtmsActions.ATMS_SET_INVENTORY,
              payload: res
            });
          });
        break;
      case AtmsActions.ATMS_GET_EVENTS:
        this.http.post(Api.atms_events.url, Api.atms_events.payload)
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
          debugger;
            next({
              type: AtmsActions.ATMS_SET_EVENTS,
              payload: res
            });
          });

        break;
      default:
        return next(action);
    }
  }
}
