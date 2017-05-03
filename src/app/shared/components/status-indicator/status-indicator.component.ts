import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-status-indicator',
  templateUrl: './status-indicator.component.html',
  styleUrls: ['./status-indicator.component.scss']
})
export class StatusIndicatorComponent implements OnInit {

  @Input() status: string = 'ok';
  @Input() color: string;
  @Input() size: string = 'normal';
  @Input() limit:boolean = false;
  private custom: boolean = false;

  constructor() {
    if (status === 'custom')
      this.custom = true;
  }

  ngOnInit() {
  }

}
