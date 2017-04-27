import {NgModule} from '@angular/core';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {DirSelectionDirective} from './directives/bidi/dir-selection.directive';

@NgModule({
  imports: [],
  declarations: [SpinnerComponent,DirSelectionDirective],
  exports: [SpinnerComponent,DirSelectionDirective],
  providers: []
})
export class SharedModule {
}
