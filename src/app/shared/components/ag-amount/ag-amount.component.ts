import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-ag-amount',
  templateUrl: './ag-amount.component.html',
  styleUrls: ['./ag-amount.component.scss']
})
export class AgAmountComponent {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }
}
