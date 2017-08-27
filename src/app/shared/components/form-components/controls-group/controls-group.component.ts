import {Component, Input, OnInit,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ui-controls-group',
  templateUrl: './controls-group.component.html',
  styleUrls: ['./controls-group.component.scss']
})
export class ControlsGroupComponent implements OnInit {

  @Input() header:string = '';
  @Input() headers:any = [];
  @Input() tabs:any = [];
  @Output() onChange = new EventEmitter();
  lastActive:any;

  constructor() { }

  ngOnInit() {
     if(this.tabs&&this.tabs.length>0){
     console.log(this.tabs);
     this.tabs.forEach(io=>(io.active==='true')?this.lastActive=io:this.lastActive=this.lastActive);
     }
  }

  activateClass(value){
    this.onChange.emit(value);
  }
  
}
