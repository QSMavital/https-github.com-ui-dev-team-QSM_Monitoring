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
        this.http.post(Api.atms_inventory.url, Api.atms_inventory.payload)
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: AtmsActions.ATMS_SET_INVENTORY,
              payload: res
            });
          });


      default:
        return next(action);
    }
  }
}
