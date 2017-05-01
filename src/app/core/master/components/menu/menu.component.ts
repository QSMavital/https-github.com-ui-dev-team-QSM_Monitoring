import { Component, OnInit } from '@angular/core';
import {MainMenu} from "../../../../config/menu";
import {NgRedux} from "@angular-redux/store";
import {IStore} from "../../../../../store/index";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  private activeMenuItems = [];

  constructor(private ngRedux: NgRedux<IStore>) {
    let userSettings = ngRedux.getState().userSettings;
    userSettings.menu.forEach((menuItem)=>{
      if(!isNullOrUndefined(MainMenu[menuItem])){
        this.activeMenuItems.push(MainMenu[menuItem]);
      }
    });
  }

  ngOnInit() {
  }

}
