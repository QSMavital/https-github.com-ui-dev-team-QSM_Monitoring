import {AgStatusComponent} from "../shared/components/ag-status/ag-status.component";
import {AgProgressComponent} from "../shared/components/ag-progress/ag-progress.component";

export const Hsm = {
  Tabs: {
    atmsSupply: {label: 'atms.tabs.inventory', state: 'inventory'},
    atmsStatus: {label: 'atms.tabs.status', state: 'status'}
  },
  Inventory: {

  },
  statistics:{
    statisticWeek: {
        cassetteType: {headerName: "atm.accessories.accessoriesDispenserInfo.cassetteType", field: "cassetteType", width: 80},
        statusColor: {headerName: "atms.tabs.status", field: "statusColor", width: 80, cellRendererFramework: AgStatusComponent},
        supply: {headerName: "general.supply", field: "supply", width: 75, cellRendererFramework: AgProgressComponent},
        currencyCode: {headerName: "general.CurrencyCode", field: "currencyCode", width: 60},
        denomination: {headerName: "atms.denomination", field: "denomination", width: 60},
        loaded: {headerName: "atm.loaded", field: "loaded", width: 60},
        dispensed: {headerName: "atm.dispensed", field: "dispensed", width: 60},
        rejected: {headerName: "atm.rejected", field: "rejected", width: 60},
        remaining: {headerName: "atm.remaining", field: "remaining", width: 60}
    }
  }
};

