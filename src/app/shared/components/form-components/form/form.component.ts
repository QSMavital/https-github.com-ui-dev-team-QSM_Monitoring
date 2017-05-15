import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'ui-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() controlGroups:any[];
  @Output() submitForm:EventEmitter<any> = new EventEmitter();
  private form:FormGroup;

  constructor() { }

  initForm() {
    var form:any = {};
    this.controlGroups.forEach(group=>{
      var temp:any = {};
      group.controls.forEach(i=>{
        temp[i.name] = new FormControl(i.value)
      });
      form[group.name] = new FormGroup(temp);
    });
    this.form = new FormGroup(form);
  }

  ngOnInit() {
    this.initForm();
  }

  sub() {
    if(this.form.valid) {
      this.submitForm.emit(this.form.value);
    }
  }

}
