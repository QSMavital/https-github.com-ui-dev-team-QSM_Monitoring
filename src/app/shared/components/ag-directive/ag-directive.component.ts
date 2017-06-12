import {Component, OnInit} from '@angular/core';
import {Hsm} from "../../../config/hsm";
import {TranslateService} from "@ngx-translate/core";
import {NgRedux} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {HsmActions} from "../../../../store/actions/hsms-actions";

@Component({
  selector: 'ui-ag-directive',
  templateUrl: './ag-directive.component.html',
  styleUrls: ['./ag-directive.component.scss']
})
export class AgDirectiveComponent {
  public params: any;
  directives: any = [];
  selectedDirective: string;

  constructor(private translateSrv: TranslateService,private ngRedux: NgRedux<IStore>) {
    Hsm.status.actions.forEach((action)=>{
      this.directives.push(Object.assign({},action,{label:this.translateSrv.instant(action.label)}));
    });
  }

  agInit(params: any): void {
    this.params = params;
  }

  action(){
    this.ngRedux.dispatch({type:HsmActions.HSM_ACTION,payload:{hsmSerialId:this.params.data.hsmSerialId,action:this.selectedDirective}});
    this.selectedDirective=null;
  }
}
