import {Injectable} from '@angular/core';
import {ActionMenuActions} from "../actions/action-menu-actions";
import {InterceptorService} from "ng2-interceptors";
import {Api} from "../../app/config/api";

@Injectable()
export class ActionMenu {

  constructor(private http: InterceptorService) {
  }


  Middleware = store => next => action => {
    switch (action.type) {
      case ActionMenuActions.GENERAL_GET_VERSION:
        this.http.post(Api.version.url, Api.version.payload)
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: ActionMenuActions.GENERAL_SET_VERSION,
              payload: res
            });
          
          });
        break;
          default:
        return next(action);
    }     
  }
}
