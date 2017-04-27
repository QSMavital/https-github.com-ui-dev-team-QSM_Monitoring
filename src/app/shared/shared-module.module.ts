import {NgModule} from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';
// import {HttpClientService} from "./services/http-client.service";
import { SidebarModule } from 'ng-sidebar';

import {DirSelectionDirective} from './directives/bidi/dir-selection.directive';
import { SlidingPanelComponent } from './components/sliding-panel/sliding-panel.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    SidebarModule.forRoot()
  ],
  declarations: [SpinnerComponent,DirSelectionDirective, SlidingPanelComponent],
  exports: [SpinnerComponent,DirSelectionDirective, SlidingPanelComponent],
  providers: []
})
export class SharedModuleModule {
}
