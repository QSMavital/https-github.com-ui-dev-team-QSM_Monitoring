import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-ag-number',
  templateUrl: './ag-number.component.html',
  styleUrls: ['./ag-number.component.scss']
})
export class AgNumberComponent {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }



}
