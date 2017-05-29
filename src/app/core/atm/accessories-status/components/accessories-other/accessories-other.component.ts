import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {i18n} from "../../../../../config/i18n";
import {Atm} from "../../../../../config/atm";

@Component({
  selector: 'ui-accessories-other',
  templateUrl: './accessories-other.component.html',
  styleUrls: ['./accessories-other.component.scss']
})
export class AccessoriesOtherComponent implements OnInit {

  public widgetsData: any =
    {
      header: "atm.other",
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
      width: 100 / 3,
      footer: {"atm.lastReset": {time: true, value: "oct 10 1926"}},
      props: Atm.Accessories.Other
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
    this.widgetsData={};
  }

}
