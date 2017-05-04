import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'ui-devices-status',
  templateUrl: './devices-status.component.html',
  styleUrls: ['./devices-status.component.scss']
})
export class DevicesStatusComponent implements OnInit, OnChanges {

  private data: any[] = [
    {
      type: 'Donut',
      title: 'db.unavailable',
      maxValue: 100,
      minValue: 0,
      value: 10,
      angle: 1, // The span of the gauge arc
      lineWidth: 0.05, // The line thickness
      radiusScale: .8, // Relative radius
      limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
      limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
      colorStart: '#49bbf8',   // Colors
      colorStop: '#49bbf8',    // just experiment with them
      strokeColor: '#f4f7fa',  // to see which ones work best for you
      generateGradient: false,
      highDpiSupport: true
    },
    {
      type: 'Donut',
      title: 'db.need_to_be_fixed',
      maxValue: 100,
      minValue: 0,
      value: 10,
      angle: 1, // The span of the gauge arc
      lineWidth: 0.05, // The line thickness
      radiusScale: .8, // Relative radius
      limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
      limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
      colorStart: '#fa9245',   // Colors
      colorStop: '#fa9245',    // just experiment with them
      strokeColor: '#f4f7fa',  // to see which ones work best for you
      generateGradient: false,
      highDpiSupport: true
    }
  ];

  constructor() {
  }

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  ngOnInit() {
    setInterval(() => {
      this.data[0].value = this.getRandomArbitrary(1, 99);
      this.data[1].value = this.getRandomArbitrary(1, 99);
    }, 4000)
  }

  ngOnChanges(c) {
  }

}
