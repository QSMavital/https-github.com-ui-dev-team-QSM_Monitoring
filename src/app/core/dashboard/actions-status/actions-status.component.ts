import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {isArray, isNullOrUndefined} from "util";
import {Observable} from "rxjs";
import {DashboardActions} from "../../../../store/actions/dashboard-actions";
import {ActionsStatus, StatusView} from "../../../config/statusView";


@Component({
  selector: 'ui-actions-status',
  templateUrl: './actions-status.component.html',
  styleUrls: ['./actions-status.component.scss']
})
export class ActionsStatusComponent implements OnInit, OnDestroy {
  private unsubscriber;
  private data: any[] = [];
  private legendData: any[] = [];
  private options: any;

  @select(['dashboard', 'actionsStatus']) $actionsStatus: Observable<any>;

  constructor(private ngRedux: NgRedux<IStore>) {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 380,
        x: function (d) {
          return d.key;
        },
        y: function (d) {
          return d.value;
        },
        showLabels: true,
        labelsOutside: false,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: false,
        labelType: "percent",
        showLegend: false,
        growOnHover: false,
        tooltip: {
          contentGenerator: function (d) {
            return d.series[0].key + ': ' + d.series[0].value + '%';
          }
        }
      }
    };
  }

  adjustData(state) {
    var data = [];
    state.forEach(i => {
      data.push({
        key: i.statusName,
        value: i.precents,
        color: StatusView[ActionsStatus[i.statusName]].color
      });
    });
    this.legendData = data.map(i => {
      return {color: i.color, label: 'actionsStatus.' + i.key}
    });
    this.data = data;
  }

  subscribe() {
    this.unsubscriber = this.$actionsStatus.subscribe((state) => {
      var arr = [];
      if (!isNullOrUndefined(state)) {
        if (isArray(state))
          arr = state;
        else {
          Object.keys(state).forEach(k => {
            arr.push(state[k]);
          });
        }
        this.adjustData(arr);
      }
    })
  }

  ngOnInit() {
    this.subscribe();
    this.ngRedux.dispatch({type: DashboardActions.WIDGET_GET_ACTIONS_STATUS});
  }

  ngOnDestroy() {
    this.unsubscriber.unsubscribe();
  }

}
