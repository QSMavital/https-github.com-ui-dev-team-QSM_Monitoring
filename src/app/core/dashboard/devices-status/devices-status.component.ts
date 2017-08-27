import {Component, OnInit, OnDestroy} from '@angular/core';
import {select, NgRedux} from "@angular-redux/store";
import {Observable} from "rxjs";
import {isArray, isNullOrUndefined} from "util";
import {IStore} from "../../../../store/index";
import {DashboardActions} from "../../../../store/actions/dashboard-actions";
import {Router} from "@angular/router";
import {AtmsActions} from "../../../../store/actions/atms-actions";
import {Api} from "../../../config/api";
import {Atms} from "../../../config/atms";

@Component({
  selector: 'ui-devices-status',
  templateUrl: './devices-status.component.html',
  styleUrls: ['./devices-status.component.scss']
})
export class DevicesStatusComponent implements OnInit, OnDestroy {
  private unsubscriber;
  public data: any[];
  @select(['dashboard', 'deviceStatus']) $devicesStatus: Observable<any>;
  public filtersLastState = {
    fromLine:0,
    numOfLine:25,
    status: null,
    group: null,
    area: null
  };
  constructor(private ngRedux: NgRedux<IStore>, private router: Router) {
    this.data = this.initData();
    this.ngRedux.dispatch({type: DashboardActions.WIDGET_GET_DEVICE_STATUS});
     this.filtersLastState = Object.assign(Api.atms_inventory.payload);
  }

  initData(): any[] {
    return [
      {
        type: 'Donut',
        title: 'db.deviceStatus.noError',
        maxValue: 100,
        minValue: 0,
        value: 0,
        statusView: 'GOOD',
        icon: 'icon-working',
        angle: 1, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: .9, // Relative radius
        limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
        limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
        colorStart: '#71d36b',   // Colors
        colorStop: '#71d36b',    // just experiment with them
        strokeColor: '#dededf', // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true
      },
      {
        type: 'Donut',
        title: 'db.deviceStatus.fatal',
        maxValue: 100,
        minValue: 0,
        value: 0,
        statusView: 'FATAL',
        icon: 'icon-broken',
        angle: 1, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: .9, // Relative radius
        limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
        limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
        colorStart: '#ff563e',   // Colors
        colorStop: '#ff563e',    // just experiment with them
        strokeColor: '#dededf',  // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true
      },
      {
        type: 'Donut',
        title: 'db.attention',
        maxValue: 100,
        statusView: 'ATTENTION',
        minValue: 0,
        value: 0,
        icon: 'icon-fix',
        angle: 1, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: .9, // Relative radius
        limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
        limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
        colorStart: '#fa9245',   // Colors
        colorStop: '#fa9245',    // just experiment with them
        strokeColor: '#dededf',  // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true
      },
      {
        type: 'Donut',
        title: 'db.disabled',
        statusView: 'DISABLE',
        maxValue: 100,
        minValue: 0,
        value: 0,
        icon: 'icon-unavailable',
        angle: 1, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
        radiusScale: .9, // Relative radius
        limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
        limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
        colorStart: '#49bbf8',   // Colors
        colorStop: '#49bbf8',    // just experiment with them
        strokeColor: '#dededf',  // to see which ones work best for you
        generateGradient: false,
        highDpiSupport: true
      }
    ]
  }

  subscribe() {
    this.unsubscriber = this.$devicesStatus.subscribe((state) => {
      if (!isNullOrUndefined(state)) {
        if (isArray(state)) {
          state.forEach((i) => {
            this.data.forEach(d => {
              if (i.statusView.toLowerCase() === d.statusView.toLowerCase()) {
                d.value = i.precents;
              }
            })
          });
        }
      }
    })
  }

  ngOnInit() {
    this.subscribe();
  }

  ngOnDestroy() {
    this.unsubscriber.unsubscribe();

  }
  filter(status){
     this.filtersLastState.status = status;
     this.router.navigate(['/atms', 'inventory']);
  }
}
