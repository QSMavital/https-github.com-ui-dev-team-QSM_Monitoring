import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ui-key-label',
  templateUrl: 'key-label.component.html',
  styleUrls: ['key-label.component.scss']
})
export class KeyLabelComponent{
  @Input() key;
  @Input() value;
  constructor() { }

}
