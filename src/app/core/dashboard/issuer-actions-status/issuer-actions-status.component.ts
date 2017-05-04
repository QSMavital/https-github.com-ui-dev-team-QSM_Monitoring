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
      type:'bar',
      layout:{
        padding:15
      },
      legend: {
        display:false
      },
      scales:{
        yAxes: [{
          stacked:true,
          ticks: {
            padding:0,
            stepSize:5000,
            fontFamily:'opensans-regular',
            fontSize:12,
            fontColor:'#6f7b87'
          }
        }],
        xAxes:[
          {
            barPercentage: 0.65,
            gridLines:{
              display:false,
              drawBorder:false,zeroLineWidth:0
            },
            ticks: {
              stepSize:5000,
              fontFamily:'opensans-regular',
              fontSize:10,
              fontColor:'#6f7b87'
            }
          }
        ]
      }
    };
    this.data = {
      labels: ['Bank', 'Bank', 'Bank', 'Bank', 'Bank', 'Bank', 'Bank'],
      datasets: [
        {
          backgroundColor: '#ff563e',
          borderColor: '#ff563e',
          data: [165, 259, 180, 281, 256, 155, 140]
        },
        {
          backgroundColor: '#71d36b',
          borderColor: '#71d36b',
          data: [17023, 19263, 14325, 18762, 18236, 12447, 19000]
        }
      ]
    }
  }

  ngOnInit() {
  }

}
