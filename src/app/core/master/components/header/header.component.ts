import { Component, OnInit } from '@angular/core';
import {select} from "@angular-redux/store";
import {Observable} from "rxjs";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private customerDefs:{"businessDay":number,"customer":string};
  @select('generalCustomer') generalCustomer$: Observable<any>;
  constructor() {
    this.generalCustomer$.subscribe((state)=>{
      if(!isNullOrUndefined(state)){
        this.customerDefs = state
      }
    });
  }

  ngOnInit() {
  }

}
