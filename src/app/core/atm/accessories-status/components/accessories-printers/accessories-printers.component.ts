import {Component, Input, OnChanges} from '@angular/core';
import {Atm} from "../../../../../config/atm";
import {isNullOrUndefined} from "util";
import {GridOptions} from "ag-grid";
import {GridDefsService} from "../../../../../shared/services/grid-defs.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'ui-accessories-printers',
  templateUrl: './accessories-printers.component.html',
  styleUrls: ['./accessories-printers.component.scss']
})
export class AccessoriesPrintersComponent implements OnChanges{
@Input() printers_data: any = {};
  public gridOptions: GridOptions;

  constructor(private gridDefsSrv: GridDefsService, private translateSrv: TranslateService) {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    for (let prop in Atm.Accessories.Printers){
      this.gridOptions.columnDefs.push(Object.assign({}, { suppressFilter: true }, Atm.Accessories.Printers[prop], {
        headerName: this.translateSrv.instant(Atm.Accessories.Printers[prop].headerName)
      }));
    }
  }

  fitCols_printers() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  ngOnChanges(newValue){
    if(!isNullOrUndefined(newValue.printers_data)&&!isNullOrUndefined(newValue.printers_data.currentValue)){
      let rowData = this.printers_data.deviceList;
      this.gridOptions.api.setRowData(rowData);
    }
  }

}


/*
"deviceList": [
  {
    "device": "STATEMENT_PRINTER",
    "statusColor": "DISABLE",
    "fitness": "NO_ERROR",
    "supply": "NO_INFO",
    "counter": 0
  },
  {
    "device": "STATEMENT_PRINTER_RIBBON",
    "statusColor": "DISABLE",
    "fitness": "NO_ERROR",
    "supply": "NO_INFO",
    "counter": 0
  },
  {
    "device": "STATEMENT_PRINTER_PRINTHEAD",
    "statusColor": "DISABLE",
    "fitness": "NO_ERROR",
    "supply": "NO_INFO",
    "counter": 0
  },
  {
    "device": "STATEMENT_PRINTER_KNIFE",
    "statusColor": "DISABLE",
    "fitness": "NO_ERROR",
    "supply": "NO_INFO",
    "counter": 0
  },
  {
    "device": "STATEMENT_PRINTER_CAPTURE_BIN",
    "statusColor": "DISABLE",
    "fitness": "NO_ERROR",
    "supply": "NO_INFO",
    "counter": 0
  }
]
*/
