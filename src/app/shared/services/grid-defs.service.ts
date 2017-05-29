import {Injectable} from '@angular/core';
import {GridOptions} from "ag-grid";
import {i18n} from "../../config/i18n";
import {TranslateService} from "@ngx-translate/core";
import {isNullOrUndefined} from "util";
import {Atms} from "../../config/atms";

@Injectable()
export class GridDefsService {
  private gridOptions: GridOptions = {};

  constructor(private translateSrv: TranslateService) {
  }

  initGridOptions() {
    this.gridOptions={};

    this.gridOptions.enableRtl = i18n[this.translateSrv.getDefaultLang().toUpperCase()] == 'rtl';
    this.gridOptions.enableSorting = true;
    this.gridOptions.columnDefs = [];
    this.gridOptions.suppressContextMenu = true;
    // this.gridOptions.suppressMenuColumnPanel = true;
    this.gridOptions.suppressMenuMainPanel = true;
    // this.gridOptions.suppressMenuFilterPanel = true;
    this.gridOptions.rowHeight = 32;
    return Object.assign(this.gridOptions);
  }

  initGridOptionsPagination(page){
    this.gridOptions={};
    this.gridOptions.maxPagesInCache = 0;
    this.gridOptions.infiniteBlockSize = page;
    this.gridOptions.rowModelType = "infinite";
    this.gridOptions.pagination = true;
    this.gridOptions.enableServerSideSorting = true;
    this.gridOptions.enableServerSideFilter = true;
    this.gridOptions.enableRtl = i18n[this.translateSrv.getDefaultLang().toUpperCase()] == 'rtl';
    this.gridOptions.enableSorting = true;
    this.gridOptions.columnDefs = [];
    this.gridOptions.suppressContextMenu = true;
    // this.gridOptions.suppressMenuColumnPanel = true;
    this.gridOptions.suppressMenuMainPanel = true;
    // this.gridOptions.suppressMenuFilterPanel = true;
    this.gridOptions.rowHeight = 32;
    return Object.assign(this.gridOptions);

  }
  initAtmsGridColDefs(colsDef, region) {
    let columnDefs = [];
    colsDef.forEach((col) => {
      if (col.visible && !isNullOrUndefined(Atms[region][col.field])) {
        columnDefs.push(
          Object.assign({},
            {
              suppressFilter: true,
              suppressMenuColumnPanel: true,
              suppressMenuMainPanel: true,
              suppressMenuFilterPanel: true
            },
            Atms[region][col.field], {
              headerName: this.translateSrv.instant(Atms[region][col.field].headerName)
            }));
      }
    });
    return columnDefs;
  }

}
