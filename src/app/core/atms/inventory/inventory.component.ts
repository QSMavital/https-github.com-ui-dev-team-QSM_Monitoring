import {Component, OnInit, OnDestroy} from '@angular/core';
import {GridOptions} from "ag-grid";
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {isNullOrUndefined} from "util";
import {AtmsActions} from "../../../../store/actions/atms-actions";
import {Observable} from "rxjs";
import {GridDefsService} from "../../../shared/services/grid-defs.service";
import {FormGroup} from "@angular/forms";
import {CustomControlGroup} from "../../../config/interfaces/form.interface";
import {Router} from "@angular/router";
import {Api} from "../../../config/api";

@Component({
  selector: 'ui-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, OnDestroy {
  public addNew = false;
  public filtersData = {};
  public filtersLastState = {};
  private $atms_inventory_ref;
  public gridOptions: GridOptions = {};
  private dataSource;

  @select(['atms', 'inventory']) $atms_inventory: Observable<any>;

  constructor(private ngRedux: NgRedux<IStore>,
              private gridDefsSrv: GridDefsService,
              private router: Router) {
    this.filtersData = this.ngRedux.getState().userSettings.atmsCustomization.atmsFilters;
    this.filtersLastState = Api.atms_inventory.payload;
  }

  ngOnInit() {
    this.initColDefs();
  }

  initColDefs() {
    let colsDef = this.ngRedux.getState().userSettings.atmsCustomization['atmsSupply'];
    this.gridOptions = this.gridDefsSrv.initGridOptionsPagination(100);
    this.gridOptions.columnDefs = this.gridDefsSrv.initAtmsGridColDefs(colsDef, 'Inventory');

    this.dataSource = {
      getRows: (params) => {
        this.ngRedux.dispatch({
          type: AtmsActions.ATMS_GET_INVENTORY,
          payload: Object.assign(this.filtersLastState, {
              "fromLine": params.startRow,
              "numOfLine": params.endRow - params.startRow
            }
          )
        });
        this.$atms_inventory_ref = this.$atms_inventory.subscribe((state) => {
          if (!isNullOrUndefined(state) && !isNullOrUndefined(this.gridOptions.api)) {
            params.successCallback(state.atms, state.totalCount >= params.endRow ? state.atms.length : -1);
          }
        });

      }
    };
    this.gridOptions.datasource = this.dataSource;

  }

  ngOnDestroy() {
    this.$atms_inventory_ref.unsubscribe();
  }

  showAddNew() {
    this.addNew = true;

  }

  selectItem(item) {
    this.router.navigate(['/atms', 'atm', item.data.terminalId]);
  }

  filter(event) {
    let gridState = this.gridOptions.api.getInfinitePageState()[0];
    this.gridOptions.api.ensureIndexVisible(0);
    this.filtersLastState = event;
    this.ngRedux.dispatch({
      type: AtmsActions.ATMS_GET_INVENTORY,
      payload:Object.assign(this.filtersLastState, {
        "fromLine": gridState.startRow,
        "numOfLine": gridState.endRow - gridState.startRow
      })
    });

  }

}
