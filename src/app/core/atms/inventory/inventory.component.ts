import {Component, OnInit, OnDestroy} from '@angular/core';
import {GridOptions} from "ag-grid";
import {Atms} from "../../../config/atms";
import {TranslateService} from "@ngx-translate/core";
import {i18n} from "../../../config/i18n";
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {isNullOrUndefined} from "util";
import {AtmsActions} from "../../../../store/actions/atms-actions";
import {Observable} from "rxjs";

@Component({
  selector: 'ui-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, OnDestroy {
  private addNew = false;
  private filtersData = {};
  private gridOptions: GridOptions = {};
  @select(['atms', 'inventory']) $atms_inventory: Observable<any>;

  constructor(private translateSrv: TranslateService, private ngRedux: NgRedux<IStore>) {
    this.gridOptions.columnDefs = [];
    this.ngRedux.dispatch({type: AtmsActions.ATMS_GET_INVENTORY});
  }

  ngOnInit() {
    this.initColDefs();
    this.$atms_inventory.subscribe((state) => {
      if (!isNullOrUndefined(state) && !isNullOrUndefined(this.gridOptions.api)) {
        this.gridOptions.api.setRowData(state.atms);
        this.filtersData = state.filters;
      }
    });
  }

  initColDefs() {
    let colsDef = this.ngRedux.getState().userSettings.atmsCustomization['atmsSupply'];
    this.gridOptions.enableRtl = i18n[this.translateSrv.getDefaultLang().toUpperCase()] == 'rtl';
    this.gridOptions.enableSorting = true;
    this.gridOptions.getRowHeight = (() => {
      return 32
    });
    this.gridOptions.columnDefs = [];
    colsDef.forEach((col) => {
      if (col.visible && !isNullOrUndefined(Atms.Inventory[col.field])) {
        this.gridOptions.columnDefs.push(
          Object.assign({},
            {suppressFilter: true},
            Atms.Inventory[col.field], {
              headerName: this.translateSrv.instant(Atms.Inventory[col.field].headerName)
            }));
      }

    });
  }

  ngOnDestroy() {
    this.gridOptions = {};
  }
}
