import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'ui-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  private time = moment().format();
  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.time = moment().format();
      console.log(this.time);
    },1000);
  }

}
