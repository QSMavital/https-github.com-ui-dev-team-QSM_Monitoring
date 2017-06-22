import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {Reports} from "../../../../config/reports";
import {CustomValidators} from "ng2-validation";
import {NgRedux} from "@angular-redux/store";
import {IStore} from "../../../../../store/index";

@Component({
  selector: 'ui-reports-filter',
  templateUrl: './reports-filter.component.html',
  styleUrls: ['./reports-filter.component.scss']
})
export class ReportsFilterComponent implements OnInit {
  public form: FormGroup;
  public filters;
  public options = [];
  @Output() onChange = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
              private translateSrv: TranslateService,
              private ngRedux: NgRedux<IStore>) {
    let optionsCustomizationDef = this.ngRedux.getState().userSettings.reports.reportsTypes;

    optionsCustomizationDef.forEach((option) => {
      if(option['field'] == Reports.Options[option['field']].id){
        this.options.push({
          label: this.translateSrv.instant(Reports.Options[option['field']].label),
          value: Reports.Options[option['field']].type
        })
      }

    });

  }

  ngOnInit() {
    this.initForm();
  }

  filter(value) {
    this.onChange.emit(value);
    this.form.markAsPristine();
  }

  initForm() {
    this.form = this.formBuilder.group({
      fromDate: [new Date(new Date().setHours(0,0,0,0)),Validators.required],
      toDate: [new Date(),Validators.required],
      type: [this.options[0].type]
    });

    this.onChangeType({value:this.options[0].type});
  }

  onChangeType($event){
    switch($event.value){
      case 'CARD_ACTIVITY':
        this.form.removeControl('atmNo');
        this.form.addControl('cardNo', new FormControl(null, [Validators.minLength(4),Validators.maxLength(4),Validators.required,CustomValidators.number]));
        break;
      case 'ACCOUNT_ACTIVITY':
        this.form.removeControl('atmNo');
        this.form.removeControl('cardNo');
        this.form.addControl('branch', new FormControl(null, [Validators.minLength(3),Validators.maxLength(3),Validators.required,CustomValidators.number]));
        this.form.addControl('accountNo', new FormControl(null, [Validators.minLength(1),Validators.maxLength(9),Validators.required,CustomValidators.number]));
        break;

      default:
        this.form.addControl('atmNo', new FormControl(null, [CustomValidators.number]));
        this.form.removeControl('accountNo');
        this.form.removeControl('cardNo');
        break;
    }
  }


}
