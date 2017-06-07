import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {isArray, isNullOrUndefined} from "util";
import {Observable} from "rxjs";
import {DashboardActions} from "../../../../store/actions/dashboard-actions";
import {ActionsStatus, StatusView} from "../../../config/statusView";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'ui-actions-status',
  templateUrl: './actions-status.component.html',
  styleUrls: ['./actions-status.component.scss']
})
export class ActionsStatusComponent implements OnInit, OnDestroy {
  private unsubscriber;
  public data: any[] = [];
  public legendData: any[] = [];
  public options: any;

  @select(['dashboard', 'actionsStatus']) $actionsStatus: Observable<any>;

  constructor(private ngRedux: NgRedux<IStore>,
  private trananslateSrv:TranslateService) {
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
        labelsOutside: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: false,
        labelType: "value",
        showLegend: false,
        growOnHover: true,
        valueFormat:(d,e)=>{
          let a = this.data.find((e)=>{
            return e.value === d;
          });
          // return `${this.trananslateSrv.instant('keys.'+a.key)} ${d}%`;
          return `${d}%`;
        },
        tooltip: {
          contentGenerator: (d)=> {
            return this.trananslateSrv.instant(`keys.${d.series[0].key}`) + ': ' + d.series[0].value + '%';
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
        value: i.percents,
        color: StatusView[ActionsStatus[i.statusName]].color
      });
    });
    this.legendData = data.map(i => {
      return {color: i.color, label: 'keys.' + i.key}
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
