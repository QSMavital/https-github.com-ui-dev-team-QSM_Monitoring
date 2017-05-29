import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {i18n} from "../../../config/i18n";
import {Atm} from "../../../config/atm";

@Component({
  selector: 'ui-atm-notifications',
  templateUrl: './atm-notifications.component.html',
  styleUrls: ['./atm-notifications.component.scss']
})
export class AtmNotificationsComponent implements OnInit {

  public widgetsData: any =
    {
      gridData: {
        rowData: [
          {
            id: 1,
            atmNo: "000000",
            atmName: "atmName",
            eventSeverity: "FATAL",
            date: 1494317961838,
            time: 1494317961838,
            eventDestinations: ["SEC", "IT", "CIT"],
            eventCode: "AC001",
            eventTextEn: "AC001 Late response(approved) received from bank for transaction 1",
            eventTextLocal: "תשובה מאוחרת",
            device: "",
          }
        ],
        enableRtl: i18n[this.translateSrv.getDefaultLang().toUpperCase()] == 'rtl',
        enableSorting: true,
        getRowHeight: (() => {
          return 32
        }),
        columnDefs: []
      },
      width: 50,
      props: Atm.notifications
    };

  constructor(private translateSrv: TranslateService) {

  }

  ngOnInit() {
    this.initColDefs();
  }

  initColDefs() {
      for (let prop in this.widgetsData.props) {
        this.widgetsData.gridData.columnDefs.push(
          Object.assign({},
            {suppressFilter: true},
            this.widgetsData.props[prop],
            {
              headerName: this.translateSrv.instant(this.widgetsData.props[prop].headerName)
            }));
      }
  }

  ngOnDestroy() {
    this.widgetsData = {};
  }
}

