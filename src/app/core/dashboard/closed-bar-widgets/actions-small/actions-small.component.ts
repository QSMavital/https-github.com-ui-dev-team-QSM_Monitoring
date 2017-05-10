import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../../store/index";
import {ActionsStatus, StatusView} from "../../../../config/statusView";
import {isArray, isNullOrUndefined} from "util";
import {DashboardActions} from "../../../../../store/actions/dashboard-actions";

@Component({
  selector: 'ui-actions-small',
  templateUrl: './actions-small.component.html',
  styleUrls: ['./actions-small.component.scss']
})
export class ActionsSmallComponent implements OnInit, OnDestroy {

  private unsubscriber: any;
  private list: any[];
  private statusView: any;
  private actionStatus: any;

  @select(['dashboard', 'actionsStatus']) $status;

  constructor(private store: NgRedux<IStore>) {
    this.statusView = StatusView;
    this.actionStatus = ActionsStatus;
  }

  subscribe() {
    this.unsubscriber = this.$status.subscribe(state => {
      if (!isNullOrUndefined(state)) {
        if (isArray(state)) {
          this.list = state;
        } else {
          this.list = [];
          Object.keys(state).forEach(key => {
            this.list.push(state[key]);
          })
        }
      }
    });
  }

  ngOnInit() {
    this.subscribe();
    this.store.dispatch({type: DashboardActions.WIDGET_GET_ACTIONS_STATUS});
  }

  ngOnDestroy() {
    if (this.unsubscriber)
      this.unsubscriber.unsubscribe();
  }
}
