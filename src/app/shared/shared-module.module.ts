import {NgModule} from '@angular/core';
import {HttpClientService} from "./services/http-client.service";
import {DirSelectionDirective} from './directives/bidi/dir-selection.directive';

@NgModule({
  imports: [],
  declarations: [
    DirSelectionDirective
  ],
  exports: [
    DirSelectionDirective
  ],
  providers: [
    HttpClientService
  ]
})
export class SharedModuleModule {
}
