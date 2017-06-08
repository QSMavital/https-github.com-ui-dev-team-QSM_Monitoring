import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {GridOptions} from "ag-grid";
import {isNullOrUndefined} from "util";
import {GridDefsService} from "../../../../../shared/services/grid-defs.service";
import {TranslateService} from "@ngx-translate/core";
import {Atm} from "../../../../../config/atm";

@Component({
  selector: 'ui-atm-status-keys',
  templateUrl: './atm-status-keys.component.html',
  styleUrls: ['./atm-status-keys.component.scss']
})
export class AtmStatusKeysComponent implements OnChanges {
  @Input() keys_data: any;
  public gridOptions: GridOptions;
  public infos: any[] = [];

  constructor(private gridDefsSrv: GridDefsService, private translateSrv: TranslateService) {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    for (let prop in Atm.Status.keys) {
      this.gridOptions.columnDefs.push(Object.assign({}, {suppressFilter: true}, Atm.Status.keys[prop], {
        headerName: this.translateSrv.instant(Atm.Status.keys[prop].headerName)
      }));
    }
  }

  fitCols_Keys() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  ngOnChanges(newValue) {
    if (!isNullOrUndefined(newValue.keys_data) && !isNullOrUndefined(newValue.keys_data.currentValue) && !isNullOrUndefined(this.gridOptions.api)) {
      this.gridOptions.api.setRowData(this.keys_data["keys"]);
      this.infos = [];
      for (var key in this.keys_data) {
        if (key !== 'keys') {
          if (key === 'eppUid') {
            this.infos.push({key: `enums.${key}`, value: this.keys_data[key]})
          } else {
            this.infos.push({key: `atm.${key}`, value: new Date(this.keys_data[key]).toLocaleString()})
          }
        }
      }
    }
  }
}
