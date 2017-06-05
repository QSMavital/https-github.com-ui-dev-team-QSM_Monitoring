import {Component, OnInit, OnDestroy} from '@angular/core';
import {Dashboard} from "../../config/dashboard";
import {select, NgRedux} from "@angular-redux/store";
import {Observable} from "rxjs";
import {isNullOrUndefined} from "util";
import {IStore} from "../../../store/index";

@Component({
  selector: 'ui-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
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
      if(widget.visible){
        this.widgets.push(Dashboard.Widgets[widget.field])
      }
    });
  }

}
