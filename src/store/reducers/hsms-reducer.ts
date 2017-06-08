import { HsmsActions } from '../actions/hsms-actions'
const INITIAL_STATE_HSM: any = null;
const INITIAL_STATE_STATISTICS: any = null;

export function HsmReducer(state: any = INITIAL_STATE_HSM, action:any) {
  switch (action.type) {
    case HsmsActions.HSMS_SET:
      return Object.assign({},action.payload);
    default:
      return state;
  }
}
export function HsmStatisticsReducer(state: any = INITIAL_STATE_STATISTICS, action:any) {
  switch (action.type) {
    case HsmsActions.HSMS_SET_STATISTICS:
      return Object.assign({},action.payload);
    default:
      return state;
  }
}
