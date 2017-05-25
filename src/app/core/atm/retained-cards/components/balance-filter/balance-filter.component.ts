import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'ui-balance-filter',
  templateUrl: './balance-filter.component.html',
  styleUrls: ['./balance-filter.component.scss']
})
export class BalanceFilterComponent implements OnInit {

  public form:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      balance:[null]
    })
  }
  filter(){
    console.log(this.form.getRawValue());
  }

}
