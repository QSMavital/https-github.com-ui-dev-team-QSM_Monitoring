import { Component, OnInit, OnDestroy,  } from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../../store/index";
import {ActionsStatus, StatusView} from "../../../../config/statusView";
import {isArray, isNullOrUndefined} from "util";
import {DashboardActions} from "../../../../../store/actions/dashboard-actions";
import {Observable} from "rxjs";

@Component({
  selector: 'ui-device-small',
  templateUrl: './device-small.component.html',
  styleUrls: ['./device-small.component.scss']
})
export class DevicesSmallComponent implements OnInit {

  private unsubscriber: any;
  private list: any[];
  private statusView: any;
  private deviceStatus: any;

  @select(['dashboard', 'deviceStatus']) $devicesStatus: Observable<any>;

  constructor(private store: NgRedux<IStore>) {
    this.statusView = StatusView;
    this.deviceStatus = StatusView;
  }

 subscribe() {
    this.unsubscriber = this.$devicesStatus.subscribe((state) => {
      if (!isNullOrUndefined(state)) {
        if (isArray(state)) {      
            this.list = state;
        }
      }
    })
  }

  ngOnInit() {
    this.subscribe();
    this.store.dispatch({type: DashboardActions.WIDGET_GET_DEVICE_STATUS});
  }

  ngOnDestroy() {
    if (this.unsubscriber)
      this.unsubscriber.unsubscribe();
  }

}
