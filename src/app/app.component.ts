import {Component, OnDestroy} from '@angular/core';
import {TranslateService, LangChangeEvent} from "@ngx-translate/core";
import {i18n} from "./config/i18n";
import {InterceptorService} from "ng2-interceptors";
import {ServerURLInterceptor} from "./app.interceptors";
import {select} from "@angular-redux/store";
import {Observable} from "rxjs";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnDestroy{
  private direction: string;
  private errorHandler: any = {};
  private unsubsribers: any = {};

  //subscribers
  @select('errorHandler') errorHandler$: Observable<any>;

  constructor(private srvURLInterceptor: ServerURLInterceptor, private translate: TranslateService, private http: InterceptorService) {
    translate.addLangs(["en", "he"]);
    translate.use('en');
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.direction = i18n[event.lang];
    });

    this.errorHandler = {
      show:false,
      error:{}
    };

    this.unsubsribers.errorHandler = this.errorHandler$.subscribe((state)=>{
      if(!isNullOrUndefined(state)){
        console.log(state);
        console.log(state);
        this.errorHandler.show=true;
        this.errorHandler.error=state;

      }
    });

    // this.http.get("/api/user").subscribe((e)=>{
    //   console.log(e);
    // });
  }

  ngOnDestroy(){
    this.unsubsribers.errorHandler.unsubscribe();
  }
  title = 'app works!';

}
