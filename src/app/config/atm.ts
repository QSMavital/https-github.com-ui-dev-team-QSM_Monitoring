import {AgProgressComponent} from "../shared/components/ag-progress/ag-progress.component";
import {AgStatusComponent} from "../shared/components/ag-status/ag-status.component";
import {AgDateComponent} from "../shared/components/ag-date/ag-date.component";
import {AgDateShortComponent} from "../shared/components/ag-date-short/ag-date-short.component";
import {AgTimeComponent} from "../shared/components/ag-time/ag-time.component";
import {AgTranslateMapComponent} from "../shared/components/ag-translate-map/ag-translate-map.component";
import {GeneralConstants} from "./general_consts";
import {AgDiv100Component} from "../shared/components/ag-div100/ag-div100.component";

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
  Settings: {
    generalSettings: {
      label: ["atm.settings.atmGeneralSettings"],
      name: "generalSettings",
      controls: [
        {
          name: 'atmNo',
          label: 'atms.terminalId',
          type: 'text',
          validator: [
            {
              type: "length", min: 6, max: 6
            },
            {
              type: 'required'
            }
          ]
        },
        {
          name: 'terminalShvaId',
          label: 'atms.terminalShvaId',
          type: 'text',
          validator: [
            {
              type: "length", min: 4, max: 4
            },
            {
              type: 'required'
            }
          ]
        },
        {
          name: 'atmName',
          label: 'atms.atmName',
          type: 'text',
          validator: [
            {
              type: "length", min: 1, max: 40
            },
            {
              type: 'required'
            }
          ]
        },
        {
          name: 'city',
          label: 'atms.city',
          type: 'text',
          validator: [
            {
              type: "length", min: 1, max: 40
            },
            {
              type: 'required'
            }
          ]
        },
        {
          name: 'address',
          label: 'atms.address',
          type: 'text',
          validator: [
            {
              type: "length", min: 1, max: 40
            },
            {
              type: 'required'
            }]
        },
        {
          name: 'zipCode',
          label: 'atms.zipCode',
          type: 'text',
          validator: [
            {
              type: "length", min: 5, max: 7
            },
            {
              type: 'required'
            },
            {
              type: 'number'
            }]
        },
        {
          name: 'vendor',
          label: 'atms.vendor',
          type: 'select',
          value: "NCR",
          options: GeneralConstants.Vendors,
          validator: [{
            type: 'required'
          }]
        },
        {
          name: 'ipAddress',
          label: 'atms.ipAddress',
          type: 'text',
          validator: [{
            type: 'required'
          }, {
            type: 'ip'
          }]
        },
        {
          name: 'portNumber',
          label: 'atms.port',
          type: 'text',
          validator: [
            {
              type: "length", min: 5, max: 7
            },
            {
              type: 'required'
            },
            {
              type: 'number'
            }]
        },
        {
          name: 'atmProtocol',
          label: 'atms.atmProtocol',
          type: 'select',
          value: 'NCR',
          options: GeneralConstants.AtmProtocol,
          validator: [{
            type: 'required'
          }]
        },
        {
          name: 'rklProtocol',
          label: 'atms.rklProtocol',
          type: 'select',
          options: GeneralConstants.RklProtocol,
          validator: [{
            type: 'required'
          }]

        },
        {
          name: 'terminalGroup',
          label: 'atms.terminalGroup',
          type: 'text',
          validator: [
            {
              type: "length", min: 2, max: 2
            },
            {
              type: 'required'
            }
          ]
        },
        {
          name: 'belong',
          label: 'atms.belong',
          type: 'select',
          options: GeneralConstants.Belong,
          validator: [{
            type: 'required'
          }]
        },
        {
          name: 'area',
          type: 'select',
          label: 'atms.area',
          options: GeneralConstants.Area,
          validator: [{
            type: 'required'
          }]
        },
        {
          name: 'bankNo',
          label: 'atms.bankNo',
          type: 'text'
        },
        {
          name: 'branch',
          label: 'atms.branch',
          type: 'text',
          validator: [
            {
              type: "length", min: 3, max: 3
            },
            {
              type: 'required'
            },
            {
              type: 'number'
            }]
        },
        {
          name: 'configId',
          label: 'atms.configId',
          type: 'text',
          validator: [
            {
              type: "length", min: 4, max: 4
            },
            {
              type: 'required'
            },
            {
              type: 'number'
            }]
        },
        {
          name: 'maxBills',
          label: 'atms.maxBills',
          type: 'text',
          validator: [
            {
              type: "length", min: 1
            },
            {
              type: 'required'
            },
            {
              type: 'number'
            }]
        }
      ]
    },
    cassettesSettings: {
      label: ["atm.settings.atmCassettesSettings", "atms.denomination", "atms.amount"],
      name: "cassettesSettings",
      controls: [
        {
          name: 'cassette1',
          label: 'atm.cassette1',
          type: 'inputGroup',
          inputs: [
            {
              name: 'currency',
              type: 'select',
              options: GeneralConstants.CurrencyCode
            },
            {
              name: 'denomination',
              type: 'select',
              options: GeneralConstants.Denomination
            }
          ]
        },
        {
          name: 'cassette2',
          label: 'atm.cassette2',
          type: 'inputGroup',
          inputs: [
            {
              name: 'currency',
              type: 'select',
              options: GeneralConstants.CurrencyCode
            },
            {
              name: 'denomination',
              type: 'select',
              options: GeneralConstants.Denomination
            }
          ]
        },
        {
          name: 'cassette3',
          label: 'atm.cassette3',
          type: 'inputGroup',
          inputs: [
            {
              name: 'currency',
              type: 'select',
              options: GeneralConstants.CurrencyCode
            },
            {
              name: 'denomination',
              type: 'select',
              options: GeneralConstants.Denomination
            }
          ]
        },
        {
          name: 'cassette4',
          label: 'atm.cassette4',
          type: 'inputGroup',
          inputs: [
            {
              name: 'currency',
              type: 'select',
              options: GeneralConstants.CurrencyCode
            },
            {
              name: 'denomination',
              type: 'select',
              options: GeneralConstants.Denomination
            }
          ]
        },
      ]
    },
    disableSettings: {
      label: ["atm.settings.disableSettings"],
      name: "disableSettings",
      controls: [
        {
          name: 'disabledATM',
          label: 'atm.disabledATM',
          type: 'checkbox'
        },
        {
          name: 'disableCheckDeposit',
          label: 'atm.disableCheckDeposit',
          type: 'checkbox'
        },
        {
          name: 'disableReceipt',
          label: 'atm.disableReceipt',
          type: 'checkbox'
        }
      ]
    },
    terminalNearestSettings: {
      label: ["atm.settings.terminalNearestSettings"],
      name: "terminalNearestSettings",
      controls: [
        {
          name: 'nearestSettings1',
          type: 'inputGroup',
          inputs: [
            {
              name: 'bankNo',
              type: 'select',
              options: GeneralConstants.Banks
            },
            {
              name: 'branch',
              type: 'text',
              placeholder: 'atms.branch'
            },
            {
              name: 'address',
              type: 'text',
              placeholder: 'atms.address'
            }
          ]
        },
        {
          name: 'nearestSettings2',
          type: 'inputGroup',
          inputs: [
            {
              name: 'bankNo',
              type: 'select',
              options: GeneralConstants.Banks
            },
            {
              name: 'branch',
              type: 'text',
              placeholder: 'atms.branch'
            },
            {
              name: 'address',
              type: 'text',
              placeholder: 'atms.address'
            }
          ]
        },
        {
          name: 'nearestSettings3',
          type: 'inputGroup',
          inputs: [
            {
              name: 'bankNo',
              type: 'select',
              options: GeneralConstants.Banks
            },
            {
              name: 'branch',
              type: 'text',
              placeholder: 'atms.branch'
            },
            {
              name: 'address',
              type: 'text',
              placeholder: 'atms.address'
            }
          ]
        },
        {
          name: 'nearestSettings4',
          type: 'inputGroup',
          inputs: [
            {
              name: 'bankNo',
              type: 'select',
              options: GeneralConstants.Banks
            },
            {
              name: 'branch',
              type: 'text',
              placeholder: 'atms.branch'
            },
            {
              name: 'address',
              type: 'text',
              placeholder: 'atms.address'
            }
          ]
        }
      ]
    },
    treatmentDeviceSettings: {
      label: ["atm.settings.treatmentDeviceSettings"],
      name: "treatmentDeviceSettings",
      controls: [
        {
          name: 'treatmentStartDate',
          label: 'atm.treatmentStartDate',
          type: 'labelDate'
        },
        {
          name: 'responsibility',
          label: 'atm.responsibility',
          type: 'select',
          options: GeneralConstants.Responsibility
        },
      ]
    },
    limitationAmountsSettings: {
      label: ["atm.settings.limitationAmountsSettings"],
      name: "limitationAmountsSettings",
      controls: [
        {
          name: 'notOursFee',
          label: 'atm.fee',
          type: 'text',
          validator: [
            {
              type: "length", min: 0
            },
            {
              type: 'required'
            },
            {
              type: 'number'
            }]

        },
        {
          name: 'claimAmount',
          label: 'atm.claimAmount',
          type: 'text',
          validator: [
            {
              type: "length", min: 0
            },
            {
              type: 'required'
            },
            {
              type: 'number'
            }]
        },
        {
          name: 'localCurrencyTrigger',
          label: 'atm.localCurrencyTrigger',
          type: 'text',
          validator: [
            {
              type: "length", min: 0
            },
            {
              type: 'required'
            },
            {
              type: 'number'
            }]
        },
        {
          name: 'localCurrencyTrigger2',
          label: 'atm.localCurrencyTrigger2',
          type: 'text',
          validator: [
            {
              type: "length", min: 0
            },
            {
              type: 'required'
            },
            {
              type: 'number'
            }]
        }
      ]
    },
  },
  Accessories: {
    CashPool: {
      cassetteType: {headerName: "atm.accessories.accessoriesDispenserInfo.cassetteType", field: "cassetteType", width: 100},
      statusColor: {headerName: "atms.tabs.status", field: "statusColor", width: 80, cellRendererFramework: AgStatusComponent},
      supply: {headerName: "general.supply", field: "supply", width: 75, cellRendererFramework: AgProgressComponent},
      currencyCode: {headerName: "general.CurrencyCode", field: "currencyCode", width: 60, cellRendererFramework: AgTranslateMapComponent},
      denomination: {headerName: "atms.denomination", field: "denomination", width: 60,cellRendererFramework:AgDiv100Component},
      loaded: {headerName: "atm.loaded", field: "loaded", width: 60},
      dispensed: {headerName: "atm.dispensed", field: "dispensed", width: 60},
      rejected: {headerName: "atm.rejected", field: "rejected", width: 60},
      remaining: {headerName: "atm.remaining", field: "remaining", width: 60}
    },
    LastStrokes: {
      value: {headerName: "atms.denomination", field: "denomination", width: 100,cellRendererFramework:AgDiv100Component},
      propriety: {headerName: "general.CurrencyCode", field: "currency", width: 100},
      coin: {headerName: "general.count", field: "count", width: 100},
      sumMeteg: {headerName: "general.sumMeteg", field: "sumMeteg", width: 100},
      sumAtm: {headerName: "general.sumAtm", field: "sumAtm", width: 100},
      difference: {headerName: "atm.difference", field: "difference", width: 100}
    },
    Printers: {
      device: {headerName: "atm.device", field: "device", width: 170, cellRendererFramework: AgTranslateMapComponent},
      statusColor: {headerName: "general.fitness", field: "statusColor", width: 170, cellRendererFramework: AgStatusComponent}
    },
    Checks: {
      device: {headerName: "atm.device", field: "device", width: 90, cellRendererFramework: AgTranslateMapComponent},
      statusColor: {headerName: "general.fitness", field: "statusColor", width: 90, cellRendererFramework: AgStatusComponent},
      supply: {headerName: "general.supply", field: "supply", width: 90, cellRendererFramework: AgProgressComponent},
      counter: {headerName: "atm.counter", field: "counter", width: 90}
    },
    Other: {
      device: {headerName: "atm.device", field: "device", width: 90, cellRendererFramework: AgTranslateMapComponent},
      statusColor: {headerName: "general.fitness", field: "statusColor", width: 90, cellRendererFramework: AgStatusComponent},
      supply: {headerName: "general.supply", field: "supply", width: 90,
        cellRendererFramework: AgProgressComponent},
      counter: {headerName: "atm.counter", field: "counter", width: 90}
    }
  },
  Status: {
    general: {
      name: {headerName: 'general.name', field: "name", width: 200, suppressSizeToFit: true},
      status: {headerName: 'general.status', field: "status", cellRendererFramework: AgStatusComponent}
    },
    keys: {
      keyType: {headerName: 'general.keyType', field: "keyType", width: 200, suppressSizeToFit: true,cellRendererFramework: AgTranslateMapComponent},
      keyStatus: {headerName: 'general.fitness', field: "keyStatus", width: 150, cellRendererFramework: AgTranslateMapComponent},
      kcv: {headerName: 'general.kcv', field: "kcv", width: 150}
    }
  },
  notifications: {
    terminalId: {headerName: 'atms.terminalId', field: 'atmNo', width: 80, suppressSizeToFit: true},
    severity: {
      headerName: 'atms.severity', field: 'eventSeverity', width: 200, cellRendererFramework: AgStatusComponent
    },
    date: {
      headerName: 'general.date',
      field: 'date',
      width: 120,
      suppressSizeToFit: true,
      cellRendererFramework: AgDateShortComponent
    },
    time: {
      headerName: 'general.time',
      field: 'time',
      width: 120,
      suppressSizeToFit: true,
      cellRendererFramework: AgTimeComponent
    },
    code: {headerName: 'atms.code', field: 'eventCode', width: 100, suppressSizeToFit: true},
    spec: {headerName: 'atms.spec', field: 'eventTextEn', width: 200},
    fullSpec: {headerName: 'atms.fullSpec', field: 'eventTextLocal', width: 200},
    eventDestinations: {headerName: 'atms.eventDestinations', field: 'eventDestinations', width: 200},
    device: {headerName: 'atms.device', field: 'device', width: 200}
  },
  events: {
    date: {
      headerName: 'general.date',
      field: 'date',
      width: 120,
      suppressSizeToFit: true,
      cellRendererFramework: AgDateShortComponent
    },
    time: {
      headerName: 'general.time',
      field: 'time',
      width: 120,
      suppressSizeToFit: true,
      cellRendererFramework: AgTimeComponent
    },
    code: {headerName: 'atms.code', field: 'eventCode', width: 100, suppressSizeToFit: true},
    spec: {headerName: 'atms.spec', field: 'eventTextEn', width: 200},
    fullSpec: {headerName: 'atms.fullSpec', field: 'eventTextLocal', width: 200},
  },
  transactions: {
    date: {
      headerName: 'general.date',
      field: 'date',
      width: 220,
      suppressSizeToFit: true,
      cellRendererFramework: AgDateShortComponent
    },
    time: {
      headerName: 'general.time',
      field: 'time',
      width: 220,
      suppressSizeToFit: true,
      cellRendererFramework: AgTimeComponent
    },
    code: {headerName: 'atms.code', field: 'eventCode', width: 200, suppressSizeToFit: true},
    spec: {headerName: 'atms.spec', field: 'eventTextEn', width: 300},
    fullSpec: {headerName: 'atms.fullSpec', field: 'eventTextLocal', width: 300},
  },
  RetainedCards: {
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
    removeDate: {
      headerName: "general.removeDate",
      field: "removeDate",
      width: 200,
      cellRendererFramework: AgDateComponent,
      suppressSizeToFit: true
    },
    comments: {headerName: "atm.comments", field: "comments"}

  }
};

