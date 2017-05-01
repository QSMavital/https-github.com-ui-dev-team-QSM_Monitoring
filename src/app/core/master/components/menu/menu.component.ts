import {Component, OnInit} from '@angular/core';
import {MainMenu} from "../../../../config/menu";
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../../store/index";
import {isNullOrUndefined} from "util";
import {Observable} from "rxjs";

@Component({
  selector: 'ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @select('userSettings') userSettings$: Observable<any>;

  private activeMenuItems = [];

  constructor(private ngRedux: NgRedux<IStore>) {

    this.userSettings$.subscribe((state) => {
      if (!isNullOrUndefined(state)) {
        state.menu.forEach((menuItem) => {
          if (!isNullOrUndefined(MainMenu[menuItem])) {
            this.activeMenuItems.push(MainMenu[menuItem]);
          }
        });
      }
    });

  }

  ngOnInit() {
  }

}
