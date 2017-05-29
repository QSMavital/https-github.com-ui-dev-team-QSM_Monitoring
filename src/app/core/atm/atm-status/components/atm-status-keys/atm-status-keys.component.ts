import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid";

@Component({
  selector: 'ui-atm-status-keys',
  templateUrl: './atm-status-keys.component.html',
  styleUrls: ['./atm-status-keys.component.scss']
})
export class AtmStatusKeysComponent implements OnInit {

  public gridOptions:GridOptions;
  constructor() { }

  ngOnInit() {
    this.gridOptions= {
      columnDefs: [
        {headerName: "Health", field: "health", width: 200, suppressSizeToFit: true},
        {headerName: "Key type", field: "KeyType", width: 150},
        {headerName: "KVC", field: "kvc", width: 150},
      ],
        rowData: [
        {
          "health": "Master Key",
          "KeyType": "approved",
          "kvc": "00000"
        },
        {
          "health": "Encryption key",
          "KeyType": "Canceled",
          "kvc": "C01F8C"
        },
        {
          "health": "Authentication key",
          "KeyType": "Canceled",
          "kvc": "5320E2"
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
}
