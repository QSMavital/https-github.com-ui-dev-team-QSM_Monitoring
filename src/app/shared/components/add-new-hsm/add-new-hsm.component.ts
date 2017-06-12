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
  private form: FormGroup;

  @Input() get show() {
    return this.showValue;
  }

  @Output() showChange = new EventEmitter();

  set show(val) {
    this.showValue = val;
  }

  constructor(private formBuilder:FormBuilder,private ngRedux: NgRedux<IStore>) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      hsmSerialId:[null,Validators.required],
      ipAddress:[null,Validators.required],
      portNumber:[null,Validators.required]
    });
  }

  create(){
    this.ngRedux.dispatch({type:HsmActions.HSM_CREATE,payload:this.form.getRawValue()});
  }

}
