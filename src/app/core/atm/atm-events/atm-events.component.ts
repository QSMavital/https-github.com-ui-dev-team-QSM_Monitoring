import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {i18n} from "../../../config/i18n";
import {Atm} from "../../../config/atm";

@Component({
  selector: 'ui-atm-events',
  templateUrl: './atm-events.component.html',
  styleUrls: ['./atm-events.component.scss']
})
export class AtmEventsComponent implements OnInit {

  public widgetsData: any =
    {
      gridData: {
        rowData: [
          {
            date: 1494317961838,
            time: 1494317961838,
            eventCode: "AC001",
            eventTextEn: "Late response",
            eventTextLocal: "Late response(approved) received from bank for transaction 1",
          }
        ],
        enableRtl: i18n[this.translateSrv.getDefaultLang().toUpperCase()] == 'rtl',
        enableSorting: true,
        getRowHeight: (() => {
          return 32
        }),
        columnDefs: []
      },
      width: 150,
      props: Atm.events
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

