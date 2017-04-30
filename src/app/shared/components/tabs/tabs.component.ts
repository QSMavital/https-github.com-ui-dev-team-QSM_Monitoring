import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ui-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input('menu') tabItems;
  constructor() { }

  ngOnInit() {
  }

}
