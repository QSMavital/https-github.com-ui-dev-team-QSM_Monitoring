import { ErrorHandlerActions } from '../actions/error-handler-actions'
const INITIAL_STATE: any = null;

export function errorReducer(state: any = INITIAL_STATE, action:any) {
  switch (action.type) {
    case ErrorHandlerActions.ERROR_HANDLER:
      return Object.assign({},action.payload,{timestamp:new Date().getTime()});
    default:
      return state;
  }
}
