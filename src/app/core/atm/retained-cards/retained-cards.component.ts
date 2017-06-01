import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Atm} from "../../../config/atm";
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../../store/index";
import {GridDefsService} from "../../../shared/services/grid-defs.service";
import {Observable} from "rxjs";
import {AtmActions} from "../../../../store/actions/atm-actions";
import {isNullOrUndefined} from "util";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'ui-retained-cards',
  templateUrl: './retained-cards.component.html',
  styleUrls: ['./retained-cards.component.scss']
})
export class RetainedCardsComponent implements OnInit {
  @select(['atm', 'retainedCards']) $atm_retained_cards: Observable<any>;
  private $atm_retained_cards_ref;
  private atmId;
  public gridOptions: any = {};

  constructor(private translateSrv: TranslateService,
              private route: ActivatedRoute,
              private ngRedux: NgRedux<IStore>,
              private gridDefsSrv: GridDefsService) {
    this.atmId = this.route.parent.params['value']['id'];
    this.ngRedux.dispatch({type:AtmActions.ATM_GET_RETIANED_CARDS,payload:{atmNo:this.atmId}});
    this.$atm_retained_cards_ref = this.$atm_retained_cards.subscribe((state)=>{
      if(isNullOrUndefined(state)||isNullOrUndefined(this.gridOptions.api)){
        return;
      }
      this.gridOptions.api.setRowData(state);
    });
  }

  ngOnInit() {
    this.initColDefs();
  }

  sizeToFit() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  initColDefs() {
    this.gridOptions = this.gridDefsSrv.initGridOptions();
    for (var prop in Atm.RetainedCards) {
      this.gridOptions.columnDefs.push(
        Object.assign({}, {suppressFilter: true}, Atm.RetainedCards[prop], {
            headerName: this.translateSrv.instant(Atm.RetainedCards[prop].headerName)
          }));
    }
  }

  ngOnDestroy() {
    this.$atm_retained_cards_ref.unsubscribe();
  }

  filter(e){
    this.ngRedux.dispatch({type:AtmActions.ATM_GET_RETIANED_CARDS,payload:{atmNo:this.atmId,fromSettelments:e.settlement}});
  }

}
