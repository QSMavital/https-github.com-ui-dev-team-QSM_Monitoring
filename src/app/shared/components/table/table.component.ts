import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data:any[];
  @Input() colDef:any[];

  constructor() {
  }

  ngOnInit() {
  }

}
