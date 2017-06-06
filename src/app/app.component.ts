import {Component, OnDestroy} from '@angular/core';
import {ServerURLInterceptor} from "./app.interceptors";
import {select, NgRedux} from "@angular-redux/store";
import {Observable} from "rxjs";
import {TranslateService} from "@ngx-translate/core";
import {isNullOrUndefined} from "util";
import {IStore} from "../store/index";
import {GeneralCustomerActions} from "../store/actions/generalCustomer-actions";
import {LicenseManager} from "ag-grid-enterprise/main";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnDestroy{
  public errorHandler: any = {};
  public unsubsribers: any = {};
  public notification: any = [];

  //subscribers
  @select('errorHandler') errorHandler$: Observable<any>;
  @select('notifications') notifications$: Observable<any>;

  constructor(public srvURLInterceptor: ServerURLInterceptor,
              private translate: TranslateService,
              private ngRedux: NgRedux<IStore>) {
    LicenseManager.setLicenseKey('QSM_Programming_Ltd._Qswitch_1Devs8_May_2018__MTUyNTc1MjAwMDAwMA==1176c44b35f16334586085ac74c58227');
    this.initI18n();
    this.initErrorHandler();
    this.initNotificationsHandler();
    this.initCustomer();
  }

  initI18n() {
    this.translate.addLangs(["en", "he"]);
  }

  initErrorHandler() {
    this.errorHandler = {
      show: false,
      error: {}
    };

    this.unsubsribers.errorHandler = this.errorHandler$.subscribe((state) => {
      if (!isNullOrUndefined(state)) {
        this.errorHandler.show = true;
        this.errorHandler.error = state;

      }
    });

  }

  initNotificationsHandler() {
    this.unsubsribers.notifications = this.notifications$.subscribe((state) => {
      if (!isNullOrUndefined(state)) {
       this.notification.push({severity:state.result?'success':'error', summary:state.summary, detail:state.details})
      }
    });
  }

  initCustomer(){
    this.ngRedux.dispatch({type:GeneralCustomerActions.GET_GENERAL_CUSTOMER});
  }

  ngOnDestroy() {
    this.unsubsribers.errorHandler.unsubscribe();
    this.unsubsribers.notifications.unsubscribe();
  }

}
