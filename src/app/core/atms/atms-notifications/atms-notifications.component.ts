import {Component, OnInit} from '@angular/core';
import {Atms} from "../../../config/atms";
import {i18n} from "../../../config/i18n";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'ui-atms-notifications',
  templateUrl: './atms-notifications.component.html',
  styleUrls: ['./atms-notifications.component.scss']
})
export class AtmsNotificationsComponent implements OnInit {

  private gridOptions: any = {};

  constructor(private translateSrv: TranslateService) {
    this.gridOptions.columnDefs = [];
  }

  ngOnInit() {
    this.initColDefs();

    this.gridOptions.rowData = [
      {
        number:1,
        hardwareState:"FATAL",
        time:1494795600000,
        handler:"IT",
        code:"CM002",
        spec:"Communications Error",
        fullSpec:"Failed to connect to bank interface"
      },
      {
        number:2,
        hardwareState:"FATAL",
        time:1494795600000,
        handler:"IT",
        code:"CM002",
        spec:"Communications Error",
        fullSpec:"Failed to connect to bank interface"
      },
      {
        number:3,
        hardwareState:"FATAL",
        time:1494795600000,
        handler:"IT",
        code:"CM002",
        spec:"Communications Error",
        fullSpec:"Failed to connect to bank interface"
      }
    ]
  }


  fitCols(){
    this.gridOptions.api.sizeColumnsToFit();
  }

  initColDefs() {
    this.gridOptions.enableRtl = i18n[this.translateSrv.getDefaultLang().toUpperCase()] == 'rtl';
    this.gridOptions.enableSorting = true;
    this.gridOptions.getRowHeight = (() => {return 32});
    this.gridOptions.columnDefs = [];
    for (var prop in Atms.Notifications) {
      this.gridOptions.columnDefs.push(
        Object.assign({},
          {suppressFilter: true},
          Atms.Notifications[prop],
          {
            headerName: this.translateSrv.instant(Atms.Notifications[prop].headerName)

          }));
    }
  }

  ngOnDestroy() {
    this.gridOptions = {};
  }
}
