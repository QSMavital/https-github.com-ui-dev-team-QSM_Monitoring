import { LoaderActions } from '../actions/loader-actions';
const INITIAL_STATE: any = {status:false,timestamp:new Date().getTime()};

export function loaderReducer(state: any = INITIAL_STATE, action:any) {
  switch (action.type) {
    case LoaderActions.SHOW_LOADER:
      return Object.assign({},state,{status:true,timestamp:new Date().getTime()});
    case LoaderActions.HIDE_LOADER:
      return Object.assign({},state,{status:false,timestamp:new Date().getTime()});
    default:
      return state;
  }
}
