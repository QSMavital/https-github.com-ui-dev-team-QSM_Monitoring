import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-controls-group',
  templateUrl: './controls-group.component.html',
  styleUrls: ['./controls-group.component.scss']
})
export class ControlsGroupComponent implements OnInit {

  @Input() header:string = '';

  constructor() { }

  ngOnInit() {
  }

}
