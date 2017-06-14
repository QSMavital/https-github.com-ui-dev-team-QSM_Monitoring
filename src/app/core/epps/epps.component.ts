import {Component, OnDestroy, OnInit} from '@angular/core';
import {GridOptions} from "ag-grid";
import {Epps} from "../../config/epp";
import {GridDefsService} from "../../shared/services/grid-defs.service";
import {TranslateService} from "@ngx-translate/core";
import {NgRedux, select} from "@angular-redux/store";
import {IStore} from "../../../store/index";
import {EppActions} from "../../../store/actions/epp-actions";
import {Observable} from "rxjs/Observable";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'ui-epps',
  templateUrl: './epps.component.html',
  styleUrls: ['./epps.component.scss']
})
export class EppsComponent implements OnInit, OnDestroy{
  public addNew = false;
  public gridOptions: GridOptions;
  private dataSource;
  private $epp_ref;
  @select(['epp', 'epps']) $epp: Observable<any>;

  constructor(private gridDefsSrv: GridDefsService, private translateSrv: TranslateService,private ngRedux: NgRedux<IStore>) {
    this.initGridDefs();

  }

  ngOnInit() {

  }

  initGridDefs(){
    this.gridOptions = this.gridDefsSrv.initGridOptionsPagination(100);

    for (let prop in Epps.eppTable) {
      this.gridOptions.columnDefs.push(Object.assign({}, {suppressFilter: true}, Epps.eppTable[prop], {
        headerName: this.translateSrv.instant(Epps.eppTable[prop].headerName)
      }));
    }

    this.dataSource = {
      getRows: (params) => {
        this.ngRedux.dispatch({
          type: EppActions.EPP_GET,
          payload: Object.assign({}, {
              "fromLine": params.startRow,
              "numOfLine": params.endRow - params.startRow
            }
          )
        });
        this.$epp_ref = this.$epp.subscribe((state) => {
          if (!isNullOrUndefined(state) && !isNullOrUndefined(this.gridOptions.api)) {
            params.successCallback(state.allEpp, state.totalCount <= params.endRow ? state.allEpp.length : -1);
          }
        });

      }
    };
    this.gridOptions.datasource = this.dataSource;
  }

  fitCols_epp() {
    this.gridOptions.api.sizeColumnsToFit();
  }

  ngOnDestroy(){
    this.$epp_ref.unsubscribe();
  }

}
