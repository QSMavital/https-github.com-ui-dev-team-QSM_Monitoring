import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Atm} from "../../../../../config/atm";
import {GridDefsService} from "../../../../../shared/services/grid-defs.service";
import {GridOptions} from "ag-grid";
import {isNullOrUndefined} from "util";



@Component({
  selector: 'ui-accessories-balance-strokes',
  templateUrl: './accessories-balance-strokes.component.html',
  styleUrls: ['./accessories-balance-strokes.component.scss']
})
export class AccessoriesBalanceStrokesComponent implements OnChanges {
@Input() public accessories_data: any = {};
  public infos: any[] = [];
  public gridOptions: GridOptions;

  constructor(private gridDefsSrv: GridDefsService) {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    for (var prop in Atm.Accessories.LastStrokes){
      this.gridOptions.columnDefs.push(Atm.Accessories.LastStrokes[prop]);
    }
  }

  fitCols_accessories() {
    this.gridOptions.api.sizeColumnsToFit();
  }
  ngOnChanges(newValue){
    if(!isNullOrUndefined(newValue.accessories_data)&&!isNullOrUndefined(newValue.accessories_data.currentValue)){
      let rowData = this.accessories_data.lastSettleDispenseList;
      this.gridOptions.api.setRowData(rowData);

      for (let key in this.accessories_data){
        if(key !== 'lastSettleDispenseList'){
          if (key === 'transactionId') {
            this.infos.push({key: `enums.${key}`, value: this.accessories_data[key]})
          } else {
            this.infos.push({key: `enums.${key}`, value: new Date(this.accessories_data[key]).toLocaleString()})
          }
        }
      }
    }
  }
}

/*{
  "lastSettleDispenseList": [
  {
    "denomination": 10000,
    "currency": "NIS",
    "count": 18,
    "sumMeteg": 180000,
    "sumAtm": 180000,
    "difference": 0
  },
  {
    "denomination": 20000,
    "currency": "NIS",
    "count": 4,
    "sumMeteg": 80000,
    "sumAtm": 60000,
    "difference": 20000
  }
],
  "lastSettelement": 1495612612579,
  "transactionId": 453
}*/
