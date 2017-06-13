import {AgStatusComponent} from "../shared/components/ag-status/ag-status.component";

export const Epps = {
  Tabs: {
    eppTables: {label: 'Epps.tabs.eppTables', state: 'eppTables'},
  },
  eppTable1: {
    eppNumber: {headerName: "epp.tables.eppNumber", field: "eppNumber", width: 200},
    rklStatus: {headerName: "epp.tables.rklStatus", field: "rklStatus", width: 150, cellRendererFramework: AgStatusComponent},
    disabled: {headerName: "db.disabled", field: "disabled", width: 150},
    deviceNumber: {headerName: "epp.tables.deviceNumber", field: "deviceNumber", width: 200},
    deviceName: {headerName: "epp.tables.deviceName", field: "deviceName", width: 150}
  },
  eppTable2: {
    eppNumber: {headerName: "epp.tables.eppNumber", field: "eppNumber", width: 200},
    rklStatus: {headerName: "epp.tables.rklStatus", field: "rklStatus", width: 150, cellRendererFramework: AgStatusComponent},
    disabled: {headerName: "db.disabled", field: "disabled", width: 150},
    deviceNumber: {headerName: "epp.tables.deviceNumber", field: "deviceNumber", width: 200},
    deviceName: {headerName: "epp.tables.deviceName", field: "deviceName", width: 150}
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
};
