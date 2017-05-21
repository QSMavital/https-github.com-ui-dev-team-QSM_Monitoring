import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {NgRedux} from "@angular-redux/store";
import {IStore} from "../../../../../store/index";
import {isNullOrUndefined} from "util";
import {forEach} from "@angular/router/src/utils/collection";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'ui-atms-inventory-filter',
  templateUrl: './atms-inventory-filter.component.html',
  styleUrls: ['./atms-inventory-filter.component.scss']
})
export class AtmsInventoryFilterComponent implements OnInit,OnChanges {
  private form: FormGroup;
  @Input() filters;
  private filterObj;

  constructor(private fb: FormBuilder,
              private ngRedux: NgRedux<IStore>,
              private translateSrv: TranslateService) {
    this.initForm();
    this.filterObj = {statusFilter: [], groupFilters: [], areaFilters: []}
​
  }

  ngOnInit() {}

  ngOnChanges(newData) {
    this.filterObj = {statusFilter: [], groupFilters: [], areaFilters: []};
    if (!isNullOrUndefined(newData.filters.currentValue.statusFilter)) {
      newData.filters.currentValue['statusFilter'].forEach((statusFilter)=>{
        this.filterObj.statusFilter.push({label:this.translateSrv.instant(`actionsStatus.${statusFilter}`),value:statusFilter})
        });
      newData.filters.currentValue['groupFilters'].forEach((groupFilters)=>{
        this.filterObj.groupFilters.push({label:groupFilters,value:groupFilters})
      });
      newData.filters.currentValue['areaFilters'].forEach((areaFilters)=>{
        this.filterObj.areaFilters.push({label:this.translateSrv.instant(`area.${areaFilters}`),value:areaFilters})
      });
    }
  }

  initForm() {
    this.form = this.fb.group({
      atm: ['', Validators.required],
      group: ['', Validators.required],
      region: ['', Validators.required]
    });

  }

}
