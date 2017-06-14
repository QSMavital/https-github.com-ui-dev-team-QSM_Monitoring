import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Atm} from "../../../../../config/atm";
import {i18n} from "../../../../../config/i18n";
import {TranslateService} from "@ngx-translate/core";
import {GridOptions} from "ag-grid";
import {GridDefsService} from "../../../../../shared/services/grid-defs.service";
import {isNullOrUndefined} from "util";
import {DecimalPipe} from "@angular/common";


@Component({
  selector: 'ui-accessories-cash-pool',
  templateUrl: './accessories-cash-pool.component.html',
  styleUrls: ['./accessories-cash-pool.component.scss']
})
export class AccessoriesCashPoolComponent implements OnChanges {
  public infos: any[] = [];
  public gridOptions: GridOptions;
@Input() public cash_pool_data: any = {};



constructor(private gridDefsSrv: GridDefsService, private translateSrv: TranslateService,private decimalPipe:DecimalPipe) {
  this.gridOptions = this.gridDefsSrv.initGridOptions();
  for (let prop in Atm.Accessories.CashPool){
    this.gridOptions.columnDefs.push(Object.assign({}, { suppressFilter: true }, Atm.Accessories.CashPool[prop], {
      headerName: this.translateSrv.instant(Atm.Accessories.CashPool[prop].headerName)
    }));
  }
}

  fitCols_dispenserInfo(){
    this.gridOptions.api.sizeColumnsToFit();
  }

  ngOnChanges(newValue){
    if(!isNullOrUndefined(newValue.cash_pool_data)&&!isNullOrUndefined(newValue.cash_pool_data.currentValue)&&!isNullOrUndefined(this.gridOptions.api)){
      let rowData = this.cash_pool_data.cassettesList;
      this.gridOptions.api.setRowData(rowData);

      for (let key in this.cash_pool_data){
        if(key !== 'cassettesList'){
          if (key === 'lastGoodWithrawal') {
            this.infos.push({key: `atm.${key}`, value: new Date(this.cash_pool_data[key]).toLocaleString()})
          } else if(key === 'sumDispensed' ||key === 'sumRemaing' ||key === 'localCurrencyTrigger' ||key === 'localCurrencyTrigger2' ){
            this.infos.push({key: `atm.${key}`, value: this.decimalPipe.transform(this.cash_pool_data[key],'1.0-0')})
          }else {
            this.infos.push({key: `atm.${key}`, value: this.cash_pool_data[key]})
          }
        }
      }
    }
  }
}
