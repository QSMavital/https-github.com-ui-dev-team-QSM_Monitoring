import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {NgRedux} from "@angular-redux/store";
import {IStore} from "../../../../../store/index";
import {isNullOrUndefined} from "util";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'ui-atms-inventory-filter',
  templateUrl: './atms-inventory-filter.component.html',
  styleUrls: ['./atms-inventory-filter.component.scss']
})
export class AtmsInventoryFilterComponent implements OnInit,OnChanges {
  public form: FormGroup;
  @Input() filters;
  @Output() onChange = new EventEmitter();
  public filterObj;

  constructor(private fb: FormBuilder,
              private ngRedux: NgRedux<IStore>,
              private translateSrv: TranslateService) {
    this.initForm();
    this.filterObj = {statusFilter: [], groupFilters: [], areaFilters: []}
  }

  ngOnInit() {}

  ngOnChanges(newData) {
    this.filterObj = {statusFilter: [], groupFilters: [], areaFilters: []};
    if (!isNullOrUndefined(newData.filters.currentValue.status)) {
      newData.filters.currentValue['status'].forEach((statusFilter) => {
        this.filterObj.statusFilter.push({
          label: this.translateSrv.instant(`actionsStatus.${statusFilter}`),
          value: statusFilter
        })
      });
      newData.filters.currentValue['group'].forEach((groupFilters) => {
        this.filterObj.groupFilters.push({label: groupFilters.toString(), value: groupFilters})
      });
      newData.filters.currentValue['area'].forEach((areaFilters) => {
        this.filterObj.areaFilters.push({label: this.translateSrv.instant(`area.${areaFilters}`), value: areaFilters})
      });
    }
  }

  initForm() {
    this.form = this.fb.group({
      status: [null],
      group: [null],
      area: [null]
    });

  }

  filter() {
    this.onChange.emit(this.form.getRawValue());
    this.form.markAsPristine();
  }

}
