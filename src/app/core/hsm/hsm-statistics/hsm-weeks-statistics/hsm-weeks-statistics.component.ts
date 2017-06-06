import {Component, OnInit} from '@angular/core';
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
export class HsmWeeksStatisticsComponent implements OnInit {
  public gridOptions: GridOptions;


  constructor(private gridDefsSrv: GridDefsService,private translateSrv: TranslateService) {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    this.gridOptions.columnDefs = [
      {headerName: "session", field: "session", width: 200},
      {headerName: "Valid code actions", field: "ValidCodeActions", width: 150},
      {headerName: "Invalid code actions", field: "InvalidCodeActions", width: 150},
      {headerName: "Valid mac actions", field: "ValidMacActions", width: 200},
      {headerName: "Invalid mac actions", field: "InvalidMacActions", width: 150},
      {headerName: "other Valid actions", field: "otherValidActions", width: 150},
      {headerName: "other Invalid actions", field: "otherInvalidActions", width: 150},
      {headerName: "faild actions", field: "faildActions", width: 150},
    ];
  }

  ngOnInit() {

  }

  fitCols_weeks_statistics() {
    let rowData = [
      {
        "session": "session",
        "ValidCodeActions": "Disconnect",
        "InvalidCodeActions": "Disconnect",
        "ValidMacActions": "Disconnect",
        "InvalidMacActions": "Disconnect",
        "otherValidActions": "Disconnect",
        "otherInvalidActions": "Disconnect",
        "faildActions": "Disconnect",
      },
      {
        "session": "session",
        "ValidCodeActions": "Disconnect",
        "InvalidCodeActions": "Disconnect",
        "ValidMacActions": "Disconnect",
        "InvalidMacActions": "Disconnect",
        "otherValidActions": "Disconnect",
        "otherInvalidActions": "Disconnect",
        "faildActions": "Disconnect",
      },
      {
        "session": "session",
        "ValidCodeActions": "Disconnect",
        "InvalidCodeActions": "Disconnect",
        "ValidMacActions": "Disconnect",
        "InvalidMacActions": "Disconnect",
        "otherValidActions": "Disconnect",
        "otherInvalidActions": "Disconnect",
        "faildActions": "Disconnect",
      },
      {
        "session": "session",
        "ValidCodeActions": "Disconnect",
        "InvalidCodeActions": "Disconnect",
        "ValidMacActions": "Disconnect",
        "InvalidMacActions": "Disconnect",
        "otherValidActions": "Disconnect",
        "otherInvalidActions": "Disconnect",
        "faildActions": "Disconnect",
      },
      {
        "session": "session",
        "ValidCodeActions": "Disconnect",
        "InvalidCodeActions": "Disconnect",
        "ValidMacActions": "Disconnect",
        "InvalidMacActions": "Disconnect",
        "otherValidActions": "Disconnect",
        "otherInvalidActions": "Disconnect",
        "faildActions": "Disconnect",
      }
    ];
    this.gridOptions.api.setRowData(rowData);
    this.gridOptions.api.sizeColumnsToFit();
  }

}
