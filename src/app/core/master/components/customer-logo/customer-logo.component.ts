import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ui-customer-logo',
  templateUrl: './customer-logo.component.html',
  styleUrls: ['./customer-logo.component.scss']
})
export class CustomerLogoComponent implements OnInit {

  @Input('logo') logo;
  private customers:any;
  constructor() {
    this.customers = {
      "BEINLEUMI":"icon-logo-benleumi"
    }
  }

  ngOnInit() {
  }

}
