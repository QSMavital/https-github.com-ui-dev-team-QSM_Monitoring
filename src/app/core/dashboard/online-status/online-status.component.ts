import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-online-status',
  templateUrl: './online-status.component.html',
  styleUrls: ['./online-status.component.scss']
})
export class OnlineStatusComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit() {
  }

}
