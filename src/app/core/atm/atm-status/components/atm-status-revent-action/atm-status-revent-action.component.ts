import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-atm-status-revent-action',
  templateUrl: './atm-status-revent-action.component.html',
  styleUrls: ['./atm-status-revent-action.component.scss']
})
export class AtmStatusReventActionComponent implements OnInit {

  private recent_actions: any;

  constructor() {
    this.recent_actions = {
      a:[
        {"name": "Reason for rejection", "value": "System failure"},
        {"name": "Swallowed card", "value": "-"},
        {"name": "Customer type", "value": "Our local"},
        {"name": "Card type", "value": "Magnetic"}
      ],
      b:[
        {"name": "Card number", "value": "1088"},
        {"name": "Action Type", "value": "Not executed"},
        {"name": "Amount", "value": ""},
        {"name": "Banknote", "value": "-"}
      ]
    }
  }

  ngOnInit() {

  }

}
