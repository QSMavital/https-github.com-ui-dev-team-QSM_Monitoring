import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {i18n} from "../../../config/i18n";
import {Atm} from "../../../config/atm";

@Component({
  selector: 'ui-retained-cards',
  templateUrl: './retained-cards.component.html',
  styleUrls: ['./retained-cards.component.scss']
})
export class RetainedCardsComponent implements OnInit {

  public gridOptions: any = {};

  constructor(private translateSrv: TranslateService) {
    this.gridOptions.columnDefs = [];
  }

  ngOnInit() {
    this.initColDefs();

    this.gridOptions.rowData = [
      {
        cardNumber: 1,
        retainTime: "october 10 1964",
        reason: "Card left in device",
        resetDate: "october 10 1964",
        comments: ""
      },
      {
        cardNumber: 2,
        retainTime: "october 10 1964",
        reason: "Card left in device",
        resetDate: "october 10 1964",
        comments: ""
      },
      {
        cardNumber: 3,
        retainTime: "october 10 1964",
        reason: "Card left in device",
        resetDate: "october 10 1964",
        comments: ""
      },
      {
        cardNumber: 4,
        retainTime: "october 10 1964",
        reason: "Card left in device",
        resetDate: "october 10 1964",
        comments: ""
      },
      {
        cardNumber: 5,
        retainTime: "october 10 1964",
        reason: "Card left in device",
        resetDate: "october 10 1964",
        comments: ""
      },
      {
        cardNumber: 6,
        retainTime: "october 10 1964",
        reason: "Card left in device",
        resetDate: "october 10 1964",
        comments: ""
      }, {
        cardNumber: 7,
        retainTime: "october 10 1964",
        reason: "Card left in device",
        resetDate: "october 10 1964",
        comments: ""
      }
    ];
  }

  initColDefs() {
    this.gridOptions.enableRtl = i18n[this.translateSrv.getDefaultLang().toUpperCase()] == 'rtl';
    this.gridOptions.enableSorting = true;
    this.gridOptions.getRowHeight = (() => {return 32});
    this.gridOptions.columnDefs = [];
    for (var prop in Atm.RetainedCards) {
      this.gridOptions.columnDefs.push(
        Object.assign({},
          {suppressFilter: true},
          Atm.RetainedCards[prop],
          {
            headerName: this.translateSrv.instant(Atm.RetainedCards[prop].headerName)

          }));
    }
    // this.gridOptions.api.doLayout();
  }

  ngOnDestroy() {
    this.gridOptions = {};
  }
}
