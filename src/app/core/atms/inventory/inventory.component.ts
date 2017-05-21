import {Component, OnInit, OnDestroy} from '@angular/core';
import {GridOptions} from "ag-grid";
import {Atms} from "../../../config/atms";
import {TranslateService} from "@ngx-translate/core";
import {i18n} from "../../../config/i18n";
import {NgRedux} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, OnDestroy {
  private addNew = false;
  private gridOptions: GridOptions = {};

  constructor(private translateSrv: TranslateService, private ngRedux: NgRedux<IStore>) {
    this.gridOptions.columnDefs = [];
  }

  ngOnInit() {
    this.initColDefs();

    this.gridOptions.rowData = [
      {
        "terminalId": "288031",
        "atmName": "The best",
        "terminalStatusColor": "FATAL",
        "terminalStatus": "OFF_LINE",
        "closedStatus": false,
        "closedOperator": true,
        "closedGroup": false,
        "closedAll": false,
        "dispenserColor": "GOOD",
        "cashDepositColor": "GOOD",
        "checkDepositColor": "DISABLE",
        "printerColor": "GOOD",
        "receiptColor": "DISABLE",
        "cardReaderColor": "GOOD",
        "eppColor": "GOOD",
        "lastGoodTransaction": 1440180054000,
        "lastSettlement": 1474485060920,
        "lastMessage": 1476307797523,
        "branch": "200",
        "belong": 1,
        "treatmentStartDate": 0,
        "responsibility": "NONE",
        "terminalGroup": "01",
        "area": "NONE",
        "cardsRetained": 1,
        "lastGoodWdrl": 946677600000,
        "lastCardSettlement": 1475266281019,
        "lastDepositSettlement": 946677600000,
        "lastCheckSettlement": 946677600000,
        "totalRemaining": 12480000,
        "totalDispensed": 0,
        "checkTotalBin1": 0,
        "checkTotalBin2": 0
      }, {
        "terminalId": "288032",
        "atmName": "test",
        "terminalStatusColor": "FATAL",
        "terminalStatus": "OFF_LINE",
        "closedStatus": false,
        "closedOperator": true,
        "closedGroup": false,
        "closedAll": false,
        "dispenserColor": "GOOD",
        "cashDepositColor": "GOOD",
        "checkDepositColor": "DISABLE",
        "printerColor": "GOOD",
        "receiptColor": "DISABLE",
        "cardReaderColor": "GOOD",
        "eppColor": "GOOD",
        "lastGoodTransaction": 1449342890265,
        "lastSettlement": 1472027446100,
        "lastMessage": 1478269947371,
        "branch": "288",
        "belong": 1,
        "treatmentStartDate": 0,
        "responsibility": "NONE",
        "terminalGroup": "00",
        "area": "NORTH",
        "cardsRetained": 0,
        "lastGoodWdrl": 1449342890265,
        "lastCardSettlement": 1476307886568,
        "lastDepositSettlement": 946677600000,
        "lastCheckSettlement": 946677600000,
        "totalRemaining": 16965000,
        "totalDispensed": 0,
        "checkTotalBin1": 0,
        "checkTotalBin2": 0
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
    let colsDef = this.ngRedux.getState().userSettings.atmsCustomization['atmsSupply'];
    console.log(colsDef);
    this.gridOptions.enableRtl = i18n[this.translateSrv.getDefaultLang().toUpperCase()] == 'rtl';
    this.gridOptions.enableSorting = true;
    this.gridOptions.columnDefs = [];
    colsDef.forEach((col) => {
      if (col.visible && !isNullOrUndefined(Atms.Inventory[col.field])) {
        this.gridOptions.columnDefs.push(
          Object.assign({},
            {suppressFilter: true},
            Atms.Inventory[col.field],
            {
              headerName: this.translateSrv.instant(Atms.Inventory[col.field].headerName)

            }));
      }

    });
  }

  ngOnDestroy() {
    this.gridOptions = {};
  }
}
