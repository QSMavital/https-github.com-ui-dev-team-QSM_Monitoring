import {Component, OnInit, Input} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'ui-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {
  @Input('date') date;
  private time = moment().format();
  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.time = moment().format();
    },60000);
  }



}
