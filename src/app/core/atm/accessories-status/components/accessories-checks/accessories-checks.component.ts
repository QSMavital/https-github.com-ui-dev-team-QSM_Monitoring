import {Component, Input, OnChanges} from '@angular/core';
import {GridOptions} from "ag-grid";
import {GridDefsService} from "../../../../../shared/services/grid-defs.service";
import {Atm} from "../../../../../config/atm";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-accessories-checks',
  templateUrl: './accessories-checks.component.html',
  styleUrls: ['./accessories-checks.component.scss']
})
export class AccessoriesChecksComponent implements OnChanges {
  @Input() checkInfo_data: any = {};
  public infos: any[] = [];
  public gridOptions: GridOptions;

  constructor(private gridDefsSrv: GridDefsService) {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    for (let prop in Atm.Accessories.Checks) {
      this.gridOptions.columnDefs.push(Atm.Accessories.Checks[prop]);
    }
  };

  fitCols_checkInfo() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  ngOnChanges(newValue) {
    if (!isNullOrUndefined(newValue.checkInfo_data) && !isNullOrUndefined(newValue.checkInfo_data.currentValue)) {
      let rowData = this.checkInfo_data.deviceList;
      this.gridOptions.api.setRowData(rowData);

      for (let key in this.checkInfo_data) {
        if (key !== 'deviceList') {
          this.infos.push({key: `enums.${key}`, value: new Date(this.checkInfo_data[key]).toLocaleString()})
        }
      }
    }
  }
}

/*
 {
 "deviceList": [
 {
 "device": "CHECK_PROCESSOR",
 "statusColor": "DISABLE",
 "fitness": "NO_ERROR",
 "supply": "NO_INFO",
 "counter": 0
 },
 {
 "device": "CHECK_PROCESSOR_BIN_1",
 "statusColor": "DISABLE",
 "fitness": "NO_ERROR",
 "supply": "NO_INFO",
 "counter": 0
 },
 {
 "device": "CHECK_PROCESSOR_BIN_2",
 "statusColor": "DISABLE",
 "fitness": "NO_ERROR",
 "supply": "NO_INFO",
 "counter": 0
 },
 {
 "device": "CHECK_ENDORSE_PRINTER",
 "statusColor": "DISABLE",
 "fitness": "NO_ERROR",
 "supply": "NO_INFO",
 "counter": 0
 }
 ],
 "lastCheckDeposit": 1495612612579,
 "lastSettelementCheckDeposit": 1495612612579
 }
 */
