import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../store/index";
import {Atms} from "../../config/atms";
import {Router, NavigationEnd} from "@angular/router";
import {isNullOrUndefined} from "util";
import {Observable} from "rxjs";

@Component({
  selector: 'ui-atms',
  templateUrl: './atms.component.html',
  styleUrls: ['./atms.component.scss']
})
export class AtmsComponent implements OnInit,OnDestroy {
  private userSettings;
  private _userSettingsRef;
  private _routerRef;
  public tabs: any = [];


  @select('userSettings') userSettings$: Observable<any>;


  constructor(private ngRedux: NgRedux<IStore>,
              private router: Router) {
    this.initTabs();

    this._userSettingsRef = this.userSettings$.subscribe(() => {
      this.initTabs();
    });

    this._routerRef = this.router.events.subscribe((e)=>{
      if(e instanceof NavigationEnd){
        this.initTabs();
      }
    });

  }

  ngOnInit() {}

  ngOnDestroy(){
    this._userSettingsRef.unsubscribe();
    this._routerRef.unsubscribe();
  }

  initTabs() {
    this.userSettings = this.ngRedux.getState().userSettings;
    if (!isNullOrUndefined(this.userSettings)) {
      this.tabs = [];
      this.userSettings.atmsCustomization.atmsTabs.forEach((tabView) => {
        if (!isNullOrUndefined(Atms.Tabs[tabView.field])&&tabView.visible) {
          this.tabs.push(Atms.Tabs[tabView.field]);
        }
      });
      if (this.router.url.match(new RegExp("/", "g")).length == 1) {
          this.router.navigate(['/atms', this.tabs[0].state]);
      }
    }


  }
}
