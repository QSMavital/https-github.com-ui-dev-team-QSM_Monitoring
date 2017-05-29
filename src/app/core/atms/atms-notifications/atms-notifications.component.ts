import {Component, OnInit} from '@angular/core';
import {Atms} from "../../../config/atms";
import {i18n} from "../../../config/i18n";
import {TranslateService} from "@ngx-translate/core";
import {select, NgRedux} from "@angular-redux/store";
import {Observable} from "rxjs";
import {AtmsActions} from "../../../../store/actions/atms-actions";
import {IStore} from "../../../../store/index";
import {isNullOrUndefined} from "util";
import {GridDefsService} from "../../../shared/services/grid-defs.service";

@Component({
  selector: 'ui-atms-notifications',
  templateUrl: './atms-notifications.component.html',
  styleUrls: ['./atms-notifications.component.scss']
})
export class AtmsNotificationsComponent implements OnInit {
  @select(['atms', 'events']) $atms_events: Observable<any>;
  public gridOptions: any = {};
  private $atms_events_ref;

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


  fitCols(){
    this.gridOptions.api.sizeColumnsToFit();
  }

  initColDefs() {
    let colsDef = this.ngRedux.getState().userSettings.atmsCustomization['alerts'];
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    this.gridOptions.columnDefs = this.gridDefsSrv.initAtmsGridColDefs(colsDef, 'Notifications');

  }

  ngOnDestroy() {
    this.$atms_events_ref.unsubscribe();

  }
}
