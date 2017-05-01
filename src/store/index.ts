import {combineReducers} from 'redux';
import {errorReducer} from './reducers/error-handler-reducer';
import {loaderReducer} from './reducers/loader-reducer';
import {userSettingsReducer} from "./reducers/userSettings-reducer";



export class IStore {
  loader?: boolean;
  errorHandler?: any;
  userSettings?:any;
}

export const rootReducer = combineReducers<IStore>({
  loader: loaderReducer,
  errorHandler: errorReducer,
  userSettings: userSettingsReducer
});

export const enhancers = [
  // persistState('var', { key: 'xxx' })
];
