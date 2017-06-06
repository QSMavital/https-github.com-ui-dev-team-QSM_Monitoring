import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Api} from "../../../../config/api";

@Component({
  selector: 'ui-hsm-statistics-filter',
  templateUrl: './hsm-statistics-filter.component.html',
  styleUrls: ['./hsm-statistics-filter.component.scss']
})
export class HsmStatisticsFilterComponent implements OnInit {

  public filtersLastState: any = {};

  constructor(private route: ActivatedRoute) {
    this.filtersLastState = Object.assign(Api.hsm_statistic.payload,
      {atmNo: this.route.parent.params['value']['id'] || null
      })
  }

  ngOnInit() {
  }

}
