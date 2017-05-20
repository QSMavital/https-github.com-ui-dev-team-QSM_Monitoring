import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {i18n} from "../../../config/i18n";
import {Atms} from "../../../config/atms";

@Component({
  selector: 'ui-atms-transactions',
  templateUrl: './atms-transactions.component.html',
  styleUrls: ['./atms-transactions.component.scss']
})
export class AtmsTransactionsComponent implements OnInit, OnDestroy {

  private gridOptions: any = {};

  constructor(private translateSrv: TranslateService) {
    this.gridOptions.columnDefs = [];
  }

  ngOnInit() {
    this.initColDefs();

    this.gridOptions.rowData = [
      {
        transactionId:1,
        time:1494795600000,
        terminalId:6,
        card:'0453',
        bank:'BOJ',
        actionType:"cardCheck",
        amount:1000,
        endTransaction:"Authorized",
        verifiedBy:"pending",
        rejectionReason:"-",
        deviceFee:"1.74",
        businessDay:"20/08/2015"
      },
      {
        transactionId:2,
        time:1494795600000,
        terminalId:6,
        card:'0453',
        bank:'BOJ',
        actionType:"cardCheck",
        amount:1000,
        endTransaction:"Authorized",
        verifiedBy:"pending",
        rejectionReason:"-",
        deviceFee:"1.74",
        businessDay:"20/08/2015"
      },
      {
        transactionId:3,
        time:1494795600000,
        terminalId:6,
        card:'0453',
        bank:'BOJ',
        actionType:"cardCheck",
        amount:1000,
        endTransaction:"Authorized",
        verifiedBy:"pending",
        rejectionReason:"-",
        deviceFee:"1.74",
        businessDay:"20/08/2015"
      },
      {
        transactionId:4,
        time:1494795600000,
        terminalId:6,
        card:'0453',
        bank:'BOJ',
        actionType:"cardCheck",
        amount:1000,
        endTransaction:"Authorized",
        verifiedBy:"pending",
        rejectionReason:"-",
        deviceFee:"1.74",
        businessDay:"20/08/2015"
      }
    ];
  }

  initColDefs() {
    this.gridOptions.enableRtl = i18n[this.translateSrv.getDefaultLang().toUpperCase()] == 'rtl';
    this.gridOptions.enableSorting = true;
    this.gridOptions.columnDefs = [];
    for (var prop in Atms.Transactions) {
      this.gridOptions.columnDefs.push(
        Object.assign({},
          {suppressFilter: true},
          Atms.Transactions[prop],
          {
            headerName: this.translateSrv.instant(Atms.Transactions[prop].headerName)
          }));
    }
  }

  ngOnDestroy() {
    this.gridOptions = {};
  }

}
