import {Injectable} from '@angular/core';
import {InterceptorService} from "ng2-interceptors";
import {Api} from "../../app/config/api";
import {AtmActions} from "../actions/atm-actions";
import {NotificationsActions} from "../actions/notifications-actions";

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
      case AtmActions.ATM_GET_ACCESSORIES:
        this.http.post(Api.getAtmAccessories.url, Object.assign(Api.getAtmAccessories.payload,action.payload))
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: AtmActions.ATM_SET_ACCESSORIES,
              payload: res
            });
          });
        break;
      case AtmActions.ATM_GET_RETIANED_CARDS:
        this.http.post(Api.getAtmRetainedCards.url, Object.assign(Api.getAtmRetainedCards.payload,action.payload))
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: AtmActions.ATM_SET_RETIANED_CARDS,
              payload: res
            });
          });
        break;
      case AtmActions.ATM_ADD_SETTINGS:
        this.http.post(Api.createAtmSettings.url, Object.assign(action.payload))
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: NotificationsActions.NOTIFICATION,
              payload: res
            });
          });

        break;
      case AtmActions.ATM_UPDATE_SETTINGS:
        this.http.post(Api.saveAtmSettings.url, Object.assign(action.payload))
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: NotificationsActions.NOTIFICATION,
              payload: res
            });
          });
        break;
      case AtmActions.ATM_GET_SETTINGS:
        this.http.post(Api.getAtmSettings.url, Object.assign(Api.getAtmSettings.payload,action.payload))
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: AtmActions.ATM_SET_SETTINGS,
              payload: res
            });
          });
        break;
      default:
        return next(action);
    }
  }
}
