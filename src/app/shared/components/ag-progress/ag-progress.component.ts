import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-ag-progress',
  templateUrl: './ag-progress.component.html',
  styleUrls: ['./ag-progress.component.scss']
})
export class AgProgressComponent {

  private params: any;

  agInit(params: any): void {
    this.params = params;
    console.log(params);
  }

}
