import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ag-check-empty',
  templateUrl: './ag-check-empty.html',
  styleUrls: ['./ag-check-empty.scss']
})
export class AgCheckEmpty {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }
}
