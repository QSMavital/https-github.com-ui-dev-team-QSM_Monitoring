import {Component, Input, OnInit} from '@angular/core';
import {DashComponent} from "../dashboard-inject";

@Component({
  selector: 'ui-online-status',
  templateUrl: './online-status.component.html',
  styleUrls: ['./online-status.component.scss']
})
export class OnlineStatusComponent implements OnInit  {

  private data:any = {
    type: 'Gauge',
    maxValue: 10,
    minValue: 0,
    value: 10,
    animationSpeed: 10,
    angle: 0, // The span of the gauge arc
    lineWidth: 0.1, // The line thickness
    radiusScale: 0.85, // Relative radius
    pointer: {
      length: 0.6, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: '#000000' // Fill color
    },
    limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
    limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    staticLabels: {
      font: "0.9285714rem opensans-regular",  // Specifies font
      labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],  // Print labels at these values
      color: "#6f7b87",  // Optional: Label text color
      fractionDigits: 0,  // Optional: Numerical precision. 0=round off.
      padding: '100px'
    },
    staticZones: [
      {strokeStyle: "#ff563e", min: 0, max: 0.5}, // Red from 100 to 130
      {strokeStyle: "#71d36b", min: 0.5, max: 9.5}, // Yellow
      {strokeStyle: "#ff563e", min: 9.5, max: 10}, // Green
    ]
  };

  constructor() { }


  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  ngOnInit() {
    setInterval(() => {
      this.data.value = this.getRandomArbitrary(1, 9);
    }, 4000)
  }

}
