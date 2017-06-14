import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {NgRedux} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {HsmActions} from "../../../../store/actions/hsms-actions";

@Component({
  selector: 'ui-add-new-hsm',
  templateUrl: './add-new-hsm.component.html',
  styleUrls: ['./add-new-hsm.component.scss']
})
export class AddNewHsmComponent implements OnInit {
  private showValue = false;
  public form: FormGroup;

  @Input() get show() {
    return this.showValue;
  }

  @Output() showChange = new EventEmitter();

  set show(val) {
    this.showValue = val;
  }

  constructor(private formBuilder: FormBuilder, private ngRedux: NgRedux<IStore>) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      hsmSerialId: [null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(16),
        Validators.pattern('[0-9/\s-]*')]],
      ipAddress: [null, [Validators.required, Validators.pattern("^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$")]],
      portNumber: [null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4)
      ]]
    });
  }

  create() {
    this.ngRedux.dispatch({type: HsmActions.HSM_CREATE, payload: this.form.getRawValue()});
  }

}
