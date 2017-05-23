import { Component, OnInit } from '@angular/core';
import {select, NgRedux} from "@angular-redux/store";
import {Observable} from "rxjs";
import {isNullOrUndefined} from "util";
import {IStore} from "../../../../../store/index";
import {Dashboard} from "../../../../config/dashboard";

@Component({
  selector: 'ui-db-closed-wrapper',
  templateUrl: 'wrapper.component.html',
  styleUrls: ['wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  private userSettings;
  private _userSettingsRef;
  public widgets:any = [];

  @select('userSettings') userSettings$: Observable<any>;

  constructor(private ngRedux: NgRedux<IStore>) {

    let dbConfig = this.ngRedux.getState().userSettings;
    if(isNullOrUndefined(dbConfig)){
      this.subscribe();
    }else{
      this.initDashboard(dbConfig.dashboard);
    }

  }

  ngOnInit() {}

  ngOnDestroy() {
    if(!isNullOrUndefined(this._userSettingsRef)){
      this._userSettingsRef.unsubscribe();
    }
  }

  subscribe(){
    this._userSettingsRef = this.userSettings$.subscribe((state)=>{
      if(!isNullOrUndefined(state)){
        this.initDashboard(state.dashboard)
      }

    });
  }

  initDashboard(config){
    this.widgets = [];
    config.widgets.forEach((widget)=>{
      if(!isNullOrUndefined(Dashboard.Small_Widgets[widget.field])&&widget.visible){
        this.widgets.push(Dashboard.Small_Widgets[widget.field])
      }
    });
  }
}
