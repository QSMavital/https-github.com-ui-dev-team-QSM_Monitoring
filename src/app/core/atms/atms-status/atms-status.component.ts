import {Component, OnInit, OnDestroy} from '@angular/core';
import {GridOptions} from "ag-grid";
import {Atms} from "../../../config/atms";
import {TranslateService} from "@ngx-translate/core";
import {i18n} from "../../../config/i18n";
import {AgStatusComponent} from "../../../shared/components/ag-status/ag-status.component";

@Component({
  selector: 'ui-atms-status',
  templateUrl: './atms-status.component.html',
  styleUrls: ['./atms-status.component.scss']
})
export class AtmsStatusComponent implements OnInit {
  private addNew = false;
  private carsLarge = [
    {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
    {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
    {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
    {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
    {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
    {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
    {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
    {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
    {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
    {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"},
    {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
    {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
    {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
    {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
    {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
    {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
    {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
    {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
    {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
    {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"},
    {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
    {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
    {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
    {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
    {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
    {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
    {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
    {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
    {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
    {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"},
    {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
    {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
    {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
    {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
    {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
    {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
    {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
    {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
    {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
    {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}
  ];
  private gridOptions: GridOptions = {
    rowSelection: 'multiple',
    groupSelectsChildren: true,
    suppressRowClickSelection: true,
    groupColumnDef: {headerName: "Athlete", field: "athlete", width: 200,
      cellRenderer: 'group',
      cellRendererParams: {
        checkbox: true
      }}
  };

  constructor(private translateSrv: TranslateService) {
    this.gridOptions.columnDefs = [];
  }

  ngOnInit() {
    this.initColDefs();

    this.gridOptions.rowData = [ {
      "terminalId" : "288031",
      "atmName" : "The best",
      "terminalStatusColor" : "FATAL",
      "terminalStatus" : "OFF_LINE",
      "closedStatus" : false,
      "closedOperator" : true,
      "closedGroup" : false,
      "closedAll" : false,
      "dispenserColor" : "GOOD",
      "cashDepositColor" : "GOOD",
      "checkDepositColor" : "DISABLE",
      "printerColor" : "GOOD",
      "receiptColor" : "DISABLE",
      "cardReaderColor" : "GOOD",
      "eppColor" : "GOOD",
      "lastGoodTransaction" : 1440180054000,
      "lastSettlement" : 1474485060920,
      "lastMessage" : 1476307797523,
      "branch" : "200",
      "belong" : 1,
      "treatmentStartDate" : 0,
      "responsibility" : "NONE",
      "terminalGroup" : "01",
      "area" : "NONE",
      "cardsRetained" : 1,
      "lastGoodWdrl" : 946677600000,
      "lastCardSettlement" : 1475266281019,
      "lastDepositSettlement" : 946677600000,
      "lastCheckSettlement" : 946677600000,
      "totalRemaining" : 12480000,
      "totalDispensed" : 0,
      "checkTotalBin1" : 0,
      "checkTotalBin2" : 0
    }, {
      "terminalId" : "288032",
      "atmName" : "test",
      "terminalStatusColor" : "FATAL",
      "terminalStatus" : "OFF_LINE",
      "closedStatus" : false,
      "closedOperator" : true,
      "closedGroup" : false,
      "closedAll" : false,
      "dispenserColor" : "GOOD",
      "cashDepositColor" : "GOOD",
      "checkDepositColor" : "DISABLE",
      "printerColor" : "GOOD",
      "receiptColor" : "DISABLE",
      "cardReaderColor" : "GOOD",
      "eppColor" : "GOOD",
      "lastGoodTransaction" : 1449342890265,
      "lastSettlement" : 1472027446100,
      "lastMessage" : 1478269947371,
      "branch" : "288",
      "belong" : 1,
      "treatmentStartDate" : 0,
      "responsibility" : "NONE",
      "terminalGroup" : "00",
      "area" : "NORTH",
      "cardsRetained" : 0,
      "lastGoodWdrl" : 1449342890265,
      "lastCardSettlement" : 1476307886568,
      "lastDepositSettlement" : 946677600000,
      "lastCheckSettlement" : 946677600000,
      "totalRemaining" : 16965000,
      "totalDispensed" : 0,
      "checkTotalBin1" : 0,
      "checkTotalBin2" : 0
    }, {
      "terminalId" : "288033",
      "atmName" : "Lincoln",
      "terminalStatusColor" : "FATAL",
      "terminalStatus" : "OFF_LINE",
      "closedStatus" : false,
      "closedOperator" : false,
      "closedGroup" : false,
      "closedAll" : true,
      "dispenserColor" : "GOOD",
      "cashDepositColor" : "GOOD",
      "checkDepositColor" : "GOOD",
      "printerColor" : "GOOD",
      "receiptColor" : "DISABLE",
      "cardReaderColor" : "GOOD",
      "eppColor" : "GOOD",
      "lastGoodTransaction" : 1440342027000,
      "lastSettlement" : 946677600000,
      "lastMessage" : 1475266258275,
      "branch" : "288",
      "belong" : 2,
      "treatmentStartDate" : 0,
      "responsibility" : "NONE",
      "terminalGroup" : "01",
      "area" : "NONE",
      "cardsRetained" : 0,
      "lastGoodWdrl" : 946677600000,
      "lastCardSettlement" : 946677600000,
      "lastDepositSettlement" : 946677600000,
      "lastCheckSettlement" : 946677600000,
      "totalRemaining" : 12480000,
      "totalDispensed" : 0,
      "checkTotalBin1" : 0,
      "checkTotalBin2" : 0
    } ];
  }

  initColDefs(){
    this.gridOptions.enableRtl = i18n[this.translateSrv.getDefaultLang()]=='rtl';
    this.gridOptions.columnDefs = [];
    for (var prop in Atms.Status) {
        this.gridOptions.columnDefs.push(
          Object.assign({},
            Atms.Status[prop],
            {
              headerName: this.translateSrv.instant(Atms.Status[prop].headerName)
            }));
    }
    // this.gridOptions.api.doLayout();
  }

  ngOnDestroy(){
    this.gridOptions={};
  }
}
