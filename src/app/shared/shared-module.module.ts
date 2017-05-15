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

import {CanActivateRoute, AppActivator} from "./services/can-activate.service";
import {PortletComponent} from './components/portlet/portlet.component';
import { StatusIndicatorComponent } from './components/status-indicator/status-indicator.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { LabelComponent } from './components/label/label.component';
import { FiltersBarComponent } from './components/filters-bar/filters-bar.component';
import { AgStatusComponent } from './components/ag-status/ag-status.component';
import {AgGridModule} from "ag-grid-angular";
import { LegendComponent } from './components/legend/legend.component';
import { AgDateComponent } from './components/ag-date/ag-date.component';
import { AgAmountComponent } from './components/ag-amount/ag-amount.component';
import { InputComponent } from './components/form-components/input/input.component';
import { FormComponent } from './components/form-components/form/form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ControlsGroupComponent } from './components/form-components/controls-group/controls-group.component';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule.forRoot(),
    TranslateModule,
    RouterModule,
    DataTableModule,
    PrimengSharedModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  declarations: [SpinnerComponent, DirSelectionDirective, SlidingPanelComponent, MomentPipe, GaugeComponent, TabsComponent, TableComponent, PortletComponent, StatusIndicatorComponent, LabelComponent, FiltersBarComponent, AgStatusComponent, LegendComponent, AgDateComponent, AgAmountComponent, InputComponent, FormComponent, ControlsGroupComponent],
  exports: [SpinnerComponent, DirSelectionDirective, SlidingPanelComponent, MomentPipe, GaugeComponent, TabsComponent, TableComponent, PortletComponent,StatusIndicatorComponent,LabelComponent,FiltersBarComponent,AgStatusComponent, LegendComponent, AgDateComponent, AgAmountComponent, InputComponent, FormComponent],
  providers: [CanActivateRoute,AppActivator]
})

export class SharedModule {
}
