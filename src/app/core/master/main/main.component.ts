import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {i18n} from "../../../config/i18n";
import {TranslateService, LangChangeEvent} from "@ngx-translate/core";
import {IStore} from "../../../../store/index";
import {NgRedux} from "@angular-redux/store";
import {UserSettingsActions} from "../../../../store/actions/userSettings-actions";
import {CanActivateRoute} from "../../../shared/services/can-activate.service";

@Component({
  selector: 'ui-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private direction: string = "ltr";
  private userSettings;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ngRedux: NgRedux<IStore>,
              private translate: TranslateService) {

    this.translate.use(this.route.snapshot.data['settings'].language.toLowerCase());
    this.direction = i18n[this.route.snapshot.data['settings'].language];
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.direction = i18n[event.lang.toUpperCase()];
    });
    this.userSettings = this.route.snapshot.data['settings'];
    this.ngRedux.dispatch({type:UserSettingsActions.SET_USER_SETTINGS,payload:this.userSettings});
    // console.log(this.fff);
  }

  ngOnInit() {

  }


  title = 'app works!';
}
