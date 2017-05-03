import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'ui-portlet',
  templateUrl: './portlet.component.html',
  styleUrls: ['./portlet.component.scss']
})
export class PortletComponent implements OnInit {

  @Input() header:string;
  @Input() footer:boolean;

  @ViewChild('wrapper') _wrapper;

  constructor(private _eRef:ElementRef) { }

  public getWidth() {
    return this._wrapper.nativeElement.clientWidth;
  }

  ngOnInit() {
  }
}
