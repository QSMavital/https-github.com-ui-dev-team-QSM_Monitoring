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

export const appRoutes: Route[] = [

  {path: '', component: DashboardComponent},
  {
    path: 'atms', component: AtmsComponent,
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
  {path: 'epps', component: EppsComponent},
  {path: 'hsm', component: HsmComponent},
  {path: 'reports', component: ReportsComponent}

];
