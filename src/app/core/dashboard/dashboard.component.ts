import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'ui-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private gaugeCofing: any;
  private devicesStatus: any[];

  private connectionStatus: any[] = [
    {
      "label": "HSM",
      "status": "ok"
    },
    {
      "label": "HSM",
      "status": "danger"
    },
    {
      "label": "bank connection",
      "status": "warning"
    },
    {
      "label": "HSM",
      "status": "warning"
    },
    {
      "label": "bank connection",
      "status": "ok"
    },
    {
      "label": "bank connection",
      "status": "ok"
    },
    {
      "label": "bank connection",
      "status": "ok"
    }
  ];

  @ViewChild('gCont') _gaugeContainer;

  constructor() {
    this.initGaugeCofing();
    this.initDonutCofing();
  }

  ngOnInit() {
    // setInterval(()=>{
    //   this._gaugeContainer.getWidth();
    // },2000)
  }

  initGaugeCofing() {
    this.gaugeCofing = {
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

    setInterval(() => {
      this.gaugeCofing.value = this.getRandomArbitrary(1, 9);
    }, 4000)
  }

  initDonutCofing() {
    this.devicesStatus = [
      {
        type: 'Donut',
        title: 'db.unavailable',
        maxValue: 100,
        minValue: 0,
        value: 10,
        angle: 1, // The span of the gauge arc
        lineWidth: 0.1, // The line thickness
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
        lineWidth: 0.1, // The line thickness
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

    setInterval(() => {
      this.devicesStatus[0].value = this.getRandomArbitrary(1, 99);
      this.devicesStatus[1].value = this.getRandomArbitrary(1, 99);
    }, 4000)
  }

  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
