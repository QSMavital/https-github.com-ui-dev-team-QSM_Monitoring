import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'ui-hsm-filter',
  templateUrl: './hsm-filter.component.html',
  styleUrls: ['./hsm-filter.component.scss']
})
export class HsmFilterComponent implements OnInit {
  public form: FormGroup;
  @Input() filters;
  @Output() onChange = new EventEmitter();
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }


  initForm(){
    this.form = this.fb.group({
      dateStatistics1: [new Date(this.filters.dateStatistics1 || null)],
      dateStatistics2: [new Date(this.filters.dateStatistics2 || null)]
    });
  }

  filter() {
    this.onChange.emit(this.form.getRawValue());
    this.form.markAsPristine();
  }


}
