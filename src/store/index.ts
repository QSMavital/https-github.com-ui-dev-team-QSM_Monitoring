import {combineReducers} from 'redux';
import {errorReducer} from './reducers/error-handler-reducer';
import {loaderReducer} from './reducers/loader-reducer';
import {userSettingsReducer} from "./reducers/userSettings-reducer";
import {generalCustomerReducer} from "./reducers/generalCustomer-reducer";
import {
  IssuerActionsStatusReducer,
  ActionsStatusReducer,
  ConnectionStatusReducer,
  DeviceStatusReducer,
  OnlineStatusReducer
} from "./reducers/dashboard-reducer";
import {AtmsInventoryReducer} from "./reducers/atms-reducer";


export class IStore {
  loader?: boolean;
  errorHandler?: any;
  userSettings?: any;
  generalCustomer?: any;
}

class IDashboard {
  connectionStatus?: any;
  deviceStatus?: any;
  onlineStatus?: any;
  issuerActionsStatus?: any;
  actionsStatus?: any;
}
class IAtms {
  inventory?: any;
}

export const rootReducer = combineReducers<IStore>({
  loader: loaderReducer,
  errorHandler: errorReducer,
  userSettings: userSettingsReducer,
  generalCustomer: generalCustomerReducer,
  dashboard: combineReducers<IDashboard>({
    connectionStatus: ConnectionStatusReducer,
    deviceStatus: DeviceStatusReducer,
    onlineStatus: OnlineStatusReducer,
    issuerActionsStatus: IssuerActionsStatusReducer,
    actionsStatus: ActionsStatusReducer
  }),
  atms: combineReducers<IAtms>({
    inventory: AtmsInventoryReducer
  })
});

export const enhancers = [
  // persistState('var', { key: 'xxx' })
];
