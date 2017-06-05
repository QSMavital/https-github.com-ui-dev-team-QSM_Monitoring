import {Component, OnInit, OnDestroy} from '@angular/core';
import {select, NgRedux} from "@angular-redux/store";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {IStore} from "../../../../store/index";
import {AtmActions} from "../../../../store/actions/atm-actions";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-accessories-status',
  templateUrl: './accessories-status.component.html',
  styleUrls: ['./accessories-status.component.scss']
})
export class AccessoriesStatusComponent implements OnInit,OnDestroy {
  @select(['atm', 'accessories']) $atm_accessories: Observable<any>;
  private $atm_accessories_ref;
  private atmId;
  public accessoriesData = {
    accessoriesDispenserInfo:null,
    lastSettleDispenseList:null,
    printersInfo:null,
    checkInfo:null,
    otherAccessoriesInfo:null
  };

  constructor(private ngRedux: NgRedux<IStore>,private route: ActivatedRoute) {
    this.atmId = this.route.parent.params['value']['id'];
    this.ngRedux.dispatch({type:AtmActions.ATM_GET_ACCESSORIES,payload:{atmNo:this.atmId}});
    this.$atm_accessories_ref = this.$atm_accessories.subscribe((state)=>{
      if(isNullOrUndefined(state)){
        return;
      }
      this.accessoriesData = state;
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.$atm_accessories_ref.unsubscribe();
  }
}
