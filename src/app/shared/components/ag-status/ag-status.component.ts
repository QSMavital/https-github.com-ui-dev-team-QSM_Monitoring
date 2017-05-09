import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-ag-status',
  templateUrl: './ag-status.component.html',
  styleUrls: ['./ag-status.component.scss']
})
export class AgStatusComponent{
  private params: any;

  agInit(params: any): void {
    console.log(params);
    this.params = params;
  }
}
