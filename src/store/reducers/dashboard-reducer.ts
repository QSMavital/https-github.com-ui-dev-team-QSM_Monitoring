import { DashboardActions } from '../actions/dashboard-actions'
const INITIAL_STATE_ACTIONS_STATUS: any = null;
const INITIAL_STATE_CONNECTION_STATUS: any = null;
const INITIAL_STATE_DEVICE_STATUS: any = null;
const INITIAL_STATE_ISSUER_ACTIONS_STATUS: any = null;
const INITIAL_STATE_ONLINE_STATUS: any = null;

export function ActionsStatusReducer(state: any = INITIAL_STATE_ACTIONS_STATUS, action:any) {
  switch (action.type) {
    case DashboardActions.WIDGET_SET_ACTIONS_STATUS:
      return Object.assign({},action.payload);
    default:
      return state;
  }
}

export function ConnectionStatusReducer(state: any = INITIAL_STATE_CONNECTION_STATUS, action:any) {
  switch (action.type) {
    case DashboardActions.WIDGET_SET_CONNECTION_STATUS:
      return [...action.payload];
    default:
      return state;
  }
}


export function DeviceStatusReducer(state: any = INITIAL_STATE_DEVICE_STATUS, action:any) {
  switch (action.type) {
    case DashboardActions.WIDGET_SET_DEVICE_STATUS:
      [...action.payload];
      return [...action.payload];
    default:
      return state;
  }
}


export function IssuerActionsStatusReducer(state: any = INITIAL_STATE_ISSUER_ACTIONS_STATUS, action:any) {
  switch (action.type) {
    case DashboardActions.WIDGET_SET_ISSUER_ACTIONS_STATUS:
      return Object.assign({},action.payload);
    default:
      return state;
  }
}


export function OnlineStatusReducer(state: any = INITIAL_STATE_ONLINE_STATUS, action:any) {
  switch (action.type) {
    case DashboardActions.WIDGET_SET_ONLINE_STATUS:
      return Object.assign({},action.payload);
    default:
      return state;
  }
}
