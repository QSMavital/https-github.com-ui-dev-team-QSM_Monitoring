import {AgStatusComponent} from "../shared/components/ag-status/ag-status.component";

export const Epps = {
  eppTable: {
    eppNumber: {headerName: "epp.tables.eppNumber", field: "eppNumber", width: 200},
    rklStatus: {headerName: "epp.tables.rklStatus", field: "rklStatus", width: 150, cellRendererFramework: AgStatusComponent},
    disabled: {headerName: "db.disabled", field: "disabled", width: 150},
    deviceNumber: {headerName: "epp.tables.deviceNumber", field: "deviceNumber", width: 200},
    deviceName: {headerName: "epp.tables.deviceName", field: "deviceName", width: 150}
  }
};
