import {AgStatusComponent} from "../shared/components/ag-status/ag-status.component";
import {AgProgressComponent} from "../shared/components/ag-progress/ag-progress.component";
import {AgDirectiveComponent} from "../shared/components/ag-directive/ag-directive.component";

export const Hsm = {
  Tabs: {
    atmsSupply: {label: 'atms.tabs.inventory', state: 'inventory'},
    atmsStatus: {label: 'atms.tabs.status', state: 'status'}
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
    linkTable: {
      hsmType: {headerName: "hsm.status.hsmType", field: "sessionNumber", width: 200, cellRenderer: 'group', cellRendererParams: {checkbox: true}},
      serial: {headerName: "hsm.status.serial", field: "hsmSerialId", width: 150},
      type: {headerName: "hsm.status.type", field: "sessionType", width: 150},
      status: {headerName: "general.status", field: "sessionStatus", width: 200},
      directive: {headerName: "hsm.status.directive", field: "sessionRequest", width: 150}
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
