import {Injectable, OnDestroy} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../store/index";
import {isNullOrUndefined} from "util";
import {Api} from "../../config/api";
import {InterceptorService} from "ng2-interceptors";
import {UserSettingsActions} from "../../../store/actions/userSettings-actions";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class CanActivateRoute implements CanActivate,OnDestroy {
  private lastState: string;
  private userSettingsRef;
  @select('userSettings') userSettings: Observable<any>;
  private auth: Observable<boolean>;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.auth = new Observable((ob) => {
      this.userSettings.subscribe((state) => {
        if (isNullOrUndefined(state)) {
          return;
        }
        ob.next(this.redirect(state.menu, route.data.state));
      });
    });
    return this.auth;
  }

  redirect(menuSettings, state) {

    if (menuSettings.length && menuSettings.indexOf(state) == -1) {
      this.router.navigate(["/"]);
      return false;
    }
    return true;
  }

  ngOnDestroy() {
    this.userSettingsRef.unsubscribe();
  }
}


@Injectable()
export class AppActivator implements CanActivate {

  private auth: Observable<boolean>;

  @select('userSettings') userSettings: Observable<any>;

  constructor(private ngRedux: NgRedux<IStore>,
              private http: InterceptorService,
              private translate: TranslateService) {
    this.auth = new Observable((ob) => {
      if(!isNullOrUndefined(this.ngRedux.getState().userSettings)){
        ob.next(true);
        return;
      }
      this.http.post(Api.init.url, Api.init.payload)
        .map((res) => JSON.parse(res['_body']))
        .subscribe((res) => {
          this.translate.use(res.language.toLowerCase()).subscribe(()=>{
            this.ngRedux.dispatch({type: UserSettingsActions.SET_USER_SETTINGS, payload: res});
            ob.next(true);
          });

        });
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth;
  }

}
