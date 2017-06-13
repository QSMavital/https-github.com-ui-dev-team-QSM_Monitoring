import {Component, Input, OnChanges} from '@angular/core';
import {GridOptions} from "ag-grid";
import {GridDefsService} from "../../../../../shared/services/grid-defs.service";
import {Atm} from "../../../../../config/atm";
import {isNullOrUndefined} from "util";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'ui-accessories-checks',
  templateUrl: './accessories-checks.component.html',
  styleUrls: ['./accessories-checks.component.scss']
})
export class AccessoriesChecksComponent implements OnChanges {
  @Input() checkInfo_data: any = {};
  public infos: any[] = [];
  public gridOptions: GridOptions;

  constructor(private gridDefsSrv: GridDefsService, private translateSrv: TranslateService) {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    for (let prop in Atm.Accessories.Checks) {
      this.gridOptions.columnDefs.push(Object.assign({}, { suppressFilter: true }, Atm.Accessories.Checks[prop], {
        headerName: this.translateSrv.instant(Atm.Accessories.Checks[prop].headerName)
      }));
    }
  };

  fitCols_checkInfo() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  ngOnChanges(newValue) {
    if (!isNullOrUndefined(newValue.checkInfo_data) && !isNullOrUndefined(newValue.checkInfo_data.currentValue)&&!isNullOrUndefined(this.gridOptions.api)) {
      let rowData = this.checkInfo_data.deviceList;
      this.gridOptions.api.setRowData(rowData);

      for (let key in this.checkInfo_data) {
        if (key !== 'deviceList') {
          this.infos.push({key: `atm.${key}`, value: new Date(this.checkInfo_data[key]).toLocaleString()})
        }
      }
    }
  }
}
