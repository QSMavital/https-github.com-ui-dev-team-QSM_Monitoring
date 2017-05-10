import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable} from "rxjs";
import {select, NgRedux} from "@angular-redux/store";
import {isArray, isNullOrUndefined} from "util";
import {DashboardActions} from "../../../../store/actions/dashboard-actions";
import {IStore} from "../../../../store/index";

@Component({
  selector: 'ui-issuer-actions-status',
  templateUrl: './issuer-actions-status.component.html',
  styleUrls: ['./issuer-actions-status.component.scss']
})
export class IssuerActionsStatusComponent implements OnInit, OnDestroy {
  private unsubscriber;
  private data: any;
  private options: any;

  @select(['dashboard', 'issuerActionsStatus']) $issuerActionsStatus: Observable<any>;

  constructor(private ngRedux: NgRedux<IStore>) {
    this.options = {
      type: 'bar',
      layout: {
        padding: 15
      },
      legend: {
        display: false
      },
      scales: {
        yAxes: [{
          stacked: true,
          ticks: {
            padding: 0,
            stepSize: 5000,
            fontFamily: 'opensans-regular',
            fontSize: 12,
            fontColor: '#6f7b87'
          }
        }],
        xAxes: [
          {
            barPercentage: 0.65,
            gridLines: {
              display: false,
              drawBorder: false, zeroLineWidth: 0
            },
            ticks: {
              stepSize: 5000,
              fontFamily: 'opensans-regular',
              fontSize: 10,
              fontColor: '#6f7b87'
            }
          }
        ]
      }
    };
    this.ngRedux.dispatch({type: DashboardActions.WIDGET_GET_ISSUER_ACTIONS_STATUS});
  }

  initData(state) {
    this.data = {
      labels: state.map((i) => {
        return i.bank
      }),
      datasets: [
        {
          backgroundColor: '#ff563e',
          borderColor: '#ff563e',
          data: state.map(i => {
            return i.fatal
          })
        },
        {
          backgroundColor: '#71d36b',
          borderColor: '#71d36b',
          data: state.map(i => {
            return i.noError
          })
        }
      ]
    };
  }

  subscribe() {
    this.unsubscriber = this.$issuerActionsStatus.subscribe((state) => {
      var temp = [];
      if (!isNullOrUndefined(state)) {
        if (isArray(state))
          temp = state;
        else {
          Object.keys(state).forEach(k => {
            temp.push(state[k]);
          });
        }
        this.initData(temp);
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
