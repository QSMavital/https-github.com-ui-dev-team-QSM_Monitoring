import { Component, OnInit } from '@angular/core';
import {GeneralConstants} from "../../../config/general_consts";

@Component({
  selector: 'ui-ag-progress',
  templateUrl: './ag-progress.component.html',
  styleUrls: ['./ag-progress.component.scss']
})
export class AgProgressComponent {

  public params: any;
  public mapValues = GeneralConstants.Supply;
  agInit(params: any): void {
    this.params = params;
  }

}
