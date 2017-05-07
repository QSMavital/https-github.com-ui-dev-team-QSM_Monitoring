import {Injectable, OnDestroy} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router} from "@angular/router";
import {Observable} from "rxjs";
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../store/index";
import {isNullOrUndefined} from "util";
import {Api} from "../../config/api";
import {InterceptorService} from "ng2-interceptors";
import {UserSettingsActions} from "../../../store/actions/userSettings-actions";

@Injectable()
export class CanActivateRoute implements CanActivate,OnDestroy {
  private lastState: string;
  private userSettingsRef;
  @select('userSettings') userSettings: Observable<any>;

  constructor(private ngRedux: NgRedux<IStore>,
              private http: InterceptorService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot){

    this.lastState = route.data.state;
    let userSettings = this.ngRedux.getState().userSettings;
    if (isNullOrUndefined(userSettings)) {
      this.http.post(Api.init.url,Api.init.payload)
        .map((res)=>JSON.parse(res['_body']))
        .subscribe((res)=>{
          this.ngRedux.dispatch({type:UserSettingsActions.SET_USER_SETTINGS,payload:res});
          this.redirect(res.menu,route.data.state);
        });
    }else{
      this.redirect(userSettings.menu,route.data.state);
    }

    return true;
  }

  redirect(menuSettings, state) {
    debugger;
    if (menuSettings.length && menuSettings.indexOf(state) == -1) {
      this.router.navigate(["/"]);
    }
    return true;
  }

  ngOnDestroy() {
    this.userSettingsRef.unsubscribe();
  }
}
