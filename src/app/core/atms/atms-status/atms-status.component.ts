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
import {Router} from "@angular/router";
import {Api} from "../../../config/api";

@Component({
  selector: 'ui-atms-status',
  templateUrl: './atms-status.component.html',
  styleUrls: ['./atms-status.component.scss']
})
export class AtmsStatusComponent implements OnInit {
  public addNew = false;
  public filtersData = {};
  public filtersLastState = {};
  private $atms_inventory_ref;
  private dataSource;

  @select(['atms', 'inventory']) $atms_inventory: Observable<any>;
  public gridOptions: GridOptions = {};

  constructor(private gridDefsSrv: GridDefsService,
              private ngRedux: NgRedux<IStore>,
              private router: Router) {
    this.filtersData =  this.ngRedux.getState().userSettings.atmsCustomization.atmsFilters;
    this.filtersLastState=Api.atms_inventory.payload.filters;


  }

  ngOnInit() {
    this.initColDefs();
    this.$atms_inventory_ref = this.$atms_inventory.subscribe((state)=> {
      if (!isNullOrUndefined(state)&&!isNullOrUndefined(this.gridOptions.api)) {
        this.gridOptions.api.setRowData(state.atms);
      }
    });
  }

  initColDefs(){
    let colsDef = this.ngRedux.getState().userSettings.atmsCustomization['atmsStatus'];
    this.gridOptions = this.gridDefsSrv.initGridOptionsPagination(100);
    this.gridOptions.rowSelection='multiple';
    this.gridOptions.columnDefs = this.gridDefsSrv.initAtmsGridColDefs(colsDef, 'Status');
    this.dataSource = {
      getRows:  (params)=> {
        console.log('asking for ' + params.startRow + ' to ' + params.endRow);
        console.log('asking for ' , params);
        this.ngRedux.dispatch({type: AtmsActions.ATMS_GET_INVENTORY,payload:{"fromLine": params.startRow,"numOfLine": params.endRow-params.startRow,filters:this.filtersLastState}});
        this.$atms_inventory_ref = this.$atms_inventory.subscribe((state) => {
          if (!isNullOrUndefined(state) && !isNullOrUndefined(this.gridOptions.api)) {
            params.successCallback(state.atms,state.totalCount>=params.endRow?state.atms.length:-1);
          }
        });

      }
    };
    this.gridOptions.datasource = this.dataSource;
  }

  ngOnDestroy(){
    this.$atms_inventory_ref.unsubscribe();
  }

  filter(event){
    let gridState=this.gridOptions.api.getInfinitePageState()[0];
    this.gridOptions.api.ensureIndexVisible(0);
    this.filtersLastState = event;
    this.ngRedux.dispatch({type: AtmsActions.ATMS_GET_INVENTORY,
      payload:{"fromLine": gridState.startRow,"numOfLine": gridState.endRow-gridState.startRow,filters:this.filtersLastState}});

  }

  selectItem(item){
    this.router.navigate(['/atms','atm',item.data.terminalId]);

  }
}
