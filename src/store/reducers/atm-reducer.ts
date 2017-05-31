import { AtmActions } from '../actions/atm-actions'
const INITIAL_STATE_STATUS: any = null;

export function AtmStatusReducer(state: any = INITIAL_STATE_STATUS, action:any) {
  switch (action.type) {
    case AtmActions.ATM_SET_STATUS:
      return Object.assign({},action.payload);
    default:
      return state;
  }
}
