import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../../store/index";
import {isNullOrUndefined} from "util";
import {DashboardActions} from "../../../../../store/actions/dashboard-actions";

@Component({
  selector: 'ui-online-small',
  templateUrl: './online-small.component.html',
  styleUrls: ['./online-small.component.scss']
})
export class OnlineSmallComponent implements OnInit, OnDestroy {

  private unsubscriber: any;
  public data: any = {};

  @select(['dashboard', 'onlineStatus']) $status;

  constructor(private store: NgRedux<IStore>) {
  }

  subscribe() {
    this.unsubscriber = this.$status.subscribe(state => {
      if (!isNullOrUndefined(state))
        this.data = state;
    });
  }

  ngOnInit() {
    this.subscribe();
    this.store.dispatch({type: DashboardActions.WIDGET_GET_ONLINE_STATUS});
  }


  ngOnDestroy() {
    if (this.unsubscriber)
      this.unsubscriber.unsubscribe();
  }
}
