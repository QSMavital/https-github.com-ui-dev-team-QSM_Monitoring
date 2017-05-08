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
import {NgReduxModule, NgRedux, DevToolsExtension} from "@angular-redux/store";
import {IStore, rootReducer, enhancers} from "../store/index";
import {ServerURLInterceptor} from "./app.interceptors";
import {DialogModule, DropdownModule, ChartModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {MomentPipe} from "./shared/pipes/moment.pipe";
import {AtmsComponent} from './core/atms/atms.component';
import {InventoryComponent} from './core/atms/inventory/inventory.component';
import {AtmsStatusComponent} from './core/atms/atms-status/atms-status.component';
import {AtmsNotificationsComponent} from './core/atms/atms-notifications/atms-notifications.component';
import {AtmsEventsComponent} from './core/atms/atms-events/atms-events.component';
import {AtmsTransactionsComponent} from './core/atms/atms-transactions/atms-transactions.component';
import {AtmsTransactionComponent} from './core/atms/atms-transaction/atms-transaction.component';
import {Customer} from "../store/middlewares/customer-middleware";
import {MainComponent} from './core/master/main/main.component';
import {NewComponent} from './core/atm/new/new.component';
import {AtmStatusComponent} from './core/atm/atm-status/atm-status.component';
import {AccessoriesStatusComponent} from './core/atm/accessories-status/accessories-status.component';
import {RetainedCardsComponent} from './core/atm/retained-cards/retained-cards.component';
import {AtmSettingsComponent} from './core/atm/atm-settings/atm-settings.component';
import {AtmNotificationsComponent} from './core/atm/atm-notifications/atm-notifications.component';
import {AtmEventsComponent} from './core/atm/atm-events/atm-events.component';
import {AtmTransactionsComponent} from './core/atm/atm-transactions/atm-transactions.component';
import {AtmTransactionComponent} from './core/atm/atm-transaction/atm-transaction.component';
import {HsmStatusComponent} from './core/hsm/hsm-status/hsm-status.component';
import {HsmStatisticsComponent} from './core/hsm/hsm-statistics/hsm-statistics.component';
import {ConnectionStatusComponent} from './core/dashboard/connection-status/connection-status.component';
import {DevicesStatusComponent} from './core/dashboard/devices-status/devices-status.component';
import {OnlineStatusComponent} from './core/dashboard/online-status/online-status.component';
import {IssuerActionsStatusComponent} from './core/dashboard/issuer-actions-status/issuer-actions-status.component';
import {ActionsStatusComponent} from './core/dashboard/actions-status/actions-status.component';
import {WidgetInjectorComponent} from './core/dashboard/widget-injector/widget-injector.component';
import {DataTableModule} from "primeng/components/datatable/datatable";
import {NvD3Module} from "angular2-nvd3";
import {Dashboard} from "../store/middlewares/dashboard-middleware";
import {environment} from "../environments/environment";
import { ConnectionSmallComponent } from './core/dashboard/closed-bar-widgets/connection-small/connection-small.component';
import { ActionsSmallComponent } from './core/dashboard/closed-bar-widgets/actions-small/actions-small.component';
import { OnlineSmallComponent } from './core/dashboard/closed-bar-widgets/online-small/online-small.component';


export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, "i18n/", ".json");
}
export function interceptorFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, serverURLInterceptor: ServerURLInterceptor) { // Add it here
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
    AtmsTransactionComponent,
    MainComponent,
    NewComponent,
    AtmStatusComponent,
    AccessoriesStatusComponent,
    RetainedCardsComponent,
    AtmSettingsComponent,
    AtmNotificationsComponent,
    AtmEventsComponent,
    AtmTransactionsComponent,
    AtmTransactionComponent,
    HsmStatusComponent,
    HsmStatisticsComponent,
    ConnectionStatusComponent,
    DevicesStatusComponent,
    OnlineStatusComponent,
    IssuerActionsStatusComponent,
    ActionsStatusComponent,
    WidgetInjectorComponent,
    ConnectionSmallComponent,
    ActionsSmallComponent,
    OnlineSmallComponent
  ],
  imports: [
    DataTableModule,
    BrowserModule,
    SharedModule,
    CommonModule,
    FormsModule,
    NvD3Module,
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
    BrowserAnimationsModule,
    DropdownModule,
    ChartModule
  ],
  providers: [
    MomentPipe,
    ServerURLInterceptor,
    {
      provide: InterceptorService,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions, ServerURLInterceptor] // Add it here, in the same order as the signature of interceptorFactory
    },
    Customer,
    Dashboard
  ],
  entryComponents: [
    ConnectionStatusComponent,
    DevicesStatusComponent,
    OnlineStatusComponent,
    IssuerActionsStatusComponent,
    ActionsStatusComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private ngRedux: NgRedux<IStore>, private customer: Customer, private dashboard: Dashboard, private devTools: DevToolsExtension) {
    var updatedEnhancers = [];
    if (!environment.production && devTools.isEnabled()) {
      updatedEnhancers = [...enhancers, devTools.enhancer()];
    } else
      updatedEnhancers = [...enhancers];
    const middlewares = [customer.Middleware,dashboard.Middleware];
    this.ngRedux.configureStore(rootReducer, {}, middlewares, updatedEnhancers);

  }
}

