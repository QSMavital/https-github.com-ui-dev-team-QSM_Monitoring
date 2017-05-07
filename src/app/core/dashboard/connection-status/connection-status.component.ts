import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {select, NgRedux} from "@angular-redux/store";
import {Observable} from "rxjs";
import {IStore} from "../../../../store/index";
import {GeneralCustomerActions} from "../../../../store/actions/generalCustomer-actions";
import {DashboardActions} from "../../../../store/actions/dashboard-actions";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-connection-status',
  templateUrl: './connection-status.component.html',
  styleUrls: ['./connection-status.component.scss']
})
export class ConnectionStatusComponent implements OnInit,OnDestroy {

  private _connectionStatus;
  @select(['dashboard','connectionStatus']) connectionStatus$: Observable<any>;

  private data:any[] = [
    {
      "label": "HSM",
      "status": "ok"
    },
    {
      "label": "HSM",
      "status": "danger"
    },
    {
      "label": "bank connection",
      "status": "warning"
    },
    {
      "label": "HSM",
      "status": "warning"
    },
    {
      "label": "bank connection",
      "status": "ok"
    },
    {
      "label": "bank connection",
      "status": "ok"
    },
    {
      "label": "bank connection",
      "status": "ok"
    }
  ];

  constructor(private ngRedux: NgRedux<IStore>) {
    this.ngRedux.dispatch({type:DashboardActions.WIDGET_GET_CONNECTION_STATUS});

  }

  ngOnInit() {
    this.subscribe();
  }

  ngOnDestroy() {
    this._connectionStatus.unsubscribe();
  }

  subscribe(){
    this._connectionStatus = this.connectionStatus$.subscribe((state)=>{
      if(!isNullOrUndefined(state)){
        this.data = state;
      }
    })

  }

}
