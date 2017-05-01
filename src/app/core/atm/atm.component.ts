import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.scss']
})
export class AtmComponent implements OnInit {
  private tabs = [
    {label:'atm.tabs.status',state:'status'},
    {label:'atm.tabs.accessories',state:'accessories'},
    {label:'atm.tabs.retained_cards',state:'retained-cards'},
    {label:'atm.tabs.settings',state:'settings'},
    {label:'atm.tabs.notifications',state:'notifications'},
    {label:'atm.tabs.events',state:'events'},
    {label:'atm.tabs.transactions',state:'transactions'},
    {label:'atm.tabs.transaction',state:'transaction'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
