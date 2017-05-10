import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-ag-date',
  templateUrl: './ag-date.component.html',
  styleUrls: ['./ag-date.component.scss']
})
export class AgDateComponent{
  private params: any;

  agInit(params: any): void {
    console.log(params);
    this.params = params;
  }
}
