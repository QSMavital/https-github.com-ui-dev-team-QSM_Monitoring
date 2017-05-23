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
import {FormBuilderService} from "../../../shared/services/form-builder.service";
import {Atm} from "../../../config/atm";
import {Router} from "@angular/router";

@Component({
  selector: 'ui-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, OnDestroy {
  public addNew= false;
  public filtersData = {};
  private $atms_inventory_ref;
  public gridOptions: GridOptions = {};
  private atmSettings;
  private form: FormGroup = new FormGroup({});
  private controlGroups: CustomControlGroup[] = [];

  @select(['atms', 'inventory']) $atms_inventory: Observable<any>;

  constructor(private ngRedux: NgRedux<IStore>,
              private gridDefsSrv: GridDefsService,
              private router: Router) {
    this.ngRedux.dispatch({type: AtmsActions.ATMS_GET_INVENTORY});
  }

  ngOnInit() {
    this.initColDefs();
    this.$atms_inventory_ref = this.$atms_inventory.subscribe((state) => {
      if (!isNullOrUndefined(state) && !isNullOrUndefined(this.gridOptions.api)) {
        this.gridOptions.api.setRowData(state.atms);
        this.filtersData = state.filters;
      }
    });
  }

  initColDefs() {
    let colsDef = this.ngRedux.getState().userSettings.atmsCustomization['atmsSupply'];
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    this.gridOptions.columnDefs = this.gridDefsSrv.initAtmsGridColDefs(colsDef, 'Inventory');

  }

  ngOnDestroy() {
    this.$atms_inventory_ref.unsubscribe();
  }

  showAddNew(){
    this.addNew=true;

  }

  selectItem(item){
    console.log(item.data.terminalId);
    this.router.navigate(['/atms','atm',item.data.terminalId]);

  }
}
