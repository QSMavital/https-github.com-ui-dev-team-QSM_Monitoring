import {Component, OnInit, OnDestroy} from '@angular/core';
import {Api} from "../../../config/api";
import {Observable} from "rxjs";
import {select, NgRedux} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {HsmActions} from "../../../../store/actions/hsms-actions";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-hsm-statistics',
  templateUrl: './hsm-statistics.component.html',
  styleUrls: ['./hsm-statistics.component.scss']
})
export class HsmStatisticsComponent implements OnInit, OnDestroy {
  @select(['hsm', 'statistics']) $hsm_statistics: Observable<any>;
  private $hsm_statistics_ref;
  public filtersLastState: any = {};
  public data = {statistics1:null,statistics2:null};

  constructor(private ngRedux: NgRedux<IStore>) {
    this.ngRedux.dispatch({type:HsmActions.HSM_GET_STATISTICS,payload:Api.hsm_statistics.payload});
    this.filtersLastState = Object.assign({}, Api.hsm_statistics.payload);
  }

  ngOnInit(){
    this.$hsm_statistics_ref = this.$hsm_statistics.subscribe((state)=>{
      if(!isNullOrUndefined(state)){
        this.data = state;
      }
    });
  }

  ngOnDestroy(){
    this.$hsm_statistics_ref.unsubscribe();
  }

  filter(event) {
    this.ngRedux.dispatch({
      type: HsmActions.HSM_GET_STATISTICS,
      payload:Object.assign(this.filtersLastState, {
        "dateStatistics1": new Date(event.dateStatistics1).getTime(),
        "dateStatistics2": new Date(event.dateStatistics2).getTime()
      })
    });
  }
}
