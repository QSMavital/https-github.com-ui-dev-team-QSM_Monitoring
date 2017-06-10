import {Component, Input, OnChanges} from '@angular/core';
import {Hsm} from "../../../../../config/hsm";
import {GridDefsService} from "../../../../../shared/services/grid-defs.service";
import {TranslateService} from "@ngx-translate/core";
import {GridOptions} from "ag-grid";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-hsm-table',
  templateUrl: './hsm-table.component.html',
  styleUrls: ['./hsm-table.component.scss']
})
export class HsmTableComponent implements OnChanges {
  @Input() public gridData: any = {};
  public gridOptions: GridOptions = {};

  constructor(private gridDefsSrv: GridDefsService, private translateSrv: TranslateService) {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    for(let prop in Hsm.status.hsmTable){
      this.gridOptions.columnDefs.push(Object.assign({}, { suppressFilter: true }, Hsm.status.hsmTable[prop], {
        headerName: this.translateSrv.instant(Hsm.status.hsmTable[prop].headerName)
      }));
    }
  }

  ngOnInit() {
  }

  fitCols_hsm_table(){
    this.gridOptions.api.sizeColumnsToFit();
  }

  ngOnChanges(newValue) {

    if(!isNullOrUndefined(newValue.gridData)&&!isNullOrUndefined(newValue.gridData.currentValue)&&!isNullOrUndefined(this.gridOptions.api)){
      let rowData = this.gridData;
      this.gridOptions.api.setRowData(rowData);

    }
  }


}


/*
{
  "main": true,
  "hsmSerialId": "3567/4444",
  "hsmAddress": "127.0.0.1",
  "hsmPort": 1024,
  "hsmStatusColor": "GOOD",
  "numberOfSessions": 1
}*/
