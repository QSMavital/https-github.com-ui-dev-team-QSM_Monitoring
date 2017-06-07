import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ui-add-new-hsm',
  templateUrl: './add-new-hsm.component.html',
  styleUrls: ['./add-new-hsm.component.scss']
})
export class AddNewHsmComponent implements OnInit {
  @Input() get show() {
    return this.showValue;
  }
  @Output() showChange = new EventEmitter();

  set show(val) {
    this.showValue = val;
  }

  private showValue = false;
  constructor() { }


  ngOnInit() {
  }

}
