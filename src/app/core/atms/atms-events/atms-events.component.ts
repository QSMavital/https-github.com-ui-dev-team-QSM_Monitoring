import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {i18n} from "../../../config/i18n";
import {Atms} from "../../../config/atms";
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {AtmsActions} from "../../../../store/actions/atms-actions";
import {isNullOrUndefined} from "util";
import {Observable} from "rxjs";
import {GridDefsService} from "../../../shared/services/grid-defs.service";
import {Api} from "../../../config/api";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ui-atms-events',
  templateUrl: './atms-events.component.html',
  styleUrls: ['./atms-events.component.scss']
})
export class AtmsEventsComponent implements OnInit, OnDestroy {
  @select(['atms', 'events']) $atms_events: Observable<any>;
  private $atms_events_ref;
  public gridOptions: any = {};
  public filtersLastState: any = {};

  private dataSource;


  constructor(private ngRedux: NgRedux<IStore>,
              private gridDefsSrv: GridDefsService,
              private route: ActivatedRoute) {
    this.filtersLastState = Object.assign(Api.atms_events.payload,{eventSeverity:["INFO"]},{atmNo:this.route.parent.params['value']['id'] || null});
  }

  ngOnInit() {
    this.initColDefs();
  }

  fitCols() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  initColDefs() {
    let colsDef = this.ngRedux.getState().userSettings.atmsCustomization['events'];
    this.gridOptions = this.gridDefsSrv.initGridOptionsPagination(100);
    this.gridOptions.columnDefs = this.gridDefsSrv.initAtmsGridColDefs(colsDef, 'Events');

    this.dataSource = {
      getRows: (params) => {
        console.log('asking for ' + params.startRow + ' to ' + params.endRow);
        console.log('asking for ', params);
        // this.ngRedux.dispatch({type: AtmsActions.ATMS_GET_EVENTS,payload:this.filtersLastState});

        this.ngRedux.dispatch({
          type: AtmsActions.ATMS_GET_EVENTS,
          payload: Object.assign(this.filtersLastState, {
              "fromLine": params.startRow,
              "numOfLine": params.endRow - params.startRow
            }
          )
        });

        this.$atms_events_ref = this.$atms_events.subscribe((state) => {
          if (!isNullOrUndefined(state) && !isNullOrUndefined(this.gridOptions.api)) {
            params.successCallback(state.data, state.totalCount >= params.endRow ? state.totalCount : -1);
          }
        });
      }
    };

    this.gridOptions.datasource = this.dataSource;
  }

  ngOnDestroy() {
    this.$atms_events_ref.unsubscribe();
  }

  filter(event) {
    let gridState = this.gridOptions.api.getInfinitePageState()[0];
    this.gridOptions.api.ensureIndexVisible(0);
    this.filtersLastState = Object.assign(this.filtersLastState,{
      fromDate:new Date(event.fromDate).getTime(),
      toDate:new Date(event.toDate).getTime()
    });
    this.ngRedux.dispatch({
      type: AtmsActions.ATMS_GET_EVENTS,
      payload:Object.assign(this.filtersLastState, {
        "fromLine": gridState.startRow,
        "numOfLine": gridState.endRow - gridState.startRow
      })
    });

  }

}
