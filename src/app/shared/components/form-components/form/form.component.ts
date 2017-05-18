import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomControlGroup} from "../../../../config/interfaces/form.interface";

@Component({
  selector: 'ui-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() controlGroups: CustomControlGroup[];
  @Output() submitForm: EventEmitter<any> = new EventEmitter();
  private form: FormGroup;


  constructor() {
  }

  initForm() {
    let form: any = {};
    this.controlGroups.forEach(group => {
      let temp: any = {};
      group.controls.forEach(i => {
        if (i.type === 'inputGroup') {
          let children: any = {};
          i.inputs.forEach(input => {
            children[input.name] = new FormControl(input.value);
          });
          temp[i.name] = new FormGroup(children);
        } else
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
    if (this.form.valid) {
      this.submitForm.emit(this.form.value);
    }
  }

}
