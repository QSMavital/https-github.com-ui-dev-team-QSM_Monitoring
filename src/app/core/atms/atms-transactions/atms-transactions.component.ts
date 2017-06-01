import {Component, OnDestroy, OnInit} from '@angular/core';
import {GridDefsService} from "../../../shared/services/grid-defs.service";
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {Api} from "../../../config/api";
import {AtmsActions} from "../../../../store/actions/atms-actions";
import {isNullOrUndefined} from "util";
import {Observable} from "rxjs";

@Component({
  selector: 'ui-atms-transactions',
  templateUrl: './atms-transactions.component.html',
  styleUrls: ['./atms-transactions.component.scss']
})
export class AtmsTransactionsComponent implements OnInit, OnDestroy {
  public transaction= false;
  public gridOptions: any = {};
  public filtersLastState: any = {};
  private $atms_transactions_ref;
  @select(['atms', 'transactions']) $atms_transactions: Observable<any>;

  private dataSource;
  constructor(private gridDefsSrv: GridDefsService,
              private ngRedux: NgRedux<IStore>) {
    this.filtersLastState = Object.assign(Api.atms_transactions.payload);

  }

  ngOnInit() {
    this.initColDefs();
  }

  fitCols() {
    // this.gridOptions.api.sizeColumnsToFit();
  }

  initColDefs() {
    let colsDef = this.ngRedux.getState().userSettings.atmsCustomization['transactions'];

    this.gridOptions = this.gridDefsSrv.initGridOptionsPagination(100);
    this.gridOptions.columnDefs = this.gridDefsSrv.initAtmsGridColDefs(colsDef, 'Transactions');

    this.dataSource = {
      getRows: (params) => {
        console.log('asking for ' + params.startRow + ' to ' + params.endRow);
        console.log('asking for ', params);
        this.ngRedux.dispatch({
          type: AtmsActions.ATMS_GET_TRANSACTIONS,
          payload: Object.assign(this.filtersLastState, {
              "fromLine": params.startRow,
              "numOfLine": params.endRow - params.startRow
            }
          )
        });
        this.$atms_transactions_ref = this.$atms_transactions.subscribe((state) => {
          if (!isNullOrUndefined(state) && !isNullOrUndefined(this.gridOptions.api)) {
            params.successCallback(state.data, state.totalCount >= params.endRow ? state.data.length : -1);
          }
        });

      }
    };
    this.gridOptions.datasource = this.dataSource;

  }

  ngOnDestroy() {
    this.$atms_transactions_ref.unsubscribe();
  }

  showTransaction(){
    this.transaction=true;
  }

  filter(event) {
    let gridState = this.gridOptions.api.getInfinitePageState()[0];
    this.gridOptions.api.ensureIndexVisible(0);
    this.filtersLastState = Object.assign(this.filtersLastState,{
      fromDate:new Date(event.fromDate).getTime(),
      toDate:new Date(event.toDate).getTime()
    });
    this.ngRedux.dispatch({
      type: AtmsActions.ATMS_GET_TRANSACTIONS,
      payload:Object.assign(this.filtersLastState, {
        "fromLine": gridState.startRow,
        "numOfLine": gridState.endRow - gridState.startRow
      })
    });

  }

}
