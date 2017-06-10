import {Component, OnInit, OnDestroy} from '@angular/core';
import {GridOptions} from "ag-grid";
import {GridDefsService} from "../../../shared/services/grid-defs.service";
import {Hsm} from "../../../config/hsm";
import {TranslateService} from "@ngx-translate/core";
import {select, NgRedux} from "@angular-redux/store";
import {Observable} from "rxjs";
import {IStore} from "../../../../store/index";
import {HsmActions} from "../../../../store/actions/hsms-actions";
import {isNullOrUndefined} from "util";


@Component({
  selector: 'ui-hsm-status',
  templateUrl: './hsm-status.component.html',
  styleUrls: ['./hsm-status.component.scss']
})
export class HsmStatusComponent implements OnDestroy{
  public addNew = false;
  public data;
  public gridOptions2: GridOptions = {};
  @select(['hsm', 'status']) $hsm_status: Observable<any>;
  private $hsm_status_ref;

  constructor(private gridDefsSrv: GridDefsService, private translateSrv: TranslateService,private ngRedux: NgRedux<IStore>) {
    this.ngRedux.dispatch({type:HsmActions.HSM_GET});
    this.$hsm_status_ref = this.$hsm_status.subscribe((state)=>{
      if(isNullOrUndefined(state)){
        return;
      }
      this.data = state
    });
  }



  ngOnDestroy(){
    this.$hsm_status_ref.unsubscribe();
  }
}

/*{
  "hsmStatus": "GOOD",
  "hsms": [
  {
    "main": true,
    "hsmSerialId": "3567/4444",
    "hsmAddress": "127.0.0.1",
    "hsmPort": 1024,
    "hsmStatusColor": "GOOD",
    "numberOfSessions": 1
  }
],
  "sessions": [
  {
    "hsmSerialId": "3567/4444",
    "sessionNumber": 1,
    "sessionType": "REGULAR",
    "sessionStatus": "NONE",
    "sessionRequest": "NONE"
  }
]
}*/
