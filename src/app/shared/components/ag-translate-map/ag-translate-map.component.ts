import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-ag-translate-map',
  templateUrl: './ag-translate-map.component.html',
  styleUrls: ['./ag-translate-map.component.scss']
})
export class AgTranslateMapComponent{
  public value;
  public map = {
    approver:"banks",
    default:"enums",
    rejectReason:"rejectReason",
    branch:"banks"
  };

  agInit(params: any): void {
    this.value = `${this.map[params.colDef.field] || this.map.default}.${params.value}`
  }

}
