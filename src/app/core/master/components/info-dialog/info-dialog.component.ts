import { Component, OnInit } from '@angular/core';
import {Input, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent implements OnInit {

  private showValue = false;

  @Input() get show() {
    return this.showValue;
  }

  @Output() showChange = new EventEmitter();

  set show(val) {
    this.showValue = val;
  }

  @Input() public qswitchVersion: string;
  @Input() public operatorVersion: string;
constructor(){}

  ngOnInit() {
    console.log('parameters: ' , this.qswitchVersion, this.operatorVersion);
  }

}
