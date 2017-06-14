import {AgStatusComponent} from "../shared/components/ag-status/ag-status.component";
import {AgBooleanComponent} from "../shared/components/ag-boolean/ag-boolean.component";

export const Epps = {
  eppTable: {
    eppUid: {headerName: "epp.tables.eppNumber", field: "eppUid", width: 200},
    rklStatus: {headerName: "epp.tables.rklStatus", field: "rklStatus", width: 150, cellRendererFramework: AgStatusComponent},
    eppDisable: {headerName: "db.disabled", field: "eppDisable", width: 150,cellRendererFramework:AgBooleanComponent},
    atmNo: {headerName: "atms.terminalId", field: "atmNo", width: 200},
    atmName: {headerName: "epp.tables.deviceName", field: "atmName", width: 150}
  }
};
