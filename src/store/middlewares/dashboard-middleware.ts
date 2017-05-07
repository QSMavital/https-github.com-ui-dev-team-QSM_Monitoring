import {Injectable} from '@angular/core';
import {DashboardActions} from "../actions/dashboard-actions";
import {InterceptorService} from "ng2-interceptors";
import {Api} from "../../app/config/api";

@Injectable()
export class Dashboard {

  constructor(private http: InterceptorService) {
  }


  Middleware = store => next => action => {
    switch (action.type) {
      case DashboardActions.WIDGET_GET_ACTIONS_STATUS:
        this.http.post(Api.dashboard_action_status.url, Api.dashboard_action_status.payload)
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: DashboardActions.WIDGET_SET_ACTIONS_STATUS,
              payload: res
            });
          });
        break;
      case DashboardActions.WIDGET_GET_CONNECTION_STATUS:
        this.http.post(Api.dashboard_connection.url, Api.dashboard_connection.payload)
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: DashboardActions.WIDGET_SET_CONNECTION_STATUS,
              payload: res
            });
          });
        break;

      case DashboardActions.WIDGET_GET_DEVICE_STATUS:
        this.http.post(Api.dashboard_device_status.url, Api.dashboard_device_status.payload)
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: DashboardActions.WIDGET_SET_DEVICE_STATUS,
              payload: res
            });
          });
        break;

      case DashboardActions.WIDGET_GET_ISSUER_ACTIONS_STATUS:
        this.http.post(Api.dashboard_issuer_action_status.url, Api.dashboard_issuer_action_status.payload)
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: DashboardActions.WIDGET_SET_ISSUER_ACTIONS_STATUS,
              payload: res
            });
          });
        break;
      case DashboardActions.WIDGET_GET_ONLINE_STATUS:
        this.http.post(Api.dashboard_online_status.url, Api.dashboard_online_status.payload)
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: DashboardActions.WIDGET_SET_ONLINE_STATUS,
              payload: res
            });
          });
        break;
      default:
        return next(action);
    }
  }
}
