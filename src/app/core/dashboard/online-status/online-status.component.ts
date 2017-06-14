import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from "rxjs";
import {select, NgRedux} from "@angular-redux/store";
import {isNullOrUndefined} from "util";
import {DashboardActions} from "../../../../store/actions/dashboard-actions";
import {IStore} from "../../../../store/index";

@Component({
  selector: 'ui-online-status',
  templateUrl: './online-status.component.html',
  styleUrls: ['./online-status.component.scss']
})
export class OnlineStatusComponent implements OnInit, OnDestroy {
  private unsubscriber;
  public data: any;
  public hide: boolean = true;

  @select(['dashboard', 'onlineStatus']) $onlineStatus: Observable<any>;

  constructor(private ngRedux: NgRedux<IStore>) {
    this.data = {
      type: 'Gauge',
      minValue: 0,
      animationSpeed: 10,
      angle: 0, // The span of the gauge arc
      lineWidth: 0.1, // The line thickness
      radiusScale: 0.85, // Relative radius
      pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: '#000000' // Fill color
      },
      limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
      limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
      generateGradient: true,
      highDpiSupport: true,     // High resolution support
      staticLabels: {
        font: "1rem opensans-regular",  // Specifies font
        labels: [],  // Print labels at these values
        color: "#6f7b87",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
      },
      staticZones: [
        {strokeStyle: "#ff563e", min: 0, max: null}, // Red from 100 to 130
        {strokeStyle: "#71d36b", min: null, max: null}, // Yellow
        {strokeStyle: "#ff563e", min: null, max: null}, // Green
      ]
    };
    this.ngRedux.dispatch({type: DashboardActions.WIDGET_GET_ONLINE_STATUS});
  }

  adjustData(state) {

    function initLabels(max) {
      let labels = [];
      let step = max / 10;
      for (let i = 0; i < 11; i++)
        labels.push(i * step);
      return labels;
    }

    function initStaticZones(staticZones, max) {
      let step = max / 10;
      let sz = [];
      sz[0] = Object.assign({}, staticZones[0], {max: step});
      sz[1] = Object.assign({}, staticZones[1], {min: step, max: max - step});
      sz[2] = Object.assign({}, staticZones[2], {min: max - step, max: max});
      return sz;
    }

    this.data.maxValue = state.avg * 2;
    this.data.staticLabels.labels = initLabels(this.data.maxValue);
    this.data.value = state.currentOnline;
    this.data.staticZones = initStaticZones(this.data.staticZones, this.data.maxValue);
    setTimeout(() => {
      this.hide = false
    }, 0);
  }

  ngOnInit() {
    this.subscribe();
  }

  ngOnDestroy() {
    this.unsubscriber.unsubscribe();
  }

  subscribe() {
    this.unsubscriber = this.$onlineStatus.subscribe((state) => {
      if (!isNullOrUndefined(state)) {
        this.adjustData(state);
      }
    })
  }

}
