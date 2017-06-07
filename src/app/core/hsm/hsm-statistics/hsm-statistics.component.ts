import {Component, OnInit} from '@angular/core';
import {Api} from "../../../config/api";

@Component({
  selector: 'ui-hsm-statistics',
  templateUrl: './hsm-statistics.component.html',
  styleUrls: ['./hsm-statistics.component.scss']
})
export class HsmStatisticsComponent implements OnInit {

  public filtersLastState: any = {};


  constructor() {

    this.filtersLastState = Object.assign(
      {}, Api.hsm_statistic.payload)
  }

  ngOnInit() {
  }

}
