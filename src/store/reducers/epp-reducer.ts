import { EppActions } from '../actions/epp-actions'
const INITIAL_STATE_EPP: any = null;

export function EppReducer(state: any = INITIAL_STATE_EPP, action:any) {
  switch (action.type) {
    case EppActions.EPP_SET:
      return Object.assign({},action.payload);
    default:
      return state;
  }
}
