import { Component, OnInit, OnDestroy} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "store/index";
import {ActionMenuActions} from "store/actions/action-menu-actions";
import {Observable} from "rxjs";
import {isArray, isNullOrUndefined} from "util";
import {Output} from "@angular/core";
import {EventEmitter} from "@angular/core";

@Component({
  selector: 'ui-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.scss']
})
export class ActionMenuComponent implements OnInit, OnDestroy {

  @select(['actionMenu']) $actionMenu: Observable<any>;
  private unsubscriber;
  private showModal:boolean;
  private qswitchVersion : string = "";
  private operatorVersion: string = "";
  constructor(private ngRedux: NgRedux<IStore>) {
   }

  ngOnInit() {
    this.showModal = false;
     this.subscribe();
  }
  subscribe() {
    this.unsubscriber = this.$actionMenu.subscribe((state) => {
      if (!isNullOrUndefined(state)) {
        this.showModal = true;
        this.qswitchVersion = state.qswitch; 
        this.operatorVersion = state.operator; 
      }
    })
  }
  open(){
    this.showModal = !this.showModal;
    this.ngRedux.dispatch({type: ActionMenuActions.GENERAL_GET_VERSION});
  }

  ngOnDestroy(){
      this.unsubscriber.unsubscribe();
  }

}
