import {Component, Input, OnChanges, EventEmitter, Output} from '@angular/core';
import {MasonryOptions} from 'angular2-masonry';
import {isNullOrUndefined} from "util";
import {ApiService} from "../../services/api-services.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'ui-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnChanges {
  public showValue;
  @Input() transactionId;

  @Input() get show() {
    return this.showValue;
  }

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

  constructor(private apiSrv: ApiService, private translateSrv: TranslateService) {}

  toCamelCase(str) {
    return str.replace(/^([A-Z])|\s(\w)/g, function (match, p1, p2, offset) {
      if (p2) return p2.toUpperCase();
      return p1.toLowerCase();
    });
  };

  ngOnChanges(newValue) {
    if (!isNullOrUndefined(newValue.transactionId) && !isNullOrUndefined(newValue.transactionId.currentValue)) {
      this.apiSrv.getTransaction(newValue.transactionId.currentValue).subscribe((data) => {
        for (var cube = 0; cube < data.length; cube++) {
          for (var item = 0; item < data[cube].data.length; item++) {
            if (data[cube].data[item].type) {
              switch (this.toCamelCase(data[cube].data[item].type)){
                case 'retainReason':
                  data[cube].data[item].value = this.translateSrv.instant(`enums.${data[cube].data[item].value}`);
                  break;
                case 'transactionStatus':
                  //skip
                break;
                default:
                  data[cube].data[item].value = this.translateSrv.instant(`${this.toCamelCase(data[cube].data[item].type)}.${data[cube].data[item].value}`);
                  break;
              }

            }

          }
        }
        this.data = data;
      });
    }
  }
}


