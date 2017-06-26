import {AgDateShortComponent} from "../shared/components/ag-date-short/ag-date-short.component";
import {AgTranslateMapComponent} from "../shared/components/ag-translate-map/ag-translate-map.component";
import {AgBooleanComponent} from "../shared/components/ag-boolean/ag-boolean.component";
import {AgTimeComponent} from "../shared/components/ag-time/ag-time.component";
import {AgStatusComponent} from "../shared/components/ag-status/ag-status.component";
import {AgAmountComponent} from "../shared/components/ag-amount/ag-amount.component";
export const Reports = {
  Options: {
    hardwareReport: {type: "HARDWARE_ERRORS", id: "hardwareReport", label: "reports.filter.HARDWARE_ERRORS"},
    faultReports: {type: "ERRORS", id: "faultReports", label: "reports.filter.ERRORS"},
    cardRetainReports: {type: "RETAINED_CARDS", id: "cardRetainReports", label: "reports.filter.RETAINED_CARDS"},
    cardActivityReport: {type: "CARD_ACTIVITY", id: "cardActivityReport", label: "reports.filter.CARD_ACTIVITY"},
    accountActivityReport: {
      type: "ACCOUNT_ACTIVITY",
      id: "accountActivityReport",
      label: "reports.filter.ACCOUNT_ACTIVITY"
    },
    transactionsReport: {type: "TRANSACTIONS", id: "transactionsReport", label: "reports.filter.TRANSACTIONS"},
    dispenseSettelmentReport: {type: "SETTLEMENT", id: "dispenseSettelmentReport", label: "reports.filter.SETTLEMENT"}
  },
  retainReason: {
    atmNo: {headerName: "atms.terminalId", field: "atmNo", width: 120, suppressSizeToFit: true},
    cardNumber: {headerName: "atm.cardNumber", field: "cardNumber", width: 120, suppressSizeToFit: true},
    terminalDate: {
      headerName: "general.date",
      field: "terminalDate",
      width: 200,
      cellRendererFramework: AgDateShortComponent,
      suppressSizeToFit: true
    },
    terminalTime: {
      headerName: "general.time",
      field: "terminalTime",
      width: 200,
      cellRendererFramework: AgTimeComponent,
      suppressSizeToFit: true
    },
    retainReason: {
      headerName: "atm.reason",
      field: "retainReason",
      width: 200,
      suppressSizeToFit: true,
      cellRendererFramework: AgTranslateMapComponent
    },
    remove: {
      headerName: "general.remove",
      field: "remove",
      width: 200,
      cellRendererFramework: AgBooleanComponent,
      suppressSizeToFit: true
    },
    removeDate: {
      headerName: "general.removeDate",
      field: "removeDate",
      width: 200,
      cellRendererFramework: AgDateShortComponent,
      suppressSizeToFit: true
    },
    comments: {headerName: "atm.comments", field: "comments"}
  },
  hardwareReport:{
    atmNo: {headerName: "atms.terminalId", field: "atmNo", width: 120, suppressSizeToFit: true},
    date: {
      headerName: "general.date",
      field: "date",
      width: 200,
      cellRendererFramework: AgDateShortComponent,
      suppressSizeToFit: true
    },
    time: {
      headerName: "general.time",
      field: "time",
      width: 200,
      cellRendererFramework: AgTimeComponent,
      suppressSizeToFit: true
    },
    device: {
      headerName: "general.device",
      field: "device",
      width: 200,
      suppressSizeToFit: true
    },
    eventSeverity: {
      headerName: "atms.severity",
      field: "remove",
      width: 200,
      cellRendererFramework: AgStatusComponent,
      suppressSizeToFit: true
    },
    eventTextLocal: {
      headerName: "atms.fullSpec",
      field: "eventTextLocal",
      width: 200
    },
    eventTextEn: {
      headerName: "atms.spec",
      field: "eventTextEn",
      width: 200
    },
  },
  faultReports:{
    atmNo: {headerName: "atms.terminalId", field: "atmNo", width: 120, suppressSizeToFit: true},
    date: {
      headerName: "general.date",
      field: "date",
      width: 200,
      cellRendererFramework: AgDateShortComponent,
      suppressSizeToFit: true
    },
    time: {
      headerName: "general.time",
      field: "time",
      width: 200,
      cellRendererFramework: AgTimeComponent,
      suppressSizeToFit: true
    },
    eventSeverity: {
      headerName: "atms.severity",
      field: "remove",
      width: 200,
      cellRendererFramework: AgStatusComponent,
      suppressSizeToFit: true
    },
    eventTextLocal: {
      headerName: "atms.fullSpec",
      field: "eventTextLocal",
      width: 200
    },
    eventTextEn: {
      headerName: "atms.spec",
      field: "eventTextEn",
      width: 200
    },
    device: {
      headerName: "general.device",
      field: "device",
      width: 200
    }
  },
  transactions:{
    date: {
      headerName: "general.date",
      field: "terminalDate",
      width: 200,
      cellRendererFramework: AgDateShortComponent,
      suppressSizeToFit: true
    },
    time: {
      headerName: "general.time",
      field: "terminalTime",
      width: 200,
      cellRendererFramework: AgTimeComponent,
      suppressSizeToFit: true
    },
    atmNo: {headerName: "atms.terminalId", field: "atmNo", width: 120, suppressSizeToFit: true},
    cardNumber: {headerName: "atm.cardNumber", field: "cardNumber", width: 120, suppressSizeToFit: true},
    transactionType: {headerName: 'atms.transactionType', field: 'transactionType', width: 140,suppressSizeToFit: true,cellRendererFramework: AgTranslateMapComponent},
    amount: {headerName: 'atms.amount', field: 'amount', width: 110,suppressSizeToFit: true,cellRendererFramework: AgAmountComponent},
    transactionStatus: {headerName: 'general.transactionStatus', field: 'transactionStatus', width: 180,suppressSizeToFit: true,cellRendererFramework: AgStatusComponent},
    approver: {headerName: 'general.approver', field: 'approver', width:150,cellRendererFramework: AgTranslateMapComponent,suppressSizeToFit: true},
    rejectReason: {headerName: 'general.rejectReason', field: 'rejectReason', width: 150,suppressSizeToFit: true,cellRendererFramework: AgTranslateMapComponent},
    retainReason: {headerName: 'general.retainReason', field: 'retainReason', width: 150,suppressSizeToFit: true,cellRendererFramework: AgTranslateMapComponent},
    atmFeeAmount: {headerName: 'general.atmFeeAmount', field: 'atmFeeAmount', width: 100,suppressSizeToFit: true,cellRendererFramework: AgAmountComponent},
    businessDay: {headerName: 'general.businessDay', field: 'businessDay', width: 140,suppressSizeToFit: true,cellRendererFramework: AgDateShortComponent},
    transactionId: {headerName: 'atms.transactionId', field: 'transactionId', width: 150,suppressSizeToFit: true},
    bankNo: {headerName: 'atms.bank', field: 'bankNo', width: 100,suppressSizeToFit: true}
  },
  settlement:{
    id: {headerName: "general.id", field: "id",width: 60, suppressSizeToFit: true},
    transactionId: {headerName: "atms.transactionId", field: "transactionId", width: 150, suppressSizeToFit: true},
    terminalDate: {
      headerName: "general.date",
      field: "terminalDate",
      width: 130,
      cellRendererFramework: AgDateShortComponent,
      suppressSizeToFit: true
    },
    terminalTime: {
      headerName: "general.time",
      field: "terminalTime",
      width: 130,
      cellRendererFramework: AgTimeComponent,
      suppressSizeToFit: true
    },
    atmNo: {headerName: "atms.terminalId", field: "atmNo"},
    denomination: {headerName: "atms.denomination", field: "denomination"},
    currency: {headerName: "atms.currencyCode", field: "currency"},
    countQswitch: {headerName: "atms.countQswitch", field: "countQswitch"},
    amountQswitch: {headerName: "atms.amountQswitch", field: "amountQswitch"},
    countAtm: {headerName: "atms.countAtm", field: "atmNo"},
    differenceBills: {headerName: "atms.differenceBills", field: "differenceBills"},
    differenceAmount: {headerName: "atms.differenceAmount", field: "differenceAmount" },

  }
};



