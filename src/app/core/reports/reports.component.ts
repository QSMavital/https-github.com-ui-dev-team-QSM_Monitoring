import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {Observable} from "rxjs/Observable";
import {AtmActions} from "../../../store/actions/atm-actions";
import {IStore} from "../../../store/index";
import {GridOptions} from "ag-grid";
import {GridDefsService} from "../../shared/services/grid-defs.service";
import {isNullOrUndefined} from "util";
import {Reports} from "../../config/reports";
import {TranslateService} from "@ngx-translate/core";
import {AtmsActions} from "../../../store/actions/atms-actions";
import {ReportsActions} from "../../../store/actions/reports-actions";

@Component({
  selector: 'ui-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit,OnDestroy {
  public data;
  public gridOptions: GridOptions;
  private redux_refs;
  private reportType;
  private init;
  private dataSource;

  @select(['atm', 'retainedCards']) $atm_retained_cards: Observable<any>;
  @select(['atms', 'events']) $atms_events: Observable<any>;
  @select(['atms', 'transactions']) $atms_transactions: Observable<any>;
  @select(['reports', 'settlement']) $reports_settlement: Observable<any>;

  constructor(private ngRedux: NgRedux<IStore>,
              private gridDefsSrv: GridDefsService,
              private translateSrv: TranslateService) {
    this.data = [];
    this.init = false;
    this.redux_refs = [];
  }

  ngOnInit() {
    this.gridOptions = this.gridDefsSrv.initGridOptionsPagination(100);
    this.dataSource = {
      getRows: (params) => {
        //retained cards
        this.redux_refs.push(this.$atm_retained_cards.subscribe((state) => {
          if (isNullOrUndefined(state) || !this.init) {
            return
          }
          let colsDef = this.ngRedux.getState().userSettings.reportsCustomization['cardRetainReports'];
          this.setRetainedCardsCols(colsDef);
          if (!isNullOrUndefined(state) && !isNullOrUndefined(this.gridOptions.api)) {
            params.successCallback(state.allRetainedCards, state.totalCount <= params.endRow ? state.totalCount : -1);
            this.data = state.allRetainedCards;
          }
        }));

        //Errors & Hardware Errors
        this.redux_refs.push(this.$atms_events.subscribe((state) => {
          if (isNullOrUndefined(state) || !this.init) {
            return
          }

          let type = this.reportType == "HARDWARE_ERRORS" ? 'hardwareReport' : 'faultReports';
          let colsDef = this.ngRedux.getState().userSettings.reportsCustomization[type];

          this.colsSetter(colsDef, type);

          if (!isNullOrUndefined(state) && !isNullOrUndefined(this.gridOptions.api)) {
            params.successCallback(state.allEvents, state.totalCount <= params.endRow ? state.totalCount : -1);
            this.data = state.allEvents;
          }
        }));


        //Transactions
        this.redux_refs.push(this.$atms_transactions.subscribe((state) => {
          if (isNullOrUndefined(state) || !this.init) {
            return
          }
          this.data = state.allTransactions;
          let type = {
            CARD_ACTIVITY: "cardActivityReport",
            ACCOUNT_ACTIVITY: "accountActivityReport",
            TRANSACTIONS: "transactionsReport"
          };
          let colsDef = this.ngRedux.getState().userSettings.reportsCustomization[type[this.reportType]];
          this.colsSetter(colsDef, 'transactions');
          if (!isNullOrUndefined(state) && !isNullOrUndefined(this.gridOptions.api)) {
            params.successCallback(state.allTransactions, state.totalCount <= params.endRow ? state.totalCount : -1);
            this.data = state.allTransactions;
          }
        }));

        this.redux_refs.push(this.$reports_settlement.subscribe((state) => {
          if (isNullOrUndefined(state) || !this.init) {
            return
          }

          let colsDef = this.ngRedux.getState().userSettings.reportsCustomization['dispenseSettelmentReport'];
          this.colsSetter(colsDef, 'settlement');
          if (!isNullOrUndefined(state) && !isNullOrUndefined(this.gridOptions.api)) {
            params.successCallback(state.reports, state.totalCount <= params.endRow ? state.totalCount : -1);
            this.data = state.reports;
            this.sizeToFit();
          }
        }));


      }
    };
    this.gridOptions.datasource = this.dataSource;


  }

  sizeToFit() {
    this.gridOptions.api.sizeColumnsToFit();
    // this.gridOptions.api.setRowData(this.data);
  }

  setRetainedCardsCols(colsDef) {
    this.colsSetter(colsDef, 'retainReason');
    this.gridOptions.columnDefs.push(
      Object.assign({}, {
          suppressFilter: true,
          suppressMenuColumnPanel: true,
          suppressMenuMainPanel: true,
          suppressMenuFilterPanel: true
        },
        Reports.retainReason['comments'], {
          headerName: this.translateSrv.instant(Reports.retainReason['comments'].headerName)
        }));
  }

  colsSetter(colsDef, type) {
    let cols = [];
    colsDef.forEach((col) => {
      if (col.visible && !isNullOrUndefined(Reports[type][col.field])) {
        cols.push(
          Object.assign({},
            {
              suppressFilter: true,
              suppressMenuColumnPanel: true,
              suppressMenuMainPanel: true,
              suppressMenuFilterPanel: true
            },
            Reports[type][col.field], {
              headerName: this.translateSrv.instant(Reports[type][col.field].headerName)
            }));
      }
    });
    this.gridOptions.api.setColumnDefs(cols);
  }

  filter(e) {
    this.reportType = e.type;
    this.init=true;
    let gridState = this.gridOptions.api.getCacheBlockState()[0];
    if(this.data.length){
      this.gridOptions.api.ensureIndexVisible(0);
    }

    debugger;
    switch (e.type) {
      case 'HARDWARE_ERRORS':
        this.ngRedux.dispatch({
          type: AtmsActions.ATMS_GET_EVENTS,
          payload: Object.assign({},
            {
              eventSeverity: ["FATAL", "ERROR", "WARN"],
              fromLine: 1,
              numOfLine: null,
              atmNo: e.atmNo,
              deviceEvents: "ONLY_DEVICE",
              fromDate: new Date(e.fromDate).getTime(),
              toDate: new Date(e.toDate).getTime()
            }
          )
        });
        break;
      case 'ERRORS':
        this.ngRedux.dispatch({
          type: AtmsActions.ATMS_GET_EVENTS,
          payload: Object.assign({},
            {
              eventSeverity: ["FATAL", "ERROR", "WARN"],
              fromLine: gridState.startRow,
              numOfLine: gridState.endRow - gridState.startRow,
              atmNo: e.atmNo,
              deviceEvents: "WITHOUT_DEVICE",
              fromDate: new Date(e.fromDate).getTime(),
              toDate: new Date(e.toDate).getTime()
            }
          )
        });
        break;
      case 'RETAINED_CARDS':
        this.ngRedux.dispatch({
          type: AtmActions.ATM_GET_RETIANED_CARDS,
          payload: {
            atmNo: e.atmNo,
            fromLine: gridState.startRow,
            numOfLine: gridState.endRow - gridState.startRow,
            fromSettelments: "ALL",
            fromDate: new Date(e.fromDate).getTime(),
            toDate: new Date(e.toDate).getTime()
          }
        });
        break;
      case 'CARD_ACTIVITY':
        this.ngRedux.dispatch({
          type: AtmsActions.ATMS_GET_TRANSACTIONS,
          payload: Object.assign({
            atmNo: e.atmNo,
            fromLine: gridState.startRow,
            numOfLine: gridState.endRow - gridState.startRow,
            fromDate: new Date(e.fromDate).getTime(),
            toDate: new Date(e.toDate).getTime(),
            dataForSearch: [
              {cardNumber: e.cardNo}
            ]
          })
        });
        break;
      case 'ACCOUNT_ACTIVITY':
        this.ngRedux.dispatch({
          type: AtmsActions.ATMS_GET_TRANSACTIONS,
          payload: Object.assign({
            atmNo: e.atmNo,
            fromLine: gridState.startRow,
            numOfLine: gridState.endRow - gridState.startRow,
            fromDate: new Date(e.fromDate).getTime(),
            toDate: new Date(e.toDate).getTime(),
            dataForSearch: [
              {field:'accountNo', value: e.accountNo},
              {field:'accountBranch',value: e.branch}
            ]
          })
        });
        break;
      case 'TRANSACTIONS':
        this.ngRedux.dispatch({
          type: AtmsActions.ATMS_GET_TRANSACTIONS,
          payload: Object.assign({
            atmNo: e.atmNo,
            fromLine: gridState.startRow,
            numOfLine: gridState.endRow - gridState.startRow,
            fromDate: new Date(e.fromDate).getTime(),
            toDate: new Date(e.toDate).getTime()
          })
        });
        break;
      case 'SETTLEMENT':
        this.ngRedux.dispatch({
          type: ReportsActions.REPORTS_GET_SETTLEMENT,
          payload: Object.assign({
            atmNo: e.atmNo,
            fromLine: gridState.startRow,
            numOfLine: gridState.endRow - gridState.startRow,
            fromDate: new Date(e.fromDate).getTime(),
            toDate: new Date(e.toDate).getTime()
          })
        });
        break;
    }
  }

  ngOnDestroy(){
    this.redux_refs.forEach((sub)=>{
      sub.unsubscribe();
    })
  }

}
