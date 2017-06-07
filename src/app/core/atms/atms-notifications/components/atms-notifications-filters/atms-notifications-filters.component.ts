import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'ui-atms-notifications-filters',
  templateUrl: './atms-notifications-filters.component.html',
  styleUrls: ['./atms-notifications-filters.component.scss']
})
export class AtmsNotificationsFiltersComponent implements OnInit {
  public form: FormGroup;
  @Input() filters;
  @Output() onChange = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }


  initForm(){
    this.form = this.fb.group({
      fromDate: [new Date(this.filters.fromDate || null)],
      toDate: [new Date(this.filters.toDate || null)]
    });
  }

  filter() {
    this.onChange.emit(this.form.getRawValue());
    this.form.markAsPristine();
  }

}
