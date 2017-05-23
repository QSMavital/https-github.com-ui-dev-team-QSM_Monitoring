import {Component, OnInit, OnDestroy} from '@angular/core';
import {select, NgRedux} from "@angular-redux/store";
import {Observable} from "rxjs";
import {isArray, isNullOrUndefined} from "util";
import {IStore} from "../../../../store/index";
import {DashboardActions} from "../../../../store/actions/dashboard-actions";

@Component({
  selector: 'ui-devices-status',
  templateUrl: './devices-status.component.html',
  styleUrls: ['./devices-status.component.scss']
})
export class DevicesStatusComponent implements OnInit, OnDestroy {
  private unsubscriber;
  public data: any[];
  @select(['dashboard', 'deviceStatus']) $devicesStatus: Observable<any>;

  constructor(private ngRedux: NgRedux<IStore>) {
    this.data = this.initData();
    this.ngRedux.dispatch({type: DashboardActions.WIDGET_GET_DEVICE_STATUS});
  }

  initData(): any[] {
    return [
      {
        type: 'Donut',
        title: 'db.noError',
        maxValue: 100,
        minValue: 0,
        value: 0,
        statusView: 'good',
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
        title: 'db.fatal',
        maxValue: 100,
        minValue: 0,
        value: 0,
        statusView: 'fatal',
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
        statusView: 'attention',
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
        statusView: 'disable',
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
}
