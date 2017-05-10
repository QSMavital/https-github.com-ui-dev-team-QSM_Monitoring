import {NgModule} from '@angular/core';
import {SpinnerComponent} from './components/spinner/spinner.component';
// import {HttpClientService} from "./services/http-client.service";
import {SidebarModule} from 'ng-sidebar';

import {DirSelectionDirective} from './directives/bidi/dir-selection.directive';
import {SlidingPanelComponent} from './components/sliding-panel/sliding-panel.component';
import {MomentPipe} from './pipes/moment.pipe';
import {CommonModule} from "@angular/common";
import {GaugeComponent} from './components/gauge/gauge.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";
import {TableComponent} from './components/table/table.component';

import {DataTableModule, SharedModule as PrimengSharedModule} from 'primeng/primeng';

import {CanActivateRoute} from "./services/can-activate.service";
import {PortletComponent} from './components/portlet/portlet.component';
import { StatusIndicatorComponent } from './components/status-indicator/status-indicator.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { LabelComponent } from './components/label/label.component';
import { FiltersBarComponent } from './components/filters-bar/filters-bar.component';
import { LegendComponent } from './components/legend/legend.component';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule.forRoot(),
    TranslateModule,
    RouterModule,
    DataTableModule,
    PrimengSharedModule,
    FlexLayoutModule
  ],
  declarations: [SpinnerComponent, DirSelectionDirective, SlidingPanelComponent, MomentPipe, GaugeComponent, TabsComponent, TableComponent, PortletComponent, StatusIndicatorComponent, LabelComponent, FiltersBarComponent, LegendComponent],
  exports: [SpinnerComponent, DirSelectionDirective, SlidingPanelComponent, MomentPipe, GaugeComponent, TabsComponent, TableComponent, PortletComponent,StatusIndicatorComponent,LabelComponent,FiltersBarComponent,LegendComponent],
  providers: [CanActivateRoute]
})

export class SharedModule {
}
