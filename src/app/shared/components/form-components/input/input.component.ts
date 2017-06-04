import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {isNullOrUndefined} from "util";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})

export class InputComponent implements ControlValueAccessor,OnInit {
  private _ph;
  private localOptions = [];

  @Input() options:any[];
  @Input() _val = 0;
  @Input() type: string = 'text';
  @Input() controlName;
  @Input() group;
  @Input()
  get placeholder() {
    return isNullOrUndefined(this._ph) ? '' : this._ph;
  }
  set placeholder(val) {
    this._ph = val;
  }


  get inputValue() {
    return this._val;
  }

  set inputValue(val) {
    this._val = val;
    this.propagateChange(this._val);
  }
  constructor(private translateSrv: TranslateService) {
  }

  ngOnInit(){
    if(!isNullOrUndefined(this.options)){
      for(var prop in this.options){
        this.localOptions.push({label:this.translateSrv.instant(this.options[prop].label),value:prop})
      }
    }
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  writeValue(value: any) {
    if (value !== undefined) {
      this.inputValue = value;
    }
  }



  onValueChange(value) {
    this.inputValue = value;
  }

}
