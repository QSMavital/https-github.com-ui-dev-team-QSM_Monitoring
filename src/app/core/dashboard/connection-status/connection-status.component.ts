import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-connection-status',
  templateUrl: './connection-status.component.html',
  styleUrls: ['./connection-status.component.scss']
})
export class ConnectionStatusComponent implements OnInit {

  @Input() list:any[];

  constructor() { }

  ngOnInit() {
  }

}
