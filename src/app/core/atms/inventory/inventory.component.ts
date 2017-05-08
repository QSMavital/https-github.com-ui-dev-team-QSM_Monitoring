import {Component, OnInit, OnDestroy} from '@angular/core';
import {GridOptions} from "ag-grid";
import {Atms} from "../../../config/atms";
import {TranslateService, LangChangeEvent} from "@ngx-translate/core";
import {i18n} from "../../../config/i18n";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, OnDestroy {
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
  private gridOptions: GridOptions = {};

  constructor(private translateSrv: TranslateService) {
    this.gridOptions.columnDefs = [];
  }

  ngOnInit() {
    if(!isNullOrUndefined(this.translateSrv.getDefaultLang())){
      this.initColDefs();
    }else {
      this.translateSrv.onLangChange.subscribe((event: LangChangeEvent) => {
        this.initColDefs();
      });
    }


    this.gridOptions.rowData = [
      {lastWithdrawal: 5, remainingCash: 10},
      {lastWithdrawal: 5, remainingCash: 10},
      {lastWithdrawal: 5, remainingCash: 10},
      {lastWithdrawal: 5, remainingCash: 10},
      {lastWithdrawal: 5, remainingCash: 10},
      {lastWithdrawal: 5, remainingCash: 10},
      {lastWithdrawal: 5, remainingCash: 10},
    ]
  }

  initColDefs(){
    this.gridOptions.enableRtl = i18n[this.translateSrv.getDefaultLang()]=='rtl';
    this.gridOptions.columnDefs = [];
    for (var prop in Atms.Inventory) {
      this.gridOptions.columnDefs.push(
        Object.assign({},
          Atms.Inventory[prop],
          {
            headerName: this.translateSrv.instant(Atms.Inventory[prop].headerName)
          }));
    }
    // this.gridOptions.api.doLayout();
  }

  ngOnDestroy(){
    this.gridOptions={};
  }
}
