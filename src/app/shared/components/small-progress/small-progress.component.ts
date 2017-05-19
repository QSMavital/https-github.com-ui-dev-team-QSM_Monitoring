import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-small-progress',
  templateUrl: './small-progress.component.html',
  styleUrls: ['./small-progress.component.scss']
})
export class SmallProgressComponent implements OnInit {

  @Input() value:number = 0;

  constructor() { }

  ngOnInit() {
  }

}
