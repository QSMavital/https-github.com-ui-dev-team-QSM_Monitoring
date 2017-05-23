import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ui-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {
  @Input('date') date;
  public time = new Date();
  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.time = new Date();
    },60000);
  }



}
