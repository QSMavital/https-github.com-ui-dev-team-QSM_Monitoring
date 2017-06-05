import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {AtmActions} from "../../../../store/actions/atm-actions";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-atm-status',
  templateUrl: './atm-status.component.html',
  styleUrls: ['./atm-status.component.scss']
})

export class AtmStatusComponent implements OnDestroy {
  @select(['atm', 'status']) $atm_status: Observable<any>;
  private $atm_status_ref;
  private atmId;
  public statusData = {
    atmStatusGeneral:null,
    atmSummaryStatus:null,
    atmStatusLastAction:null,
    atmKeys:null
  };

  constructor(private ngRedux: NgRedux<IStore>,private route: ActivatedRoute) {
    this.atmId = this.route.parent.params['value']['id'];
    this.ngRedux.dispatch({type:AtmActions.ATM_GET_STATUS,payload:{atmNo:this.atmId}});
    this.$atm_status_ref = this.$atm_status.subscribe((state)=>{
      if(isNullOrUndefined(state)){
        return;
      }
      this.statusData = state;
    });
  }
  ngOnDestroy() {
    this.$atm_status_ref.unsubscribe();
  }

}
