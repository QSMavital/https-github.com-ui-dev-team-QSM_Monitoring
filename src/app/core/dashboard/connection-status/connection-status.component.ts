import {Component, OnInit, OnDestroy} from '@angular/core';
import {select, NgRedux} from "@angular-redux/store";
import {Observable} from "rxjs";
import {IStore} from "../../../../store/index";
import {DashboardActions} from "../../../../store/actions/dashboard-actions";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-connection-status',
  templateUrl: './connection-status.component.html',
  styleUrls: ['./connection-status.component.scss']
})
export class ConnectionStatusComponent implements OnInit, OnDestroy {

  private unsubscriber;
  public data: any;
  @select(['dashboard', 'connectionStatus']) $connectionStatus: Observable<any>;

  constructor(private store: NgRedux<IStore>) { 
    this.data = {
      connections: [],
      summaryStatusView : 'GOOD'
    }
  }

  subscribe() {
    this.unsubscriber = this.$connectionStatus.subscribe((state) => {
      if (!isNullOrUndefined(state)) {
        this.data.connections = state.connections;
        this.data.summaryStatusView = state.summaryStatusView;
      }
    })
  }

  ngOnInit() {
    this.subscribe();
    this.store.dispatch({type: DashboardActions.WIDGET_GET_CONNECTION_STATUS});
  }

  ngOnDestroy() {
    this.unsubscriber.unsubscribe();
  }

}
