import {Component, OnInit, ViewChild, ComponentFactoryResolver, ElementRef, ViewContainerRef} from '@angular/core';
import {OnlineStatusComponent} from "./online-status/online-status.component";
import {DashboardInject} from "./dashboard-inject";

@Component({
  selector: 'ui-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }
}
