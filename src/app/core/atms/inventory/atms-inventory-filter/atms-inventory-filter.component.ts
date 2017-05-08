import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'ui-atms-inventory-filter',
  templateUrl: './atms-inventory-filter.component.html',
  styleUrls: ['./atms-inventory-filter.component.scss']
})
export class AtmsInventoryFilterComponent implements OnInit {
  private form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit() {

  }

  initForm(){
    this.form = this.fb.group({
      atm:['',Validators.required],
      group:['',Validators.required],
      region:['',Validators.required]
    });

  }

}
