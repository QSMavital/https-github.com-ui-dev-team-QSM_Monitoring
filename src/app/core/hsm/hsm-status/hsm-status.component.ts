import { Component } from '@angular/core';
import {GridOptions} from "ag-grid";
import {GridDefsService} from "../../../shared/services/grid-defs.service";
import {Hsm} from "../../../config/hsm";
import {TranslateService} from "@ngx-translate/core";


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

  constructor(private gridDefsSrv: GridDefsService, private translateSrv: TranslateService) {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    for(let prop in Hsm.status.hsmTable){
      this.gridOptions.columnDefs.push(Object.assign({}, { suppressFilter: true }, Hsm.status.hsmTable[prop], {
        headerName: this.translateSrv.instant(Hsm.status.hsmTable[prop].headerName)
      }));
    }

    this.gridOptions2 = this.gridDefsSrv.initGridOptions();
    for(let prop in Hsm.status.linkTable){
      this.gridOptions2.columnDefs.push(Object.assign({}, { suppressFilter: true }, Hsm.status.linkTable[prop], {
        headerName: this.translateSrv.instant(Hsm.status.linkTable[prop].headerName)
      }));
    }
    this.gridOptions2.rowSelection = 'multiple';
    this.gridOptions.rowData = [
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
    this.gridOptions2.rowData = [
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
  }


  fitCols_link_table(){
    this.gridOptions2.api.sizeColumnsToFit();
  }

  fitCols_hsm_table(){
    this.gridOptions.api.sizeColumnsToFit();
  }

  selection(e) {
    this.selectedItems = this.gridOptions2.api.getSelectedRows().length;
  }
}
