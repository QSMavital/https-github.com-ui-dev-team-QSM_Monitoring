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

@Component({
  selector: 'ui-atms-events',
  templateUrl: './atms-events.component.html',
  styleUrls: ['./atms-events.component.scss']
})
export class AtmsEventsComponent implements OnInit, OnDestroy {
  @select(['atms', 'events']) $atms_events: Observable<any>;
  private $atms_events_ref;
  private gridOptions: any = {};

  constructor(private ngRedux: NgRedux<IStore>,
              private gridDefsSrv: GridDefsService) {
    this.gridOptions.columnDefs = [];
    this.ngRedux.dispatch({type: AtmsActions.ATMS_GET_EVENTS});

  }

  ngOnInit() {
    this.initColDefs();
    this.$atms_events_ref = this.$atms_events.subscribe((state) => {
      if (!isNullOrUndefined(state) && !isNullOrUndefined(this.gridOptions.api)) {
        this.gridOptions.api.setRowData(state);
      }
    });
  }

  fitCols() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  initColDefs() {
    let colsDef = this.ngRedux.getState().userSettings.atmsCustomization['events'];

    this.gridOptions = this.gridDefsSrv.initGridOptions();
    this.gridOptions.columnDefs = this.gridDefsSrv.initAtmsGridColDefs(colsDef, 'Events');

  }

  ngOnDestroy() {
    this.$atms_events_ref.unsubscribe();
  }

}
