import { Injectable } from '@angular/core';
import {CustomControlGroup} from "../../config/interfaces/form.interface";
import {FormControl, FormGroup} from "@angular/forms";

@Injectable()
export class FormBuilderService {

  constructor() { }

  createForm(groups:CustomControlGroup[]){
    let form: any = {};
    groups.forEach(group => {
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
    return new FormGroup(form);
  }

}
