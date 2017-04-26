import {Route} from "@angular/router";
import {DashboardComponent} from "./core/dashboard/dashboard.component";
import {AtmComponent} from "./core/atm/atm.component";
import {EppsComponent} from "./core/epps/epps.component";
import {HsmComponent} from "./core/hsm/hsm.component";
import {ReportsComponent} from "./core/reports/reports.component";

export const appRoutes: Route[] = [

  {path: '', component: DashboardComponent},
  {path: 'atm', component: AtmComponent},
  {path: 'epps', component: EppsComponent},
  {path: 'hsm', component: HsmComponent},
  {path: 'reports', component: ReportsComponent}

];
