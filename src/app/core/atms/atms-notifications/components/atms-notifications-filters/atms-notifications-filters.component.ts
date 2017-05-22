import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'ui-atms-notifications-filters',
  templateUrl: './atms-notifications-filters.component.html',
  styleUrls: ['./atms-notifications-filters.component.scss']
})
export class AtmsNotificationsFiltersComponent implements OnInit {
  private form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }


  initForm(){
    this.form = this.fb.group({
      fromDate: [null],
      toDate: [null]
    });
  }

  filter() {
    console.log('filer data:', this.form.getRawValue());
    this.form.markAsPristine();
  }

}
