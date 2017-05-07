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
  @select(['dashboard','onlineStatus']) actionsStatus: Observable<any>;

  private data: any = [];
  private options: any;

  constructor(private ngRedux: NgRedux<IStore>) {
    this.initData();
  }



  initData() {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function(d){return d.key;},
        y: function(d){return d.y;},
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    }


    this.data = [
      {
        key: "One",
        y: 5
      },
      {
        key: "Two",
        y: 2
      },
      {
        key: "Three",
        y: 9
      },
      {
        key: "Four",
        y: 7
      },
      {
        key: "Five",
        y: 4
      },
      {
        key: "Six",
        y: 3
      },
      {
        key: "Seven",
        y: .5
      }
    ];
  }

  ngOnInit() {
    this.subscribe();

  }

  ngOnDestroy() {
    this._actionsStatus.unsubscribe();
  }

  subscribe(){
    this._actionsStatus = this.actionsStatus.subscribe((state)=>{
      if(!isNullOrUndefined(state)){
        console.log('actionsStatus ----->>>>>>>>>>',state);
      }
    })

  }

}
