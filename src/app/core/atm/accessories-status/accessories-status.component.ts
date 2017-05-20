import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {i18n} from "../../../config/i18n";
import {GridOptions} from "ag-grid";
import {Atm} from "../../../config/atm";

@Component({
  selector: 'ui-accessories-status',
  templateUrl: './accessories-status.component.html',
  styleUrls: ['./accessories-status.component.scss']
})
export class AccessoriesStatusComponent implements OnInit {

  private gridOptions: GridOptions = {};

  constructor(private translateSrv: TranslateService) {
    this.gridOptions.columnDefs = [];
  }

  ngOnInit() {
    this.initColDefs();

    this.gridOptions.rowData = [
      {
        "item":"1",
        "propriety":"FATAL",
        "inventory": 50,
        "coin":"NIS",
        "value":100,
        "loaded":1000,
        "withdrawed":200,
        "rejected":5,
        "left":795
      }, {

      }, {
        "terminalId": "288033",
        "atmName": "Lincoln",
        "terminalStatusColor": "FATAL",
        "terminalStatus": "OFF_LINE",
        "closedStatus": false,
        "closedOperator": false,
        "closedGroup": false,
        "closedAll": true,
        "dispenserColor": "GOOD",
        "cashDepositColor": "GOOD",
        "checkDepositColor": "GOOD",
        "printerColor": "GOOD",
        "receiptColor": "DISABLE",
        "cardReaderColor": "GOOD",
        "eppColor": "GOOD",
        "lastGoodTransaction": 1440342027000,
        "lastSettlement": 946677600000,
        "lastMessage": 1475266258275,
        "branch": "288",
        "belong": 2,
        "treatmentStartDate": 0,
        "responsibility": "NONE",
        "terminalGroup": "01",
        "area": "NONE",
        "cardsRetained": 0,
        "lastGoodWdrl": 946677600000,
        "lastCardSettlement": 946677600000,
        "lastDepositSettlement": 946677600000,
        "lastCheckSettlement": 946677600000,
        "totalRemaining": 12480000,
        "totalDispensed": 0,
        "checkTotalBin1": 0,
        "checkTotalBin2": 0
      }];
  }

  initColDefs() {
    this.gridOptions.enableRtl = i18n[this.translateSrv.getDefaultLang().toUpperCase()] == 'rtl';
    this.gridOptions.enableSorting = true;
    this.gridOptions.columnDefs = [];
    for (var prop in Atm.CashPool) {
      this.gridOptions.columnDefs.push(
        Object.assign({},
          {suppressFilter: true},
          Atm.CashPool[prop],
          {
            headerName: this.translateSrv.instant(Atm.CashPool[prop].headerName)

          }));
    }
    // this.gridOptions.api.doLayout();
  }

  ngOnDestroy() {
    this.gridOptions = {};
  }

}
