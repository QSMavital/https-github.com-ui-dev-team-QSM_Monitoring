import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {Api} from "../../../config/api";

@Component({
  selector: 'ui-add-new-epp',
  templateUrl: './add-new-epp.component.html',
  styleUrls: ['./add-new-epp.component.scss']
})
export class AddNewEppComponent implements OnInit {
  @Input() get show() {
    return this.showValue;
  }
  @Output() showChange = new EventEmitter();

  public form:FormGroup;
  public options;

  set show(val) {
    this.showValue = val;
  }

  private showValue = false;
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

}
