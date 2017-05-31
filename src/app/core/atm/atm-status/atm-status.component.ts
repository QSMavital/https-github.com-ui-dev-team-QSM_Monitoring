import {Component, OnInit} from '@angular/core';
import {NgRedux} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {AtmActions} from "../../../../store/actions/atm-actions";

@Component({
  selector: 'ui-atm-status',
  templateUrl: './atm-status.component.html',
  styleUrls: ['./atm-status.component.scss']
})

export class AtmStatusComponent implements OnInit {

  constructor(private ngRedux: NgRedux<IStore>) {
    this.ngRedux.dispatch({type:AtmActions.ATM_GET_STATUS});
  }

  ngOnInit() {
  }


}
