import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {SelectItem} from "primeng/primeng";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'ui-reports-filter',
  templateUrl: './reports-filter.component.html',
  styleUrls: ['./reports-filter.component.scss']
})
export class ReportsFilterComponent implements OnInit {
  public form: FormGroup;
  public date: any;
  public filters;
  public selectedItem: SelectItem[];
  @Output() onChange = new EventEmitter();

  constructor(private formBuilder:FormBuilder, private translateSrv: TranslateService) {
    this.filters = {
      fromDate: new Date(),
      toDate: new Date(),
      dropDown: [
        {label:this.translateSrv.instant(`reports.filters.listName`),value:"01"},
        {label:this.translateSrv.instant(`reports.filters.longListName`),value:"02"},
        {label:this.translateSrv.instant(`reports.filters.veryLongListName`),value:"03"},
        {label:this.translateSrv.instant(`reports.filters.listName`),value:"04"},
        {label:this.translateSrv.instant(`reports.filters.longListName`),value:"05"},
        {label:this.translateSrv.instant(`reports.filters.veryLongListName`),value:"06"},
      ]};
  }

  ngOnInit() {
    this.initForm();
  }


  filter(){
    this.onChange.emit(this.form.getRawValue())
  }

  initForm(){
    this.form = this.formBuilder.group({
      fromDate: [new Date(this.filters.fromDate || null)],
      toDate: [new Date(this.filters.toDate || null)],
      dropDown:[""],
      deviceNo: [""],
      accountNo: [""]
    });
  }

}
