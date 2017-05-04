import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-connection-status',
  templateUrl: './connection-status.component.html',
  styleUrls: ['./connection-status.component.scss']
})
export class ConnectionStatusComponent implements OnInit {

  private data:any[] = [
    {
      "label": "HSM",
      "status": "ok"
    },
    {
      "label": "HSM",
      "status": "danger"
    },
    {
      "label": "bank connection",
      "status": "warning"
    },
    {
      "label": "HSM",
      "status": "warning"
    },
    {
      "label": "bank connection",
      "status": "ok"
    },
    {
      "label": "bank connection",
      "status": "ok"
    },
    {
      "label": "bank connection",
      "status": "ok"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
