import {NgModule} from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {HttpClientService} from "./services/http-client.service";
import {DirSelectionDirective} from './directives/bidi/dir-selection.directive';

@NgModule({
  imports: [],
  declarations: [SpinnerComponent,DirSelectionDirective],
  exports: [SpinnerComponent,DirSelectionDirective],
  providers: []
})
export class SharedModuleModule {
}
