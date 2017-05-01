import { GeneralCustomerActions } from '../actions/generalCustomer-actions';
const INITIAL_STATE: any = null;

export function generalCustomerReducer(state: any = INITIAL_STATE, action:any) {
  switch (action.type) {
    case GeneralCustomerActions.SET_GENERAL_CUSTOMER:
      return Object.assign({},state,action.payload);
    default:
      return state;
  }
}
