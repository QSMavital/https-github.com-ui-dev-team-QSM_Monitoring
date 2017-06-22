import { ReportsActions } from '../actions/reports-actions'
const INITIAL_STATE_REPORTS_SETTLEMENTS: any = null;

export function ReportsSettlementReducer(state: any = INITIAL_STATE_REPORTS_SETTLEMENTS, action:any) {
  switch (action.type) {
    case ReportsActions.REPORTS_SET_SETTLEMENT:
      return Object.assign({},action.payload);
    default:
      return state;
  }
}
