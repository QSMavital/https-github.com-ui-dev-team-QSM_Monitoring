import { Component } from '@angular/core';
import {TranslateService, LangChangeEvent} from "@ngx-translate/core";
import {i18n} from "./config/i18n";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private direction:string;
  constructor(private translate: TranslateService){
    translate.addLangs(["en", "he"]);
    translate.use('en');
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.direction = i18n[event.lang];
    });
  }
  title = 'app works!';
}
