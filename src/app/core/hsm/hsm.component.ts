import { Component, OnInit } from '@angular/core';
import {Hsm} from "../../config/hsm";

@Component({
  selector: 'ui-hsm',
  templateUrl: './hsm.component.html',
  styleUrls: ['./hsm.component.scss']
})
export class HsmComponent implements OnInit {

  public tabs = [];

  constructor() {
    for(var prop in Hsm.Tabs){
      this.tabs.push(Hsm.Tabs[prop]);
    }
  }

  ngOnInit() {
  }

}
