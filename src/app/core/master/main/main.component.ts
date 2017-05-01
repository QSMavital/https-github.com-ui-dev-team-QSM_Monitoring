import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {i18n} from "../../../config/i18n";
import {TranslateService, LangChangeEvent} from "@ngx-translate/core";
import {IStore} from "../../../../store/index";
import {NgRedux, select} from "@angular-redux/store";
import {Observable} from "rxjs";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private direction;
  private userSettings;
  @select('userSettings') userSettings$: Observable<any>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ngRedux: NgRedux<IStore>,
              private translate: TranslateService) {

    this.userSettings$.subscribe((state)=>{
      if(!isNullOrUndefined(state)){
        this.translate.use(state.language.toLowerCase());
        this.direction = i18n[state.language];
        this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
          this.direction = i18n[event.lang.toUpperCase()];
        });
        this.userSettings = state;
      }

    });

  }

  ngOnInit() {

  }


  title = 'app works!';
}
