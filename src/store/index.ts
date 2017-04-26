import {combineReducers} from 'redux';
import {errorReducer} from './reducers/error-handler-reducer';
import {loaderReducer} from './reducers/loader-reducer';



export class IStore {
  loader?: boolean;
  errorHandler?: any;
}

export const rootReducer = combineReducers<IStore>({
  loader: loaderReducer,
  errorHandler: errorReducer
});

export const enhancers = [
  // persistState('var', { key: 'xxx' })
];
