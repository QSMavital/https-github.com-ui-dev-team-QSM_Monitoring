import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-actions-status',
  templateUrl: './actions-status.component.html',
  styleUrls: ['./actions-status.component.scss']
})
export class ActionsStatusComponent implements OnInit {

  private data:any;
  private options:any;

  constructor() {
    this.options = {
      type:'pie',
      layout:{
        padding:25
      },
      legend: {
        display:false
      }
    };
    this.data = {
      labels: ['Bank', 'Bank1', 'Bank2', 'Bank3'],
      datasets: [
        {
          data: [165, 259, 180, 281],
          borderWidth:0,
          backgroundColor: ['#ff563e','#71d36b','#49bbf8','#fa9a52']
        }
      ]
    }
  }

  ngOnInit() {
  }

}
