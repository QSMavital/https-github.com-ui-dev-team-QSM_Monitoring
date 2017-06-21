import {Component, OnInit} from '@angular/core';
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

@Component({
  selector: 'ui-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  public data;
  public gridOptions: GridOptions;
  private redux_refs;
  private reportType;
  @select(['atm', 'retainedCards']) $atm_retained_cards: Observable<any>;
  @select(['atms', 'events']) $atms_events: Observable<any>;
  @select(['atms', 'transactions']) $atms_transactions: Observable<any>;

  constructor(private ngRedux: NgRedux<IStore>, private gridDefsSrv: GridDefsService, private translateSrv: TranslateService) {
    this.data = [];
    this.redux_refs = [];
  }

  ngOnInit() {
    //retained cards
    this.redux_refs.push(this.$atm_retained_cards.subscribe((state) => {
      if (isNullOrUndefined(state)) {
        return
      }
      this.data = state;
      let colsDef = this.ngRedux.getState().userSettings.reports['cardRetainReports'];
      this.gridOptions = this.gridDefsSrv.initGridOptions();
      this.setRetainedCardsCols(colsDef);
    }));

    //Errors & Hardware Errors
    this.redux_refs.push(this.$atms_events.subscribe((state) => {
      if (isNullOrUndefined(state)) {
        return
      }
      this.data = state.allEvents;
      let type = this.reportType == "HARDWARE_ERRORS" ? 'hardwareReport' : 'faultReports';
      let colsDef = this.ngRedux.getState().userSettings.reports[type];
      this.gridOptions = this.gridDefsSrv.initGridOptions();
      this.colsSetter(colsDef, type);
    }));

    this.redux_refs.push(this.$atms_transactions.subscribe((state) => {
      if (isNullOrUndefined(state)) {
        return
      }
      this.data = state.allTransactions;
      let type= {
        CARD_ACTIVITY:"cardActivityReport",
        ACCOUNT_ACTIVITY:"accountActivityReport",
        TRANSACTIONS:"transactionsReport"
      };
      let colsDef = this.ngRedux.getState().userSettings.reports[type[this.reportType]];
      this.gridOptions = this.gridDefsSrv.initGridOptions();
      this.colsSetter(colsDef, 'transactions');
    }));

  }

  sizeToFit() {
    this.gridOptions.api.sizeColumnsToFit();
    this.gridOptions.api.setRowData(this.data);
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
    this.gridOptions.columnDefs = [];
    colsDef.forEach((col) => {
      if (col.visible && !isNullOrUndefined(Reports[type][col.field])) {
        this.gridOptions.columnDefs.push(
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
  }

  filter(e) {
    this.data = [];
    this.gridOptions = {};
    this.reportType = e.type;
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
              deviceEvents: "ONLY_DEVICE"
            }
          )
        });
        break
      case 'ERRORS':
        this.ngRedux.dispatch({
          type: AtmsActions.ATMS_GET_EVENTS,
          payload: Object.assign({},
            {
              eventSeverity: ["FATAL", "ERROR", "WARN"],
              fromLine: 1,
              numOfLine: null,
              atmNo: e.atmNo,
              deviceEvents: "WITHOUT_DEVICE"
            }
          )
        });
        break;
      case 'RETAINED_CARDS':
        this.ngRedux.dispatch({
          type: AtmActions.ATM_GET_RETIANED_CARDS,
          payload: {
            atmNo: e.atmNo,
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
            fromLine: 1,
            numOfLine: null,
            fromDate: new Date(e.fromDate).getTime(),
            toDate: new Date(e.toDate).getTime(),
            card:e.cardNo,
            branch:e.branch,
            accountNo:e.accountNo
          })
        });
        break;
      case 'ACCOUNT_ACTIVITY':
        this.ngRedux.dispatch({
          type: AtmsActions.ATMS_GET_TRANSACTIONS,
          payload: Object.assign({
            atmNo: e.atmNo,
            fromLine: 1,
            numOfLine: null,
            fromDate: new Date(e.fromDate).getTime(),
            toDate: new Date(e.toDate).getTime(),
            card:e.cardNo,
            branch:e.branch,
            accountNo:e.accountNo
          })
        });
        break;
      case 'TRANSACTIONS':
        this.ngRedux.dispatch({
          type: AtmsActions.ATMS_GET_TRANSACTIONS,
          payload: Object.assign({
            atmNo: e.atmNo,
            fromLine: 1,
            numOfLine: null,
            fromDate: new Date(e.fromDate).getTime(),
            toDate: new Date(e.toDate).getTime(),
            card:e.cardNo,
            branch:e.branch,
            accountNo:e.accountNo
          })
        });
        break;
      case 'SETTLEMENT':
        break;
    }
  }

}
