import {Component, OnInit} from '@angular/core';
import {select, NgRedux} from "@angular-redux/store";
import {Observable} from "rxjs";
import {AtmsActions} from "../../../../store/actions/atms-actions";
import {IStore} from "../../../../store/index";
import {isNullOrUndefined} from "util";
import {GridDefsService} from "../../../shared/services/grid-defs.service";
import {Api} from "../../../config/api";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ui-atms-notifications',
  templateUrl: './atms-notifications.component.html',
  styleUrls: ['./atms-notifications.component.scss']
})
export class AtmsNotificationsComponent implements OnInit {
  @select(['atms', 'events']) $atms_events: Observable<any>;
  public gridOptions: any = {};
  public filtersLastState: any = {};
  private $atms_events_ref;
  private dataSource;

  constructor(private ngRedux: NgRedux<IStore>,
              private gridDefsSrv: GridDefsService,
              private route: ActivatedRoute) {
    this.filtersLastState = Object.assign(Api.atms_events.payload,{eventSeverity:["FATAL", "ERROR", "WARN", "INFO"]},{atmNo:this.route.parent.params['value']['id'] || null});
  }

  ngOnInit() {
    this.initColDefs();

  }


  fitCols(){
    this.gridOptions.api.sizeColumnsToFit();
  }

  initColDefs() {
    let colsDef = this.ngRedux.getState().userSettings.atmsCustomization['alerts'];
    this.gridOptions = this.gridDefsSrv.initGridOptionsPagination(100);
    this.gridOptions.columnDefs = this.gridDefsSrv.initAtmsGridColDefs(colsDef, 'Notifications');

    this.dataSource = {
      getRows: (params) => {
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
            params.successCallback(state.allEvents, state.totalCount <= params.endRow ? state.totalCount : -1);
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
