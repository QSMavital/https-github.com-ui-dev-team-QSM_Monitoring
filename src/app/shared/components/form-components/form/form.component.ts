import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CustomControlGroup} from "../../../../config/interfaces/form.interface";

@Component({
  selector: 'ui-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{

  @Input() form:FormGroup;
  @Input() controlGroups:CustomControlGroup[];


  constructor() {
  }


}
