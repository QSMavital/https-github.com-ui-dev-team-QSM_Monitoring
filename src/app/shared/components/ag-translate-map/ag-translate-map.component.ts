import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-ag-translate-map',
  templateUrl: './ag-translate-map.component.html',
  styleUrls: ['./ag-translate-map.component.scss']
})
export class AgTranslateMapComponent{
  public value;
  public map = {
    approver:"approver",
    default:"enums",
    rejectReason:"rejectReason",
    closedReason:"closedReason",
    branch:"banks",
    currencyCode:"CurrencyCode",
    transactionType:"transactionType",
    keyType:"keyType",
    keyStatus:"keyStatus",
    sessionType:"sessionType",
    sessionStatus:"sessionStatus",
    sessionRequest:"sessionRequest",
    cassetteType:"atm.accessories.accessoriesDispenserInfo"
  };

  agInit(params: any): void {
    this.value = `${this.map[params.colDef.field] || this.map.default}.${params.value}`
  }

}
