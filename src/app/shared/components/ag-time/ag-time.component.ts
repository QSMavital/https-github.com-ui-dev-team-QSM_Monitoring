import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-ag-time',
  templateUrl: './ag-time.component.html',
  styleUrls: ['./ag-time.component.scss']
})
export class AgTimeComponent{
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

}
