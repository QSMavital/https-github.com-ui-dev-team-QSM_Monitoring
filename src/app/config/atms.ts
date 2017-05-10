import {AgStatusComponent} from "../shared/components/ag-status/ag-status.component";
import {AgDateComponent} from "../shared/components/ag-date/ag-date.component";
import {AgAmountComponent} from "../shared/components/ag-amount/ag-amount.component";
export const Atms = {
  Tabs: {
    atmsSupply: {label: 'atms.tabs.inventory', state: 'inventory'},
    atmsStatus: {label: 'atms.tabs.status', state: 'status'},
    alerts: {label: 'atms.tabs.notifications', state: 'notifications'},
    events: {label: 'atms.tabs.events', state: 'events'},
    transactions: {label: 'atms.tabs.transactions', state: 'transactions'}
  },
  Inventory: {
    terminalId: {headerName: "atms.terminalId", field: "terminalId", width: 100},
    atmName: {headerName: "atms.atmName", field: "atmName", width: 130},
    terminalStatus: {
      headerName: "atms.terminalStatus",
      field: "terminalStatus",
      width: 200,
      cellRendererFramework: AgStatusComponent
    },
    closedReason: {headerName: "atms.closeReason", field: "closedStatus", width: 120},
    lastGoodWdrl: {
      headerName: "atms.lastWithdrawal",
      field: "lastGoodWdrl",
      width: 160,
      cellRendererFramework: AgDateComponent
    },
    totalRemaining: {
      headerName: "atms.totalRemaining",
      field: "totalRemaining",
      width: 150,
      cellRendererFramework: AgAmountComponent
    },
    cardsRetained: {headerName: "atms.retainedCards", field: "cardsRetained", width: 150},
    branch: {headerName: "atms.branch", field: "branch", width: 100},
    lastCardSettlement: {
      headerName: "atms.lastCardSettlement",
      field: "lastCardSettlement",
      width: 160,
      cellRendererFramework: AgDateComponent
    },
    lastGoodTransaction: {
      headerName: "atms.lastActivity",
      field: "lastGoodTransaction",
      width: 160,
      cellRendererFramework: AgDateComponent
    },
    cardSettlement: {headerName: "atms.cardSettlement", field: "cardSettlement", width: 120}
  },
  Status: {
    terminalId: {
      cellRenderer: 'group',
      cellRendererParams: {checkbox: true},
      headerName: "atms.terminalId", field: "terminalId", width: 100},
    atmName: {headerName: "atms.atmName", field: "atmName", width: 130},
    terminalStatus: {
      headerName: "atms.terminalStatus",
      field: "terminalStatus",
      width: 200,
      cellRendererFramework: AgStatusComponent
    },
    closedReason: {headerName: "atms.closeReason", field: "closedStatus", width: 120},
    cashDepositColor: {
      headerName: "atms.cashDeposit",
      field: "cashDepositColor",
      width: 160,
      cellRendererFramework: AgStatusComponent
    },
    checkDepositColor: {
      headerName: "atms.checkDeposit",
      field: "checkDepositColor",
      width: 150,
      cellRendererFramework: AgStatusComponent
    },
    cardReaderColor: {headerName: "atms.cardReader", field: "cardReaderColor", width: 150,
      cellRendererFramework: AgStatusComponent},
    printerColor: {headerName: "atms.printer", field: "printerColor", width: 100,
      cellRendererFramework: AgStatusComponent},
    eppColor: {
      headerName: "atms.epp",
      field: "eppColor",
      width: 160,
      cellRendererFramework: AgStatusComponent
    },
    branch: {
      headerName: "atms.branch",
      field: "branch",
      width: 160
    },
    belong: {headerName: "atms.belong", field: "belong", width: 120}

  },

}
