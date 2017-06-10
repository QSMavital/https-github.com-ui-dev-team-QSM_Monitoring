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
      directive: {headerName: "hsm.status.directive", field: "directive", width: 200,cellRendererFramework:AgDirectiveComponent},
      main: {headerName: "menu.main", field: "main", width: 150},
      serial: {headerName: "hsm.status.serial", field: "hsmSerialId", width: 150},
      hsmAddress: {headerName: "atms.ipAddress", field: "hsmAddress", width: 200},
      portNumber: {headerName: "atms.portNumber", field: "hsmPort", width: 150},
      hsmStatus: {headerName: "hsm.tabs.status", field: "hsmStatusColor", width: 150, cellRendererFramework: AgStatusComponent},
      sessionNumber: {headerName: "hsm.status.sessionNumber", field: "numberOfSessions", width: 150}
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
    session: {headerName: "hsm.statistics.session", field: "session", width: 200},
    ValidCodeActions: {headerName: "hsm.statistics.ValidCodeActions", field: "ValidCodeActions", width: 150},
    InvalidCodeActions: {headerName: "hsm.statistics.InvalidCodeActions", field: "InvalidCodeActions", width: 150},
    ValidMacActions: {headerName: "hsm.statistics.ValidMacActions", field: "ValidMacActions", width: 200},
    InvalidMacActions: {headerName: "hsm.statistics.InvalidMacActions", field: "InvalidMacActions", width: 150},
    otherValidActions: {headerName: "hsm.statistics.otherValidActions", field: "otherValidActions", width: 150},
    otherInvalidActions: {headerName: "hsm.statistics.otherInvalidActions", field: "otherInvalidActions", width: 150},
    failedActions: {headerName: "hsm.statistics.failedActions", field: "failedActions", width: 150}
  }
};
