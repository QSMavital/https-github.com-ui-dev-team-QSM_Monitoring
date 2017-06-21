import {AgDateShortComponent} from "../shared/components/ag-date-short/ag-date-short.component";
import {AgTranslateMapComponent} from "../shared/components/ag-translate-map/ag-translate-map.component";
import {AgBooleanComponent} from "../shared/components/ag-boolean/ag-boolean.component";
import {AgTimeComponent} from "../shared/components/ag-time/ag-time.component";
import {AgStatusComponent} from "../shared/components/ag-status/ag-status.component";
import {AgAmountComponent} from "../shared/components/ag-amount/ag-amount.component";
export const Reports = {
  Options: [
    {type: "HARDWARE_ERRORS", id: 1, label: "reports.filter.HARDWARE_ERRORS"},
    {type: "ERRORS", id: 2, label: "reports.filter.ERRORS"},
    {type: "RETAINED_CARDS", id: 3, label: "reports.filter.RETAINED_CARDS"},
    {type: "CARD_ACTIVITY", id: 4, label: "reports.filter.CARD_ACTIVITY"},
    {type: "ACCOUNT_ACTIVITY", id: 5, label: "reports.filter.ACCOUNT_ACTIVITY"},
    {type: "TRANSACTIONS", id: 6, label: "reports.filter.TRANSACTIONS"},
    {type: "SETTLEMENT", id: 7, label: "reports.filter.SETTLEMENT"}
  ],
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
  }
};

