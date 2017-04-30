import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {AppComponent} from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {SidebarComponent} from './core/master/components/sidebar/sidebar.component';
import {HeaderComponent} from './core/master/components/header/header.component';
import {MenuComponent} from './core/master/components/menu/menu.component';
import {ActionMenuComponent} from './core/master/components/action-menu/action-menu.component';
import {CustomerLogoComponent} from './core/master/components/customer-logo/customer-logo.component';
import {DatesComponent} from './core/master/components/dates/dates.component';
import {DashboardComponent} from './core/dashboard/dashboard.component';
import {AtmComponent} from './core/atm/atm.component';
import {EppsComponent} from './core/epps/epps.component';
import {HsmComponent} from './core/hsm/hsm.component';
import {ReportsComponent} from './core/reports/reports.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {SharedModule} from "./shared/shared-module.module";
import {InterceptorService} from 'ng2-interceptors';
import {NgReduxModule, NgRedux} from "@angular-redux/store";
import {IStore, rootReducer, enhancers} from "../store/index";
import {ServerURLInterceptor} from "./app.interceptors";
import {DialogModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {MomentPipe} from "./shared/pipes/moment.pipe";
import { AtmsComponent } from './core/atms/atms.component';
import { InventoryComponent } from './core/atms/inventory/inventory.component';
import { AtmsStatusComponent } from './core/atms/atms-status/atms-status.component';
import { AtmsNotificationsComponent } from './core/atms/atms-notifications/atms-notifications.component';
import { AtmsEventsComponent } from './core/atms/atms-events/atms-events.component';
import { AtmsTransactionsComponent } from './core/atms/atms-transactions/atms-transactions.component';
import { AtmsTransactionComponent } from './core/atms/atms-transaction/atms-transaction.component';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, "i18n/", ".json");
}
export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, serverURLInterceptor:ServerURLInterceptor){ // Add it here
  let service = new InterceptorService(xhrBackend, requestOptions);
  service.addInterceptor(serverURLInterceptor); // Add it here
  return service;
}


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    MenuComponent,
    ActionMenuComponent,
    CustomerLogoComponent,
    DatesComponent,
    DashboardComponent,
    AtmComponent,
    EppsComponent,
    HsmComponent,
    ReportsComponent,
    AtmsComponent,
    InventoryComponent,
    AtmsStatusComponent,
    AtmsNotificationsComponent,
    AtmsEventsComponent,
    AtmsTransactionsComponent,
    AtmsTransactionComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CommonModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    NgReduxModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    MomentPipe,
    ServerURLInterceptor,
    {
      provide: InterceptorService,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions, ServerURLInterceptor] // Add it here, in the same order as the signature of interceptorFactory
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private ngRedux: NgRedux<IStore>) {
    const middlewares = [];
    this.ngRedux.configureStore(rootReducer, {}, middlewares, [...enhancers]);
  }
}

