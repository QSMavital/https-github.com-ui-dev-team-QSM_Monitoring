import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {GridOptions} from "ag-grid";
import {Hsm} from "../../../../config/hsm";
import {TranslateService} from "@ngx-translate/core";
import {GridDefsService} from "../../../../shared/services/grid-defs.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-hsm-weeks-statistics',
  templateUrl: './hsm-weeks-statistics.component.html',
  styleUrls: ['./hsm-weeks-statistics.component.scss']
})
export class HsmWeeksStatisticsComponent implements OnChanges {
  @Input() public gridData: any = {};
  @Input() public date: string;
  public gridOptions: GridOptions = {};

  constructor(private gridDefsSrv: GridDefsService, private translateSrv: TranslateService) {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    for (let prop in Hsm.statistics) {
      this.gridOptions.columnDefs.push(Object.assign({}, {suppressFilter: true}, Hsm.statistics[prop], {
        headerName: this.translateSrv.instant(Hsm.statistics[prop].headerName)
      }));
    }
  }

  fitCols_weeks_statistics() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  ngOnChanges(newValue) {
    if (!isNullOrUndefined(newValue.gridData) && !isNullOrUndefined(newValue.gridData.currentValue) && !isNullOrUndefined(this.gridOptions.api)) {
      let rowData = this.gridData;
      this.gridOptions.api.setRowData(rowData);
    }
  }
}
