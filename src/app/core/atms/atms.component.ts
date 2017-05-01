import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-atms',
  templateUrl: './atms.component.html',
  styleUrls: ['./atms.component.scss']
})
export class AtmsComponent implements OnInit {

  private tabs = [
    {label:'atms.tabs.inventory',state:'inventory'},
    {label:'atms.tabs.status',state:'status'},
    {label:'atms.tabs.notifications',state:'notifications'},
    {label:'atms.tabs.events',state:'events'},
    {label:'atms.tabs.transactions',state:'transactions'},
    {label:'atms.tabs.transaction',state:'transaction'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
