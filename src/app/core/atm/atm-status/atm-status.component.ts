import {Component, OnInit} from '@angular/core';
import {GridDefsService} from "../../../shared/services/grid-defs.service";
import {select, NgRedux} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {Observable} from "rxjs/Observable";
import {AtmsActions} from "../../../../store/actions/atms-actions";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-atm-status',
  templateUrl: './atm-status.component.html',
  styleUrls: ['./atm-status.component.scss']
})

export class AtmStatusComponent implements OnInit {
  public gridOptions: any = {};
  private $atms_events_ref;
  @select(['atms', 'events']) $atms_events: Observable<any>;

  constructor(private gridDefsSrv: GridDefsService, private ngRedux: NgRedux<IStore>,) {
    this.ngRedux.dispatch({type: AtmsActions.ATMS_GET_EVENTS});
    this.gridOptions.columnDefs = [];
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
    let colsDef = this.ngRedux.getState().userSettings.atmsCustomization['alerts'];
    this.gridOptions = Object.assign(this.gridDefsSrv.initGridOptions(), {rowSelection: 'multiple'});
    this.gridOptions.columnDefs = this.gridDefsSrv.initAtmsGridColDefs(colsDef, 'Notifications');
  }

  ngOnDestroy() {
    this.$atms_events_ref.unsubscribe();

  }

}
