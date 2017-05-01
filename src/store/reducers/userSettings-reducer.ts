import { UserSettingsActions } from '../actions/userSettings-actions';
const INITIAL_STATE: any = null;

export function userSettingsReducer(state: any = INITIAL_STATE, action:any) {
  switch (action.type) {
    case UserSettingsActions.SET_USER_SETTINGS:
      return Object.assign({},state,action.payload);
    default:
      return state;
  }
}
