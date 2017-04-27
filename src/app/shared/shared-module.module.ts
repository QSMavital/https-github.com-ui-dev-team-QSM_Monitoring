import {NgModule} from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';
// import {HttpClientService} from "./services/http-client.service";
import { SidebarModule } from 'ng-sidebar';

import {DirSelectionDirective} from './directives/bidi/dir-selection.directive';
import { SlidingPanelComponent } from './components/sliding-panel/sliding-panel.component';
import { MomentPipe } from './pipes/moment.pipe';
import {CommonModule} from "@angular/common";
import { GaugeComponent } from './components/gauge/gauge.component';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule.forRoot()
  ],
  declarations: [SpinnerComponent,DirSelectionDirective, SlidingPanelComponent, MomentPipe, GaugeComponent],
  exports: [SpinnerComponent,DirSelectionDirective, SlidingPanelComponent, MomentPipe,GaugeComponent],
  providers: []
})

export class SharedModule {
}
