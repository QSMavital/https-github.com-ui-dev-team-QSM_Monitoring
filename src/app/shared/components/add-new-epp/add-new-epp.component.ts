import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  set show(val) {
    this.showValue = val;
  }

  private showValue = false;
  constructor() { }

  ngOnInit() {
  }

}
