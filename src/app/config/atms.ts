import {AgStatusComponent} from "../shared/components/ag-status/ag-status.component";
import {AgDateComponent} from "../shared/components/ag-date/ag-date.component";
import {AgAmountComponent} from "../shared/components/ag-amount/ag-amount.component";
import {AgDateShortComponent} from "../shared/components/ag-date-short/ag-date-short.component";
import {AgTimeComponent} from "../shared/components/ag-time/ag-time.component";
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
    lastSettlement: {
      headerName: "atms.lastSettlement",
      field: "lastSettlement",
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
      headerName: "atms.terminalId", field: "terminalId", width: 100
    },
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
    cardReaderColor: {
      headerName: "atms.cardReader", field: "cardReaderColor", width: 150,
      cellRendererFramework: AgStatusComponent
    },
    printerColor: {
      headerName: "atms.printer", field: "printerColor", width: 100,
      cellRendererFramework: AgStatusComponent
    },
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
  Notifications: {
    atmNo: {headerName: 'atms.terminalId', field: 'atmNo', width: 80,suppressSizeToFit: true},
    date: {headerName: 'atms.date', field: 'date', width: 120,suppressSizeToFit: true,cellRendererFramework: AgDateShortComponent},
    time: {headerName: 'atms.time', field: 'time', width: 120,suppressSizeToFit: true,cellRendererFramework: AgTimeComponent},
    eventCode: {headerName: 'atms.code', field: 'eventCode', width: 100,suppressSizeToFit: true},
    eventTextEn: {headerName: 'atms.spec', field: 'eventTextEn', width: 200},
    eventTextLocal: {headerName: 'atms.fullSpec', field: 'eventTextLocal', width: 200},
    eventDestinations: {headerName: 'atms.eventDestinations', field: 'eventDestinations', width: 200},
    eventSeverity: {headerName: 'atms.severity', field: 'eventSeverity', width: 200,cellRendererFramework: AgStatusComponent},
    device: {headerName: 'atms.device', field: 'device', width: 200}
  },
  Events: {
    atmNo: {headerName: 'atms.terminalId', field: 'atmNo', width: 80,suppressSizeToFit: true},
    date: {headerName: 'atms.date', field: 'date', width: 120,suppressSizeToFit: true,cellRendererFramework: AgDateShortComponent},
    time: {headerName: 'atms.time', field: 'time', width: 120,suppressSizeToFit: true,cellRendererFramework: AgTimeComponent},
    eventCode: {headerName: 'atms.code', field: 'eventCode', width: 100,suppressSizeToFit: true},
    eventTextEn: {headerName: 'atms.spec', field: 'eventTextEn', width: 200},
    eventTextLocal: {headerName: 'atms.fullSpec', field: 'eventTextLocal', width: 200},
    eventDestinations: {headerName: 'atms.eventDestinations', field: 'eventDestinations', width: 200},
    eventSeverity: {headerName: 'atms.severity', field: 'eventSeverity', width: 200,cellRendererFramework: AgStatusComponent},
    device: {headerName: 'atms.device', field: 'device', width: 200}
  },
  Transactions: {
    transactionId: {headerName: 'atms.transactionId', field: 'transactionId', width: 110,suppressSizeToFit: true},
    time: {headerName: 'atms.time', field: 'time', width: 160, cellRendererFramework: AgDateComponent},
    terminalId: {headerName: 'atms.terminalId', field: 'terminalId', width: 80,suppressSizeToFit: true},
    card: {headerName: 'atms.card', field: 'card', width: 60},
    bank: {headerName: 'atms.bank', field: 'bank', width: 60},
    actionType: {headerName: 'atms.actionType', field: 'actionType', width: 100},
    amount: {headerName: 'atms.amount', field: 'amount', width: 80,suppressSizeToFit: true},
    endTransaction: {headerName: 'atms.endTransaction', field: 'endTransaction', width: 110},
    verifiedBy: {headerName: 'atms.verifiedBy', field: 'verifiedBy', width:100},
    rejectionReason: {headerName: 'atms.rejectionReason', field: 'rejectionReason', width: 80},
    deviceFee: {headerName: 'atms.deviceFee', field: 'deviceFee', width: 85},
    businessDay: {headerName: 'atms.businessDay', field: 'businessDay', width: 90}
  }
};
