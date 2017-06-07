import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ui-ag-directive',
  templateUrl: './ag-directive.component.html',
  styleUrls: ['./ag-directive.component.scss']
})
export class AgDirectiveComponent {
  public params: any;
  cities: any = [];
  selectedCity: string;

  constructor() {
    this.cities = [];
    this.cities.push({label: 'Select City', value: null});
    this.cities.push({label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}});
    this.cities.push({label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}});
    this.cities.push({label: 'London', value: {id: 3, name: 'London', code: 'LDN'}});
    this.cities.push({label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}});
    this.cities.push({label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}});
  }

  agInit(params: any): void {
    this.params = params;
  }

}
