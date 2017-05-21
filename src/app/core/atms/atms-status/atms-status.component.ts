import {Component, OnInit, OnDestroy} from '@angular/core';
import {GridOptions} from "ag-grid";
import {Atms} from "../../../config/atms";
import {TranslateService} from "@ngx-translate/core";
import {i18n} from "../../../config/i18n";
import {isNullOrUndefined} from "util";
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {Observable} from "rxjs";
import {AtmsActions} from "../../../../store/actions/atms-actions";

@Component({
  selector: 'ui-atms-status',
  templateUrl: './atms-status.component.html',
  styleUrls: ['./atms-status.component.scss']
})
export class AtmsStatusComponent implements OnInit {
  private addNew = false;
  private filtersData = {};
  @select(['atms', 'inventory']) $atms_inventory: Observable<any>;
  private gridOptions: GridOptions = {};

  constructor(private translateSrv: TranslateService,
              private ngRedux: NgRedux<IStore>) {
    this.gridOptions = {
      rowSelection: 'multiple',
      groupSelectsChildren: true,
      suppressRowClickSelection: true,
      groupColumnDef: {headerName: "Athlete", field: "athlete", width: 200,
        cellRenderer: 'group',
        cellRendererParams: {
          checkbox: true
        }}
    };
    this.gridOptions.columnDefs = [];
    this.ngRedux.dispatch({type: AtmsActions.ATMS_GET_INVENTORY});

  }

  ngOnInit() {
    this.initColDefs();
    this.$atms_inventory.subscribe((state)=> {
      if (!isNullOrUndefined(state)&&!isNullOrUndefined(this.gridOptions.api)) {
        this.gridOptions.api.setRowData(state.atms);
        this.filtersData = state.filters;
      }
    });
  }

  initColDefs(){
    let colsDef = this.ngRedux.getState().userSettings.atmsCustomization['atmsStatus'];
    this.gridOptions.enableRtl = i18n[this.translateSrv.getDefaultLang()]=='rtl';
    this.gridOptions.columnDefs = [];
    this.gridOptions.getRowHeight = (() => {return 32});
    colsDef.forEach((col) => {
      if (col.visible && !isNullOrUndefined(Atms.Status[col.field])) {
        this.gridOptions.columnDefs.push(
          Object.assign({},
            {suppressFilter: true},
            Atms.Status[col.field],
            {
              headerName: this.translateSrv.instant(Atms.Status[col.field].headerName)
            }));
      }
    });
  }

  ngOnDestroy(){
    // this.gridOptions={};
  }
}
