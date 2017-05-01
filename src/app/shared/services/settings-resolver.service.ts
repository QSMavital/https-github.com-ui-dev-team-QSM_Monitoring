import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {InterceptorService} from "ng2-interceptors";
import {Api} from "../../config/api";

@Injectable()
export class SettingsResolverService {

  constructor(private http: InterceptorService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.http.post(Api.init.url,Api.init.payload).map((res)=>JSON.parse(res['_body']));
  }
}
