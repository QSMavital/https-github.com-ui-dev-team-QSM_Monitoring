import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-hsm',
  templateUrl: './hsm.component.html',
  styleUrls: ['./hsm.component.scss']
})
export class HsmComponent implements OnInit {

  private ddOptions:any[] = [
    {
      label:'1',
      value:{id:'1'}
    },
    {
      label:'2',
      value:{id:'2'}
    }
  ];
  private ddModel:any;

  constructor() { }

  ngOnInit() {
  }

}
