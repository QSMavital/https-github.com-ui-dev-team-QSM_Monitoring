import {Injectable, OnDestroy} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs";
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../store/index";
import {isNullOrUndefined} from "util";

@Injectable()
export class CanActivateRoute implements CanActivate,OnDestroy {
  private lastState: string;
  private userSettingsRef;
  @select('userSettings') userSettings: Observable<any>;

  constructor(private ngRedux: NgRedux<IStore>,
              private router: Router) {
    this.userSettingsRef = this.userSettings.subscribe((state) => {
      if (!isNullOrUndefined(state)) {
        return this.redirect(state.menu, this.lastState);
      }
    });
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot){
    let menuSettings = [];
    this.lastState = route.data.state;
    if (!isNullOrUndefined(this.ngRedux.getState().userSettings)) {
      menuSettings = this.ngRedux.getState().userSettings.menu;
    }
    return this.redirect(menuSettings, this.lastState);
  }

  redirect(menuSettings, state) {
    if (menuSettings.length && menuSettings.indexOf(state) == -1) {
      // this.router.navigate(["/"]);
      window.location.href='';
      return false;
    }
    return true;
  }

  ngOnDestroy() {
    this.userSettingsRef.unsubscribe();
  }
}
