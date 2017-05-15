import {Component, OnInit, OnDestroy} from '@angular/core';
import {isNullOrUndefined} from "util";
import {NgRedux, select} from "@angular-redux/store";
import {Router, ActivatedRoute} from "@angular/router";
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
  private tabs: any = [];
  private atmId: number;
  @select('userSettings') userSettings$: Observable<any>;

  constructor(private ngRedux: NgRedux<IStore>, private router: Router, private route: ActivatedRoute) {
    this.atmId = this.route.params['value']['id'];
    this.initTabs();
    this.unsubscriber = this.userSettings$.subscribe((state) => {
      this.initTabs(state.userSettings);
    });
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.unsubscriber.unsubscribe();
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
    }
  }

}
