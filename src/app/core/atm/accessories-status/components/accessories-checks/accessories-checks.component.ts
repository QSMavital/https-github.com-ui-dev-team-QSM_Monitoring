import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Atm} from "../../../../../config/atm";
import {i18n} from "../../../../../config/i18n";

@Component({
  selector: 'ui-accessories-checks',
  templateUrl: './accessories-checks.component.html',
  styleUrls: ['./accessories-checks.component.scss']
})
export class AccessoriesChecksComponent implements OnInit {

  public widgetsData: any =
    {
      header: "atm.checks",
      gridData: {
        rowData: [
          {
            item: "item1",
            propriety: "FATAL",
            inventory: "67",
            counter: 0
          },
          {
            item: "item2",
            propriety: "FATAL",
            inventory: "67",
            counter: 0
          },
          {
            item: "item3",
            propriety: "FATAL",
            inventory: "67",
            counter: 0
          }
        ],
        enableRtl: i18n[this.translateSrv.getDefaultLang().toUpperCase()] == 'rtl',
        enableSorting: true,
        getRowHeight: (() => {
          return 32
        }),
        columnDefs: []
      },
      footer: {
        "atm.lastSuccessful": {time: true, value: "oct 10 1976"},
        "atm.lastReset": {time: true, value: "oct 10 1926"}
      },
      width: 100 / 3,
      props: Atm.Accessories.Checks
    };

  constructor(private translateSrv: TranslateService) {

  };

  ngOnInit() {
    this.initColDefs();
  };

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
    this.widgetsData={};
  };

}
