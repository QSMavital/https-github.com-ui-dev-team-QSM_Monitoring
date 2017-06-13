import {AgStatusComponent} from "../shared/components/ag-status/ag-status.component";
import {AgProgressComponent} from "../shared/components/ag-progress/ag-progress.component";
import {AgDirectiveComponent} from "../shared/components/ag-directive/ag-directive.component";
import {AgTranslateMapComponent} from "../shared/components/ag-translate-map/ag-translate-map.component";

export const Hsm = {
  Tabs: {
    hsmStatus: {label:'hsm.tabs.status',state:'status'},
    hsmStatistics: {label:'hsm.tabs.statistics',state:'statistics'}
  },
  status: {
    hsmTable: {
      directive: {headerName: "hsm.status.directive", field: "directive", width: 150,cellRendererFramework:AgDirectiveComponent},
      main: {headerName: "menu.main", field: "main", width: 100},
      serial: {headerName: "hsm.status.serial", field: "hsmSerialId", width: 100},
      hsmAddress: {headerName: "atms.ipAddress", field: "hsmAddress", width: 150},
      portNumber: {headerName: "atms.portNumber", field: "hsmPort", width: 100},
      hsmStatus: {headerName: "hsm.tabs.status", field: "hsmStatusColor", width: 100, cellRendererFramework: AgStatusComponent},
      sessionNumber: {headerName: "hsm.status.sessionNumber", field: "numberOfSessions", width: 100}
    },
    actions:[
      {value:"ADD_SESSION",label:"hsm.status.ADD_SESSION"},
      {value:"DOWN_SESSION",label:"hsm.status.DOWN_SESSION"},
      {value:"SYNC_KEYS",label:"hsm.status.SYNC_KEYS"},
      {value:"ADD_HSM",label:"hsm.status.ADD_HSM"},
      {value:"DELETE_HSM",label:"hsm.status.DELETE_HSM"},
      {value:"HSM_MAIN",label:"hsm.status.HSM_MAIN"},
      {value:"DISABLED_HSM",label:"hsm.status.DISABLED_HSM"},
      {value:"DOWN_DISABLED_HSM",label:"hsm.status.DOWN_DISABLED_HSM"}

    ],
    sessions: {
      hsmType: {headerName: "hsm.status.hsmType", field: "F", width: 200, cellRenderer: 'group', cellRendererParams: {checkbox: true}},
      serial: {headerName: "hsm.status.serial", field: "hsmSerialId", width: 150},
      type: {headerName: "hsm.status.type", field: "sessionType", width: 150,cellRendererFramework: AgTranslateMapComponent},
      status: {headerName: "general.status", field: "sessionStatus", width: 200,cellRendererFramework: AgTranslateMapComponent},
      directive: {headerName: "hsm.status.directive", field: "sessionRequest", width: 150,cellRendererFramework: AgTranslateMapComponent}
    }
  },
  statistics: {
    session: {headerName: "hsm.statistics.session", field: "sessionNumber", width: 200},
    ValidCodeActions: {headerName: "hsm.statistics.ValidCodeActions", field: "pinGood", width: 150},
    InvalidCodeActions: {headerName: "hsm.statistics.InvalidCodeActions", field: "pinBad", width: 150},
    ValidMacActions: {headerName: "hsm.statistics.ValidMacActions", field: "macGood", width: 200},
    InvalidMacActions: {headerName: "hsm.statistics.InvalidMacActions", field: "macBad", width: 150},
    otherValidActions: {headerName: "hsm.statistics.otherValidActions", field: "otherGood", width: 150},
    otherInvalidActions: {headerName: "hsm.statistics.otherInvalidActions", field: "otherBad", width: 150},
    failedActions: {headerName: "hsm.statistics.failedActions", field: "fail", width: 150}
  }
};
