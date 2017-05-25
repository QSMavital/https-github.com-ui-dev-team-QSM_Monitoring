import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid";
import {AgStatusComponent} from "../../../../../shared/components/ag-status/ag-status.component";

@Component({
  selector: 'ui-atm-status-general',
  templateUrl: './atm-status-general.component.html',
  styleUrls: ['./atm-status-general.component.scss']
})
export class AtmStatusGeneralComponent implements OnInit {

  public gridOptions:GridOptions;
  constructor() { }

  ngOnInit() {
    this.gridOptions={
      columnDefs: [
        {headerName: "1", field: "name", width: 200, suppressSizeToFit: true},
        {headerName: "2", field: "status", width: 150},
        {headerName: "3", field: "active", width: 150, cellRendererFramework: AgStatusComponent},
      ],
        rowData: [
        {
          "name": "Known state",
          "status": "Disconnect",
          "active": "FATAL"
        },
        {
          "name": "Preferred state",
          "status": "Connect",
          "active": "GOOD"
        },
        {
          "name": "Communication mode",
          "status": "Disconnect",
          "active": "FATAL"
        },
        {
          "name": "IP address",
          "status": "10.0.0.23",
        },
        {
          "name": "Port number",
          "status": "5002",
        },
        {
          "name": "Model",
          "status": "6632",
        },
        {
          "name": "AANDC Edition",
          "status": "030402",
        },
        {
          "name": "Provides configuration",
          "status": "0101",
        },
        {
          "name": "Charging status",
          "status": "00",
        }
      ],
        enableColResize: true,
        getRowHeight:(() => {
        return 32
      })
    }
  }

  fitCols_Keys() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  fitCols_SummaryOfAssemblies() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  fitCols_General() {
    this.gridOptions.api.sizeColumnsToFit();
  }

}
