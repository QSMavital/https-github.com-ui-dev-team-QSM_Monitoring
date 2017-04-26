import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { AppComponent } from './app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { SidebarComponent } from './core/master/components/sidebar/sidebar.component';
import { HeaderComponent } from './core/master/components/header/header.component';
import { MenuComponent } from './core/master/components/menu/menu.component';
import { ActionMenuComponent } from './core/master/components/action-menu/action-menu.component';
import { UserComponent } from './core/master/components/user/user.component';
import { CustomerLogoComponent } from './core/master/components/customer-logo/customer-logo.component';
import { DatesComponent } from './core/master/components/dates/dates.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AtmComponent } from './core/atm/atm.component';
import { EppsComponent } from './core/epps/epps.component';
import { HsmComponent } from './core/hsm/hsm.component';
import { ReportsComponent } from './core/reports/reports.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {SharedModuleModule} from "./shared/shared-module.module";
import {InterceptorService, provideInterceptorService} from 'ng2-interceptors';
import { XHRBackend, RequestOptions } from '@angular/http';
import {NgReduxModule, NgRedux} from "@angular-redux/store";
import {IStore, rootReducer, enhancers} from "../store/index";
import {ServerURLInterceptor} from "./app.interceptors";

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, "i18n/", ".json");
}


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    MenuComponent,
    ActionMenuComponent,
    UserComponent,
    CustomerLogoComponent,
    DatesComponent,
    DashboardComponent,
    AtmComponent,
    EppsComponent,
    HsmComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    SharedModuleModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    NgReduxModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [
    ServerURLInterceptor,
    provideInterceptorService([
      ServerURLInterceptor
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IStore>) {
    const middlewares = [];
    this.ngRedux.configureStore(rootReducer, {}, middlewares,[ ...enhancers]);
  }
}
