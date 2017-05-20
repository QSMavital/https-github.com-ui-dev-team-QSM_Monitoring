import {AgProgressComponent} from "../shared/components/ag-progress/ag-progress.component";
import {AgStatusComponent} from "../shared/components/ag-status/ag-status.component";
export const Atm = {
  Tabs: {
    'atmStatus': {label: 'atm.tabs.status', state: 'status'},
    'atmAccessories': {label: 'atm.tabs.accessories', state: 'accessories'},
    'retainedCards': {label: 'atm.tabs.retained_cards', state: 'retained-cards'},
    'atmSettings': {label: 'atm.tabs.settings', state: 'settings'},
    'alerts': {label: 'atm.tabs.notifications', state: 'notifications'},
    'events': {label: 'atm.tabs.events', state: 'events'},
    'transactions': {label: 'atm.tabs.transactions', state: 'transactions'}
  },
  CashPool: {
    item: {headerName: "atm.item", field: "item", width: 80},
    propriety: {headerName: "atm.propriety", field: "propriety", width: 80, cellRendererFramework: AgStatusComponent},
    inventory: {headerName: "atm.inventory", field: "inventory", width: 75, cellRendererFramework: AgProgressComponent},
    coin: {headerName: "atm.coin", field: "coin", width: 60},
    value: {headerName: "atm.value", field: "value", width: 60},
    loaded: {headerName: "atm.loaded", field: "loaded", width: 60},
    withdrawed: {headerName: "atm.withdrawed", field: "withdrawed", width: 60},
    rejected: {headerName: "atm.rejected", field: "rejected", width: 60},
    left: {headerName: "atm.left", field: "left", width: 60}
  },
  LastStrokes:{
    value: {headerName: "atm.value", field: "value", width: 100},
    propriety: {headerName: "atm.propriety", field: "propriety", width: 100, cellRendererFramework: AgStatusComponent},
    coin: {headerName: "atm.coin", field: "coin", width: 100},
    amount: {headerName: "atm.amount", field: "amount", width: 100},
    difference: {headerName: "atm.difference", field: "difference", width: 100}
  },
  Printers:{
    item: {headerName: "atm.item", field: "item", width: 150},
    propriety: {headerName: "atm.propriety", field: "propriety", width: 150, cellRendererFramework: AgStatusComponent}
  },
  Checks:{
    item: {headerName: "atm.item", field: "item", width: 75},
    propriety: {headerName: "atm.propriety", field: "propriety", width: 75, cellRendererFramework: AgStatusComponent},
    inventory: {headerName: "atm.inventory", field: "inventory", width: 75, cellRendererFramework: AgProgressComponent},
    counter: {headerName: "atm.counter", field: "counter", width: 75}
  },
  Other:{
    item: {headerName: "atm.item", field: "item", width: 75},
    propriety: {headerName: "atm.propriety", field: "propriety", width: 75, cellRendererFramework: AgStatusComponent},
    inventory: {headerName: "atm.inventory", field: "inventory", width: 75, cellRendererFramework: AgProgressComponent},
    counter: {headerName: "atm.counter", field: "counter", width: 75}
  }
}
