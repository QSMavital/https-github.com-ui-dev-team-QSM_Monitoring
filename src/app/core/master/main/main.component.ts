import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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

  public direction;
  public panelStatus = false;
  private userSettings;
  @select('userSettings') userSettings$: Observable<any>;

  constructor(private route: ActivatedRoute,
              public router: Router,
              private ngRedux: NgRedux<IStore>,
              public translate: TranslateService) {

    this.userSettings$.subscribe((state)=>{
      if(!isNullOrUndefined(state)){
        this.direction = i18n[state.language.toUpperCase()];
        this.userSettings = state;
      }

    });

  }

  ngOnInit() {

  }


  title = 'app works!';
}
