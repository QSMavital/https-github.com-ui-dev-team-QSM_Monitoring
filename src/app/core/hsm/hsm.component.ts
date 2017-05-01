import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-hsm',
  templateUrl: './hsm.component.html',
  styleUrls: ['./hsm.component.scss']
})
export class HsmComponent implements OnInit {

  private tabs = [
    {label:'hsm.tabs.status',state:'status'},
    {label:'hsm.tabs.statistics',state:'statistics'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
