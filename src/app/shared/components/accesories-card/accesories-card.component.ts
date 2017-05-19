import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-accesories-card',
  templateUrl: './accesories-card.component.html',
  styleUrls: ['./accesories-card.component.scss']
})
export class AccesoriesCardComponent implements OnInit {

  private keys:string[];
  @Input() footerData:any;

  constructor() { }

  ngOnInit() {
    this.keys = Object.keys(this.footerData);
  }

}
