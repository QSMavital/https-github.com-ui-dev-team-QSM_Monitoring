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
    for(var prop in Hsm.statistics){
      this.gridOptions.columnDefs.push(Hsm.statistics[prop])
    }

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
