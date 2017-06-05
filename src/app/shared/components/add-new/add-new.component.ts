import {
  Component, OnInit, Input, Output, EventEmitter, OnChanges, ChangeDetectorRef,
  AfterViewChecked
} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FormBuilderService} from "../../services/form-builder.service";
import {Atm} from "../../../config/atm";
import {CustomControlGroup} from "../../../config/interfaces/form.interface";
import {NgRedux} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {AtmActions} from "../../../../store/actions/atm-actions";

@Component({
  selector: 'ui-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewComponent implements OnChanges,AfterViewChecked {
  @Input() get show() {
    return this.showValue;
  }

  @Output() showChange = new EventEmitter();
  private showValue = false;
  private atmSettings;
  public form: FormGroup = new FormGroup({});
  private controlGroups: CustomControlGroup[] = [];

  set show(val) {
    this.showValue = val;
    this.showChange.emit(this.showValue);
  }

  constructor(private cdRef: ChangeDetectorRef,
              private frmBuilderSrv: FormBuilderService, private ngRedux: NgRedux<IStore>) {
  }

  ngOnChanges(val) {
    if (val.show.currentValue) {
      this.controlGroups=[];
      this.initForm();
    }
  }

  ngAfterViewChecked(){
    this.cdRef.detectChanges();
  }

  initForm() {
    this.atmSettings = this.ngRedux.getState().userSettings.atmCustomization['atmSettings'];

    this.atmSettings.forEach((config) => {
      if (config.visible) {
        this.controlGroups.push(Atm.Settings[config.field]);
      }
    });
    this.form = this.frmBuilderSrv.createForm(this.controlGroups);
  }

  create(){
    this.ngRedux.dispatch({
      type: AtmActions.ATM_ADD_SETTINGS,
      payload: this.frmBuilderSrv.atmFormToPayload(this.form.getRawValue())
    });
  }



}


