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

  infos = [
    { key: "total", value: "15,000"},
    { key: "Last successful", value: "15/5/17 22:15"},
    { key: "total", value: "15,000"},
    { key: "alert", value: "7’000"},
    { key: "alert 02", value: "4,000"},
  ];

  constructor() { }

  ngOnInit() {
    this.gridOptions={
      columnDefs: [
        {headerName: "Name", field: "name", width: 200, suppressSizeToFit: true},
        {headerName: "Status", field: "status", width: 150},
        {headerName: "Active", field: "active", width: 150, cellRendererFramework: AgStatusComponent},
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

  fitCols_General() {
    this.gridOptions.api.sizeColumnsToFit();
  }

}
