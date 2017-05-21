import { AtmsActions } from '../actions/atms-actions'
const INITIAL_STATE_INVENTORY: any = null;
const INITIAL_STATE_EVENTS: any = null;

export function AtmsInventoryReducer(state: any = INITIAL_STATE_INVENTORY, action:any) {
  switch (action.type) {
    case AtmsActions.ATMS_SET_INVENTORY:
      return Object.assign({},action.payload);
    default:
      return state;
  }
}
export function AtmsEventsReducer(state: any = INITIAL_STATE_EVENTS, action:any) {
  switch (action.type) {
    case AtmsActions.ATMS_SET_EVENTS:
      return [...action.payload];
    default:
      return state;
  }
}
