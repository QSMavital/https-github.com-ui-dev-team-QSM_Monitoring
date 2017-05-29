import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Atm} from "../../../../../config/atm";
import {i18n} from "../../../../../config/i18n";

@Component({
  selector: 'ui-accessories-printers',
  templateUrl: './accessories-printers.component.html',
  styleUrls: ['./accessories-printers.component.scss']
})
export class AccessoriesPrintersComponent implements OnInit {

  public widgetsData: any =
    {
      header: "atm.printers",
      gridData: {
        rowData: [
          {
            item: "item1",
            propriety: "FATAL"
          },
          {
            item: "item2",
            propriety: "FATAL"
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
      props: Atm.Accessories.Printers
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
