import {Component, OnInit} from '@angular/core';
import {Atm} from "../../../../../config/atm";
import {i18n} from "../../../../../config/i18n";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'ui-accessories-cash-pool',
  templateUrl: './accessories-cash-pool.component.html',
  styleUrls: ['./accessories-cash-pool.component.scss']
})
export class AccessoriesCashPoolComponent implements OnInit {

  public widgetsData: any =
    {
      header: "atm.cashPool",
      gridData: {
        rowData: [
          {
            "item": "1",
            "propriety": "FATAL",
            "inventory": 50,
            "coin": "NIS",
            "value": 100,
            "loaded": 1000,
            "withdrawed": 200,
            "rejected": 5,
            "left": 795
          },
          {
            "item": "2",
            "propriety": "FATAL",
            "inventory": 25,
            "coin": "NIS",
            "value": 100,
            "loaded": 1000,
            "withdrawed": 200,
            "rejected": 5,
            "left": 795
          },
          {
            "item": "3",
            "propriety": "FATAL",
            "inventory": 66,
            "coin": "NIS",
            "value": 100,
            "loaded": 1000,
            "withdrawed": 200,
            "rejected": 5,
            "left": 795
          }
        ],
        enableRtl: i18n[this.translateSrv.getDefaultLang().toUpperCase()] == 'rtl',
        enableSorting: true,
        getRowHeight: (() => {
          return 32
        }),
        columnDefs: [],
      },
      footer: {
        "atm.total": "150,000",
        "atm.lastSuccessful": {time: true, value: "15 may 2017 22:15"}
      },
      width: 50,
      props: Atm.Accessories.CashPool
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
