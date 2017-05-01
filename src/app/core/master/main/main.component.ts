import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {i18n} from "../../../config/i18n";
import {TranslateService, LangChangeEvent} from "@ngx-translate/core";

@Component({
  selector: 'ui-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private direction: string = "ltr";
  private appSettings;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private translate: TranslateService) {

    console.log(this.route.snapshot.data['settings']);
    this.translate.use(this.route.snapshot.data['settings'].language.toLowerCase());
    this.direction = i18n[this.route.snapshot.data['settings'].language];
    console.log(this.direction);
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.direction = i18n[event.lang.toUpperCase()];
    });
    this.appSettings = this.route.snapshot.data['settings'];
    // this.http.get("/api/user").subscribe((e)=>{
    //   console.log(e);
    // });
  }

  ngOnInit() {

  }


  title = 'app works!';
}
