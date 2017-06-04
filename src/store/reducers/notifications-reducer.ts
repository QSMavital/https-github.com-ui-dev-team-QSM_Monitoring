import {NotificationsActions} from "../actions/notifications-actions";
const INITIAL_STATE: any = null;

export function notificationsReducer(state: any = INITIAL_STATE, action:any) {
  switch (action.type) {
    case NotificationsActions.NOTIFICATION:
      return Object.assign(action.payload,{timestamp:new Date().getTime()});
    default:
      return state;
  }
}
