import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-ag-date-short',
  templateUrl: './ag-date-short.component.html',
  styleUrls: ['./ag-date-short.component.scss']
})
export class AgDateShortComponent{
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

}
