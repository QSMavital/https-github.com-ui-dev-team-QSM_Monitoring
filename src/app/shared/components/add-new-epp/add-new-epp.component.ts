import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SelectItem} from "primeng/primeng";
import {GeneralConstants} from "../../../config/general_consts";
import {NgRedux} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {EppActions} from "../../../../store/actions/epp-actions";
import {CustomValidators} from "ng2-validation";

@Component({
  selector: 'ui-add-new-epp',
  templateUrl: './add-new-epp.component.html',
  styleUrls: ['./add-new-epp.component.scss']
})
export class AddNewEppComponent implements OnInit {
  private showValue = false;
  public form: FormGroup;
  public optionType: SelectItem[] = [];

  @Input() get show() {
    return this.showValue;
  }

  set show(val) {
    this.showValue = val;
  }


  constructor(private formBuilder: FormBuilder, private ngRedux: NgRedux<IStore>) {
    for (let prop in GeneralConstants.EppVendors) {
      this.optionType.push(GeneralConstants.EppVendors[prop])
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      eppUid: [{
        value: null,
        disabled: true
      }, []],
      eppType: [null, Validators.required]
    });
  }

  create() {
    this.ngRedux.dispatch({type: EppActions.EPP_CREATE, payload: this.form.getRawValue()});
  }

  onChange(e) {
    if (e.value != null) {
      this.form.controls['eppUid'].setValidators([
        Validators.required,
        CustomValidators.number,
        Validators.minLength(GeneralConstants.EppVendors[e.value].validations.minLength),
        Validators.maxLength(GeneralConstants.EppVendors[e.value].validations.maxLength)
      ]);
      this.form.controls['eppUid'].updateValueAndValidity;
      this.form.controls['eppUid'].enable();
    } else {
      this.form.controls['eppUid'].disable();

    }
  }
}
