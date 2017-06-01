import { AtmActions } from '../actions/atm-actions'
const INITIAL_STATE_STATUS: any = null;
const INITIAL_STATE_ACCESSORIES: any = null;
const INITIAL_STATE_RETAINED_CARDS: any = null;

export function AtmStatusReducer(state: any = INITIAL_STATE_STATUS, action:any) {
  switch (action.type) {
    case AtmActions.ATM_SET_STATUS:
      return Object.assign({},action.payload);
    default:
      return state;
  }
}
export function AtmAccessoriesReducer(state: any = INITIAL_STATE_ACCESSORIES, action:any) {
  switch (action.type) {
    case AtmActions.ATM_SET_ACCESSORIES:
      return Object.assign({},action.payload);
    default:
      return state;
  }
}
export function AtmRetainedCardsReducer(state: any = INITIAL_STATE_RETAINED_CARDS, action:any) {
  switch (action.type) {
    case AtmActions.ATM_SET_RETIANED_CARDS:
      return [...action.payload];
    default:
      return state;
  }
}
