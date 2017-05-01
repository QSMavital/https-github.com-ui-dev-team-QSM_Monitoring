import {Component, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {ServerURLInterceptor} from "./app.interceptors";
import {select, NgRedux} from "@angular-redux/store";
import {Observable} from "rxjs";
import {TranslateService, LangChangeEvent} from "@ngx-translate/core";
import {i18n} from "./config/i18n";
import {isNullOrUndefined} from "util";
import {IStore} from "../store/index";
import {GeneralCustomerActions} from "../store/actions/generalCustomer-actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnDestroy{
  private errorHandler: any = {};
  private unsubsribers: any = {};

  //subscribers
  @select('errorHandler') errorHandler$: Observable<any>;

  constructor(private srvURLInterceptor: ServerURLInterceptor,
              private translate: TranslateService,
              private ngRedux: NgRedux<IStore>) {
    this.initI18n();
    this.initErrorHandler();
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

  initCustomer(){
    this.ngRedux.dispatch({type:GeneralCustomerActions.GET_GENERAL_CUSTOMER});
  }

  ngOnDestroy() {
    this.unsubsribers.errorHandler.unsubscribe();
  }

}
