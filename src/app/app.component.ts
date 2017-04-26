import {Component} from '@angular/core';
import {TranslateService, LangChangeEvent} from "@ngx-translate/core";
import {i18n} from "./config/i18n";
import {InterceptorService} from "ng2-interceptors";
import {ServerURLInterceptor} from "./app.interceptors";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private direction: string;

  constructor(private srvURLInterceptor: ServerURLInterceptor, private translate: TranslateService, private http: InterceptorService) {
    translate.addLangs(["en", "he"]);
    translate.use('he');
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.direction = i18n[event.lang];
    });

    // this.http.get("/api/user").subscribe(
    //   (res) => console.log(res),
    //   (err) => console.error(err),
    //   () => console.log("Yay"));


  }

  title = 'app works!';

  go() {
    this.http.get("api/user").subscribe(
      (res) => console.log(res),
      (err) => console.error(err),
      () => console.log("Yay"));
  }
}
