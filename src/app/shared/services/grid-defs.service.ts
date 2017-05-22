import { Injectable } from '@angular/core';
import {GridOptions} from "ag-grid";
import {i18n} from "../../config/i18n";
import {TranslateService} from "@ngx-translate/core";
import {isNullOrUndefined} from "util";
import {Atms} from "../../config/atms";

@Injectable()
export class GridDefsService {
  private gridOptions: GridOptions = {};

  constructor(private translateSrv: TranslateService) { }

  initGridOptions(){
    this.gridOptions.enableRtl = i18n[this.translateSrv.getDefaultLang().toUpperCase()] == 'rtl';
    this.gridOptions.enableSorting = true;
    this.gridOptions.columnDefs = [];
    this.gridOptions.getRowHeight = (() => {
      return 32
    });
    return this.gridOptions
  }

  initAtmsGridColDefs(colsDef,region){
    let columnDefs = [];
    colsDef.forEach((col) => {
      if (col.visible && !isNullOrUndefined(Atms[region][col.field])) {
        columnDefs.push(
          Object.assign({},
            {suppressFilter: true},
            Atms[region][col.field], {
              headerName: this.translateSrv.instant(Atms[region][col.field].headerName)
            }));
      }

    });

    return columnDefs;
  }

}
