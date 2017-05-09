import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {isArray, isNullOrUndefined} from "util";
import {Observable} from "rxjs";
import * as d3 from "d3";
import {DashboardActions} from "../../../../store/actions/dashboard-actions";
import {ActionsStatus, StatusView} from "../../../config/statusView";


@Component({
  selector: 'ui-actions-status',
  templateUrl: './actions-status.component.html',
  styleUrls: ['./actions-status.component.scss']
})
export class ActionsStatusComponent implements OnInit, OnDestroy {
  private _actionsStatus;
  @select(['dashboard', 'actionsStatus']) actionsStatus: Observable<any>;

  private data: any = [];
  private options: any;
  private hoverLabelsOptions: any;

  constructor(private ngRedux: NgRedux<IStore>) {
    this.initData();
  }
  initData() {
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
        labelsOutside:false,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: false,
        labelType: "percent",
        showLegend: false,
        growOnHover:false,
        tooltip: {
          contentGenerator: function (d) {
            return d.series[0].key + ': ' + d.series[0].value+'%';
          }
        }

        // legend: {
        //   margin: {
        //     top: 5,
        //     right: 35,
        //     bottom: 5,
        //     left: 0
        //   }
        // }
      }
    };

    this.ngRedux.dispatch({type:DashboardActions.WIDGET_GET_ACTIONS_STATUS});

    this.data = [
      {
        key: "Rejection",
        value: 1,
        color: "#ff563e"
      },
      {
        key: "Successful operations",
        value: 1,
        color: "#71d36b"
      },
      {
        key: "Fault",
        value: 1,
        color: "#49bbf8"
      },
      {
        key: "Incorrect PIN code",
        value: 1,
        color: "#fa9a52"
      }
    ];
  }

  adjustData(state){
    var data = [];
    state.forEach(i=>{
      data.push({
        key:i.statusName,
        value:i.precents,
        color:StatusView[ActionsStatus[i.statusName]].color
      });
    });
    this.data = data;
  }

  ngOnInit() {
    this.subscribe();

  }

  ngOnDestroy() {
    this._actionsStatus.unsubscribe();
  }

  subscribe() {
    this._actionsStatus = this.actionsStatus.subscribe((state) => {
      var arr=[];
      if (!isNullOrUndefined(state)) {
        if(isArray(state))
          arr = state;
        else {
          Object.keys(state).forEach(k=>{
            arr.push(state[k]);
          });
        }
        this.adjustData(arr);
        console.log('actionsStatus ----->>>>>>>>>>', state);
      }
    })

  }

}
