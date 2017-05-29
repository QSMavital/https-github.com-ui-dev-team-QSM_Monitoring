import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid";
import {AgStatusComponent} from "../../../../../shared/components/ag-status/ag-status.component";

@Component({
  selector: 'ui-atm-status-summary',
  templateUrl: './atm-status-summary.component.html',
  styleUrls: ['./atm-status-summary.component.scss']
})
export class AtmStatusSummaryComponent implements OnInit {

  public gridOptions:GridOptions;

  constructor() { }

  ngOnInit() {
    this.gridOptions= {
      columnDefs: [
        {headerName: "Accessory", field: "accessory", width: 150, suppressSizeToFit: true},
        {headerName: "", field: "active", width: 50, cellRendererFramework: AgStatusComponent},
        {headerName: "Health", field: "health", minWidth: 190, maxWidth: 300},
        {headerName: "Inventory", field: "inventory", width: 200}
      ],
      rowData: [
        {
          "accessory": "Card reader",
          "active": "FATAL",
          "health": "Work properly",
          "inventory": 50
        },
        {
          "accessory": "Dispenser",
          "active": "GOOD",
          "health": "Work properly",
          "inventory": 50
        },
        {
          "accessory": "E-calender",
          "active": "GOOD",
          "health": "Work properly",
          "inventory": 50
        },
        {
          "accessory": "Keyboard",
          "active": "GOOD",
          "health": "Work properly",
          "inventory": 50
        },
      ],
      enableColResize: true,
      getRowHeight:(() => {
        return 32
      })
    };
  }

  fitCols_SummaryOfAssemblies() {
    this.gridOptions.api.sizeColumnsToFit();
  }

}
