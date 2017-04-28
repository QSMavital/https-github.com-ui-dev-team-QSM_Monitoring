import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private gaugeCofing:any;
  private donutCofing:any;

  constructor() {
    this.initGaugeCofing();
    this.initDonutCofing();
  }

  ngOnInit() {

  }

  initGaugeCofing(){
    this.gaugeCofing= {
      type:'Gauge',
      maxValue:10,
      minValue:0,
      value:10,
      animationSpeed:10,
      angle: 0, // The span of the gauge arc
      lineWidth: 0.4, // The line thickness
      radiusScale: 1, // Relative radius
      pointer: {
        length: 0.3, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: '#000000' // Fill color
      },
      limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
      limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
      generateGradient: true,
      highDpiSupport: true,     // High resolution support
      staticLabels: {
        font: "12px sans-serif",  // Specifies font
        labels: [0, 2,5, 8, 10],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
      },
      staticZones: [
        {strokeStyle: "#F03E3E", min: 0, max: 2}, // Red from 100 to 130
        {strokeStyle: "#FFDD00", min: 2, max: 8}, // Yellow
        {strokeStyle: "#30B32D", min: 8, max: 10}, // Green
      ]
    };

    setInterval(()=>{
      this.gaugeCofing.value=this.getRandomArbitrary(1,9);
    },4000)
  }

  initDonutCofing(){
    this.donutCofing= {
      type:'Donut',
      maxValue:10,
      minValue:0,
      value:10,
      angle: 0.5, // The span of the gauge arc
      lineWidth: 0.04, // The line thickness
      radiusScale: 1, // Relative radius
      limitMax: false,     // If false, the max value of the gauge will be updated if value surpass max
      limitMin: false,     // If true, the min value of the gauge will be fixed unless you set it manually
      colorStart: '#C0C0DB',   // Colors
      colorStop: '#C0C0DB',    // just experiment with them
      strokeColor: '#EEEEEE',  // to see which ones work best for you
      generateGradient: false,
      highDpiSupport: true     // High resolution support
    };

    setInterval(()=>{
      this.gaugeCofing.value=this.getRandomArbitrary(1,9);
      this.donutCofing.value=this.getRandomArbitrary(1,9);
    },4000)
  }
  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
