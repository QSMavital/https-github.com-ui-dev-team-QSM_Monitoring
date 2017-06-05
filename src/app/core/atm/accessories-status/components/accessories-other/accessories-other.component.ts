import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Atm} from "../../../../../config/atm";
import {GridOptions} from "ag-grid";
import {GridDefsService} from "../../../../../shared/services/grid-defs.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-accessories-other',
  templateUrl: './accessories-other.component.html',
  styleUrls: ['./accessories-other.component.scss']
})
export class AccessoriesOtherComponent implements OnChanges {
@Input() other_accessories_data: any = {};
  public infos: any[] = [];
  public gridOptions: GridOptions;

  constructor(private gridDefsSrv: GridDefsService) {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    for (let prop in Atm.Accessories.Other) {
      this.gridOptions.columnDefs.push(Atm.Accessories.Other[prop]);
    }
  };

  fitCols_otherAccessoriesInfo() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  ngOnChanges(newValue) {
    if (!isNullOrUndefined(newValue.other_accessories_data) && !isNullOrUndefined(newValue.other_accessories_data.currentValue)) {
      let rowData = this.other_accessories_data.deviceList;
      this.gridOptions.api.setRowData(rowData);

      for (let key in this.other_accessories_data) {
        if (key !== 'deviceList') {
          this.infos.push({key: `enums.${key}`, value: new Date(this.other_accessories_data[key]).toLocaleString()})
        }
      }
    }
  }

}

/*
{
  "deviceList": [
  {
    "device": "CARD_READER",
    "statusColor": "DISABLE",
    "fitness": "NO_ERROR",
    "supply": "NO_INFO",
    "counter": 0
  },
  {
    "device": "ENCRYPTOR",
    "statusColor": "DISABLE",
    "fitness": "NO_ERROR",
    "supply": "NO_INFO",
    "counter": 0
  },
  {
    "device": "JOURNAL_PRINTER",
    "statusColor": "DISABLE",
    "fitness": "NO_ERROR",
    "supply": "NO_INFO",
    "counter": 0
  }
],
  "lastCardSettelement": 1495612612579
}
*/
