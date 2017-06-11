import {Component, OnInit} from '@angular/core';
import {Hsm} from "../../../config/hsm";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'ui-ag-directive',
  templateUrl: './ag-directive.component.html',
  styleUrls: ['./ag-directive.component.scss']
})
export class AgDirectiveComponent {
  public params: any;
  directives: any = [];
  selectedDirective: string;

  constructor(private translateSrv: TranslateService) {
    Hsm.status.actions.forEach((action)=>{
      this.directives.push(Object.assign({},action,{label:this.translateSrv.instant(action.label)}));
    });
  }

  agInit(params: any): void {
    this.params = params;
  }

  action(){
    console.log(this.selectedDirective);
  }
}
