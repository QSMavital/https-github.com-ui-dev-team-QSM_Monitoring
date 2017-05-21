import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {i18n} from "../../../config/i18n";
import {Atms} from "../../../config/atms";

@Component({
  selector: 'ui-atms-events',
  templateUrl: './atms-events.component.html',
  styleUrls: ['./atms-events.component.scss']
})
export class AtmsEventsComponent implements OnInit, OnDestroy {

  private gridOptions: any = {};

  constructor(private translateSrv: TranslateService) {
    this.gridOptions.columnDefs = [];
  }

  ngOnInit() {
    this.initColDefs();

    this.gridOptions.rowData = [
      {
        terminalId:1,
        time:1494795600000,
        code:"CM002",
        spec:"Communications Error",
        fullSpec:"Failed to connect to bank interface"
      },
      {
        terminalId:2,
        time:1494795600000,
        code:"CM002",
        spec:"Communications Error",
        fullSpec:"Failed to connect to bank interface"
      },
      {
        terminalId:3,
        time:1494795600000,
        code:"CM002",
        spec:"Communications Error",
        fullSpec:"Failed to connect to bank interface"
      }
    ];
  }

  fitCols(){
    this.gridOptions.api.sizeColumnsToFit();
  }

  initColDefs() {
    this.gridOptions.enableRtl = i18n[this.translateSrv.getDefaultLang().toUpperCase()] == 'rtl';
    this.gridOptions.enableSorting = true;
    this.gridOptions.getRowHeight = (() => {return 32});
    this.gridOptions.columnDefs = [];
    for (var prop in Atms.Events) {
      this.gridOptions.columnDefs.push(
        Object.assign({},
          {suppressFilter: true},
          Atms.Events[prop],
          {
            headerName: this.translateSrv.instant(Atms.Events[prop].headerName)
          }));
    }
  }

  ngOnDestroy() {
    this.gridOptions = {};
  }

}
