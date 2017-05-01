import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-portlet',
  templateUrl: './portlet.component.html',
  styleUrls: ['./portlet.component.scss']
})
export class PortletComponent implements OnInit {

  @Input() header:string;

  constructor() { }

  ngOnInit() {
  }

}
