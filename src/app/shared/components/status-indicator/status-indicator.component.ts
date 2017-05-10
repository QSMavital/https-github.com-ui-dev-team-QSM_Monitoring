import {Component, Input, OnInit} from '@angular/core';
import {StatusView} from "../../../config/statusView";

@Component({
  selector: 'ui-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss']
})
export class StatusIndicatorComponent implements OnInit {

  @Input() status: string;
  @Input() showLabel: boolean = true;
  @Input() showStatus: boolean = false;
  private statusView:any;
  constructor() {
    this.statusView = StatusView;
  }

  ngOnInit() {
  }

}
