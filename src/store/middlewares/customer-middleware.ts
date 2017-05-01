import {Injectable} from '@angular/core';
import {GeneralCustomerActions} from "../actions/generalCustomer-actions";
import {InterceptorService} from "ng2-interceptors";
import {Api} from "../../app/config/api";

@Injectable()
export class Customer {

  constructor(private http: InterceptorService) {
  }


  Middleware = store => next => action => {
    switch (action.type) {
      case GeneralCustomerActions.GET_GENERAL_CUSTOMER:
        this.http.post(Api.customer.url, Api.customer.payload)
          .map(res => JSON.parse(res['_body']))
          .subscribe((res) => {
            next({
              type: GeneralCustomerActions.SET_GENERAL_CUSTOMER,
              payload: res
            });
          });


      default:
        return next(action);
    }
  }
}
