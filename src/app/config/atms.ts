import {AgStatusComponent} from "../shared/components/ag-status/ag-status.component";
import {AgDateComponent} from "../shared/components/ag-date/ag-date.component";
import {AgAmountComponent} from "../shared/components/ag-amount/ag-amount.component";
import {AgDateShortComponent} from "../shared/components/ag-date-short/ag-date-short.component";
import {AgTimeComponent} from "../shared/components/ag-time/ag-time.component";
import {AgTranslateMapComponent} from "../shared/components/ag-translate-map/ag-translate-map.component";
import {AgDiv100Component} from "../shared/components/ag-div100/ag-div100.component";
export const Atms = {
  Tabs: {
    atmsSupply: {label: 'atms.tabs.inventory', state: 'inventory'},
    atmsStatus: {label: 'atms.tabs.status', state: 'status'},
    alerts: {label: 'atms.tabs.notifications', state: 'notifications'},
    events: {label: 'atms.tabs.events', state: 'events'},
    transactions: {label: 'atms.tabs.transactions', state: 'transactions'}
  },
  Inventory: {
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
    closedReason: {headerName: "atms.closeReason", field: "closedReason", width: 120,cellRendererFramework: AgTranslateMapComponent},
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
      cellRendererFramework:AgDiv100Component
    },
    cardsRetained: {headerName: "atms.retainedCards", field: "cardsRetained", width: 150},
    branch: {headerName: "atms.branch", field: "branch", width: 100},
    lastCardSettlement: {
      headerName: "atms.lastCardSettlement",
      field: "lastCardSettlement",
      width: 220,
      cellRendererFramework: AgDateComponent
    },
    lastSettlement: {
      headerName: "atms.lastSettlement",
      field: "lastSettlement",
      width: 220,
      cellRendererFramework: AgDateComponent
    },
    lastGoodTransaction: {
      headerName: "atms.lastActivity",
      field: "lastGoodTransaction",
      width: 220,
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
    closedReason: {headerName: "atms.closeReason", field: "closedReason", width: 150,cellRendererFramework: AgTranslateMapComponent},
    cashDepositColor: {
      headerName: "atms.cashDeposit",
      field: "cashDepositColor",
      width: 200,
      cellRendererFramework: AgStatusComponent
    },
    checkDepositColor: {
      headerName: "atms.checkDeposit",
      field: "checkDepositColor",
      width: 200,
      cellRendererFramework: AgStatusComponent
    },
    cardReaderColor: {
      headerName: "atms.cardReader", field: "cardReaderColor", width: 200,
      cellRendererFramework: AgStatusComponent
    },
    printerColor: {
      headerName: "atms.printer", field: "printerColor", width: 200,
      cellRendererFramework: AgStatusComponent
    },
    eppColor: {
      headerName: "atms.epp",
      field: "eppColor",
      width: 200,
      cellRendererFramework: AgStatusComponent
    },
    branch: {
      headerName: "atms.branch",
      field: "branch",
      width: 160
    },
    belong: {headerName: "atms.belong", field: "belong", width: 120,cellRendererFramework: AgTranslateMapComponent}

  },
  Notifications: {
    atmNo: {headerName: 'atms.terminalId', field: 'atmNo', width: 80,suppressSizeToFit: true},
    date: {headerName: 'general.date', field: 'date', width: 120,suppressSizeToFit: true,cellRendererFramework: AgDateShortComponent},
    time: {headerName: 'general.time', field: 'time', width: 120,suppressSizeToFit: true,cellRendererFramework: AgTimeComponent},
    eventCode: {headerName: 'atms.code', field: 'eventCode', width: 100,suppressSizeToFit: true},
    eventTextEn: {headerName: 'atms.spec', field: 'eventTextEn', width: 200},
    eventTextLocal: {headerName: 'atms.fullSpec', field: 'eventTextLocal', width: 200},
    eventDestinations: {headerName: 'atms.eventDestinations', field: 'eventDestinations', width: 200},
    eventSeverity: {headerName: 'atms.severity', field: 'eventSeverity', width: 80,cellRendererFramework: AgStatusComponent},
    device: {headerName: 'general.device', field: 'device', width: 200},
    actionItem:{headerName: 'atms.actionItem', field:'actionItem', width:200}
  },
  Events: {
    atmNo: {headerName: 'atms.terminalId', field: 'atmNo', width: 80,suppressSizeToFit: true},
    date: {headerName: 'general.date', field: 'date', width: 120,suppressSizeToFit: true,cellRendererFramework: AgDateShortComponent},
    time: {headerName: 'general.time', field: 'time', width: 120,suppressSizeToFit: true,cellRendererFramework: AgTimeComponent},
    eventCode: {headerName: 'atms.code', field: 'eventCode', width: 100,suppressSizeToFit: true},
    eventTextEn: {headerName: 'atms.spec', field: 'eventTextEn', width: 200},
    eventTextLocal: {headerName: 'atms.fullSpec', field: 'eventTextLocal', width: 200},
    eventDestinations: {headerName: 'atms.eventDestinations', field: 'eventDestinations', width: 200},
    eventSeverity: {headerName: 'atms.severity', field: 'eventSeverity', width: 80,cellRendererFramework: AgStatusComponent},
    device: {headerName: 'atms.device', field: 'device', width: 200},
    actionItem:{headerName: 'atms.actionItem', field:'actionItem', width:200}
  },
  Transactions: {
    transactionId: {headerName: 'atms.transactionId', field: 'transactionId', width: 150,suppressSizeToFit: true},
    terminalDate: {headerName: 'general.date', field: 'terminalDate', width: 100, cellRendererFramework: AgDateShortComponent,suppressSizeToFit: true},
    terminalTime: {headerName: 'general.time', field: 'terminalTime', width: 100, cellRendererFramework: AgTimeComponent,suppressSizeToFit: true},
    atmNo: {headerName: 'atms.terminalId', field: 'atmNo', width: 100,suppressSizeToFit: true},
    cardNumber: {headerName: 'atms.card', field: 'cardNumber', width: 100,suppressSizeToFit: true},
    bankNo: {headerName: 'atms.bank', field: 'bankNo', width: 100,suppressSizeToFit: true},
    transactionType: {headerName: 'atms.transactionType', field: 'transactionType', width: 140,suppressSizeToFit: true,cellRendererFramework: AgTranslateMapComponent},
    amount: {headerName: 'atms.amount', field: 'amount', width: 110,suppressSizeToFit: true,cellRendererFramework: AgAmountComponent},
    transactionStatus: {headerName: 'general.transactionStatus', field: 'transactionStatus', width: 180,suppressSizeToFit: true,cellRendererFramework: AgStatusComponent},
    approver: {headerName: 'general.approver', field: 'approver', width:150,cellRendererFramework: AgTranslateMapComponent,suppressSizeToFit: true},
    rejectReason: {headerName: 'general.rejectReason', field: 'rejectReason', width: 150,suppressSizeToFit: true,cellRendererFramework: AgTranslateMapComponent},
    atmFeeAmount: {headerName: 'general.atmFeeAmount', field: 'atmFeeAmount', width: 100,suppressSizeToFit: true,cellRendererFramework: AgAmountComponent},
    businessDay: {headerName: 'general.businessDay', field: 'businessDay', width: 140,suppressSizeToFit: true,cellRendererFramework: AgDateShortComponent}
  },
  Actions:{
    CLOSE_ALL:"CLOSE_ALL",
    OPEN_ALL:"OPEN_ALL",
    CLOSE:"CLOSE",
    OPEN:"OPEN"
  }
};
