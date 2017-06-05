import {Component, Input, OnChanges, EventEmitter, Output} from '@angular/core';
import { MasonryOptions } from 'angular2-masonry';
import {isNullOrUndefined} from "util";
import {ApiService} from "../../services/api-services.service";

@Component({
  selector: 'ui-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnChanges{
  public showValue;
  @Input() transactionId;
  @Input() get show() {return this.showValue;}
  @Output() showChange = new EventEmitter();
  public data = [];
  public masonryOptions: MasonryOptions = {
    transitionDuration: '0',
    fitWidth: true,
    originLeft: true
  };
  set show(val) {
    this.showValue = val;
    this.showChange.emit(this.showValue);

  }
  constructor(private apiSrv:ApiService) {}

  ngOnChanges(newValue){
    if(!isNullOrUndefined(newValue.transactionId)&&!isNullOrUndefined(newValue.transactionId.currentValue)){
      this.apiSrv.getTransaction(newValue.transactionId.currentValue).subscribe((data)=>{
        this.data = data;
      });
    }
  }
}
