import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})

export class LegendComponent implements OnInit {

  @Input() data:any[];

  constructor() { }

  ngOnInit() {
  }

}
