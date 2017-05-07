import {Component, OnInit} from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'ui-actions-status',
  templateUrl: './actions-status.component.html',
  styleUrls: ['./actions-status.component.scss']
})
export class ActionsStatusComponent implements OnInit {

  private data: any = [];
  private options: any;

  constructor() {
    this
    .secinitD3Data();
  }


  initGaugeData() {
    this.options = {
      type: 'Gauge',
      maxValue: 100,
      minValue: 0,
      animationSpeed: 10,
      angle: -50, // The span of the gauge arc
      lineWidth: 100, // The line thickness
      radiusScale: 0.85, // Relative radius
      pointer: {
        length: 0, // // Relative to gauge radius
        strokeWidth: 0, // The thickness
        // color: '#000000' // Fill color
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
  }

  secinitD3Data() {
    this.options = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function(d){return d.key;},
        y: function(d){return d.y;},
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    }


    this.data = [
      {
        key: "One",
        y: 5
      },
      {
        key: "Two",
        y: 2
      },
      {
        key: "Three",
        y: 9
      },
      {
        key: "Four",
        y: 7
      },
      {
        key: "Five",
        y: 4
      },
      {
        key: "Six",
        y: 3
      },
      {
        key: "Seven",
        y: .5
      }
    ];
  }

  initD3Data() {
    this.data = [
      {
        label: 'Rejection',
        value: 13
      },
      {
        label: 'Successful operations',
        value: 45
      },
      {
        label: 'Fault',
        value: 10
      },
      {
        label: 'Incorrect PIN code',
        value: 32
      }
    ];
    this.options = {
      chart: {
        type: 'pieChart',
        useInteractiveGuideline: true,
        x: (d) => {
          return d.x;
        },
        y: (d) => {
          return d.y;
        },
        height: 250,
        width: 250
      }
    };
  }


  initChartjsPie() {
    this.options = {
      type: 'pie',
      layout: {
        padding: 25
      },
      legend: {
        display: true
      }
    };
    this.data = {
      labels: ['Rejection', 'Successful operations', 'Fault', 'Incorrect PIN code'],
      datasets: [
        {
          data: [13, 45, 10, 32],
          borderWidth: 0,
          backgroundColor: ['#ff563e', '#71d36b', '#49bbf8', '#fa9a52']
        }
      ]
    }
  }

  ngOnInit() {
  }

}
