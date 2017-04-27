import {Component, OnDestroy} from '@angular/core';
import {TranslateService, LangChangeEvent} from "@ngx-translate/core";
import {i18n} from "./config/i18n";
import {InterceptorService} from "ng2-interceptors";
import {ServerURLInterceptor} from "./app.interceptors";
import {select} from "@angular-redux/store";
import {Observable} from "rxjs";
import {isNullOrUndefined} from "util";
import {Router} from "@angular/router";

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

  constructor(private srvURLInterceptor: ServerURLInterceptor,
              private translate: TranslateService,
              private http: InterceptorService,
              private router:Router) {
   this.initI18n();
    console.log(router);
    this.errorHandler = {
      show:false,
      error:{}
    };

    this.initErrorHandler();

    this.router.events.subscribe((e)=>{
      console.log(e);
    });


    // this.http.get("/api/user").subscribe((e)=>{
    //   console.log(e);
    // });
  }

  initI18n(){
    this.translate.addLangs(["en", "he"]);
    this.translate.use('en');
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.direction = i18n[event.lang];
    });
  }

  initErrorHandler(){
    this.unsubsribers.errorHandler = this.errorHandler$.subscribe((state)=>{
      if(!isNullOrUndefined(state)){
        console.log(state);
        console.log(state);
        this.errorHandler.show=true;
        this.errorHandler.error=state;

      }
    });
  }
  ngOnDestroy(){
    this.unsubsribers.errorHandler.unsubscribe();
  }
  title = 'app works!';

}
