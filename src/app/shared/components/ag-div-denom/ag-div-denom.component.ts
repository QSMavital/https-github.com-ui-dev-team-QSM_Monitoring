import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-ag-div-denom',
  templateUrl: './ag-div-denom.component.html',
  styleUrls: ['./ag-div-denom.component.scss']
})
export class AgDivDenomComponent {

  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

}