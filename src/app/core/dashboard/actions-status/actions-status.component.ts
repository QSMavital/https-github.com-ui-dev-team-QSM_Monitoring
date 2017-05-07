import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {isNullOrUndefined} from "util";
import {Observable} from "rxjs";

@Component({
  selector: 'ui-actions-status',
  templateUrl: './actions-status.component.html',
  styleUrls: ['./actions-status.component.scss']
})
export class ActionsStatusComponent implements OnInit, OnDestroy {
  private _actionsStatus;
  @select(['dashboard','onlineStatus']) actionsStatus: Observable<any>;

  private data:any;
  private options:any;

  constructor(private ngRedux: NgRedux<IStore>)  {
    this.options = {
      type:'pie',
      layout:{
        padding:25
      },
      legend: {
        display:false
      }
    };
    this.data = {
      labels: ['Bank', 'Bank1', 'Bank2', 'Bank3'],
      datasets: [
        {
          data: [165, 259, 180, 281],
          borderWidth:0,
          backgroundColor: ['#ff563e','#71d36b','#49bbf8','#fa9a52']
        }
      ]
    }
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
