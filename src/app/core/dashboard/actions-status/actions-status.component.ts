import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {isNullOrUndefined} from "util";
import {Observable} from "rxjs";
import * as d3 from "d3";


@Component({
  selector: 'ui-actions-status',
  templateUrl: './actions-status.component.html',
  styleUrls: ['./actions-status.component.scss']
})
export class ActionsStatusComponent implements OnInit, OnDestroy {
  private _actionsStatus;
  @select(['dashboard', 'onlineStatus']) actionsStatus: Observable<any>;

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
        height: 360,
        x: function (d) {
          return d.key;
        },
        y: function (d) {
          return d.value;
        },
        showLabels: true,
        labelsOutside:true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: false,
        labelType: "key",
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


    this.data = [
      {
        key: "Rejection",
        value: 13,
        color: "#ff563e"
      },
      {
        key: "Successful operations",
        value: 45,
        color: "#71d36b"
      },
      {
        key: "Fault",
        value: 10,
        color: "#49bbf8"
      },
      {
        key: "Incorrect PIN code",
        value: 32,
        color: "#fa9a52"
      }
    ];
  }

  ngOnInit() {
    this.subscribe();

  }

  ngOnDestroy() {
    this._actionsStatus.unsubscribe();
  }

  subscribe() {
    this._actionsStatus = this.actionsStatus.subscribe((state) => {
      if (!isNullOrUndefined(state)) {
        console.log('actionsStatus ----->>>>>>>>>>', state);
      }
    })

  }

}
