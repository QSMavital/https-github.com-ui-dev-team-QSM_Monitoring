import {Component, Input, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'ui-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit{


  @Input('data') data;
  @Input('status') status;
  @Input() block;
  @HostBinding('class') stretchWidthClass;


  ngOnInit(): void {
    this.stretchWidthClass  = this.block?'stretch-width':'';
  }
}
