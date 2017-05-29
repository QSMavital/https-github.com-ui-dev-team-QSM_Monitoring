import {Component, Input} from '@angular/core';

@Component({
  selector: 'ui-atm-transaction',
  templateUrl: './atm-transaction.component.html',
  styleUrls: ['./atm-transaction.component.scss']
})
export class AtmTransactionComponent {
  @Input() get show() {return this.showValue;}

  private showValue = false;

  set show(val) {
    this.showValue = val;
  }

  constructor() {
  }

}
