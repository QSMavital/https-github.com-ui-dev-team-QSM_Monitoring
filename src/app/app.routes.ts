import {Route} from "@angular/router";
import {DashboardComponent} from "./core/dashboard/dashboard.component";
import {EppsComponent} from "./core/epps/epps.component";
import {HsmComponent} from "./core/hsm/hsm.component";
import {ReportsComponent} from "./core/reports/reports.component";
import {AtmsComponent} from "./core/atms/atms.component";
import {InventoryComponent} from "./core/atms/inventory/inventory.component";
import {AtmsStatusComponent} from "./core/atms/atms-status/atms-status.component";
import {AtmsNotificationsComponent} from "./core/atms/atms-notifications/atms-notifications.component";
import {AtmsEventsComponent} from "./core/atms/atms-events/atms-events.component";
import {AtmsTransactionsComponent} from "./core/atms/atms-transactions/atms-transactions.component";
import {MainComponent} from "./core/master/main/main.component";
import {CanActivateRoute,AppActivator} from "./shared/services/can-activate.service";
import {AtmComponent} from "./core/atm/atm.component";
import {AtmStatusComponent} from "./core/atm/atm-status/atm-status.component";
import {RetainedCardsComponent} from "./core/atm/retained-cards/retained-cards.component";
import {AccessoriesStatusComponent} from "./core/atm/accessories-status/accessories-status.component";
import {AtmSettingsComponent} from "./core/atm/atm-settings/atm-settings.component";
import {AtmNotificationsComponent} from "./core/atm/atm-notifications/atm-notifications.component";
import {AtmEventsComponent} from "./core/atm/atm-events/atm-events.component";
import {AtmTransactionsComponent} from "./core/atm/atm-transactions/atm-transactions.component";
import {AtmTransactionComponent} from "./core/atm/atm-transaction/atm-transaction.component";
import {HsmStatusComponent} from "./core/hsm/hsm-status/hsm-status.component";
import {HsmStatisticsComponent} from "./core/hsm/hsm-statistics/hsm-statistics.component";

export const appRoutes: Route[] = [

  {
    path: '', component: MainComponent,
    canActivate: [AppActivator],
    children: [
      {
        path: '', component: DashboardComponent,
        canActivate: [CanActivateRoute],

        data: {state: "MAIN"}
      },
      {
        path: 'atms',
        data: {state: "ATMS"},
        canActivate: [CanActivateRoute],
        children: [
          {
            path: '', component: AtmsComponent,
            children: [
              {path: 'inventory', component: InventoryComponent},
              {path: 'status', component: AtmsStatusComponent},
              {path: 'notifications', component: AtmsNotificationsComponent},
              {path: 'events', component: AtmsEventsComponent},
              {path: 'transactions', component: AtmsTransactionsComponent}
            ],
          },

          {
            path: 'atm/:id', component: AtmComponent,
            children: [
              {path: 'status', component: AtmStatusComponent},
              {path: 'accessories', component: AccessoriesStatusComponent},
              {path: 'retained-cards', component: RetainedCardsComponent},
              {path: 'settings', component: AtmSettingsComponent},
              {path: 'notifications', component: AtmNotificationsComponent},
              {path: 'events', component: AtmEventsComponent},
              {path: 'transactions', component: AtmTransactionsComponent}
            ]
          },

        ]
      },
      {path: 'epp', component: EppsComponent, canActivate: [CanActivateRoute], data: {state: "EPPS"}},
      {path: 'hsm', component: HsmComponent, canActivate: [CanActivateRoute], data: {state: "HSMS"},
        children: [
          {path: '', redirectTo: '/hsm/status', pathMatch: 'full'},
          {path: 'status', component: HsmStatusComponent},
          {path: 'statistics', component: HsmStatisticsComponent},
        ]
      },
      {path: 'reports', component: ReportsComponent, canActivate: [CanActivateRoute], data: {state: "REPORTS"}}
    ]
  }


];
