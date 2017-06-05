import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {isNullOrUndefined} from "util";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'ui-atm-status-revent-action',
  templateUrl: './atm-status-revent-action.component.html',
  styleUrls: ['./atm-status-revent-action.component.scss']
})
export class AtmStatusReventActionComponent implements OnChanges {
  @Input() action_data: any;
  public recent_actions: any = [];

  constructor(private translateSrv: TranslateService) { }
  ngOnChanges(newValue) {
    if (!isNullOrUndefined(newValue.action_data) && !isNullOrUndefined(newValue.action_data.currentValue)) {

      this.recent_actions = [];

      for(var prop in this.action_data){

        switch(prop){
          case 'terminalDateTime':
            this.recent_actions.push(
              {
                name:this.translateSrv.instant('atm.status.lastTransaction.'+prop),
                value: new Date(this.action_data[prop]).toLocaleString()

              });
            break;

          default:
            this.recent_actions.push(
              {
                name:this.translateSrv.instant('atm.status.lastTransaction.'+prop),
                value:this.action_data[prop]
              });
            break;

        }
      }
    }
  }
}
