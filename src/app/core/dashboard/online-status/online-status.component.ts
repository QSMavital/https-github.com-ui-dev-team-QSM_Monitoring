import {Component, Input, OnInit} from '@angular/core';
import {DashComponent} from "../dashboard-inject";

@Component({
  selector: 'ui-online-status',
  templateUrl: './online-status.component.html',
  styleUrls: ['./online-status.component.scss']
})
export class OnlineStatusComponent implements OnInit , DashComponent {

  @Input() data:any;

  constructor() { }

  ngOnInit() {
  }

}
