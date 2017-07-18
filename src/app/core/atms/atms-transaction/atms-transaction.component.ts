import {Component, Input, OnChanges, EventEmitter, Output} from '@angular/core';
import {MasonryOptions} from 'angular2-masonry';
import {isNullOrUndefined} from "util";
import {TranslateService} from "@ngx-translate/core";
import {ApiService} from "../../../shared/services/api-services.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ui-transaction',
  templateUrl: './atms-transaction.component.html',
  styleUrls: ['./atms-transaction.component.scss']
})
export class TransactionComponent{
  public data = [];
  public showModal: boolean;
  public masonryOptions: MasonryOptions = {
    transitionDuration: '0',
    fitWidth: true,
    originLeft: true
  };

  constructor(private apiSrv: ApiService, private translateSrv: TranslateService,private route: ActivatedRoute, private router: Router) {
    this.showModal = true;
    this.getData(this.route.params['value']['id']);
    debugger;
  }

  toCamelCase(str) {
    return str.replace(/^([A-Z])|\s(\w)/g, function (match, p1, p2, offset) {
      if (p2) return p2.toUpperCase();
      return p1.toLowerCase();
    });
  }

  close() {
    this.showModal = false;
    this.router.navigate(['../'], { relativeTo: this.route });

  }


  getData(id){
    this.apiSrv.getTransaction(id).subscribe((data) => {
      for (var cube = 0; cube < data.length; cube++) {
        for (var item = 0; item < data[cube].data.length; item++) {
          if (data[cube].data[item].type) {
            switch (this.toCamelCase(data[cube].data[item].type)) {
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



