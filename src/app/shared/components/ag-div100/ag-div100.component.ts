import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-ag-div100',
  templateUrl: './ag-div100.component.html',
  styleUrls: ['./ag-div100.component.scss']
})
export class AgDiv100Component {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }


}
