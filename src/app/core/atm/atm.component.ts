import {Component, OnInit, OnDestroy} from '@angular/core';
import {isNullOrUndefined} from "util";
import {NgRedux, select} from "@angular-redux/store";
import {Router, ActivatedRoute, NavigationEnd} from "@angular/router";
import {IStore} from "../../../store/index";
import {Observable} from "rxjs";
import {Atm} from "../../config/atm";

@Component({
  selector: 'ui-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.scss']
})
export class AtmComponent implements OnInit, OnDestroy {
  private userSettings;
  private unsubscriber;
  private _routerRef;
  public tabs: any = [];
  public atmId: number;
  @select('userSettings') userSettings$: Observable<any>;

  constructor(private ngRedux: NgRedux<IStore>, private router: Router, private route: ActivatedRoute) {
    this.atmId = this.route.params['value']['id'];
    console.log(this.atmId);
    this.initTabs(this.ngRedux.getState().userSettings);
    this.unsubscriber = this.userSettings$.subscribe((state) => {
      this.initTabs(state.userSettings);
    });
  }

  ngOnInit() {
    this._routerRef = this.router.events.subscribe((e)=>{
      if(e instanceof NavigationEnd){
        this.initTabs(this.userSettings);
      }
    });
  }

  ngOnDestroy() {
    this.unsubscriber.unsubscribe();
    this._routerRef.unsubscribe();
  }

  initTabs(settings?) {
    this.userSettings = settings;
    if (!isNullOrUndefined(this.userSettings)) {
      this.tabs = [];
      this.userSettings.atmCustomization.atmTabs.forEach((tabView) => {
        if (tabView.visible) {
          this.tabs.push(Atm.Tabs[tabView.field]);
        }
      });
      if (this.router.url.match(new RegExp("/", "g")).length == 3) {
        this.router.navigate(['atms', 'atm', this.atmId, this.tabs[0].state]);
      }
    }else{
      if (this.router.url.match(new RegExp("/", "g")).length == 3) {
        this.router.navigate(['atms', 'atm', this.atmId, this.tabs[0].state]);
      }
    }
  }

}
