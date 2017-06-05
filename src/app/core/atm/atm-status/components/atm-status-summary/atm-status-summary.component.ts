import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {GridOptions} from "ag-grid";
import {AgStatusComponent} from "../../../../../shared/components/ag-status/ag-status.component";
import {isNullOrUndefined} from "util";
import {TranslateService} from "@ngx-translate/core";
import {GridDefsService} from "../../../../../shared/services/grid-defs.service";
import {AgTranslateMapComponent} from "../../../../../shared/components/ag-translate-map/ag-translate-map.component";
import {AgProgressComponent} from "app/shared/components/ag-progress/ag-progress.component";

@Component({
  selector: 'ui-atm-status-summary',
  templateUrl: './atm-status-summary.component.html',
  styleUrls: ['./atm-status-summary.component.scss']
})
export class AtmStatusSummaryComponent implements OnInit, OnChanges {
  @Input() summary_data: any;
  public gridOptions: GridOptions;

  constructor(private gridDefsSrv: GridDefsService, private translateSrv: TranslateService) {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    this.gridOptions.columnDefs = [
      {
        headerName: this.translateSrv.instant('general.device'),
        field: "device",
        width: 250,
        suppressSizeToFit: true,
        cellRendererFramework: AgTranslateMapComponent
      },
      {
        headerName: this.translateSrv.instant('general.status'),
        field: "statusColor",
        width: 220,
        cellRendererFramework: AgStatusComponent
      },
      {
        headerName: this.translateSrv.instant('general.fitness'),
        field: "fitness",
        cellRendererFramework: AgTranslateMapComponent
      },
      {
        headerName: this.translateSrv.instant('general.supply'),
        field: "supply",
        cellRendererFramework: AgProgressComponent
      }
    ];
  }

  ngOnInit() {
  }

  fitCols_SummaryOfAssemblies() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  ngOnChanges(newValue) {
    if (!isNullOrUndefined(newValue.summary_data) && !isNullOrUndefined(newValue.summary_data.currentValue)&&!isNullOrUndefined(this.gridOptions.api)) {
      let rowData = this.summary_data;
      this.gridOptions.api.setRowData(rowData);
    }
  }
}

/*[
 {
 "device": "CARD_READER",
 "statusColor": "DISABLE",
 "fitness": "NO_ERROR",
 "supply": "NO_INFO",
 "counter": 0
 },
 {
 "device": "",
 "statusColor": "DISABLE",
 "fitness": "NO_ERROR",
 "supply": "NO_INFO",
 "counter": 0
 }
 ]*/
