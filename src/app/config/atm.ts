import {AgProgressComponent} from "../shared/components/ag-progress/ag-progress.component";
import {AgStatusComponent} from "../shared/components/ag-status/ag-status.component";
import {AgDateComponent} from "../shared/components/ag-date/ag-date.component";
export const Atm = {
  Tabs: {
    'atmStatus': {label: 'atm.tabs.status', state: 'status'},
    'atmAccessories': {label: 'atm.tabs.accessories', state: 'accessories'},
    'retainedCards': {label: 'atm.tabs.retainedCards', state: 'retained-cards'},
    'atmSettings': {label: 'atm.tabs.settings', state: 'settings'},
    'alerts': {label: 'atm.tabs.notifications', state: 'notifications'},
    'events': {label: 'atm.tabs.events', state: 'events'},
    'transactions': {label: 'atm.tabs.transactions', state: 'transactions'}
  },
  Accessories: {
    CashPool: {
      item: {headerName: "atm.item", field: "item", width: 80},
      propriety: {headerName: "atm.propriety", field: "propriety", width: 80, cellRendererFramework: AgStatusComponent},
      inventory: {
        headerName: "atm.inventory",
        field: "inventory",
        width: 75,
        cellRendererFramework: AgProgressComponent
      },
      coin: {headerName: "atm.coin", field: "coin", width: 60},
      value: {headerName: "atm.value", field: "value", width: 60},
      loaded: {headerName: "atm.loaded", field: "loaded", width: 60},
      withdrawed: {headerName: "atm.withdrawed", field: "withdrawed", width: 60},
      rejected: {headerName: "atm.rejected", field: "rejected", width: 60},
      left: {headerName: "atm.left", field: "left", width: 60}
    },
    LastStrokes: {
      value: {headerName: "atm.value", field: "value", width: 100},
      propriety: {
        headerName: "atm.propriety",
        field: "propriety",
        width: 100,
        cellRendererFramework: AgStatusComponent
      },
      coin: {headerName: "atm.coin", field: "coin", width: 100},
      amount: {headerName: "atm.amount", field: "amount", width: 100},
      difference: {headerName: "atm.difference", field: "difference", width: 100}
    },
    Printers: {
      item: {headerName: "atm.item", field: "item", width: 170},
      propriety: {headerName: "atm.propriety", field: "propriety", width: 170, cellRendererFramework: AgStatusComponent}
    },
    Checks: {
      item: {headerName: "atm.item", field: "item", width: 90},
      propriety: {headerName: "atm.propriety", field: "propriety", width: 90, cellRendererFramework: AgStatusComponent},
      inventory: {
        headerName: "atm.inventory",
        field: "inventory",
        width: 90,
        cellRendererFramework: AgProgressComponent
      },
      counter: {headerName: "atm.counter", field: "counter", width: 90}
    },
    Other: {
      item: {headerName: "atm.item", field: "item", width: 90},
      propriety: {headerName: "atm.propriety", field: "propriety", width: 90, cellRendererFramework: AgStatusComponent},
      inventory: {
        headerName: "atm.inventory",
        field: "inventory",
        width: 90,
        cellRendererFramework: AgProgressComponent
      },
      counter: {headerName: "atm.counter", field: "counter", width: 90}
    }
  },
  RetainedCards: {
    cardNumber: {headerName: "atm.cardNumber", field: "cardNumber", width: 90},
    retainTime: {headerName: "atm.retainTime", field: "retainTime", width: 120, cellRendererFramework: AgDateComponent},
    reason: {headerName: "atm.reason", field: "reason", width: 90},
    resetDate: {headerName: "atm.resetDate", field: "resetDate", width: 90},
    comments: {headerName: "atm.comments", field: "comments", width: 90},

  }
}
