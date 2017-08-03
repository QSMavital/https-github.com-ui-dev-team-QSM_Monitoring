import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {CommonModule, DecimalPipe} from "@angular/common";
import {AtmsComponent} from './core/atms/atms.component';
import {InventoryComponent} from './core/atms/inventory/inventory.component';
import {AtmsStatusComponent} from './core/atms/atms-status/atms-status.component';
import {AtmsNotificationsComponent} from './core/atms/atms-notifications/atms-notifications.component';
import {AtmsEventsComponent} from './core/atms/atms-events/atms-events.component';
import {AtmsTransactionsComponent} from './core/atms/atms-transactions/atms-transactions.component';
import {Customer} from "../store/middlewares/customer-middleware";
import {Reports} from "../store/middlewares/reports-middleware";
import {MainComponent} from './core/master/main/main.component';
import {AtmStatusComponent} from './core/atm/atm-status/atm-status.component';
import {AccessoriesStatusComponent} from './core/atm/accessories-status/accessories-status.component';
import {RetainedCardsComponent} from './core/atm/retained-cards/retained-cards.component';
import {AtmSettingsComponent} from './core/atm/atm-settings/atm-settings.component';
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
import {ConnectionSmallComponent} from './core/dashboard/closed-bar-widgets/connection-small/connection-small.component';
import {ActionsSmallComponent} from './core/dashboard/closed-bar-widgets/actions-small/actions-small.component';
import {OnlineSmallComponent} from './core/dashboard/closed-bar-widgets/online-small/online-small.component';
import {WrapperComponent} from './core/dashboard/closed-bar-widgets/wrapper/wrapper.component';
import {AtmsInventoryFilterComponent} from './core/atms/inventory/atms-inventory-filter/atms-inventory-filter.component';
import {AgGridModule} from "ag-grid-angular";
import {SettingsResolverService} from "./shared/services/settings-resolver.service";
import {AgStatusComponent} from "./shared/components/ag-status/ag-status.component";
import {AtmsNotificationsFiltersComponent} from './core/atms/atms-notifications/components/atms-notifications-filters/atms-notifications-filters.component';
import {CalendarModule} from 'primeng/primeng';
import {AgAmountComponent} from "./shared/components/ag-amount/ag-amount.component";
import {AgDateComponent} from "./shared/components/ag-date/ag-date.component";
import {AgProgressComponent} from "./shared/components/ag-progress/ag-progress.component";
import {Atms as AtmsMiddleware} from "../store/middlewares/atms-middleware";
import {Atm as AtmMiddleware} from "../store/middlewares/atm-middleware";
import {Hsm as HsmMiddleware} from "../store/middlewares/hsm-middleware";
import {Epp as EppMiddleware} from "../store/middlewares/epp-middleware";
import {AgDateShortComponent} from "./shared/components/ag-date-short/ag-date-short.component";
import {AgTimeComponent} from "./shared/components/ag-time/ag-time.component";
import {MasonryModule} from 'angular2-masonry';
import {AtmStatusGeneralComponent} from './core/atm/atm-status/components/atm-status-general/atm-status-general.component';
import {AtmStatusSummaryComponent} from './core/atm/atm-status/components/atm-status-summary/atm-status-summary.component';
import {AtmStatusReventActionComponent} from './core/atm/atm-status/components/atm-status-revent-action/atm-status-revent-action.component';
import {AtmStatusKeysComponent} from './core/atm/atm-status/components/atm-status-keys/atm-status-keys.component';
import {BalanceFilterComponent} from './core/atm/retained-cards/components/balance-filter/balance-filter.component';
import {AccessoriesCashPoolComponent} from './core/atm/accessories-status/components/accessories-cash-pool/accessories-cash-pool.component';
import {AccessoriesBalanceStrokesComponent} from './core/atm/accessories-status/components/accessories-balance-strokes/accessories-balance-strokes.component';
import {AccessoriesChecksComponent} from './core/atm/accessories-status/components/accessories-checks/accessories-checks.component';
import {AccessoriesOtherComponent} from './core/atm/accessories-status/components/accessories-other/accessories-other.component';
import {AccessoriesPrintersComponent} from "./core/atm/accessories-status/components/accessories-printers/accessories-printers.component";
import {AgTranslateMapComponent} from "./shared/components/ag-translate-map/ag-translate-map.component";
import {GrowlModule} from 'primeng/primeng';
import {AgDiv100Component} from "./shared/components/ag-div100/ag-div100.component";
import {HsmWeeksStatisticsComponent} from './core/hsm/hsm-statistics/hsm-weeks-statistics/hsm-weeks-statistics.component';
import {AgDirectiveComponent} from "./shared/components/ag-directive/ag-directive.component";
import {AgNumberComponent} from "./shared/components/ag-number/ag-number.component";
import {HsmTableComponent} from './core/hsm/hsm-status/components/hsm-table/hsm-table.component';
import {HsmLinkTableComponent} from './core/hsm/hsm-status/components/hsm-link-table/hsm-link-table.component';
import {HsmFilterComponent} from './core/hsm/hsm-statistics/hsm-filter/hsm-filter.component';
import {AgBooleanComponent} from "./shared/components/ag-boolean/ag-boolean.component";
import {ReportsFilterComponent} from './core/reports/components/reports-filter/reports-filter.component';
import {ReportsDataComponent} from './core/reports/components/reports-data/reports-data.component';
import {TransactionComponent} from "./core/atms/atms-transaction/atms-transaction.component";
import { DevicesSmallComponent } from './core/dashboard/closed-bar-widgets/device-small/device-small.component';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
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
    MainComponent,
    AtmStatusComponent,
    AccessoriesStatusComponent,
    RetainedCardsComponent,
    AtmSettingsComponent,
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
    OnlineSmallComponent,
    WrapperComponent,
    AtmsInventoryFilterComponent,
    AtmsNotificationsFiltersComponent,
    AtmStatusGeneralComponent,
    AtmStatusSummaryComponent,
    AtmStatusReventActionComponent,
    AtmStatusKeysComponent,
    BalanceFilterComponent,
    AccessoriesCashPoolComponent,
    AccessoriesBalanceStrokesComponent,
    AccessoriesPrintersComponent,
    AccessoriesChecksComponent,
    AccessoriesOtherComponent,
    HsmWeeksStatisticsComponent,
    HsmTableComponent,
    HsmLinkTableComponent,
    HsmFilterComponent,
    ReportsFilterComponent,
    ReportsDataComponent,
    TransactionComponent,
    DevicesSmallComponent
  ],
  imports: [
    DialogModule,
    GrowlModule,
    MasonryModule,
    DataTableModule,
    BrowserModule,
    SharedModule,
    CommonModule,
    FormsModule,
    NvD3Module,
    HttpModule,
    CalendarModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    NgReduxModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    BrowserAnimationsModule,
    DropdownModule,
    ChartModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([
      AgStatusComponent,
      AgDateComponent,
      AgAmountComponent,
      AgProgressComponent,
      AgDateShortComponent,
      AgTimeComponent,
      AgTranslateMapComponent,
      AgDiv100Component,
      AgDirectiveComponent,
      AgNumberComponent,
      AgBooleanComponent
    ])
  ],
  providers: [
    ServerURLInterceptor,
    {
      provide: InterceptorService,
      useFactory: interceptorFactory,
      deps: [XHRBackend, RequestOptions, ServerURLInterceptor] // Add it here, in the same order as the signature of interceptorFactory
    },
    Customer,
    HsmMiddleware,
    Dashboard,
    AtmsMiddleware,
    AtmMiddleware,
    Reports,
    EppMiddleware,
    SettingsResolverService,
    DecimalPipe
  ],
  entryComponents: [
    ConnectionStatusComponent,
    DevicesStatusComponent,
    OnlineStatusComponent,
    IssuerActionsStatusComponent,
    ActionsStatusComponent,
    ConnectionSmallComponent,
    ActionsSmallComponent,
    OnlineSmallComponent,
    DevicesSmallComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private ngRedux: NgRedux<IStore>,
              private customer: Customer,
              private atms: AtmsMiddleware,
              private hsm: HsmMiddleware,
              private epp: EppMiddleware,
              private reports: Reports,
              private atm: AtmMiddleware,
              private dashboard: Dashboard,
              private devTools: DevToolsExtension) {
    var updatedEnhancers = [];
    if (!environment.production && devTools.isEnabled()) {
      updatedEnhancers = [...enhancers, devTools.enhancer()];
    } else
      updatedEnhancers = [...enhancers];
    const middlewares = [customer.Middleware, dashboard.Middleware, atms.Middleware, atm.Middleware, hsm.Middleware, epp.Middleware, reports.Middleware];
    this.ngRedux.configureStore(rootReducer, {}, middlewares, updatedEnhancers);

  }
}

