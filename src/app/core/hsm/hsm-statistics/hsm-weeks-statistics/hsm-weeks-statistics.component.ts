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
export class HsmWeeksStatisticsComponent {
  public gridOptions: GridOptions;


  constructor(private gridDefsSrv: GridDefsService,private translateSrv: TranslateService) {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    for(let prop in Hsm.statistics){
      this.gridOptions.columnDefs.push(Object.assign({}, { suppressFilter: true }, Hsm.statistics[prop], {
        headerName: this.translateSrv.instant(Hsm.statistics[prop].headerName)
      }));
    }
    this.gridOptions.rowData = [
      {
        "session": "session",
        "ValidCodeActions": "Disconnect",
        "InvalidCodeActions": "Disconnect",
        "ValidMacActions": "Disconnect",
        "InvalidMacActions": "Disconnect",
        "otherValidActions": "Disconnect",
        "otherInvalidActions": "Disconnect",
        "failedActions": "Disconnect",
      },
      {
        "session": "session",
        "ValidCodeActions": "Disconnect",
        "InvalidCodeActions": "Disconnect",
        "ValidMacActions": "Disconnect",
        "InvalidMacActions": "Disconnect",
        "otherValidActions": "Disconnect",
        "otherInvalidActions": "Disconnect",
        "failedActions": "Disconnect",
      },
      {
        "session": "session",
        "ValidCodeActions": "Disconnect",
        "InvalidCodeActions": "Disconnect",
        "ValidMacActions": "Disconnect",
        "InvalidMacActions": "Disconnect",
        "otherValidActions": "Disconnect",
        "otherInvalidActions": "Disconnect",
        "failedActions": "Disconnect",
      },
      {
        "session": "session",
        "ValidCodeActions": "Disconnect",
        "InvalidCodeActions": "Disconnect",
        "ValidMacActions": "Disconnect",
        "InvalidMacActions": "Disconnect",
        "otherValidActions": "Disconnect",
        "otherInvalidActions": "Disconnect",
        "failedActions": "Disconnect",
      },
      {
        "session": "session",
        "ValidCodeActions": "Disconnect",
        "InvalidCodeActions": "Disconnect",
        "ValidMacActions": "Disconnect",
        "InvalidMacActions": "Disconnect",
        "otherValidActions": "Disconnect",
        "otherInvalidActions": "Disconnect",
        "failedActions": "Disconnect",
      }
    ];
  }

  fitCols_weeks_statistics() {
    this.gridOptions.api.sizeColumnsToFit();
  }

}
