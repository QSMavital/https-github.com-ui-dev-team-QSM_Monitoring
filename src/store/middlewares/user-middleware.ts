import {Injectable} from '@angular/core';
import {UserSettingsActions} from "../actions/userSettings-actions";

@Injectable()
export class UserMiddleware {

  constructor(){}


  Settings = store => next => action => {
    switch (action.type) {
      case UserSettingsActions.GET_USER_SETTINGS:
        console.log(action);
        // this.httpClient.get(API.CONFIG.GET_COMMANDS+`/${action.payload.atmId}/${action.payload.from}/${action.payload.amount}`)
        //   .subscribe(
        //     data => {
        //       next({
        //         type: AtmActions.SET_ATM_COMMANDS,
        //         payload: data
        //       });
        //     });
        // break

      default:
        return next(action);
    }
  }
}
