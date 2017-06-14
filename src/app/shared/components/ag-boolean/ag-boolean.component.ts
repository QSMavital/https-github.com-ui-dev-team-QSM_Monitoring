import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-ag-boolean',
  templateUrl: './ag-boolean.component.html',
  styleUrls: ['./ag-boolean.component.scss']
})
export class AgBooleanComponent {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }
}
