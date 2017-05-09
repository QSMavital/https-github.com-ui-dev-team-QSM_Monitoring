import {Component, OnInit, ElementRef, Input, OnChanges} from '@angular/core';
import {isNullOrUndefined} from "util";
var chart = require('gaugeJS');


@Component({
  selector: 'ui-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit,OnChanges {
  @Input('config') config;
  @Input('value') value;
  @Input() width = 'auto';
  private opts: any = {};
  private gauge: any;

  constructor(private refElm: ElementRef) {
  }

  //usage and docs ;http://bernii.github.io/gauge.js/

  ngOnInit() {
    //init gauge into canvas element.


  }

  ngOnChanges(event) {
    if (!isNullOrUndefined(this.gauge)) {
      this.gauge.set(this.value);
    }
    if (!isNullOrUndefined(event.width)
      && !isNullOrUndefined(event.width.currentValue)
      && isNullOrUndefined(event.width.previousValue)) {
      this.initGauge()
    }
  }

  initGauge() {
    this.gauge =
      new chart[this.config.type](this.refElm.nativeElement.querySelector('#gauge'))
        .setOptions(this.config);
    this.gauge.maxValue = this.config.maxValue; // set max gauge value
    this.gauge.setMinValue(this.config.minValue);  // Prefer setter over gauge.minValue = 0
    this.gauge.set(this.value); // set actual value
  }


}
