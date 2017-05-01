import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ui-sliding-panel',
  templateUrl: './sliding-panel.component.html',
  styleUrls: ['./sliding-panel.component.scss']
})
export class SlidingPanelComponent{
  private openVal;
  @Input() direction = 'ltr';
  @Input() icon: string = '';
  @Output() openChange = new EventEmitter();

  @Input() get open(){
    return this.openVal;
  }

  set open(val) {
    this.openVal = val;
    this.openChange.emit(this.openVal);
  }

  constructor() {
  }

  toggle(){
    this.open=!this.open;
  }

}
