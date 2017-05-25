import {Component, OnInit} from '@angular/core';
import {AgStatusComponent} from "../../../shared/components/ag-status/ag-status.component";

@Component({
  selector: 'ui-atm-status',
  templateUrl: './atm-status.component.html',
  styleUrls: ['./atm-status.component.scss']
})

export class AtmStatusComponent implements OnInit {
  private atm_status_specs: any;
  private recent_actions: any;

  constructor() {
    this.atm_status_specs = {
      gridOptions_SummaryOfAssemblies: {
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
      },
      gridOptions_General: {
        columnDefs: [
          {headerName: "", field: "name", width: 200, suppressSizeToFit: true},
          {headerName: "", field: "status", width: 150},
          {headerName: "", field: "active", width: 150, cellRendererFramework: AgStatusComponent},
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
      },
      gridOptions_Keys: {
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
    };
    this.recent_actions = {
      a:[
        {"name": "Reason for rejection", "value": "System failure"},
        {"name": "Swallowed card", "value": "-"},
        {"name": "Customer type", "value": "Our local"},
        {"name": "Card type", "value": "Magnetic"}

      ,],
      b:[
        {"name": "Card number", "value": "1088"},
        {"name": "Action Type", "value": "Not executed"},
        {"name": "Amount", "value": ""},
        {"name": "Banknote", "value": "-"}
      ]
    }
  }

  ngOnInit() {
  }

  fitCols_SummaryOfAssemblies() {
    this.atm_status_specs.gridOptions_SummaryOfAssemblies.api.sizeColumnsToFit();
  }

  fitCols_General() {
    this.atm_status_specs.gridOptions_General.api.sizeColumnsToFit();
  }

  fitCols_Keys() {
    this.atm_status_specs.gridOptions_Keys.api.sizeColumnsToFit();
  }


}
