import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../../store/index";
import {DashboardActions} from "../../../../../store/actions/dashboard-actions";
import {isNullOrUndefined} from "util";
import {StatusView} from "../../../../config/statusView";

@Component({
  selector: 'ui-connection-small',
  templateUrl: './connection-small.component.html',
  styleUrls: ['./connection-small.component.scss']
})
export class ConnectionSmallComponent implements OnInit, OnDestroy {

  private unsubscriber: any;
  private statusView: any;

  @select(['dashboard', 'connectionStatus']) $status;

  constructor(private store: NgRedux<IStore>) {
    this.statusView = StatusView;
  }


  subscribe() {
    this.unsubscriber = this.$status.subscribe(state => {
      if (!isNullOrUndefined(state)){
        this.statusView = state.summaryStatusView;
      }
    });
  }

  ngOnInit() {
    this.subscribe();
    this.store.dispatch({type: DashboardActions.WIDGET_GET_CONNECTION_STATUS});
  }

  ngOnDestroy() {
    if (this.unsubscriber)
      this.unsubscriber.unsubscribe();
  }
}
