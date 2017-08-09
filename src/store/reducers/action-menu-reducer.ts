import { ActionMenuActions } from '../actions/action-menu-actions'

const INITIAL_ACTUIN_MENU_STATUS: any = null;

export function actionMenuReducer(state: any = INITIAL_ACTUIN_MENU_STATUS, action:any) {
  switch (action.type) {
    case ActionMenuActions.GENERAL_SET_VERSION:
   return Object.assign({},action.payload);
    default:
      return state;
  }
}