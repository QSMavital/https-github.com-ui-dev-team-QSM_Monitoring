import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-issuer-actions-status',
  templateUrl: './issuer-actions-status.component.html',
  styleUrls: ['./issuer-actions-status.component.scss']
})
export class IssuerActionsStatusComponent implements OnInit {

  private data:any;
  private options:any;

  constructor() {
    this.options = {
      legend: {
        visible:false
      },
      xAxes: {
        stacked:true
      }
    };
    this.data = {
      options: {
        legend: {
          visible:false
        }
      },
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
  }

  ngOnInit() {
  }

}
