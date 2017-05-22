import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CustomControlGroup} from "../../../../config/interfaces/form.interface";
import { MasonryOptions } from 'angular2-masonry';

@Component({
  selector: 'ui-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent{

  public masonryOptions: MasonryOptions = {
    transitionDuration: '0',
    fitWidth: true,
    originLeft: true
  };
  @Input() form:FormGroup;
  @Input() controlGroups:CustomControlGroup[];


  constructor() {
  }


}
