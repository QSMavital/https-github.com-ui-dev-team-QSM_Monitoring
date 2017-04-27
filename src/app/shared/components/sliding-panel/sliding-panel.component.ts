import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-sliding-panel',
  templateUrl: './sliding-panel.component.html',
  styleUrls: ['./sliding-panel.component.scss']
})
export class SlidingPanelComponent implements OnInit {
  @Input() direction = 'ltr';
  @Input() icon: string = '';

  private open:boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

}
