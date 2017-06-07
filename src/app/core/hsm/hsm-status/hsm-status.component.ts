import { Component } from '@angular/core';
import {GridOptions} from "ag-grid";
import {GridDefsService} from "../../../shared/services/grid-defs.service";
import {TranslateService} from "@ngx-translate/core";
import {AgStatusComponent} from "../../../shared/components/ag-status/ag-status.component";


@Component({
  selector: 'ui-hsm-status',
  templateUrl: './hsm-status.component.html',
  styleUrls: ['./hsm-status.component.scss']
})
export class HsmStatusComponent {
  public addNew = false;
  public selectedItems = 0;
  public gridOptions: GridOptions = {};
  public gridOptions2: GridOptions = {};

  constructor(private gridDefsSrv: GridDefsService,private translateSrv: TranslateService) {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    this.gridOptions.columnDefs = [
      {headerName: "Directive", field: "directive", width: 200},
      {headerName: "Main", field: "main", width: 150},
      {headerName: "Serial", field: "serial", width: 150},
      {headerName: "IP Address", field: "ipAddress", width: 200},
      {headerName: "Port Number", field: "portNumber", width: 150},
      {headerName: "HSM Status", field: "hsmStatus", width: 150, cellRendererFramework: AgStatusComponent},
      {headerName: "SESSION Number", field: "sessionNumber", width: 150}
    ];
    this.gridOptions2 = this.gridDefsSrv.initGridOptions();
    this.gridOptions2.rowSelection = 'multiple';
    this.gridOptions2.columnDefs = [
      {headerName: "HSM Type", field: "hsmType", width: 200},
      {headerName: "Serial", field: "serial", width: 150},
      {headerName: "Type", field: "type", width: 150},
      {headerName: "Status", field: "status", width: 200},
      {headerName: "Directive", field: "directive", width: 150}
    ];
  }


  fitCols_link_table(){
    let rowData2 = [
      {
        "hsmType": "1",
        "serial": "2",
        "type": "Regular",
        "status": "Active",
        "directive": ""
      },
      {
        "hsmType": "2",
        "serial": "3",
        "type": "Regular",
        "status": "Open",
        "directive": ""
      },
      {
        "hsmType": "3",
        "serial": "5",
        "type": "Regular",
        "status": "Active",
        "directive": ""
      }
    ];
    this.gridOptions2.api.setRowData(rowData2);
    this.gridOptions2.api.sizeColumnsToFit();
  }

  fitCols_hsm_table(){
    let rowData = [
      {
        "directive": "ENTER Input",
        "main": "main",
        "serial": "1",
        "ipAddress": "10.0.0.12",
        "portNumber": "1024",
        "hsmStatus": "DISABLE",
        "sessionNumber": 2,
      },
    ];
    this.gridOptions.api.setRowData(rowData);
    this.gridOptions.api.sizeColumnsToFit();
  }

  selection(e) {
    this.selectedItems = this.gridOptions2.api.getSelectedRows().length;
  }
}
