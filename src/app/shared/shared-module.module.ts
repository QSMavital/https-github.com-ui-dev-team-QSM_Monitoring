import {NgModule} from '@angular/core';
import {SpinnerComponent} from './components/spinner/spinner.component';
// import {HttpClientService} from "./services/http-client.service";
import {SidebarModule} from 'ng-sidebar';

import {DirSelectionDirective} from './directives/bidi/dir-selection.directive';
import {SlidingPanelComponent} from './components/sliding-panel/sliding-panel.component';
import {CommonModule} from "@angular/common";
import {GaugeComponent} from './components/gauge/gauge.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";
import {TableComponent} from './components/table/table.component';

import {CheckboxModule, DataTableModule, DropdownModule, SharedModule as PrimengSharedModule} from 'primeng/primeng';

import {CanActivateRoute, AppActivator} from "./services/can-activate.service";
import {PortletComponent} from './components/portlet/portlet.component';
import {StatusIndicatorComponent} from './components/status-indicator/status-indicator.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {LabelComponent} from './components/label/label.component';
import {FiltersBarComponent} from './components/filters-bar/filters-bar.component';
import {AgStatusComponent} from './components/ag-status/ag-status.component';
import {LegendComponent} from './components/legend/legend.component';
import {AgDateComponent} from './components/ag-date/ag-date.component';
import {AgAmountComponent} from './components/ag-amount/ag-amount.component';
import {InputComponent} from './components/form-components/input/input.component';
import {FormComponent} from './components/form-components/form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ControlsGroupComponent} from './components/form-components/controls-group/controls-group.component';
import {AccesoriesCardComponent} from './components/accesories-card/accesories-card.component';
import {SmallProgressComponent} from './components/small-progress/small-progress.component';
import { AgProgressComponent } from './components/ag-progress/ag-progress.component';
import {FormBuilderService} from "./services/form-builder.service";
import { AgDateShortComponent } from './components/ag-date-short/ag-date-short.component';
import { AgTimeComponent } from './components/ag-time/ag-time.component';
import {GridDefsService} from "./services/grid-defs.service";
import { MasonryModule } from 'angular2-masonry';
import { AddNewComponent } from './components/add-new/add-new.component';
import {DialogModule} from "primeng/components/dialog/dialog";
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import {KeysPipe} from './pipes/keys.pipe';
import { KeyLabelComponent } from './components/key-label/key-label.component';
import { AgTranslateMapComponent } from './components/ag-translate-map/ag-translate-map.component';
import { TransactionComponent } from './components/transaction/transaction.component'

@NgModule({
  imports: [
    MasonryModule,
    CommonModule,
    SidebarModule.forRoot(),
    TranslateModule,
    RouterModule,
    DataTableModule,
    PrimengSharedModule,
    CheckboxModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    DialogModule,
    DropdownModule
  ],
  declarations: [
    SpinnerComponent,
    DirSelectionDirective,
    SlidingPanelComponent,
    GaugeComponent,
    TabsComponent,
    TableComponent,
    PortletComponent,
    StatusIndicatorComponent,
    LabelComponent,
    FiltersBarComponent,
    AgStatusComponent,
    LegendComponent,
    AgDateComponent,
    AgAmountComponent,
    InputComponent,
    FormComponent,
    ControlsGroupComponent,
    AccesoriesCardComponent,
    SmallProgressComponent,
    AgProgressComponent,
    AgDateShortComponent,
    AgTimeComponent,
    AddNewComponent,
    ListComponent,
    ListItemComponent,
    KeysPipe,
    KeyLabelComponent,
    AgTranslateMapComponent,
    TransactionComponent
  ],
  exports: [
    SpinnerComponent,
    DirSelectionDirective,
    SlidingPanelComponent,
    GaugeComponent,
    TabsComponent,
    TableComponent,
    PortletComponent,
    StatusIndicatorComponent,
    LabelComponent,
    FiltersBarComponent,
    AgStatusComponent,
    LegendComponent,
    AgDateComponent,
    AgAmountComponent,
    InputComponent,
    FormComponent,
    ControlsGroupComponent,
    AccesoriesCardComponent,
    SmallProgressComponent,
    AgProgressComponent,
    AgDateShortComponent,
    AgTimeComponent,
    AgTranslateMapComponent,
    AddNewComponent,
    ListComponent,
    ListItemComponent,
    KeysPipe,
    KeyLabelComponent,
    TransactionComponent
  ],
  providers: [CanActivateRoute, AppActivator,FormBuilderService,GridDefsService]
})

export class SharedModule {
}
