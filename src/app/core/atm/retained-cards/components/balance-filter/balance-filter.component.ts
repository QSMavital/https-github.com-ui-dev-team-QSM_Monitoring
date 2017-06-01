import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {Api} from "../../../../../config/api";

@Component({
  selector: 'ui-balance-filter',
  templateUrl: './balance-filter.component.html',
  styleUrls: ['./balance-filter.component.scss']
})
export class BalanceFilterComponent implements OnInit {
  @Input() filterModel;
  @Output() onChange = new EventEmitter();
  public form:FormGroup;
  public options;
  constructor(private formBuilder:FormBuilder,
              private translateSrv: TranslateService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      settlement: [Api.getAtmRetainedCards.payload.fromSettelments]
    });

    this.options = [
      {label:this.translateSrv.instant(`enums.AT_ATM`),value:"AT_ATM"},
      {label:this.translateSrv.instant(`enums.LAST_SETTELMENT`),value:"LAST_SETTELMENT"},
      {label:this.translateSrv.instant(`enums.PREVIOUS_SETTELMENT`),value:"PREVIOUS_SETTELMENT"}
    ];

  }

  filter(){
    this.onChange.emit(this.form.getRawValue())
  }

}
