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
import {AtmsInventoryReducer, AtmsEventsReducer, AtmsTransactionsReducer} from "./reducers/atms-reducer";
import {
  AtmStatusReducer, AtmAccessoriesReducer, AtmRetainedCardsReducer,
  AtmSettingsReducer
} from "./reducers/atm-reducer";
import {notificationsReducer} from "./reducers/notifications-reducer";
import {HsmStatisticsReducer, HsmReducer} from "./reducers/hsms-reducer";


export class IStore {
  loader?: boolean;
  errorHandler?: any;
  notifications?: any;
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
  events?: any;
  transactions?: any;
  // transaction?: any;
}

class IAtm {
  status?: any;
  accessories?: any;
  retainedCards?: any;
  settings?: any;
}

class IHsm {
  status?: any;
  statistics?: any;
}

export const rootReducer = combineReducers<IStore>({
  loader: loaderReducer,
  errorHandler: errorReducer,
  notifications: notificationsReducer,
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
    inventory: AtmsInventoryReducer,
    events: AtmsEventsReducer,
    transactions: AtmsTransactionsReducer
  }),
  atm: combineReducers<IAtm>({
    status: AtmStatusReducer,
    accessories: AtmAccessoriesReducer,
    retainedCards: AtmRetainedCardsReducer,
    settings: AtmSettingsReducer
  }),
  hsm: combineReducers<IHsm>({
    status: HsmReducer,
    statistics: HsmStatisticsReducer
  })
});

export const enhancers = [
  // persistState('var', { key: 'xxx' })
];
