import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-hsm',
  templateUrl: './hsm.component.html',
  styleUrls: ['./hsm.component.scss']
})
export class HsmComponent implements OnInit {

  private ddOptions:any[] = [
    {
      label:'something',
      value:{id:'1'}
    },
    {
      label:'something_else',
      value:{id:'2'}
    }
  ];
  private ddModel:any;

  constructor() { }

  ngOnInit() {
  }

}
