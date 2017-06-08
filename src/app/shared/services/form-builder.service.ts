import { Injectable } from '@angular/core';
import {CustomControlGroup} from "../../config/interfaces/form.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {isNullOrUndefined} from "util";
import {CustomValidators} from "ng2-validation";

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
        } else{
          let validators =[];
          if(!isNullOrUndefined(i.validator)){
            i.validator.forEach(item => {
              switch(item.type){

                case "length":
                  validators.push(Validators.minLength(item.min));
                  validators.push(Validators.maxLength(item.max));
                  break;
                case "required":
                  validators.push(Validators.required);
                  break;
                case "ip":
                  validators.push(Validators.pattern("^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"));
                  break;
                case "number":
                  validators.push(CustomValidators.number);
                  break;

              }
            });
          }

          debugger;
          temp[i.name] = new FormControl(i.value,validators);

        }
      });
      form[group.name] = new FormGroup(temp);
    });
    let formGroup = new FormGroup(form);
    return formGroup;
  }

  atmFormToPayload(rawData){
    let formData = Object.assign(rawData);
    let cassettesSettings = [];
    let terminalNearestSettings = [];
    let index = 1;

    for(var prop in formData.cassettesSettings){
      cassettesSettings.push({
        "cassetteType" : index++,
        "currencyCode" : formData.cassettesSettings[prop].currency,
        "denomination" : formData.cassettesSettings[prop].denomination
      })
    }
    formData.cassettesSettings = cassettesSettings;


    for(var prop in formData.terminalNearestSettings){
      terminalNearestSettings.push(formData.terminalNearestSettings[prop]);
    }
    formData.terminalNearestSettings=terminalNearestSettings;

    return Object.assign(formData);
  }

}
