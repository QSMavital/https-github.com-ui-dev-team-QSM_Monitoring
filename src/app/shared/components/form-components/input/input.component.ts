import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {isNullOrUndefined} from "util";

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

export class InputComponent implements ControlValueAccessor {

  private ddOptions: any[] = [
    {
      label: 'something',
      value: {id: '1'}
    },
    {
      label: 'something_else',
      value: {id: '2'}
    }
  ];
  // private ddModel: any;

  private _ph;

  @Input() options:any[];
  @Input() type: string = 'text';
  @Input()
  get placeholder() {
    return isNullOrUndefined(this._ph) ? '' : this._ph;
  }
  set placeholder(val) {
    this._ph = val;
  }

  @Input()
  _val = 0;

  get inputValue() {
    return this._val;
  }

  set inputValue(val) {
    this._val = val;
    this.propagateChange(this._val);
  }


  propagateChange = (_: any) => {
  };

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {
  }

  writeValue(value: any) {
    if (value !== undefined) {
      this.inputValue = value;
    }
  }

  constructor() {
  }


  onValueChange(value) {
    this.inputValue = value;
  }

}
