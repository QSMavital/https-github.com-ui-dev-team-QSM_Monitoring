import { Injectable } from '@angular/core';
import {InterceptorService} from "ng2-interceptors";
import {Api} from "../../config/api";

@Injectable()
export class ApiService {
  constructor(private http: InterceptorService) { }

  getTransaction(transactionId) {
    return this.http.post(Api.getTransaction.url,Object.assign(Api.getTransaction.payload,{transactionId})).map(res => JSON.parse(res['_body']));
  }

}
