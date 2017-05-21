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
import {GridDefsService} from "../../../shared/services/grid-defs.service";

@Component({
  selector: 'ui-atms-status',
  templateUrl: './atms-status.component.html',
  styleUrls: ['./atms-status.component.scss']
})
export class AtmsStatusComponent implements OnInit {
  private addNew = false;
  private filtersData = {};
  private $atms_inventory_ref;
  @select(['atms', 'inventory']) $atms_inventory: Observable<any>;
  private gridOptions: GridOptions = {};

  constructor(private gridDefsSrv: GridDefsService,
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
    this.$atms_inventory_ref = this.$atms_inventory.subscribe((state)=> {
      if (!isNullOrUndefined(state)&&!isNullOrUndefined(this.gridOptions.api)) {
        this.gridOptions.api.setRowData(state.atms);
        this.filtersData = state.filters;
      }
    });
  }

  initColDefs(){
    let colsDef = this.ngRedux.getState().userSettings.atmsCustomization['atmsStatus'];
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    this.gridOptions.columnDefs = this.gridDefsSrv.initAtmsGridColDefs(colsDef, 'Status');
  }

  ngOnDestroy(){
    this.$atms_inventory_ref.unsubscribe();
  }
}
