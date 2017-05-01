import {Route} from "@angular/router";
import {DashboardComponent} from "./core/dashboard/dashboard.component";
import {AtmComponent} from "./core/atm/atm.component";
import {EppsComponent} from "./core/epps/epps.component";
import {HsmComponent} from "./core/hsm/hsm.component";
import {ReportsComponent} from "./core/reports/reports.component";
import {AtmsComponent} from "./core/atms/atms.component";
import {InventoryComponent} from "./core/atms/inventory/inventory.component";
import {AtmsStatusComponent} from "./core/atms/atms-status/atms-status.component";
import {AtmsNotificationsComponent} from "./core/atms/atms-notifications/atms-notifications.component";
import {AtmsEventsComponent} from "./core/atms/atms-events/atms-events.component";
import {AtmsTransactionsComponent} from "./core/atms/atms-transactions/atms-transactions.component";
import {AtmsTransactionComponent} from "./core/atms/atms-transaction/atms-transaction.component";
import {SettingsResolverService} from "./shared/services/settings-resolver.service";
import {MainComponent} from "./core/master/main/main.component";
import {CanActivateRoute} from "./shared/services/can-activate.service";

export const appRoutes: Route[] = [

  {
    path: '', component: MainComponent,

    resolve: {
      settings: SettingsResolverService
    },
    children: [
      {
        path: '', component: DashboardComponent,
        canActivate: [CanActivateRoute],
        data:{state:"MAIN"}

      },
      {
        path: 'atms', component: AtmsComponent,
        data:{state:"ATM"},
        canActivate: [CanActivateRoute],
        children: [
          {path: '', redirectTo: '/atms/inventory', pathMatch: 'full'},
          {path: 'inventory', component: InventoryComponent},
          {path: 'status', component: AtmsStatusComponent},
          {path: 'notifications', component: AtmsNotificationsComponent},
          {path: 'events', component: AtmsEventsComponent},
          {path: 'transactions', component: AtmsTransactionsComponent},
          {path: 'transaction', component: AtmsTransactionComponent}
        ]
      },
      {path: 'epp', component: EppsComponent, canActivate: [CanActivateRoute],data:{state:"EPP"},},
      {path: 'hsm', component: HsmComponent, canActivate: [CanActivateRoute],data:{state:"HSM"},},
      {path: 'reports', component: ReportsComponent, canActivate: [CanActivateRoute],data:{state:"REPORTS"}}
    ]
  }


];
