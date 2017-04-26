import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {NgRedux} from '@angular-redux/store';
import {LoaderActions} from "../../../store/actions/loader-actions";
import {ErrorHandlerActions} from "../../../store/actions/error-handler-actions";
import {IStore} from '../../../store';
import {Observable} from "rxjs";

@Injectable()
export class HttpClientService {

  constructor(private http: Http,
              private ngRedux: NgRedux<IStore>) {}


  get(url){
    this.showLoader();
    return this.http.get(url)
      .map(res => {
        this.hideLoader();
        return res.json();
      })
      .catch(
        error => {
          this.hideLoader();
          this.ngRedux.dispatch({type: ErrorHandlerActions.ERROR_HANDLER, payload: error});
          return Observable.throw(error);
        });
  }

  post(url,params) {
    this.showLoader();
    return this.http.post(url,params)
      .map(res => {
        this.hideLoader();
        return res.json();
      })
      .catch(
        error => {
          this.hideLoader();
          this.ngRedux.dispatch({type: ErrorHandlerActions.ERROR_HANDLER, payload: error});
          return Observable.throw(error);
        });
  }

  hideLoader(){
    setTimeout(()=>{
      this.ngRedux.dispatch({type: LoaderActions.HIDE_LOADER});
    },0)
  }

  showLoader(){
    this.ngRedux.dispatch({type: LoaderActions.SHOW_LOADER});
  }

}
