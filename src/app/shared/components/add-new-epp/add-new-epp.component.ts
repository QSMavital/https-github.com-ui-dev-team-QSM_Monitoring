import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SelectItem} from "primeng/primeng";

@Component({
  selector: 'ui-add-new-epp',
  templateUrl: './add-new-epp.component.html',
  styleUrls: ['./add-new-epp.component.scss']
})
export class AddNewEppComponent implements OnInit {
  private showValue = false;
  private form: FormGroup;
  public options: any = [];
  selectedOption: string;

  @Input() get show() {
    return this.showValue;
  }
  set show(val) {
    this.showValue = val;
  }

  optionType: SelectItem[];
  selectedType: string = '';
  constructor(private formBuilder:FormBuilder) {
    this.optionType = [];
    this.optionType.push({label: 'Select Type', value: 'Type1'});
    this.optionType.push({label: 'Select Type', value: 'Type2'});
    this.optionType.push({label: 'Select Type', value: 'Type3'});

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      eppNumber:[null,Validators.required],
      group:[null,Validators.required]
    });
  }

  create(){
   /* alert(JSON.stringify(this.form.getRawValue()));*/
  }
}
