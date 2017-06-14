import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
  public optionType: SelectItem[] =[];

  @Input() get show() {
    return this.showValue;
  }

  set show(val) {
    this.showValue = val;
  }


  constructor(private formBuilder: FormBuilder,private ngRedux: NgRedux<IStore>) {
    for(let prop in GeneralConstants.Vendors){
      this.optionType.push(GeneralConstants.Vendors[prop])
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      eppUid: [null, [Validators.required,CustomValidators.number,Validators.minLength(5),Validators.maxLength(5)]],
      eppType: [null, Validators.required]
    });
  }

  create() {
    this.ngRedux.dispatch({type:EppActions.EPP_CREATE,payload:this.form.getRawValue()});
  }
}
