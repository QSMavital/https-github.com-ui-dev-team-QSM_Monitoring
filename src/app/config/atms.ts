import {AgStatusComponent} from "../shared/components/ag-status/ag-status.component";
export const Atms = {
  Tabs: {
    INVENTORY_OF_ATMS: {label: 'atms.tabs.inventory', state: 'inventory'},
    ALL_STATUSES: {label: 'atms.tabs.status', state: 'status'},
    ALL_ALERTS: {label: 'atms.tabs.notifications', state: 'notifications'},
    ALL_EVENTS: {label: 'atms.tabs.events', state: 'events'},
    ALL_MOVEMENTS: {label: 'atms.tabs.transactions', state: 'transactions'}
  },
  Inventory: {
    terminalId: {headerName: "atms.inventory.terminalId", field: "terminalId", width: 100},
    atmName: {headerName: "atms.inventory.atmName", field: "atmName", width: 100},
    terminalStatus: {
      headerName: "atms.inventory.terminalStatus",
      field: "terminalStatus",
      width: 100,
      cellRendererFramework: AgStatusComponent
    },
    closeReason: {headerName: "atms.inventory.closeReason", field: "closedStatus", width: 100},
    lastGoodWdrl: {headerName: "atms.inventory.lastWithdrawal", field: "lastGoodWdrl", width: 100},
    totalRemaining: {headerName: "atms.inventory.totalRemaining", field: "totalRemaining", width: 100},
    retainedCards: {headerName: "atms.inventory.retainedCards", field: "retainedCards", width: 100},
    lastCardSettlement: {headerName: "atms.inventory.lastCardSettlement", field: "lastCardSettlement", width: 100},
    cardSettlement: {headerName: "atms.inventory.cardSettlement", field: "cardSettlement", width: 100},
    lastActivity: {headerName: "atms.inventory.lastActivity", field: "lastActivity", width: 100},
  },
  Status: {
    terminalId: {headerName: "atms.inventory.terminalId", field: "terminalId", width: 100,cellRenderer: 'group', cellRendererParams: {checkbox: true}},
    atmName: {headerName: "atms.inventory.atmName", field: "atmName", width: 100},
    terminalStatus: {
      headerName: "atms.inventory.terminalStatus",
      field: "terminalStatus",
      width: 300,
      cellRendererFramework: AgStatusComponent
    }
  },

}

