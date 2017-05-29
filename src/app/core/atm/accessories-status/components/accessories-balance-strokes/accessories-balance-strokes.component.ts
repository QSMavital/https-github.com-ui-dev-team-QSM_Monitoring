import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Atm} from "../../../../../config/atm";
import {i18n} from "../../../../../config/i18n";



@Component({
  selector: 'ui-accessories-balance-strokes',
  templateUrl: './accessories-balance-strokes.component.html',
  styleUrls: ['./accessories-balance-strokes.component.scss']
})
export class AccessoriesBalanceStrokesComponent implements OnInit {

  public widgetsData: any =
    {
      header: "atm.balanceOfLastStrokes",
      gridData: {
        rowData: [
          {
            "value": 100,
            "propriety": "FATAL",
            "coin": "NIS",
            "amount": 100,
            "difference": 50
          }
        ],
        enableRtl: i18n[this.translateSrv.getDefaultLang().toUpperCase()] == 'rtl',
        enableSorting: true,
        getRowHeight: (() => {
          return 32
        }),
        columnDefs: []
      },
      footer: {"atm.total": "15,000", "atm.alert": "7,000"},
      width: 50,
      props: Atm.Accessories.LastStrokes
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
