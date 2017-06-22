import {Injectable} from '@angular/core';
import {InterceptorService} from "ng2-interceptors";
import {Api} from "../../app/config/api";
import {ReportsActions} from "../actions/reports-actions";

@Injectable()
export class Reports {

  constructor(private http: InterceptorService) {
  }


  Middleware = store => next => action => {
    switch (action.type) {
      case ReportsActions.REPORTS_GET_SETTLEMENT:
        this.http.post(
            Api.reports_settlement.url,
            Object.assign({}, Api.reports_settlement.payload,
            action.payload))
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: ReportsActions.REPORTS_SET_SETTLEMENT,
              payload: res
            });
          });
        break;
      default:
        return next(action);
    }
  }
}
