import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'ui-devices-status',
  templateUrl: './devices-status.component.html',
  styleUrls: ['./devices-status.component.scss']
})
export class DevicesStatusComponent implements OnInit, OnChanges {

  @Input() data: any[];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(c) {
  }

}
